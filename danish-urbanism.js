// Simplified Danish urbanism impact
class DanishUrbanism {
    constructor() {
        this.globalImpact = {
            citiesInspired: 200,
            copenhagenizeProjects: 50,
            cyclingIncrease: 300,
            co2Saved: 2.5
        };
    }

    createSimpleStatsHTML() {
        return `
            <div class="danish-impact-simple">
                <div class="impact-grid">
                    <div class="impact-item">
                        <span class="impact-number">200+</span>
                        <span class="impact-label">Byer inspireret af danske principper</span>
                    </div>
                    <div class="impact-item">
                        <span class="impact-number">50+</span>
                        <span class="impact-label">Internationale Copenhagenize projekter</span>
                    </div>
                    <div class="impact-item">
                        <span class="impact-number">300%</span>
                        <span class="impact-label">Stigning i cykling globalt</span>
                    </div>
                    <div class="impact-item">
                        <span class="impact-number">2.5M</span>
                        <span class="impact-label">Tons CO₂ sparet årligt</span>
                    </div>
                </div>
                
                <div class="paradox-highlight">
                    <h4>Men hjemme i København...</h4>
                    <div class="paradox-stats">
                        <span class="bad-stat">86% tomme private pladser</span>
                        <span class="bad-stat">19.000kr/plads i skattekroner</span>
                        <span class="good-stat">20m cykelsti per plads muligt</span>
                    </div>
                </div>
            </div>
        `;
    }

    addToChapter(chapterId) {
        const statsHTML = this.createSimpleStatsHTML();
        
        const chapter = document.querySelector(`#${chapterId} div`);
        if (chapter && !chapter.querySelector('.danish-impact-simple')) {
            chapter.insertAdjacentHTML('beforeend', statsHTML);
        }
    }
}

const danishUrbanism = new DanishUrbanism(); 