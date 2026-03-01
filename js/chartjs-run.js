let chartsInitialized = false;
let rafId = null;
let resizeScheduled = false;

document.querySelectorAll('.chartjs-container').forEach(figure => {
figure.classList.add('box-img');
});

function getCurrentThemeColor() {
return getComputedStyle(document.documentElement).getPropertyValue('--bs-body-color').trim();
}

function calculateDynamicPadding(specificContainer = null) {
const container = specificContainer || document.querySelector('.chartjs-container');

if (!container) {
    return 24;
}

const containerWidth = container.offsetWidth;
const containerHeight = container.offsetHeight;
const aspectRatio = containerWidth / containerHeight;

let coefficient;
if (aspectRatio >= 1) {
    coefficient = 0.05;
} else {
    coefficient = 0.1;
}

const calculatedPadding = Math.round(containerWidth * coefficient);
return calculatedPadding;
}

function findContainerForChart(canvas) {
let parent = canvas.parentElement;
while (parent && parent !== document.body) {
    if (parent.classList.contains('chartjs-container')) {
    return parent;
    }
    parent = parent.parentElement;
}
return null;
}

function wrapChartjsCanvas() {
const canvases = document.querySelectorAll('canvas.chartjs');

canvases.forEach(canvas => {
    if (canvas.parentElement && canvas.parentElement.classList.contains('chartjs-wrapper')) {
    return;
    }

    const wrapper = document.createElement('div');
    wrapper.classList.add('chartjs-wrapper');

    canvas.parentNode.insertBefore(wrapper, canvas);
    wrapper.appendChild(canvas);
});
}

function updateChartPadding() {
Object.values(Chart.instances).forEach(chart => {
    const container = findContainerForChart(chart.canvas);
    if (!container) return;

    const newPadding = calculateDynamicPadding(container);

    if (!chart.options.layout) {
    chart.options.layout = {};
    }
    chart.options.layout.padding = newPadding;
    chart.update('none');
});
}

function updateAllChartColors() {
const currentColor = getCurrentThemeColor();
Chart.defaults.color = currentColor;

Object.values(Chart.instances).forEach(chart => {
    if (chart.options.scales) {
    Object.keys(chart.options.scales).forEach(scaleKey => {
        const scale = chart.options.scales[scaleKey];
        if (scale.ticks) scale.ticks.color = currentColor;
        if (scale.title) scale.title.color = currentColor;
    });
    }

    const plugins = chart.options.plugins;
    if (plugins) {
    if (plugins.legend?.labels) plugins.legend.labels.color = currentColor;
    if (plugins.title) plugins.title.color = currentColor;
    if (plugins.datalabels) plugins.datalabels.color = currentColor;
    }

    chart.update('none');
});
}

function createAllCharts() {
const canvases = document.querySelectorAll('.chartjs');

canvases.forEach((canvas, index) => {
    const funcName = `createChart${index + 1}`;
    if (typeof window[funcName] === 'function') {
    window[funcName]();
    }
});
}

function applyIndividualPadding() {
Object.values(Chart.instances).forEach(chart => {
    const container = findContainerForChart(chart.canvas);
    if (!container) return;

    const padding = calculateDynamicPadding(container);

    if (!chart.options.layout) {
    chart.options.layout = {};
    }
    chart.options.layout.padding = padding;
    chart.update('none');
});
}

function initializeCharts() {
wrapChartjsCanvas();

if (!chartsInitialized) {
    Chart.register(ChartDataLabels);
    Chart.defaults.layout.padding = 24;
    chartsInitialized = true;
}

createAllCharts();
applyIndividualPadding();
updateAllChartColors();

// requestAnimationFrameでCanvas要素のサイズ設定を最適化
requestAnimationFrame(() => {
    document.querySelectorAll('.chartjs').forEach(canvas => {
    canvas.style.width = 'auto';
    canvas.style.height = 'auto';
    });
});
}

// リサイズ処理をrequestAnimationFrameで最適化
function handleResize() {
if (resizeScheduled) return;

resizeScheduled = true;

if (rafId !== null) {
    cancelAnimationFrame(rafId);
}

rafId = requestAnimationFrame(() => {
    updateChartPadding();
    updateAllChartColors();

    Object.values(Chart.instances).forEach(chart => chart.resize());

    document.querySelectorAll('.chartjs').forEach(canvas => {
    canvas.style.width = 'auto';
    canvas.style.height = 'auto';
    });

    resizeScheduled = false;
    rafId = null;
});
}

Defer(function () {
const debouncedResize = debounce(handleResize, 100);
window.addEventListener('resize', debouncedResize);
initializeCharts();
}, 1500);