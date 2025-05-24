// Space comparison visualizations based on Michael Szell's research
class SpaceComparison {
    constructor() {
        this.alternatives = [
            {
                type: 'bike_lanes',
                title: 'Cykelstier',
                description: 'En parkeringsplads = 20 meter cykelsti',
                multiplier: 20,
                icon: '🚴‍♀️',
                color: '#00ff00'
            },
            {
                type: 'trees',
                title: 'Træer',
                description: 'En parkeringsplads = 2-3 store træer',
                multiplier: 2.5,
                icon: '🌳',
                color: '#228B22'
            },
            {
                type: 'outdoor_seating',
                title: 'Udendørs spisepladser',
                description: 'En parkeringsplads = 8-12 cafépladser',
                multiplier: 10,
                icon: '☕',
                color: '#8B4513'
            },
            {
                type: 'playground',
                title: 'Legeplads',
                description: 'En parkeringsplads = 15m² legeplads',
                multiplier: 15,
                icon: '🛝',
                color: '#FF6B6B'
            },
            {
                type: 'green_space',
                title: 'Grønt område',
                description: 'En parkeringsplads = 15m² park',
                multiplier: 15,
                icon: '🌱',
                color: '#90EE90'
            }
        ];
    }

    calculateAlternatives(totalParkingSpaces) {
        return this.alternatives.map(alt => ({
            ...alt,
            total: Math.round(totalParkingSpaces * alt.multiplier),
            impact: this.getImpactDescription(alt.type, totalParkingSpaces * alt.multiplier)
        }));
    }

    getImpactDescription(type, amount) {
        switch(type) {
            case 'bike_lanes':
                const km = (amount / 1000).toFixed(1);
                return `${km} km nye cykelstier - nok til at forbinde hele København`;
            case 'trees':
                return `${Math.round(amount)} træer - absorberer ${Math.round(amount * 22)} kg CO2 årligt`;
            case 'outdoor_seating':
                return `${Math.round(amount)} cafépladser - plads til ${Math.round(amount * 4)} mennesker`;
            case 'playground':
                return `${Math.round(amount)}m² legeplads - plads til ${Math.round(amount / 5)} børn`;
            case 'green_space':
                return `${Math.round(amount)}m² grønt område - ${(amount / 10000).toFixed(1)} hektar ny park`;
            default:
                return '';
        }
    }

    generateVisualization(parkingData) {
        const totalSpaces = parkingData.features.reduce((sum, feature) => 
            sum + (feature.properties.capacity || 0), 0);
        
        const alternatives = this.calculateAlternatives(totalSpaces);
        
        return {
            totalSpaces,
            alternatives,
            summary: `${totalSpaces} private parkeringspladser kunne blive til:`
        };
    }

    createComparisonHTML(visualization) {
        return `
            <div class="space-comparison">
                <h3>Hvad kunne vi få i stedet?</h3>
                <p class="total-spaces">${visualization.summary}</p>
                <div class="alternatives-grid">
                    ${visualization.alternatives.map(alt => `
                        <div class="alternative-item" style="border-left: 4px solid ${alt.color}">
                            <div class="alt-icon">${alt.icon}</div>
                            <div class="alt-content">
                                <h4>${alt.title}</h4>
                                <p class="alt-impact">${alt.impact}</p>
                                <small class="alt-description">${alt.description}</small>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="szell-reference">
                    <p><em>Baseret på forskning af Michael Szell om byrumsfordeling</em></p>
                </div>
            </div>
        `;
    }
}

const spaceComparison = new SpaceComparison(); 