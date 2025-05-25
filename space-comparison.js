// Space comparison visualizations based on Michael Szell's research
class SpaceComparison {
    constructor() {
        this.alternatives = [
            {
                type: 'bike_lanes',
                title: 'Cykelstier',
                description: 'En parkeringsplads = 20 meter cykelsti',
                icon: '🚴‍♀️',
                color: '#00cc66'
            },
            {
                type: 'trees',
                title: 'Træer',
                description: 'En parkeringsplads = 2-3 store træer',
                icon: '🌳',
                color: '#3cb371'
            },
            {
                type: 'outdoor_seating',
                title: 'Udendørs spisepladser',
                description: 'En parkeringsplads = 8-12 cafépladser',
                icon: '☕',
                color: '#d2a679'
            },
            {
                type: 'playground',
                title: 'Legeplads',
                description: 'En parkeringsplads = 15m² legeplads',
                icon: '🛝',
                color: '#ff7f50'
            },
            {
                type: 'green_space',
                title: 'Grønt område',
                description: 'En parkeringsplads = 15m² park',
                icon: '🌱',
                color: '#98fb98'
            }
        ];
        this.containerWrapperClass = 'space-alternatives-wrapper'; // Class for the dynamically added wrapper
    }

    // Returns the data, not HTML
    getAlternativesData() {
        return this.alternatives;
    }

    // Ensures the main container for alternatives exists within the host chapter element
    // and populates it with the initial structure of all alternatives (de-emphasized).
    initDisplay(hostChapterElementId) {
        const hostChapterElement = document.getElementById(hostChapterElementId);
        if (!hostChapterElement) {
            console.error(`Host chapter element '${hostChapterElementId}' not found.`);
            return;
        }

        // Remove existing wrapper if any, to ensure clean state
        let existingWrapper = hostChapterElement.querySelector('.' + this.containerWrapperClass);
        if (existingWrapper) {
            existingWrapper.remove();
        }

        const wrapper = document.createElement('div');
        wrapper.className = this.containerWrapperClass;

        const alternativesData = this.getAlternativesData();
        let alternativesHTML = '<div class="alternatives-grid">'; // Start grid

        alternativesData.forEach(alt => {
            alternativesHTML += `
                <div class="alternative-item scrolly-alternative" id="alternative-${alt.type}" style="border-left: 5px solid ${alt.color}; opacity: 0.25; transition: opacity 0.5s ease-in-out, transform 0.3s ease-in-out;">
                    <div class="alt-icon">${alt.icon}</div>
                    <div class="alt-content">
                        <h4>${alt.title}</h4>
                        <p class="alt-description">${alt.description}</p>
                    </div>
                </div>
            `;
        });
        alternativesHTML += '</div>'; // End grid
        alternativesHTML += `
            <div class="szell-reference" style="opacity: 0.5; transition: opacity 0.5s ease-in-out;">
                 <p><em>Baseret på principper fra Michael Szell om byrumsfordeling</em></p>
            </div>`;

        wrapper.innerHTML = alternativesHTML;

        // Append the new wrapper to the host chapter element
        // This attempts to place it after any existing H3 or P tags (title/description of the chapter)
        const existingMainContent = hostChapterElement.querySelector('h3, p');
        if (existingMainContent && existingMainContent.parentNode === hostChapterElement) {
            // If h3/p are direct children, find the div that usually wraps them.
            // The general structure from index.html is: <div id="chapter-id" class="step"><div (for title/desc)>...</div></div>
            // So we find the first div child.
            const contentDiv = hostChapterElement.querySelector('div');
            if (contentDiv) {
                 contentDiv.appendChild(wrapper);
            } else {
                 hostChapterElement.appendChild(wrapper); // Fallback
            }
        } else {
            hostChapterElement.appendChild(wrapper); // Fallback if no clear title/desc structure found
        }
    }

    // Highlights a specific alternative and de-emphasizes others.
    highlightAlternative(type) {
        const wrapper = document.querySelector('.' + this.containerWrapperClass);
        if (!wrapper) return;

        const allItems = wrapper.querySelectorAll('.scrolly-alternative');
        allItems.forEach(item => {
            item.style.opacity = '0.25';
            item.style.transform = 'scale(1)';
            item.classList.remove('active-alternative');
        });

        const targetItem = wrapper.querySelector(`#alternative-${type}`);
        if (targetItem) {
            targetItem.style.opacity = '1';
            targetItem.style.transform = 'scale(1.03)';
             targetItem.classList.add('active-alternative');
        }
        
        // Also make Szell reference fully visible when any alternative is highlighted
        const szellRef = wrapper.querySelector('.szell-reference');
        if (szellRef) {
            szellRef.style.opacity = '1';
        }
    }

    // Clears the alternatives display.
    clearDisplay() {
        const wrapper = document.querySelector('.' + this.containerWrapperClass);
        if (wrapper) {
            wrapper.innerHTML = ''; // Or wrapper.remove(); if the wrapper itself should go
        }
    }
}

const spaceComparison = new SpaceComparison();

// Global functions to be called from config.js
// Pass the ID of the chapter that will host the alternatives display.
function initializeSpaceAlternativesDisplay(hostChapterId) {
    spaceComparison.initDisplay(hostChapterId);
}

function highlightSpaceAlternative(type) {
    spaceComparison.highlightAlternative(type);
}

function clearSpaceAlternativesDisplay() {
    spaceComparison.clearDisplay();
} 