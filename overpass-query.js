// Overpass API integration for Copenhagen parking data
class OverpassAPI {
    constructor() {
        this.dataFile = './overpass-cph-parking.geojson';
    }

    async fetchParkingData() {
        try {
            // For now, use the pre-saved data
            const response = await fetch('./assets/overpass-cph-parking.geojson');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            
            // Add realistic occupancy data to each feature
            data.features.forEach(feature => {
                this.addRealisticOccupancy(feature);
            });
            
            return data;
        } catch (error) {
            console.error('Error fetching parking data:', error);
            // Fallback to sample data if fetch fails
            return this.getFallbackData();
        }
    }

    enhanceGeoJSONData(geoJsonData) {
        // Process the existing GeoJSON and enhance it with our estimates
        const enhancedFeatures = geoJsonData.features.map(feature => {
            const properties = feature.properties || {};
            const coordinates = feature.geometry.coordinates;
            
            // Extract or generate useful properties
            const name = properties.name || 'Unavngiven parkeringsplads';
            const capacity = parseInt(properties.capacity) || this.estimateCapacity(properties);
            const operator = properties.operator || 'Privat';
            const access = properties.access || 'unknown';
            const fee = properties.fee || 'unknown';
            
            // Generate realistic occupancy based on access type
            const occupancyRate = this.generateOccupancy(access, fee);
            const occupancy = Math.round(capacity * occupancyRate);
            
            // Estimate price based on location and type
            const pricePerHour = this.estimatePrice(coordinates, access, operator);

            return {
                ...feature,
                properties: {
                    ...properties,
                    name: name,
                    address: this.generateAddress(coordinates, properties),
                    capacity: capacity,
                    occupancy: occupancy,
                    price_per_hour: pricePerHour,
                    description: this.generateDescription(properties, access, operator),
                    operator: operator,
                    access: access,
                    fee: fee,
                    // Keep original OSM data
                    osm_id: properties.id || properties.osm_id,
                    osm_type: properties.type || properties.osm_type
                }
            };
        });

        return {
            type: 'FeatureCollection',
            features: enhancedFeatures
        };
    }

    estimateCapacity(properties) {
        // Estimate capacity based on available properties
        if (properties.capacity) return parseInt(properties.capacity);
        if (properties.parking === 'multi-storey') return 200 + Math.floor(Math.random() * 300);
        if (properties.parking === 'underground') return 100 + Math.floor(Math.random() * 200);
        if (properties.parking === 'surface') return 20 + Math.floor(Math.random() * 80);
        if (properties.amenity === 'parking') return 50 + Math.floor(Math.random() * 150);
        return 30 + Math.floor(Math.random() * 100); // Default estimate
    }

    generateOccupancy(access, fee) {
        // Generate realistic low occupancy rates based on 2018 report
        if (access === 'private') return 0.10 + Math.random() * 0.15; // 10-25%
        if (access === 'customers') return 0.15 + Math.random() * 0.20; // 15-35%
        if (fee === 'yes') return 0.20 + Math.random() * 0.25; // 20-45%
        return 0.15 + Math.random() * 0.20; // Default 15-35%
    }

    estimatePrice(coordinates, access, operator) {
        // Estimate price based on location (distance from city center)
        const cityCenter = [12.5683, 55.6761];
        const distance = this.calculateDistance(coordinates, cityCenter);
        
        let basePrice = 35; // Start with city center price
        basePrice -= distance * 2; // Reduce by 2 kr per km from center
        basePrice = Math.max(basePrice, 15); // Minimum 15 kr
        
        // Adjust based on access type
        if (access === 'private') basePrice *= 0.8; // Private often cheaper
        if (access === 'customers') basePrice *= 0.7; // Customer parking cheaper
        
        return Math.round(basePrice);
    }

    calculateDistance(coord1, coord2) {
        const R = 6371; // Earth's radius in km
        const dLat = (coord2[1] - coord1[1]) * Math.PI / 180;
        const dLon = (coord2[0] - coord1[0]) * Math.PI / 180;
        const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(coord1[1] * Math.PI / 180) * Math.cos(coord2[1] * Math.PI / 180) *
                Math.sin(dLon/2) * Math.sin(dLon/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return R * c;
    }

    generateAddress(coordinates, properties) {
        // Use existing address if available
        if (properties['addr:street'] && properties['addr:housenumber']) {
            return `${properties['addr:street']} ${properties['addr:housenumber']}`;
        }
        if (properties.addr_street && properties.addr_housenumber) {
            return `${properties.addr_street} ${properties.addr_housenumber}`;
        }
        
        // Generate approximate address based on coordinates
        const areas = [
            { name: 'Vesterbro', center: [12.5434, 55.6736] },
            { name: 'Nørrebro', center: [12.5515, 55.6938] },
            { name: 'Østerbro', center: [12.5886, 55.7058] },
            { name: 'Indre By', center: [12.5683, 55.6761] },
            { name: 'Frederiksberg', center: [12.5234, 55.6794] },
            { name: 'Amager', center: [12.5950, 55.6500] },
            { name: 'Valby', center: [12.5000, 55.6500] }
        ];
        
        let closestArea = areas[0];
        let minDistance = this.calculateDistance(coordinates, areas[0].center);
        
        areas.forEach(area => {
            const distance = this.calculateDistance(coordinates, area.center);
            if (distance < minDistance) {
                minDistance = distance;
                closestArea = area;
            }
        });
        
        return `${closestArea.name}, København`;
    }

    generateDescription(properties, access, operator) {
        let description = '';
        
        if (access === 'private') description += 'Privat parkeringsplads. ';
        if (access === 'customers') description += 'Kundeparkering. ';
        if (properties.fee === 'yes') description += 'Betalingsparkering. ';
        if (operator && operator !== 'Privat') description += `Operatør: ${operator}. `;
        if (properties.parking === 'underground') description += 'Underjordisk parkering. ';
        if (properties.parking === 'multi-storey') description += 'Parkeringshus. ';
        if (properties.parking === 'surface') description += 'Overfladeparkering. ';
        if (properties.opening_hours) description += `Åbningstider: ${properties.opening_hours}. `;
        
        description += 'Baseret på 2018-rapporten er der sandsynligvis ledige pladser.';
        
        return description;
    }

    addRealisticOccupancy(feature) {
        // Add realistic occupancy data based on Copenhagen 2018 report
        const properties = feature.properties || {};
        
        // Estimate capacity if not provided
        if (!properties.capacity) {
            properties.capacity = this.estimateCapacity(properties);
        }
        
        // Generate realistic low occupancy (14% average from 2018 report)
        const occupancyRate = this.generateOccupancy(properties.access, properties.fee);
        properties.occupancy = Math.round(properties.capacity * occupancyRate);
        
        // Add other missing properties
        if (!properties.name) {
            properties.name = 'Parkeringsplads';
        }
        
        if (!properties.address) {
            properties.address = this.generateAddress(feature.geometry.coordinates, properties);
        }
        
        if (!properties.price_per_hour) {
            properties.price_per_hour = this.estimatePrice(feature.geometry.coordinates, properties.access, properties.operator);
        }
        
        if (!properties.description) {
            properties.description = this.generateDescription(properties, properties.access, properties.operator);
        }
    }

    getFallbackData() {
        // Return sample data if the GeoJSON file fails to load
        console.log('Using fallback parking data');
        return {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": {
                        "name": "Vesterbro Parkeringshus",
                        "address": "Vesterbrogade 123",
                        "capacity": 200,
                        "occupancy": 28,
                        "price_per_hour": 25,
                        "description": "Stort parkeringshus med lav belægning"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [12.5434, 55.6736]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "name": "Nørrebro Parking",
                        "address": "Nørrebrogade 456",
                        "capacity": 150,
                        "occupancy": 21,
                        "price_per_hour": 22,
                        "description": "Underjordisk parkering med mange ledige pladser"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [12.5515, 55.6938]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "name": "Østerbro Center Parking",
                        "address": "Østerbrogade 789",
                        "capacity": 180,
                        "occupancy": 25,
                        "price_per_hour": 28,
                        "description": "Moderne parkeringsfacilitet"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [12.5886, 55.7058]
                    }
                }
            ]
        };
    }
}

// Initialize the Overpass API handler
const overpassAPI = new OverpassAPI(); 