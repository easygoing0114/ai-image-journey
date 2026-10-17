// リサイズ停止後に1回だけ実行するための debounce
// （他のスクリプトとの名前衝突を避けるため、専用の名前にしています）
function tableDebounce(fn, wait) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), wait);
  };
}

let isScheduled = false;

function adjustTableScale() {
  document.querySelectorAll('.table-responsive table').forEach(function (table) {
    const wrap = table.closest('.table-responsive');
    const cells = table.querySelectorAll('th, td');
    if (!wrap || !cells.length) return;

    // 毎回、元の状態に戻してから測定する（キャッシュしない）
    table.style.width = 'auto';
    table.style.height = '';
    cells.forEach(function (cell) {
      cell.style.fontSize = '';
      cell.style.padding = '';
    });

    const available = wrap.clientWidth;
    const natural = table.scrollWidth;

    // 非表示などで幅が取れない場合、またはすでに収まっている場合は何もしない
    if (!available || !natural || natural <= available) return;

    // リセット後の元のスタイルを取得
    const cs = getComputedStyle(cells[0]);
    const fontSize = parseFloat(cs.fontSize);
    const padTop = parseFloat(cs.paddingTop);
    const padLeft = parseFloat(cs.paddingLeft);

    // ボーダー等の誤差を吸収する安全マージン
    const safety = 12;
    const targetWidth = available - safety;
    const scale = targetWidth / natural;

    table.style.width = targetWidth + 'px';
    cells.forEach(function (cell) {
      cell.style.fontSize = (fontSize * scale) + 'px';
      cell.style.padding = (padTop * scale) + 'px ' + (padLeft * scale) + 'px';
    });
  });
}

function scheduleAdjustTableScale() {
  if (isScheduled) return;
  isScheduled = true;
  // 次の描画フレームの直前に実行
  requestAnimationFrame(function () {
    adjustTableScale();
    isScheduled = false;
  });
}

// リサイズ時（停止後100msで1回）
window.addEventListener('resize', tableDebounce(scheduleAdjustTableScale, 100));

// 初回実行：DOM構築後、全リソース読み込み後、フォント読み込み後
document.addEventListener('DOMContentLoaded', scheduleAdjustTableScale);
window.addEventListener('load', scheduleAdjustTableScale);
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(scheduleAdjustTableScale);
}