function drawArrow(ctx, x, y, size, direction = 'up', fillColor = 'rgba(54, 162, 235, 0.2)', strokeColor = 'rgb(54, 162, 235)', lineWidth = 2) {
    ctx.save();
    ctx.fillStyle = fillColor;
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = lineWidth;
    
    ctx.beginPath();
    
    if (direction === 'up') {
        ctx.moveTo(x, y - size);
        ctx.lineTo(x - size/2, y + size/2);
        ctx.lineTo(x - size/4, y + size/2);
        ctx.lineTo(x - size/4, y + size);
        ctx.lineTo(x + size/4, y + size);
        ctx.lineTo(x + size/4, y + size/2);
        ctx.lineTo(x + size/2, y + size/2);
        ctx.closePath();
    } else if (direction === 'down') {
        ctx.moveTo(x, y + size);
        ctx.lineTo(x - size/2, y - size/2);
        ctx.lineTo(x - size/4, y - size/2);
        ctx.lineTo(x - size/4, y - size);
        ctx.lineTo(x + size/4, y - size);
        ctx.lineTo(x + size/4, y - size/2);
        ctx.lineTo(x + size/2, y - size/2);
        ctx.closePath();
    } else if (direction === 'right') {
        ctx.moveTo(x + size, y);
        ctx.lineTo(x - size/2, y - size/2);
        ctx.lineTo(x - size/2, y - size/4);
        ctx.lineTo(x - size, y - size/4);
        ctx.lineTo(x - size, y + size/4);
        ctx.lineTo(x - size/2, y + size/4);
        ctx.lineTo(x - size/2, y + size/2);
        ctx.closePath();
    } else if (direction === 'left') {
        ctx.moveTo(x - size, y);
        ctx.lineTo(x + size/2, y - size/2);
        ctx.lineTo(x + size/2, y - size/4);
        ctx.lineTo(x + size, y - size/4);
        ctx.lineTo(x + size, y + size/4);
        ctx.lineTo(x + size/2, y + size/4);
        ctx.lineTo(x + size/2, y + size/2);
        ctx.closePath();
    }
    
    ctx.fill();
    ctx.stroke();
    ctx.restore();
}

const arrowPlugin = {
    id: 'arrowPlugin',
    afterDatasetsDraw(chart) {
        const ctx = chart.ctx;
        const datasets = chart.data.datasets;
        
        datasets.forEach((dataset, datasetIndex) => {
            if (dataset.arrowDirection) {
                const meta = chart.getDatasetMeta(datasetIndex);
                meta.data.forEach((point, index) => {
                    const x = point.x;
                    const y = point.y;
                    const direction = Array.isArray(dataset.arrowDirection) 
                        ? dataset.arrowDirection[index] || 'up'
                        : dataset.arrowDirection;
                    const size = dataset.arrowSize || 12;
                    const fillColor = Array.isArray(dataset.arrowFillColor)
                        ? dataset.arrowFillColor[index] || 'rgba(54, 162, 235, 0.2)'
                        : dataset.arrowFillColor || 'rgba(54, 162, 235, 0.2)';
                    const strokeColor = Array.isArray(dataset.arrowStrokeColor)
                        ? dataset.arrowStrokeColor[index] || 'rgb(54, 162, 235)'
                        : dataset.arrowStrokeColor || 'rgb(54, 162, 235)';
                    const lineWidth = dataset.arrowLineWidth || 2;
                    
                    drawArrow(ctx, x, y, size, direction, fillColor, strokeColor, lineWidth);
                });
            }
        });
    }
};

Chart.register(arrowPlugin);

