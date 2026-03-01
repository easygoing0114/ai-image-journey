function createAutoResizeTextarea() {
const textareas = document.querySelectorAll('textarea');

textareas.forEach(textarea => {
    let isScheduled = false; // rAFが既にスケジュールされているかを管理

    function adjustHeight() {
    textarea.style.height = 'auto';
    textarea.style.height = Math.max(textarea.scrollHeight, 24) + 'px';

    isScheduled = false;
    }

    function scheduleAdjustHeight() {
    if (!isScheduled) {
        isScheduled = true;
        // 次の描画フレーム直前で adjustHeight を実行
        requestAnimationFrame(adjustHeight);
    }
    }

    // 初期ロード時に高さを設定
    scheduleAdjustHeight();

    // イベント発生時に rAF に処理を委ねる
    // rAF が既にスケジュールされていれば、不要な再スケジュールを防ぐ
    ['input', 'paste', 'cut', 'keydown', 'keyup'].forEach(event => {
    textarea.addEventListener(event, scheduleAdjustHeight);
    });

});
}

// DOMがロードされた後に実行
if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', createAutoResizeTextarea);
} else {
createAutoResizeTextarea();
}