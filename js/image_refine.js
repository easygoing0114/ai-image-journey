/* ==========================================================================
   image_refine.js
   依存: defer_390.js (先に読み込むこと。グローバルの Defer を使う)

   1. <img> / <iframe> の loading="lazy" を順次解除する
   2. 小さい画像を段階的に高画質へ差し替える (w200 / w400 → w800 → w0)

   公開する関数:
     window.releaseLazyMedia(root)  root 内の loading="lazy" を解除する
                                    (main_test.js のカスタム記事リストが描画後に呼ぶ)
   ========================================================================== */

;(function () {
  'use strict';

  const LAZY_RELEASE_BATCH = 2;       // loading="lazy" を一度に解除する枚数
  const LAZY_RELEASE_INTERVAL = 200;  // 解除バッチの間隔 (ms)


  /* ------------------------------------------------------------------------
     1. loading="lazy" の解除 (img / iframe)
        Blogger の画像サーバーは応答待ちが長いので、少しずつ並列にリクエストを出す。
     ------------------------------------------------------------------------ */

  function releaseLazyMedia(root = document) {
    root.querySelectorAll('img[loading="lazy"], iframe[loading="lazy"]').forEach((element, i) => {
      Defer(
        () => element.removeAttribute('loading'),
        Math.floor(i / LAZY_RELEASE_BATCH) * LAZY_RELEASE_INTERVAL
      );
    });
  }

  window.releaseLazyMedia = releaseLazyMedia;

  Defer(() => releaseLazyMedia(), 100);


  /* ------------------------------------------------------------------------
     2. 画質の段階的な向上
     ------------------------------------------------------------------------ */

  /** src 内の from を to に置き換える (viewport 幅が minViewport 以下なら何もしない) */
  function swapImageSize(from, to, minViewport = 0) {
    if (window.innerWidth <= minViewport) return;
    document.querySelectorAll(`img[src*="${from}"]`).forEach((img) => {
      img.src = img.src.replace(from, to);
    });
  }

  // 小さいカード画像を拡大 (w200, w400 → w800)
  Defer(() => swapImageSize('w200-e90-rw', 'w800-e90-rw'), 5000);
  Defer(() => swapImageSize('w400-e90-rw', 'w800-e90-rw'), 5000);

  // 最高画質 (w0) は PC 幅のみ。ダウンロード用途の長期滞在者向け
  Defer(() => {
    swapImageSize('w800-e90-rw', 'w0-e90-rw', 800);
    swapImageSize('w1200-e90-rw', 'w0-e90-rw', 800);
  }, 10000);
})();