// Contribution handling for collaborative mapping
class ContributionManager {
    constructor() {
        this.contributions = JSON.parse(localStorage.getItem('parkingContributions') || '[]');
    }

    async geocodeAddress(address) {
        // For MVP, we'll use a simple mock geocoding
        // In production, you'd use a real geocoding service
        const mockCoordinates = {
            'vesterbro': [12.5434, 55.6736],
            'nørrebro': [12.5515, 55.6938],
            'østerbro': [12.5886, 55.7058],
            'indre by': [12.5683, 55.6761],
            'frederiksberg': [12.5234, 55.6794]
        };

        const addressLower = address.toLowerCase();
        for (const [area, coords] of Object.entries(mockCoordinates)) {
            if (addressLower.includes(area)) {
                return coords;
            }
        }

        // Default to center of Copenhagen with some random offset
        return [
            12.5683 + (Math.random() - 0.5) * 0.02,
            55.6761 + (Math.random() - 0.5) * 0.02
        ];
    }

    async submitContribution(formData) {
        try {
            const coordinates = await this.geocodeAddress(formData.address);
            
            const contribution = {
                id: Date.now(),
                name: formData.name,
                address: formData.address,
                description: formData.description,
                coordinates: coordinates,
                timestamp: new Date().toISOString(),
                verified: false
            };

            this.contributions.push(contribution);
            localStorage.setItem('parkingContributions', JSON.stringify(this.contributions));

            // Add to map immediately
            this.addContributionToMap(contribution);

            return { success: true, contribution };
        } catch (error) {
            console.error('Error submitting contribution:', error);
            return { success: false, error: error.message };
        }
    }

    addContributionToMap(contribution) {
        if (typeof map !== 'undefined' && map.getSource('user-contributions')) {
            const currentData = map.getSource('user-contributions')._data;
            currentData.features.push({
                type: 'Feature',
                properties: {
                    name: contribution.name,
                    address: contribution.address,
                    description: contribution.description,
                    verified: contribution.verified,
                    timestamp: contribution.timestamp
                },
                geometry: {
                    type: 'Point',
                    coordinates: contribution.coordinates
                }
            });
            map.getSource('user-contributions').setData(currentData);
        }
    }

    loadContributionsToMap() {
        if (typeof map !== 'undefined') {
            const contributionsData = {
                type: 'FeatureCollection',
                features: this.contributions.map(contrib => ({
                    type: 'Feature',
                    properties: {
                        name: contrib.name,
                        address: contrib.address,
                        description: contrib.description,
                        verified: contrib.verified,
                        timestamp: contrib.timestamp
                    },
                    geometry: {
                        type: 'Point',
                        coordinates: contrib.coordinates
                    }
                }))
            };

            map.addSource('user-contributions', {
                type: 'geojson',
                data: contributionsData
            });

            map.addLayer({
                id: 'user-contributions-layer',
                type: 'circle',
                source: 'user-contributions',
                paint: {
                    'circle-radius': 6,
                    'circle-color': '#ff6b6b',
                    'circle-stroke-width': 2,
                    'circle-stroke-color': '#ffffff',
                    'circle-opacity': 0.7
                }
            });

            // Add click handler for user contributions
            map.on('click', 'user-contributions-layer', (e) => {
                const coordinates = e.features[0].geometry.coordinates.slice();
                const properties = e.features[0].properties;
                
                new mapboxgl.Popup()
                    .setLngLat(coordinates)
                    .setHTML(`
                        <div style="padding: 10px;">
                            <h3 style="margin: 0 0 10px 0; color: #333;">${properties.name}</h3>
                            <p style="margin: 5px 0;"><strong>Adresse:</strong> ${properties.address}</p>
                            <p style="margin: 5px 0; font-style: italic;">${properties.description}</p>
                            <div style="margin-top: 10px; padding: 5px; background: #fff3cd; border-radius: 3px; font-size: 12px;">
                                <strong>📍 Bruger-bidrag</strong><br>
                                ${properties.verified ? '✅ Verificeret' : '⏳ Afventer verifikation'}
                            </div>
                        </div>
                    `)
                    .addTo(map);
            });
        }
    }
}

// Initialize contribution manager
const contributionManager = new ContributionManager();

// Enhanced form submission function
function submitContribution() {
    const name = document.getElementById('location-name').value.trim();
    const address = document.getElementById('location-address').value.trim();
    const description = document.getElementById('location-description').value.trim();
    
    if (!name || !address) {
        alert('Navn og adresse er påkrævet');
        return;
    }

    const submitButton = document.querySelector('.contribution-form button');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Tilføjer...';
    submitButton.disabled = true;

    contributionManager.submitContribution({
        name,
        address,
        description: description || 'Ingen beskrivelse angivet'
    }).then(result => {
        if (result.success) {
            alert('Tak for dit bidrag! Det er nu tilføjet til kortet.');
            
            // Clear form
            document.getElementById('location-name').value = '';
            document.getElementById('location-address').value = '';
            document.getElementById('location-description').value = '';
            document.getElementById('location-photo').value = '';
        } else {
            alert('Der opstod en fejl: ' + result.error);
        }
    }).finally(() => {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    });
} 