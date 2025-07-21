"use strict";
var EMBED_URL = 'https://embed.bsky.app';
window.bluesky = window.bluesky || {
    scan: scan,
};

/**
 * ダークモードの状態を判定する関数（修正版）
 * テンプレートのisDarkMode()関数と統一
 */
function isDarkMode() {
    // localStorageの値を最優先で参照
    var savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme === 'dark';
    }
    
    // localStorageに値がない場合はHTMLクラスを参照
    // システム設定よりもHTMLクラスを優先（テンプレートと統一）
    return document.documentElement.classList.contains('dark-mode');
}

/**
 * Listen for messages from the Bluesky embed iframe and adjust the height of
 * the iframe accordingly.
 */
window.addEventListener('message', function (event) {
    if (event.origin !== EMBED_URL) {
        return;
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    var id = event.data.id;
    if (!id) {
        return;
    }
    var embed = document.querySelector("[data-bluesky-id=\"".concat(id, "\"]"));
    if (!embed) {
        return;
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    var height = event.data.height;
    if (height) {
        embed.style.height = "".concat(height, "px");
    }
});

/**
 * Scan the document for all elements with the data-bluesky-aturi attribute,
 * and initialize them as Bluesky embeds.
 *
 * @param element Only scan this specific element @default document @optional
 * @returns
 */
function scan(node) {
    if (node === void 0) { node = document; }
    var embeds = node.querySelectorAll('[data-bluesky-uri]');
    for (var i = 0; i < embeds.length; i++) {
        var id = String(Math.random()).slice(2);
        var embed = embeds[i];
        var aturi = embed.getAttribute('data-bluesky-uri');
        if (!aturi) {
            continue;
        }
        var ref_url = location.origin + location.pathname;
        var searchParams = new URLSearchParams();
        searchParams.set('id', id);
        if (ref_url.startsWith('http')) {
            searchParams.set('ref_url', encodeURIComponent(ref_url));
        }

        // ダークモード対応：手動設定がない場合は自動判定
        var colorMode = embed.dataset.blueskyEmbedColorMode;
        if (!colorMode) {
            colorMode = isDarkMode() ? 'dark' : 'light';
        }
        searchParams.set('colorMode', colorMode);

        var iframe = document.createElement('iframe');
        iframe.setAttribute('data-bluesky-id', id);
        iframe.src = "".concat(EMBED_URL, "/embed/").concat(aturi.slice('at://'.length), "?").concat(searchParams.toString());
        iframe.width = '100%';
        iframe.style.border = 'none';
        iframe.style.display = 'block';
        iframe.style.flexGrow = '1';
        iframe.frameBorder = '0';
        iframe.scrolling = 'no';
        var container = document.createElement('div');
        container.style.maxWidth = '600px';
        container.style.width = '100%';
        container.style.marginTop = '10px';
        container.style.marginBottom = '10px';
        container.style.display = 'flex';
        container.className = 'bluesky-embed';
        container.appendChild(iframe);
        embed.replaceWith(container);
    }
}

/**
 * 既存のBluesky埋め込みのテーマを更新する関数
 */
function updateBlueskyEmbedThemes() {
    var containers = document.querySelectorAll('.bluesky-embed');
    containers.forEach(function(container) {
        var iframe = container.querySelector('iframe[data-bluesky-id]');
        if (iframe) {
            var currentSrc = iframe.src;
            var url = new URL(currentSrc);
            var newColorMode = isDarkMode() ? 'dark' : 'light';
            url.searchParams.set('colorMode', newColorMode);
            iframe.src = url.toString();
        }
    });
}

// グローバルに関数を公開
window.bluesky.updateThemes = updateBlueskyEmbedThemes;

// 修正：テーマ設定の確認後にスキャンを実行
function initializeBlueskyEmbeds() {
    // DOM読み込み完了後に即座にスキャン実行
    // テーマの初期化はHTMLクラスで既に完了しているはず
    scan();
}

// DOMContentLoaded時またはすでに読み込み完了時に実行
if (['interactive', 'complete'].indexOf(document.readyState) !== -1) {
    initializeBlueskyEmbeds();
}
else {
    document.addEventListener('DOMContentLoaded', function () {
        initializeBlueskyEmbeds();
    });
}