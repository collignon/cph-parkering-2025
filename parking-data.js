// Sample parking data for Copenhagen
var parkingData = {
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
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Indre By Parking",
                "address": "Strøget 12",
                "capacity": 120,
                "occupancy": 15,
                "price_per_hour": 35,
                "description": "Central beliggenhed, ofte tom"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [12.5683, 55.6761]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Frederiksberg Allé Parking",
                "address": "Frederiksberg Allé 45",
                "capacity": 90,
                "occupancy": 12,
                "price_per_hour": 20,
                "description": "Lille parkeringshus med meget lav belægning"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [12.5234, 55.6794]
            }
        }
    ]
}; 