# Demo Instructions

## Quick Start

1. **Get a Mapbox token** (required for the map to work):

   - Go to [mapbox.com](https://mapbox.com) and create a free account
   - Copy your access token
   - Replace the token in `config.js` line 3

2. **Start the server**:

   ```bash
   python -m http.server 8000
   ```

3. **Open in browser**:
   - Go to `http://localhost:8000`

## What to expect

### Visual Essay Features

- **Scroll-triggered story**: Scroll down to see the story unfold with map animations
- **Interactive map**: Click on parking spots to see details
- **Responsive design**: Works on desktop and mobile

### Story Chapters

1. **Introduction**: Overview of Copenhagen parking issues
2. **Low occupancy**: Data about private parking utilization
3. **Municipal leases**: Information about city's parking arrangements
4. **Area examples**: Vesterbro, Nørrebro, Østerbro parking situations
5. **Current statistics**: 14% occupancy rate data
6. **Solution**: The ledigparkeringspladsikbh.dk concept

### Interactive Elements

- **Parking spots**: Color-coded by occupancy (green = empty, yellow = half full, red = full)
- **Popups**: Click any parking spot for detailed information
- **Contribution form**: At the end, users can add new parking locations

### Testing the Contribution Feature

1. Scroll to the bottom of the story
2. Fill out the form with:
   - Name: "Test Parking"
   - Address: "Vesterbro" (or any Copenhagen area)
   - Description: "Test location"
3. Click "Tilføj til kort"
4. The new spot will appear on the map with a red marker
5. Click the new marker to see the contribution popup

### Sample Data

The MVP includes 5 sample parking locations across Copenhagen:

- Vesterbro Parkeringshus (14% occupancy)
- Nørrebro Parking (14% occupancy)
- Østerbro Center Parking (14% occupancy)
- Indre By Parking (13% occupancy)
- Frederiksberg Allé Parking (13% occupancy)

## Technical Notes

- Uses localStorage to save user contributions
- Mock geocoding for address-to-coordinates conversion
- Responsive design with mobile optimization
- Built with vanilla JavaScript (no framework dependencies)

## Next Steps for Production

1. Replace mock data with real parking data
2. Implement proper geocoding service
3. Add backend to store user contributions
4. Integrate real-time occupancy data
5. Add photo upload functionality
6. Implement user authentication
7. Add moderation for user contributions
