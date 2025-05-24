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