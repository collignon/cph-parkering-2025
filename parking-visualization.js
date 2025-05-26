// D3 Parking Occupancy Visualization
const parkingVisualization = {
    createVisualization(customContainer = null) {
        // Use custom container if provided, otherwise fall back to original
        const container = customContainer ? d3.select(customContainer) : d3.select('#aktuel-belægning div');
        
        // Remove any existing visualization
        container.select('.parking-viz').remove();
        
        // Create completely transparent visualization container
        const vizContainer = container.append('div')
            .attr('class', 'parking-viz')
            .style('margin', '0')
            .style('padding', '0')
            .style('background', 'none')
            .style('border', 'none')
            .style('box-shadow', 'none')
            .style('text-align', 'center');
        
        // SVG setup
        const containerWidth = customContainer ? 
            Math.min(350, window.innerWidth * 0.3) : 
            Math.min(600, window.innerWidth - 100);
        const containerHeight = customContainer ? 280 : 350;
        const width = containerWidth;
        const height = containerHeight - 60; // Leave space for stats below
        const spotSize = customContainer ? 8 : 10;
        const spacing = customContainer ? 2 : 3;
        const spotsPerRow = 10; // Fixed 10x10 grid
        const totalSpots = 100; // Representing 100%
        
        const svg = vizContainer.append('svg')
            .attr('width', width)
            .attr('height', height)
            .style('display', 'block')
            .style('margin', '0 auto')
            .style('background', 'transparent');
        
        // Calculate grid layout for 10x10
        const rows = 10;
        const gridWidth = spotsPerRow * (spotSize + spacing) - spacing;
        const gridHeight = rows * (spotSize + spacing) - spacing;
        const startX = (width - gridWidth) / 2;
        const startY = (height - gridHeight) / 2;
        
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
        
        // Create spots (static, no animation)
        svg.selectAll('.parking-spot')
            .data(spotsData)
            .enter()
            .append('rect')
            .attr('class', 'parking-spot')
            .attr('x', d => d.x)
            .attr('y', d => d.y)
            .attr('width', spotSize)
            .attr('height', spotSize)
            .attr('rx', 1)
            .style('fill', d => d.occupied ? '#e74c3c' : '#95a5a6')
            .style('stroke', 'none')
            .style('stroke-width', 0);
        
        // One clear stat
        const statContainer = vizContainer.append('div')
            .style('margin-top', '15px')
            .style('text-align', 'center');
        
        statContainer.append('div')
            .style('font-size', customContainer ? '1.8rem' : '2.2rem')
            .style('font-weight', 'bold')
            .style('color', '#e74c3c')
            .style('margin-bottom', '5px')
            .text('14% optaget');
        
        statContainer.append('div')
            .style('font-size', customContainer ? '0.9rem' : '1rem')
            .style('color', 'white')
            .text('86% står tomme og koster penge');
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

// Assume 'map' is globally defined
// Path to the GeoJSON data
const animatedParkingGeoJsonPath = 'overpass-cph-parking.geojson';

// Variables for animation control
let animationIntervalId = null;
let allParkingFeaturesForAnimation = null; // Store all features once loaded
let animatedFeaturesShownCount = 0; // Count of features shown in current animation run
let currentAnimatedFeaturesList = []; // Accumulates features for the current animation

// Layer and Source IDs for the animation
const animatedParkingSourceId = 'animated-parking-source';
const animatedParkingLayerId = 'animated-parking-points';

// Helper to load GeoJSON data for animation
async function loadAllParkingFeaturesForAnimation() {
    if (map && !allParkingFeaturesForAnimation) { // Ensure map is defined
        try {
            const response = await fetch(animatedParkingGeoJsonPath);
            const geojsonData = await response.json();
            allParkingFeaturesForAnimation = geojsonData.features;
        } catch (error) {
            console.error('Error loading parking data for animation:', error);
            allParkingFeaturesForAnimation = [];
        }
    } else if (!map) {
        // console.warn('Map object not available for loading animation features.');
        allParkingFeaturesForAnimation = []; // Ensure it's an array
    }
}

// Function to remove layers that might conflict (e.g., from showScrollParkingVisualization)
function clearOtherParkingVisualizations() {
    if (!map) return; // Map not initialized

    const layersToRemove = ['parking-areas', 'parking-points-dynamic'];
    const sourcesToRemove = ['parking-data-source'];

    layersToRemove.forEach(layerId => {
        if (map.getLayer(layerId)) {
            map.removeLayer(layerId);
        }
    });
    sourcesToRemove.forEach(sourceId => {
        if (map.getSource(sourceId) && sourceId !== animatedParkingSourceId) {
            const layersUsingSource = map.getStyle().layers.filter(layer => layer.source === sourceId);
            if (layersUsingSource.length === 0) {
                 map.removeSource(sourceId);
            }
        }
    });
    if (typeof cleanupScrollParkingVisualization === 'function') {
        cleanupScrollParkingVisualization();
    }
}


// 1. Hide animated layer and any other parking layers (for text-only intro)
function hideAnimatedParkingLayer() {
    if (!map) return;
    clearOtherParkingVisualizations();
    if (map.getLayer(animatedParkingLayerId)) {
        map.setLayoutProperty(animatedParkingLayerId, 'visibility', 'none');
    }
}

// 2. Prepare the animated layer (for map reveal chapter)
async function prepareAnimatedParkingLayer() {
    if (!map) return;
    clearOtherParkingVisualizations();
    await loadAllParkingFeaturesForAnimation();

    if (!map.getSource(animatedParkingSourceId)) {
        map.addSource(animatedParkingSourceId, {
            type: 'geojson',
            data: { type: 'FeatureCollection', features: [] }
        });
    } else {
        map.getSource(animatedParkingSourceId).setData({ type: 'FeatureCollection', features: [] });
    }

    if (!map.getLayer(animatedParkingLayerId)) {
        map.addLayer({
            id: animatedParkingLayerId,
            type: 'circle',
            source: animatedParkingSourceId,
            paint: {
                'circle-radius': 5,
                'circle-color': '#E74C3C',
                'circle-opacity': 0.85,
                'circle-stroke-width': 0.5,
                'circle-stroke-color': '#FFFFFF'
            }
        });
    }
    map.setLayoutProperty(animatedParkingLayerId, 'visibility', 'visible');
    animatedFeaturesShownCount = 0;
    currentAnimatedFeaturesList = [];
}

// 3. Animate parking spots randomly
async function animateParkingSpotsRandomly() {
    if (!map) return;
    await loadAllParkingFeaturesForAnimation();
    if (!allParkingFeaturesForAnimation || allParkingFeaturesForAnimation.length === 0) {
        // console.warn("No parking features to animate. Showing all if possible.");
        ensureAllParkingSpotsVisible();
        return;
    }

    if (animationIntervalId) {
        clearInterval(animationIntervalId);
    }
    map.setLayoutProperty(animatedParkingLayerId, 'visibility', 'visible');

    let shuffledFeatures = [...allParkingFeaturesForAnimation];
    for (let i = shuffledFeatures.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledFeatures[i], shuffledFeatures[j]] = [shuffledFeatures[j], shuffledFeatures[i]];
    }

    const featuresPerInterval = Math.max(1, Math.floor(shuffledFeatures.length / 150));
    const intervalDuration = 30;

    animatedFeaturesShownCount = 0;
    currentAnimatedFeaturesList = [];

    animationIntervalId = setInterval(() => {
        if (animatedFeaturesShownCount < shuffledFeatures.length) {
            const batchEndIndex = Math.min(animatedFeaturesShownCount + featuresPerInterval, shuffledFeatures.length);
            const nextBatch = shuffledFeatures.slice(animatedFeaturesShownCount, batchEndIndex);
            currentAnimatedFeaturesList.push(...nextBatch);

            if (map.getSource(animatedParkingSourceId)) { // Check if source still exists
                map.getSource(animatedParkingSourceId).setData({
                    type: 'FeatureCollection',
                    features: currentAnimatedFeaturesList
                });
            } else { // Source might have been removed by rapid chapter changes
                clearInterval(animationIntervalId);
                animationIntervalId = null;
                return;
            }
            animatedFeaturesShownCount = batchEndIndex;
        } else {
            clearInterval(animationIntervalId);
            animationIntervalId = null;
        }
    }, intervalDuration);
}

// 4. Ensure all parking spots are visible on the animated layer
async function ensureAllParkingSpotsVisible() {
    if (!map) return;
    if (animationIntervalId) {
        clearInterval(animationIntervalId);
        animationIntervalId = null;
    }
    await loadAllParkingFeaturesForAnimation();

    if (allParkingFeaturesForAnimation && allParkingFeaturesForAnimation.length > 0) {
        if (!map.getSource(animatedParkingSourceId)) {
             map.addSource(animatedParkingSourceId, {
                type: 'geojson',
                data: { type: 'FeatureCollection', features: allParkingFeaturesForAnimation }
            });
        } else {
            map.getSource(animatedParkingSourceId).setData({
                type: 'FeatureCollection',
                features: allParkingFeaturesForAnimation
            });
        }

        if (!map.getLayer(animatedParkingLayerId)) {
             map.addLayer({
                id: animatedParkingLayerId,
                type: 'circle',
                source: animatedParkingSourceId,
                paint: {
                    'circle-radius': 5,
                    'circle-color': '#E74C3C',
                    'circle-opacity': 0.85,
                    'circle-stroke-width': 0.5,
                    'circle-stroke-color': '#FFFFFF'
                }
            });
        }
        map.setLayoutProperty(animatedParkingLayerId, 'visibility', 'visible');
    }
    // Do NOT call clearOtherParkingVisualizations here if this layer is meant to persist
    // and be the primary display of parking spots moving forward.
    // However, if other visualizations (like showScrollParkingVisualization) are still
    // meant to take over in subsequent chapters, then this function might need to
    // hide animatedParkingLayerId and trigger the other visualization.
    // For now, assuming animatedParkingLayerId persists.
} 