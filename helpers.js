/**
 * Ask Design System — JS helpers
 * Shared utilities for Ask products.
 */

/** XSS-safe text rendering */
function escapeHtml(text) {
    const d = document.createElement("div");
    d.textContent = text;
    return d.innerHTML;
}

/** Simple markdown: **bold** and `code` */
function formatContent(text) {
    let html = escapeHtml(text);
    html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    html = html.replace(/`(.*?)`/g, "<code>$1</code>");
    return html;
}

/** Copy text to clipboard with "copied" button feedback */
function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        const btn = event.currentTarget;
        const orig = btn.textContent;
        btn.textContent = "copied";
        setTimeout(() => btn.textContent = orig, 1200);
    });
}
