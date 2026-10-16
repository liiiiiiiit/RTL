/**
 * Core logic for RTL/LTR toggle bookmarklet generation and testing.
 */

export interface BookmarkletOptions {
  showToast?: boolean;
  overrideStyle?: boolean;
  targetSelection?: boolean;
}

/**
 * Given the current direction string (or null/undefined), computes the toggled direction.
 */
export function getNextDirection(currentDir: string | null | undefined): 'rtl' | 'ltr' {
  if (!currentDir) return 'rtl';
  const normalized = currentDir.trim().toLowerCase();
  return normalized === 'rtl' ? 'ltr' : 'rtl';
}

/**
 * Generates the clean unminified JavaScript source code for the toggle bookmarklet.
 */
export function getRawBookmarkletScript(options: BookmarkletOptions = {}): string {
  const { showToast = true, overrideStyle = true, targetSelection = false } = options;

  if (targetSelection) {
    return `(function() {
  var sel = window.getSelection();
  var target = null;
  if (document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA')) {
    target = document.activeElement;
  } else if (sel && sel.rangeCount > 0) {
    var node = sel.anchorNode;
    target = node && node.nodeType === 1 ? node : (node ? node.parentElement : null);
  }
  if (!target) target = document.documentElement;
  var cur = (target.getAttribute('dir') || window.getComputedStyle(target).direction || 'ltr').toLowerCase();
  var next = cur === 'rtl' ? 'ltr' : 'rtl';
  target.setAttribute('dir', next);
  target.style.direction = next;
  if (target.style) {
    target.style.textAlign = next === 'rtl' ? 'right' : 'left';
  }
})();`;
  }

  const toastSnippet = showToast
    ? `
  var toastId = '__dir_toggle_toast__';
  var oldToast = document.getElementById(toastId);
  if (oldToast) oldToast.remove();
  var toast = document.createElement('div');
  toast.id = toastId;
  toast.textContent = (next === 'rtl' ? 'Direction: RTL (Right-to-Left)' : 'Direction: LTR (Left-to-Right)');
  toast.style.cssText = 'position:fixed;top:20px;right:20px;z-index:2147483647;padding:12px 20px;background:#0f172a;color:#38bdf8;font-family:system-ui,-apple-system,sans-serif;font-size:14px;font-weight:700;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,0.5);border:2px solid #6366f1;transition:opacity 0.4s ease;pointer-events:none;direction:rtl;text-align:right;';
  document.body.appendChild(toast);
  setTimeout(function() {
    toast.style.opacity = '0';
    setTimeout(function() { if (toast.parentNode) toast.parentNode.removeChild(toast); }, 400);
  }, 1600);`
    : '';

  const styleOverrideSnippet = overrideStyle
    ? `
  var styleId = '__dir_toggle_style__';
  var style = document.getElementById(styleId);
  if (next === 'rtl') {
    if (!style) {
      style = document.createElement('style');
      style.id = styleId;
      document.head.appendChild(style);
    }
    style.textContent = '* { direction: rtl !important; text-align: right !important; } input, textarea { direction: rtl !important; text-align: right !important; } pre, code, pre *, code * { direction: ltr !important; text-align: left !important; }';
  } else {
    if (style) style.remove();
  }`
    : '';

  return `(function() {
  var d = document.documentElement;
  var b = document.body;
  var cur = (d.getAttribute('dir') || window.getComputedStyle(d).direction || 'ltr').toLowerCase();
  var next = cur === 'rtl' ? 'ltr' : 'rtl';
  d.setAttribute('dir', next);
  d.style.direction = next;
  if (b) {
    b.setAttribute('dir', next);
    b.style.direction = next;
  }${styleOverrideSnippet}${toastSnippet}
})();`;
}

/**
 * Encodes JavaScript source into a safe, valid bookmarklet URL.
 * Encodes single quotes as %27, double quotes as %22, and spaces as %20.
 */
export function encodeBookmarklet(rawJs: string): string {
  const cleaned = rawJs
    .replace(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm, '$1')
    .replace(/\n\s*/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const encoded = cleaned
    .replace(/ /g, '%20')
    .replace(/'/g, '%27')
    .replace(/"/g, '%22');

  return 'javascript:' + encoded;
}

/**
 * Ultra robust bookmarklet (Forces direction + text-align + visual feedback badge)
 */
export const FORCE_BOOKMARKLET_RAW = getRawBookmarkletScript({ showToast: true, overrideStyle: true });
export const FORCE_BOOKMARKLET_URL = encodeBookmarklet(FORCE_BOOKMARKLET_RAW);

/**
 * Minimal fallback bookmarklet
 */
export const MINIMAL_BOOKMARKLET_RAW = `(function() {
  var d = document.documentElement;
  var b = document.body;
  var cur = (d.getAttribute('dir') || window.getComputedStyle(d).direction || 'ltr').toLowerCase();
  var next = cur === 'rtl' ? 'ltr' : 'rtl';
  d.setAttribute('dir', next);
  d.style.direction = next;
  if (b) {
    b.setAttribute('dir', next);
    b.style.direction = next;
  }
})();`;

export const MINIMAL_BOOKMARKLET_URL = encodeBookmarklet(MINIMAL_BOOKMARKLET_RAW);
