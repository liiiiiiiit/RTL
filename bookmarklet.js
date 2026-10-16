/**
 * RTL ⇄ LTR Webpage Direction Toggle Bookmarklet
 * Automatically toggles between RTL and LTR with CSS force override and toast notification.
 */
(function() {
  var d = document.documentElement;
  var b = document.body;
  var cur = (d.getAttribute('dir') || window.getComputedStyle(d).direction || 'ltr').toLowerCase();
  var next = cur === 'rtl' ? 'ltr' : 'rtl';

  // Update HTML and Body attributes
  d.setAttribute('dir', next);
  d.style.direction = next;
  if (b) {
    b.setAttribute('dir', next);
    b.style.direction = next;
  }

  // Force universal CSS direction and alignment
  var styleId = '__dir_toggle_style__';
  var style = document.getElementById(styleId);
  if (next === 'rtl') {
    if (!style) {
      style = document.createElement('style');
      style.id = styleId;
      document.head.appendChild(style);
    }
    style.textContent = '* { direction: rtl !important; text-align: right !important; } ' +
                        'input, textarea { direction: rtl !important; text-align: right !important; } ' +
                        'pre, code, pre *, code * { direction: ltr !important; text-align: left !important; }';
  } else {
    if (style) style.remove();
  }

  // Floating notification badge
  var toastId = '__dir_toggle_toast__';
  var oldToast = document.getElementById(toastId);
  if (oldToast) oldToast.remove();

  var toast = document.createElement('div');
  toast.id = toastId;
  toast.textContent = (next === 'rtl' ? 'Direction: RTL (Right-to-Left)' : 'Direction: LTR (Left-to-Right)');
  toast.style.cssText = 'position:fixed;top:20px;right:20px;z-index:2147483647;padding:12px 20px;' +
                        'background:#0f172a;color:#38bdf8;font-family:system-ui,-apple-system,sans-serif;' +
                        'font-size:14px;font-weight:700;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,0.5);' +
                        'border:2px solid #6366f1;transition:opacity 0.4s ease;pointer-events:none;direction:rtl;text-align:right;';
  document.body.appendChild(toast);

  setTimeout(function() {
    toast.style.opacity = '0';
    setTimeout(function() {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 400);
  }, 1600);
})();
