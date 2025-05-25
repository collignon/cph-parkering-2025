// D3 Parking Occupancy Visualization
const parkingVisualization = {
    createVisualization() {
        const container = d3.select('#aktuel-belægning div');
        
        // Remove any existing visualization
        container.select('.parking-viz').remove();
        
        // Create visualization container
        const vizContainer = container.append('div')
            .attr('class', 'parking-viz')
            .style('margin', '30px 0')
            .style('padding', '30px')
            .style('background', 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)')
            .style('border-radius', '12px')
            .style('box-shadow', '0 4px 20px rgba(0,0,0,0.1)');
        
        // Add title
        vizContainer.append('h3')
            .style('text-align', 'center')
            .style('color', '#2c3e50')
            .style('margin-bottom', '25px')
            .style('font-size', '1.5rem')
            .text('1.000 lejede parkeringspladser - kun 14% bruges');
        
        // SVG setup
        const width = Math.min(600, window.innerWidth - 100);
        const height = 400;
        const spotSize = 8;
        const spacing = 2;
        const spotsPerRow = Math.floor(width / (spotSize + spacing));
        const totalSpots = 100; // Representing 100%
        
        const svg = vizContainer.append('svg')
            .attr('width', width)
            .attr('height', height)
            .style('display', 'block')
            .style('margin', '0 auto');
        
        // Calculate grid layout
        const rows = Math.ceil(totalSpots / spotsPerRow);
        const startX = (width - (spotsPerRow * (spotSize + spacing))) / 2;
        const startY = (height - (rows * (spotSize + spacing))) / 2;
        
        // Create parking spots data
        const spotsData = [];
        for (let i = 0; i < totalSpots; i++) {
            const row = Math.floor(i / spotsPerRow);
            const col = i % spotsPerRow;
            spotsData.push({
                id: i,
                x: startX + col * (spotSize + spacing),
                y: startY + row * (spotSize + spacing),
                occupied: i < 14 // First 14 are occupied (14%)
            });
        }
        
        // Create spots
        const spots = svg.selectAll('.parking-spot')
            .data(spotsData)
            .enter()
            .append('rect')
            .attr('class', 'parking-spot')
            .attr('x', d => d.x)
            .attr('y', d => d.y)
            .attr('width', spotSize)
            .attr('height', spotSize)
            .attr('rx', 1)
            .style('fill', '#e0e0e0')
            .style('stroke', '#ccc')
            .style('stroke-width', 0.5)
            .style('opacity', 0);
        
        // Stats container
        const statsContainer = vizContainer.append('div')
            .style('display', 'flex')
            .style('justify-content', 'space-around')
            .style('margin-top', '25px')
            .style('text-align', 'center');
        
        const occupiedStat = statsContainer.append('div')
            .style('flex', '1');
        
        const emptyStat = statsContainer.append('div')
            .style('flex', '1');
        
        const costStat = statsContainer.append('div')
            .style('flex', '1');
        
        // Animation sequence
        this.animateVisualization(spots, occupiedStat, emptyStat, costStat);
        
        // Legend
        const legend = vizContainer.append('div')
            .style('margin-top', '20px')
            .style('text-align', 'center')
            .style('font-size', '0.9rem')
            .style('color', '#666');
        
        legend.append('div')
            .style('display', 'inline-block')
            .style('margin', '0 15px')
            .html('<span style="display:inline-block;width:12px;height:12px;background:#e74c3c;margin-right:5px;border-radius:2px;"></span>Optaget (14%)');
        
        legend.append('div')
            .style('display', 'inline-block')
            .style('margin', '0 15px')
            .html('<span style="display:inline-block;width:12px;height:12px;background:#95a5a6;margin-right:5px;border-radius:2px;"></span>Ledig (86%)');
    },
    
    animateVisualization(spots, occupiedStat, emptyStat, costStat) {
        // Step 1: Show all spots appearing
        spots.transition()
            .duration(1000)
            .delay((d, i) => i * 20)
            .style('opacity', 1);
        
        // Step 2: Show occupied spots (red)
        setTimeout(() => {
            spots.filter(d => d.occupied)
                .transition()
                .duration(800)
                .style('fill', '#e74c3c');
            
            // Update occupied counter
            occupiedStat.append('div')
                .style('font-size', '2rem')
                .style('font-weight', 'bold')
                .style('color', '#e74c3c')
                .style('margin-bottom', '5px')
                .text('14');
            
            occupiedStat.append('div')
                .style('font-size', '1rem')
                .style('color', '#555')
                .text('Optaget');
        }, 2000);
        
        // Step 3: Show empty spots (gray) 
        setTimeout(() => {
            spots.filter(d => !d.occupied)
                .transition()
                .duration(1200)
                .style('fill', '#95a5a6');
            
            // Update empty counter
            emptyStat.append('div')
                .style('font-size', '2rem')
                .style('font-weight', 'bold')
                .style('color', '#95a5a6')
                .style('margin-bottom', '5px')
                .text('86');
            
            emptyStat.append('div')
                .style('font-size', '1rem')
                .style('color', '#555')
                .text('Tomme pladser');
        }, 3500);
        
        // Step 4: Show cost implications
        setTimeout(() => {
            costStat.append('div')
                .style('font-size', '1.5rem')
                .style('font-weight', 'bold')
                .style('color', '#e67e22')
                .style('margin-bottom', '5px')
                .text('16,3 mio kr');
            
            costStat.append('div')
                .style('font-size', '0.9rem')
                .style('color', '#555')
                .text('Spildt årligt på tomme pladser');
        }, 5000);
        
        // Step 5: Final message
        setTimeout(() => {
            const messageContainer = d3.select('.parking-viz')
                .append('div')
                .style('margin-top', '25px')
                .style('padding', '20px')
                .style('background', 'rgba(231, 76, 60, 0.1)')
                .style('border', '2px solid #e74c3c')
                .style('border-radius', '8px')
                .style('text-align', 'center')
                .style('opacity', 0);
            
            messageContainer.append('div')
                .style('font-size', '1.2rem')
                .style('font-weight', 'bold')
                .style('color', '#e74c3c')
                .style('margin-bottom', '10px')
                .text('86% af dine skattepenge går til tomme parkeringspladser');
            
            messageContainer.append('div')
                .style('color', '#555')
                .text('Hver tom plads koster 19.000 kr om året');
            
            messageContainer.transition()
                .duration(1000)
                .style('opacity', 1);
        }, 6000);
    }
};

// Function to be called from the chapter callback
function showParkingVisualization() {
    setTimeout(() => {
        parkingVisualization.createVisualization();
    }, 500); // Small delay to ensure chapter is loaded
}

// Scroll-driven D3 Parking Occupancy Visualization
const scrollParkingVisualization = {
    currentViz: null,
    isInitialized: false,
    observer: null, // Added for IntersectionObserver

    createVisualization() {
        // Remove any existing visualization
        this.cleanup();

        // Create full-screen visualization container
        const vizContainer = d3.select('body').append('div')
            .attr('class', 'scroll-parking-viz')
            .style('position', 'fixed')
            .style('top', '0')
            .style('left', '0')
            .style('width', '100vw')
            .style('height', '100vh')
            .style('z-index', '0') // Ensure it's behind story content
            .style('background', 'rgba(44, 62, 80, 0.9)') // Dark semi-transparent background
            .style('display', 'flex')
            .style('flex-direction', 'column')
            .style('align-items', 'center')
            .style('justify-content', 'center')
            .style('pointer-events', 'none') // Allow clicks to pass through
            .style('opacity', 0); // Initially hidden

        this.currentViz = vizContainer;

        // Add title (optional, as text will scroll over)
        const title = vizContainer.append('h2')
            .attr('class', 'scroll-viz-title') // Added class for potential styling
            .style('color', 'white')
            .style('text-align', 'center')
            .style('margin-bottom', '40px')
            .style('font-size', '2.5rem')
            .style('font-weight', '300')
            .style('opacity', '0') // Start hidden, will be controlled by animation phases
            .text(''); // Title can be set dynamically or removed
        
        // SVG setup for 20x20 grid (400 spots representing 100%)
        const svgWidth = Math.min(800, window.innerWidth * 0.8); // Responsive width
        const svgHeight = Math.min(600, window.innerHeight * 0.7); // Responsive height
        const spotSize = Math.min(svgWidth / 25, svgHeight / 25); // Adjusted for more spacing
        const spacing = spotSize * 0.25; // Relative spacing
        const spotsPerRow = 20;
        const totalSpots = 400; // 20x20 grid

        const svg = vizContainer.append('svg')
            .attr('width', svgWidth)
            .attr('height', svgHeight)
            .style('display', 'block')
            .style('margin', '0 auto');

        // Calculate grid layout
        const rows = Math.ceil(totalSpots / spotsPerRow);
        const gridWidth = spotsPerRow * (spotSize + spacing) - spacing;
        const gridHeight = rows * (spotSize + spacing) - spacing;
        const startX = (svgWidth - gridWidth) / 2;
        const startY = (svgHeight - gridHeight) / 2;

        // Create parking spots data
        const spotsData = [];
        for (let i = 0; i < totalSpots; i++) {
            const row = Math.floor(i / spotsPerRow);
            const col = i % spotsPerRow;
            spotsData.push({
                id: i,
                x: startX + col * (spotSize + spacing),
                y: startY + row * (spotSize + spacing),
                isOccupiedInitially: Math.random() < 0.14 // ~14% are initially occupied (randomly)
            });
        }

        // Create spots (circles inspired by the screenshot)
        const spots = svg.selectAll('.parking-spot-circle')
            .data(spotsData)
            .enter()
            .append('circle')
            .attr('class', 'parking-spot-circle')
            .attr('cx', d => d.x + spotSize / 2)
            .attr('cy', d => d.y + spotSize / 2)
            .attr('r', spotSize / 2 * 0.8) // Smaller radius for dot effect
            .style('fill', 'rgba(255, 255, 255, 0.3)') // Faint white for empty spots
            .style('opacity', 0);
        
        this.spots = spots; // Storing for startAnimation
        this.spotsData = spotsData; // Storing for startAnimation
        this.titleElement = title; // Store title element

        this.isInitialized = true;
        // Don't call setupScrollListener here, IntersectionObserver will handle it
    },

    startAnimation() {
        if (!this.isInitialized || !this.currentViz) return;

        this.currentViz.transition().duration(500).style('opacity', 1);
        this.titleElement.text("").style('opacity', 0); // Ensure it's empty and hidden


        // Phase 1: All spots (empty circles) appear
        this.spots
            .transition()
            .duration(1000)
            .delay((d, i) => i * 5) // Staggered appearance
            .style('opacity', 1)
            .style('fill', 'rgba(255, 255, 255, 0.2)'); // Faint white empty spots (like screenshot)

        // Phase 2: Randomly fill 14% of spots with solid white
        setTimeout(() => {
            if (!this.spotsData || !this.spots) return; // Guard against cleanup
            const occupiedSpotsData = d3.shuffle(this.spotsData.slice()).slice(0, Math.floor(0.14 * this.spotsData.length));
            
            this.spots
                .filter(d => occupiedSpotsData.some(occupied => occupied.id === d.id))
                .transition()
                .duration(1500)
                .delay((d,i) => Math.random() * 1000) // Random delay for filling effect
                .style('fill', 'rgba(255, 255, 255, 1)') // Solid white for occupied (like screenshot)
                .style('r', parseFloat(this.spots.attr('r')) * 1.1); // Ensure 'r' is a number

        }, 2000); // Start after initial spots appear

        // Phase 3: Highlight the 86% empty
         setTimeout(() => {
            if (!this.spots) return; // Guard against cleanup
            this.spots
                 .filter(function() { // Use a function to access current element's style
                     return d3.select(this).style('fill') !== 'rgb(255, 255, 255)'; // Check against the solid white
                 })
                 .transition()
                 .duration(1000)
                 .style('fill', 'rgba(255, 255, 255, 0.1)'); // Even more faint for clearly empty
        }, 4500);


        // Add more phases or interactions as needed, potentially tied to scroll later
    },
    
    observeTarget(targetElementSelector) {
        const target = document.querySelector(targetElementSelector);
        if (!target) {
            console.warn("IntersectionObserver target not found:", targetElementSelector);
            return;
        }

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (!this.isInitialized) { // Was never shown or was properly cleaned up
                        this.createVisualization();
                        this.startAnimation();
                    } else {
                        // Is initialized, but was made invisible (scrolled below and now back)
                        // We need to make it visible and restart the animation
                        this.currentViz.style('opacity', 0); // Ensure it fades in fresh
                        this.startAnimation();
                    }
                } else { // Not intersecting
                    if (this.currentViz) {
                        const rect = entry.boundingClientRect;
                        // Check if the element is completely above the viewport
                        const isScrolledPastUpwards = rect.bottom < 0;

                        this.currentViz.transition().duration(300).style('opacity', 0).on("end", () => {
                            if (isScrolledPastUpwards) {
                                this.cleanup(); // Full reset only if scrolled past upwards
                            }
                            // If scrolled out downwards, it's now just hidden (opacity 0).
                            // isInitialized remains true.
                        });
                    }
                }
            });
        }, { threshold: 0.6 }); // Trigger when 60% of the target is visible

        this.observer.observe(target);
    },

    cleanup() {
        if (this.observer) { 
            this.observer.disconnect(); 
            this.observer = null;
        }
        if (this.currentViz) {
            this.currentViz.remove();
            this.currentViz = null;
        }
        this.isInitialized = false; 
        this.spots = null;
        this.spotsData = null;
        this.titleElement = null;
    }
};

// Function to be called from the chapter callback, now sets up the observer
function showScrollParkingVisualization() {
    // The ID of the chapter div that will trigger the animation
    scrollParkingVisualization.observeTarget('#parking-visualization'); 
}

function cleanupScrollParkingVisualization() {
    scrollParkingVisualization.cleanup();
}

// Example of how this might be called in config.js:
// {
// id: 'parking-visualization-static-dots',
// ...
// onChapterEnter: ['prepareParkingVisualization'], // Shows static dots
// onChapterExit: [], // Potentially hide if next chapter isn't sampling
// },
// {
// id: 'parking-visualization-sampling-start',
// ...
// onChapterEnter: ['startParkingSampling'], // Starts sampling animation
// onChapterExit: ['cleanupScrollParkingVisualization'] // Or on a later chapter
// }, 