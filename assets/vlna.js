
/**
 * Add non-braking spaces after single letter czech prefixes.
 *
 * Replacing affects all text node descendants of element(s) identified by given
 * selector.
 */
function vlna(selector) {

    /**
     * Search and replace in text nodes.
     */
    function replaceText(selector, search, replace) {
        // load text nodes
        var nodes = document.querySelectorAll(selector + ' *:not(script):not(noscript):not(style)')
        var textNodes = [];
        nodes.forEach(node => {
            node.childNodes.forEach(child => {
                if (child.nodeType == 3) textNodes.push(child)
            })
        })

        // replace
        textNodes.forEach(node => {
            node.textContent = node.textContent.replace(search, replace)
        })
    }

    replaceText(selector, / ([KkSsVvZzOoUuAaIi]) /g, ' $1\u00a0')

}
