"use strict";
/**
 * Adds a title attribute to Bluesky embed iframes by extracting the first 50 characters
 * from the first <p> element in the document.
 *
 * @param node The DOM node to scan for Bluesky embeds @default document @optional
 */
function addBlueskyTitles(node) {
    if (node === void 0) { node = document; }
    // Find the first <p> element to extract title text
    var firstParagraph = node.querySelector('p');
    var titleText = firstParagraph && firstParagraph.textContent 
        ? firstParagraph.textContent.slice(0, 50) 
        : 'Bluesky Embed';
    
    // Find all Bluesky embed iframes
    var embeds = node.querySelectorAll('[data-bluesky-id]');
    for (var i = 0; i < embeds.length; i++) {
        var iframe = embeds[i];
        // Set title attribute if not already set
        if (!iframe.title) {
            iframe.title = titleText;
        }
    }
}

// Run when DOM is ready
if (['interactive', 'complete'].indexOf(document.readyState) !== -1) {
    addBlueskyTitles();
} else {
    document.addEventListener('DOMContentLoaded', function () { return addBlueskyTitles(); });
}