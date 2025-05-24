// Impact statistics based on research and Copenhagen data
class ImpactStats {
    constructor() {
        this.stats = {
            // Based on Copenhagen municipal parking lease costs
            municipalCostPerSpace: 19000, // kr per year
            // Based on 2018 report occupancy rates
            averageOccupancy: 0.14, // 14% current occupancy
            // Environmental impact per parking space
            co2PerSpace: 2.3, // tons CO2 per year (construction + maintenance)
            // Space efficiency
            spacePerCar: 15, // m² per parking space
            // Economic opportunity cost
            landValuePerM2: 15000 // kr per m² in Copenhagen
        };
    }

    calculateImpacts(parkingData) {
        const totalSpaces = parkingData.features.reduce((sum, feature) => 
            sum + (feature.properties.capacity || 0), 0);
        
        const occupiedSpaces = Math.round(totalSpaces * this.stats.averageOccupancy);
        const emptySpaces = totalSpaces - occupiedSpaces;
        
        return {
            totalSpaces,
            occupiedSpaces,
            emptySpaces,
            wastedMoney: Math.round(emptySpaces * this.stats.municipalCostPerSpace),
            wastedSpace: Math.round(emptySpaces * this.stats.spacePerCar),
            co2Impact: Math.round(emptySpaces * this.stats.co2PerSpace),
            opportunityCost: Math.round(emptySpaces * this.stats.spacePerCar * this.stats.landValuePerM2),
            percentageEmpty: Math.round((emptySpaces / totalSpaces) * 100)
        };
    }

    createStatsHTML(impacts) {
        return `
            <div class="impact-stats">
                <div class="stat-item">
                    <span class="stat-number">${impacts.emptySpaces.toLocaleString()}</span>
                    <div class="stat-label">Tomme parkeringspladser</div>
                </div>
                <div class="stat-item">
                    <span class="stat-number">${impacts.percentageEmpty}%</span>
                    <div class="stat-label">Står tomme</div>
                </div>
                <div class="stat-item">
                    <span class="stat-number">${(impacts.wastedMoney / 1000000).toFixed(1)}M</span>
                    <div class="stat-label">Spildte skattekroner årligt</div>
                </div>
                <div class="stat-item">
                    <span class="stat-number">${(impacts.wastedSpace / 10000).toFixed(1)}</span>
                    <div class="stat-label">Hektar spildt byrum</div>
                </div>
                <div class="stat-item">
                    <span class="stat-number">${impacts.co2Impact.toLocaleString()}</span>
                    <div class="stat-label">Tons unødvendig CO₂ årligt</div>
                </div>
                <div class="stat-item">
                    <span class="stat-number">${(impacts.opportunityCost / 1000000000).toFixed(1)}B</span>
                    <div class="stat-label">Kroner i tabt værdi</div>
                </div>
            </div>
            <div class="impact-explanation">
                <p><strong>Hvad betyder disse tal?</strong></p>
                <ul>
                    <li><strong>Spildte skattekroner:</strong> Baseret på kommunens gennemsnitlige leje på 19.000 kr/plads årligt</li>
                    <li><strong>Spildt byrum:</strong> Hver parkeringsplads optager ~15m² værdifuldt byrum</li>
                    <li><strong>CO₂ impact:</strong> Konstruktion og vedligeholdelse af unødvendige parkeringspladser</li>
                    <li><strong>Tabt værdi:</strong> Hvad grunden kunne være værd til andre formål</li>
                </ul>
                <p class="source-note">
                    <em>Kilder: Københavns Kommune, Michael Szell's forskning i byrumsfordeling, 
                    <a href="http://michael.szell.net/downloads/talk_szell2019rwu.pdf">Urban Space Distribution (2019)</a></em>
                </p>
            </div>
        `;
    }

    addToChapter(chapterId, parkingData) {
        const impacts = this.calculateImpacts(parkingData);
        const statsHTML = this.createStatsHTML(impacts);
        
        const chapter = document.querySelector(`#${chapterId} .step-content`);
        if (chapter && !chapter.querySelector('.impact-stats')) {
            chapter.insertAdjacentHTML('beforeend', statsHTML);
        }
    }
}

const impactStats = new ImpactStats(); 