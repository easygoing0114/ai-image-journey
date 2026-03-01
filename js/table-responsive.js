let isScheduled = false;

function adjustTableScale() {
var tables = document.querySelectorAll('.table-responsive table');
tables.forEach(function (table) {
    var tableResponsive = table.parentElement;
    var tableResponsiveWidth = tableResponsive.clientWidth;

    // 元のサイズが保存されていない場合は保存
    if (!table.dataset.originalWidth) {
    // 完全にリセットした状態でサイズを測定
    table.style.cssText = '';
    table.querySelectorAll('th, td').forEach(function (cell) {
        cell.style.fontSize = '';
        cell.style.padding = '';
    });

    // 元のサイズを保存
    table.dataset.originalWidth = table.scrollWidth;
    table.dataset.originalHeight = table.scrollHeight;

    // 元のスタイルも保存
    var firstCell = table.querySelector('th, td');
    if (firstCell) {
        var computedStyle = getComputedStyle(firstCell);
        if (!table.dataset.originalFontSize) {
        table.dataset.originalFontSize = computedStyle.fontSize;
        table.dataset.originalPaddingTop = computedStyle.paddingTop;
        table.dataset.originalPaddingLeft = computedStyle.paddingLeft;
        }
    }
    }

    // 保存された元のサイズを使用
    var originalTableWidth = parseInt(table.dataset.originalWidth);
    var originalTableHeight = parseInt(table.dataset.originalHeight);
    var originalFontSize = parseFloat(table.dataset.originalFontSize);
    var originalPaddingTop = parseFloat(table.dataset.originalPaddingTop);
    var originalPaddingLeft = parseFloat(table.dataset.originalPaddingLeft);

    // リセット処理
    table.style.height = 'auto';
    table.style.width = 'auto';
    table.querySelectorAll('th, td').forEach(function (cell) {
    cell.style.fontSize = originalFontSize + 'px';
    cell.style.padding = originalPaddingTop + 'px ' + originalPaddingLeft + 'px';
    });

    // スケール調整の判定と適用
    if (originalTableWidth > tableResponsiveWidth) {
    // テーブルの実際のボーダー幅を取得
    var tableComputedStyle = getComputedStyle(table);
    var borderLeftWidth = parseFloat(tableComputedStyle.borderLeftWidth) || 0;
    var borderRightWidth = parseFloat(tableComputedStyle.borderRightWidth) || 0;
    var totalBorderWidth = borderLeftWidth + borderRightWidth;

    // セルのボーダーも考慮（テーブルによってはcollapse border）
    var firstCell = table.querySelector('th, td');
    var totalBorderHeight = 0;
    if (firstCell && tableComputedStyle.borderCollapse !== 'collapse') {
        var cellStyle = getComputedStyle(firstCell);
        var cellBorderLeft = parseFloat(cellStyle.borderLeftWidth) || 0;
        var cellBorderRight = parseFloat(cellStyle.borderRightWidth) || 0;
        var cellBorderTop = parseFloat(cellStyle.borderTopWidth) || 0;
        var cellBorderBottom = parseFloat(cellStyle.borderBottomWidth) || 0;
        totalBorderWidth += Math.max(cellBorderLeft + cellBorderRight, 2);
        totalBorderHeight = cellBorderTop + cellBorderBottom;
    }

    // テーブル自体の上下ボーダー
    var borderTopWidth = parseFloat(tableComputedStyle.borderTopWidth) || 0;
    var borderBottomWidth = parseFloat(tableComputedStyle.borderBottomWidth) || 0;
    totalBorderHeight += borderTopWidth + borderBottomWidth;

    // 安全なマージンを追加
    var safetyMargin = 12;
    var availableWidth = tableResponsiveWidth - totalBorderWidth - safetyMargin;
    var scale = availableWidth / originalTableWidth;

    // DOM書き込み（スタイル適用）
    table.style.width = availableWidth + 'px';
    table.style.height = (originalTableHeight * scale) + totalBorderHeight + safetyMargin + 'px';
    table.querySelectorAll('th, td').forEach(function (cell) {
        cell.style.fontSize = (originalFontSize * scale) + 'px';
        cell.style.padding = (originalPaddingTop * scale) + 'px ' + (originalPaddingLeft * scale) + 'px';
    });
    }
});
}

function scheduleAdjustTableScale() {
if (!isScheduled) {
    isScheduled = true;
    // 次の描画フレームの直前に adjustTableScale を実行
    requestAnimationFrame(() => {
    adjustTableScale();
    isScheduled = false; // 処理完了後にフラグをリセット
    });
}
}

const debouncedSchedule = debounce(scheduleAdjustTableScale, 100);

window.addEventListener('resize', debouncedSchedule);

scheduleAdjustTableScale();
