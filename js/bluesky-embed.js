"use strict";
var EMBED_URL = 'https://embed.bsky.app';
window.bluesky = window.bluesky || {
  scan: scan,
  updateThemes: updateBlueskyEmbedThemes,
};

window.addEventListener('message', function (event) {
  if (event.origin !== EMBED_URL) {
    return;
  }
  var id = event.data.id;
  if (!id) {
    return;
  }
  var embed = document.querySelector("[data-bluesky-id=\"".concat(id, "\"]"));
  if (!embed) {
    return;
  }
  var height = event.data.height;
  if (height) {
    embed.style.height = "".concat(height, "px");
  }
});

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

    var colorMode = embed.dataset.blueskyEmbedColorMode;
    if (!colorMode && typeof window.isDarkMode === 'function') {
      colorMode = window.isDarkMode() ? 'dark' : 'light';
    } else {
      colorMode = colorMode || 'light'; // フォールバック
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

function updateBlueskyEmbedThemes() {
  var containers = document.querySelectorAll('.bluesky-embed');
  containers.forEach(function(container) {
    var iframe = container.querySelector('iframe[data-bluesky-id]');
    if (iframe) {
      var currentSrc = iframe.src;
      var url = new URL(currentSrc);
      var newColorMode = typeof window.isDarkMode === 'function' && window.isDarkMode() ? 'dark' : 'light';
      url.searchParams.set('colorMode', newColorMode);
      iframe.src = url.toString();
    }
  });
}

if (['interactive', 'complete'].indexOf(document.readyState) !== -1) {
  setTimeout(function() {
    scan();
  }, 0);
} else {
  document.addEventListener('DOMContentLoaded', function () {
    scan();
  });
}