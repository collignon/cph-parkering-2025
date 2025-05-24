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
    createVisualization() {
        const container = d3.select('#parking-visualization div');
        
        // Remove any existing visualization
        container.select('.scroll-parking-viz').remove();
        
        // Create full-screen visualization container
        const vizContainer = d3.select('body').append('div')
            .attr('class', 'scroll-parking-viz')
            .style('position', 'fixed')
            .style('top', '0')
            .style('left', '0')
            .style('width', '100vw')
            .style('height', '100vh')
            .style('z-index', '10')
            .style('background', '#2c3e50')
            .style('display', 'flex')
            .style('flex-direction', 'column')
            .style('align-items', 'center')
            .style('justify-content', 'center')
            .style('pointer-events', 'none');
        
        // Add title
        const title = vizContainer.append('h2')
            .style('color', 'white')
            .style('text-align', 'center')
            .style('margin-bottom', '40px')
            .style('font-size', '2.5rem')
            .style('font-weight', '300')
            .style('opacity', '0')
            .text('1.000 lejede parkeringspladser');
        
        // SVG setup for 20x20 grid (400 spots representing 100%)
        const width = Math.min(800, window.innerWidth - 100);
        const height = Math.min(600, window.innerHeight - 200);
        const spotSize = Math.min(width / 22, height / 22); // 20 spots + spacing
        const spacing = spotSize * 0.2;
        const gridSize = 20;
        const totalSpots = 400; // 20x20 = 400 spots
        
        const svg = vizContainer.append('svg')
            .attr('width', width)
            .attr('height', height)
            .style('border', '2px solid rgba(255,255,255,0.2)')
            .style('border-radius', '12px');
        
        // Calculate centered grid layout
        const gridWidth = gridSize * (spotSize + spacing) - spacing;
        const gridHeight = gridSize * (spotSize + spacing) - spacing;
        const startX = (width - gridWidth) / 2;
        const startY = (height - gridHeight) / 2;
        
        // Create parking spots data (20x20 grid)
        const spotsData = [];
        for (let row = 0; row < gridSize; row++) {
            for (let col = 0; col < gridSize; col++) {
                const spotIndex = row * gridSize + col;
                spotsData.push({
                    id: spotIndex,
                    x: startX + col * (spotSize + spacing),
                    y: startY + row * (spotSize + spacing),
                    occupied: spotIndex < 56, // 14% of 400 = 56 spots
                    row: row,
                    col: col
                });
            }
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
            .attr('rx', 2)
            .style('fill', '#34495e')
            .style('stroke', '#7f8c8d')
            .style('stroke-width', 1)
            .style('opacity', 0);
        
        // Stats display
        const statsContainer = vizContainer.append('div')
            .style('margin-top', '30px')
            .style('display', 'flex')
            .style('justify-content', 'center')
            .style('gap', '60px')
            .style('color', 'white')
            .style('font-size', '1.2rem')
            .style('opacity', '0');
        
        const occupiedCounter = statsContainer.append('div')
            .style('text-align', 'center');
        
        const emptyCounter = statsContainer.append('div')
            .style('text-align', 'center');
        
        const costCounter = statsContainer.append('div')
            .style('text-align', 'center');
        
        // Store for cleanup
        this.currentViz = vizContainer;
        
        // Start animation sequence
        this.animateSequence(title, spots, occupiedCounter, emptyCounter, costCounter);
    },
    
    animateSequence(title, spots, occupiedCounter, emptyCounter, costCounter) {
        // Step 1: Show title
        title.transition()
            .duration(1000)
            .style('opacity', '1');
        
        // Step 2: Show all spots appearing in waves
        setTimeout(() => {
            spots.transition()
                .duration(2000)
                .delay((d, i) => (d.row + d.col) * 30)
                .style('opacity', 1);
        }, 1000);
        
        // Step 3: Highlight occupied spots (red)
        setTimeout(() => {
            spots.filter(d => d.occupied)
                .transition()
                .duration(1000)
                .style('fill', '#e74c3c');
            
            // Animate occupied counter
            occupiedCounter.append('div')
                .style('font-size', '3rem')
                .style('font-weight', 'bold')
                .style('color', '#e74c3c')
                .style('margin-bottom', '10px')
                .text('0')
                .transition()
                .duration(1000)
                .tween('text', function() {
                    const i = d3.interpolate(0, 56);
                    return function(t) {
                        this.textContent = Math.round(i(t));
                    };
                });
                
            occupiedCounter.append('div')
                .style('font-size', '1rem')
                .style('color', '#ecf0f1')
                .text('Optaget (14%)');
        }, 3000);
        
        // Step 4: Show empty spots (gray)
        setTimeout(() => {
            spots.filter(d => !d.occupied)
                .transition()
                .duration(1500)
                .style('fill', '#95a5a6');
            
            // Animate empty counter
            emptyCounter.append('div')
                .style('font-size', '3rem')
                .style('font-weight', 'bold')
                .style('color', '#95a5a6')
                .style('margin-bottom', '10px')
                .text('0')
                .transition()
                .duration(1500)
                .tween('text', function() {
                    const i = d3.interpolate(0, 344);
                    return function(t) {
                        this.textContent = Math.round(i(t));
                    };
                });
                
            emptyCounter.append('div')
                .style('font-size', '1rem')
                .style('color', '#ecf0f1')
                .text('Tomme (86%)');
        }, 4500);
        
        // Step 5: Show cost implications
        setTimeout(() => {
            costCounter.append('div')
                .style('font-size', '2.5rem')
                .style('font-weight', 'bold')
                .style('color', '#f39c12')
                .style('margin-bottom', '10px')
                .text('16,3 mio kr');
                
            costCounter.append('div')
                .style('font-size', '1rem')
                .style('color', '#ecf0f1')
                .text('Spildt årligt');
            
            // Show stats container
            d3.select('.scroll-parking-viz div:last-child')
                .transition()
                .duration(1000)
                .style('opacity', '1');
        }, 6000);
    },
    
    cleanup() {
        if (this.currentViz) {
            this.currentViz.remove();
            this.currentViz = null;
        }
    }
};

// Function to be called from the chapter callback
function showScrollParkingVisualization() {
    setTimeout(() => {
        scrollParkingVisualization.createVisualization();
    }, 500);
}

// Cleanup function for when leaving the visualization
function cleanupScrollParkingVisualization() {
    scrollParkingVisualization.cleanup();
} 