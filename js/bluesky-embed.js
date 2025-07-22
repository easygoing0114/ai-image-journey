"use strict";
var EMBED_URL = 'https://embed.bsky.app';
window.bluesky = window.bluesky || {
    scan: scan,
    updateThemes: updateThemes,
    redrawEmbeds: redrawEmbeds,
};

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
 * Get the current theme mode based on the theme management system
 * @returns {string} 'light' or 'dark'
 */
function getCurrentTheme() {
    // Check if the theme management functions exist
    if (window.isDarkMode) {
        return window.isDarkMode() ? 'dark' : 'light';
    }
    
    // Fallback: check for dark-mode class on html element
    var htmlElement = document.querySelector("html");
    if (htmlElement && htmlElement.classList.contains('dark-mode')) {
        return 'dark';
    }
    
    // Fallback: check localStorage
    var savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
        return savedTheme;
    }
    
    // Default to light
    return 'light';
}

/**
 * Redraw all existing Bluesky embeds with the current theme
 * This completely recreates the embeds to ensure theme changes are applied
 */
function redrawEmbeds() {
    var existingEmbeds = document.querySelectorAll('.bluesky-embed');
    var currentTheme = getCurrentTheme();
    
    // Store the original URIs and settings before removing embeds
    var embedsToRedraw = [];
    
    for (var i = 0; i < existingEmbeds.length; i++) {
        var embed = existingEmbeds[i];
        var iframe = embed.querySelector('iframe[data-bluesky-id]');
        
        if (iframe) {
            // Extract the AT URI from the iframe src
            var src = iframe.src;
            var match = src.match(/\/embed\/(.+?)\?/);
            
            if (match) {
                var aturi = 'at://' + match[1];
                var customColorMode = embed.getAttribute('data-bluesky-embed-color-mode');
                
                // Create a placeholder element to replace the embed
                var placeholder = document.createElement('div');
                placeholder.setAttribute('data-bluesky-uri', aturi);
                
                // Preserve custom color mode if it was explicitly set
                if (customColorMode && customColorMode !== currentTheme) {
                    placeholder.setAttribute('data-bluesky-embed-color-mode', customColorMode);
                }
                
                embedsToRedraw.push({
                    element: placeholder,
                    parent: embed.parentNode
                });
            }
        }
    }
    
    // Remove existing embeds and insert placeholders
    for (var j = 0; j < embedsToRedraw.length; j++) {
        var item = embedsToRedraw[j];
        var existingEmbed = item.parent.querySelector('.bluesky-embed');
        
        if (existingEmbed) {
            item.parent.insertBefore(item.element, existingEmbed);
            item.parent.removeChild(existingEmbed);
        }
    }
    
    // Rescan the document to recreate embeds with new theme
    scan();
}

/**
 * Update the color mode attribute for all existing Bluesky embeds
 */
function updateThemes() {
    var currentTheme = getCurrentTheme();
    var embeds = document.querySelectorAll('.bluesky-embed');
    
    for (var i = 0; i < embeds.length; i++) {
        var embed = embeds[i];
        embed.setAttribute('bluesky-embed-color-mode', currentTheme);
        
        // Also update the iframe src to reflect the new theme
        var iframe = embed.querySelector('iframe[data-bluesky-id]');
        if (iframe) {
            var src = iframe.src;
            var url = new URL(src);
            url.searchParams.set('colorMode', currentTheme);
            iframe.src = url.toString();
        }
    }
}

/**
 * Scan the document for all elements with the data-bluesky-uri attribute,
 * and initialize them as Bluesky embeds.
 *
 * @param element Only scan this specific element @default document @optional
 * @returns
 */
function scan(node) {
    if (node === void 0) { node = document; }
    var embeds = node.querySelectorAll('[data-bluesky-uri]');
    var currentTheme = getCurrentTheme();
    
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
        
        // Set color mode based on current theme or embed-specific setting
        var colorMode = embed.dataset.blueskyEmbedColorMode || currentTheme;
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
        
        // Set the color mode attribute on the container
        container.setAttribute('bluesky-embed-color-mode', colorMode);
        
        container.appendChild(iframe);
        embed.replaceWith(container);
    }
}

if (['interactive', 'complete'].indexOf(document.readyState) !== -1) {
    scan();
}
else {
    document.addEventListener('DOMContentLoaded', function () { return scan(); });
}