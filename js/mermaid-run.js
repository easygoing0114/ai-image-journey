document.querySelectorAll('.mermaid-chart').forEach(figure => {
  figure.classList.add('box-img', 'box-img640');
});

const isDarkMode = document.documentElement.classList.contains('dark-mode');
const today = new Date().toISOString().split('T')[0];

// ユーティリティ関数（変更なし）
function findLatestDate(code) {
  const dateRegex = /\d{4}-\d{2}-\d{2}/g;
  const dates = code.match(dateRegex);
  if (!dates) return null;
  return dates.reduce((latest, current) => {
    return new Date(current) > new Date(latest) ? current : latest;
  }, dates[0]);
}
function replaceLatestDate(code, latestDate, newDate) {
  const regex = new RegExp(latestDate, 'g');
  return code.replace(regex, newDate);
}

// 初回変換前に.language-mermaidの内容を保存する関数
function preserveMermaidSource() {
  const languageMermaidElements = document.querySelectorAll('.language-mermaid');

  languageMermaidElements.forEach(function (element) {
    if (element.nextElementSibling && element.nextElementSibling.classList.contains('language-mermaid-copy')) {
      return;
    }

    const originalCode = element.textContent.trim();

    // ★修正: copyElementには日付更新前のオリジナルコードを保存★
    const copyElement = document.createElement('code');
    copyElement.className = 'language-mermaid-copy';
    copyElement.style.display = 'none';
    copyElement.textContent = originalCode;

    element.parentNode.insertBefore(copyElement, element.nextSibling);

    // DOM上の要素は、初回描画のためにGanttの日付を更新
    if (originalCode.includes('gantt')) {
      const latestDate = findLatestDate(originalCode);
      if (latestDate) {
        element.textContent = replaceLatestDate(originalCode, latestDate, today);
      }
    }
  });
}

preserveMermaidSource();

window.updateMermaidTheme = function (theme) {
  if (typeof mermaid === 'undefined') return;

  const mermaidElements = document.querySelectorAll('.language-mermaid');
  if (mermaidElements.length === 0) return;

  try {
    // 既存のSVG要素をすべて削除
    document.querySelectorAll('.language-mermaid svg').forEach(svg => {
      svg.remove();
    });

    // テーマに応じた設定と初期化
    const mermaidConfig = {
      startOnLoad: false,
      theme: theme === 'dark' ? 'dark' : 'default'
    };
    if (typeof mermaid.initialize === 'function') {
      mermaid.initialize(mermaidConfig);
    }

    // 描画処理を requestAnimationFrame でスケジュール
    requestAnimationFrame(() => {

      const processChart = function (index) {
        if (index >= mermaidElements.length) return;

        const element = mermaidElements[index];

        // ★修正: 常にオリジナルコードが保存された copyElement からソースを取得
        let copyElement = element.nextElementSibling;
        if (!copyElement || !copyElement.classList.contains('language-mermaid-copy')) {
          copyElement = element.previousElementSibling;
        }
        if (!copyElement || !copyElement.classList.contains('language-mermaid-copy')) {
          processChart(index + 1); // ソースが見つからなければスキップ
          return;
        }

        let updatedCode = copyElement.textContent.trim(); // オリジナルコードからスタート

        // 親要素のサイズ保存 (元のロジックを維持)
        const parentFigure = element.closest('.mermaid-chart');
        if (parentFigure) {
          const computedStyle = window.getComputedStyle(parentFigure);
          parentFigure.style.width = computedStyle.width;
          parentFigure.style.height = computedStyle.height;
        }

        // ★Ganttチャートの場合のみ、オリジナルのソースに対して日付更新を適用
        if (updatedCode.includes('gantt')) {
          const latestDate = findLatestDate(updatedCode);
          if (latestDate) {
            updatedCode = replaceLatestDate(updatedCode, latestDate, today);
          }
        }

        // 要素をクリアし、更新されたコードを設定
        element.innerHTML = '';
        element.textContent = updatedCode;
        element.removeAttribute('data-processed');

        const uniqueId = 'mermaid-' + Date.now() + '-' + index;
        element.id = uniqueId;

        const onRenderComplete = function () {
          // 親要素のサイズを元に戻す
          if (parentFigure) {
            parentFigure.style.removeProperty('width');
            parentFigure.style.removeProperty('height');
          }
          processChart(index + 1);
        };

        // Mermaidの描画実行 (非同期)
        if (typeof mermaid.run === 'function') {
          mermaid.run({ nodes: [element] }).then(onRenderComplete).catch(onRenderComplete);
        } else if (typeof mermaid.render === 'function') {
          mermaid.render(uniqueId + '-svg', updatedCode).then(function (result) {
            element.innerHTML = result.svg;
            onRenderComplete();
          }).catch(onRenderComplete);
        } else {
          onRenderComplete();
        }
      };

      // 最初のチャートから処理開始
      processChart(0);
    }); // requestAnimationFrame 終了

  } catch (error) {
    console.error('Mermaid theme update error:', error);
    // エラー時の処理は維持
    if (confirm('チャートのテーマ更新でエラーが発生しました。ページを再読み込みしますか？')) {
      window.location.reload();
    }
  }
};

Defer(function () {
  if (typeof mermaid === 'undefined') return;

  // 初回描画時の設定
  mermaid.initialize({
    startOnLoad: false,
    theme: isDarkMode ? 'dark' : 'default',
  });

  // 日付更新済みのDOMコードを使って描画を実行
  mermaid.run();

}, 1500);