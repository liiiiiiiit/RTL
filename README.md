# RTL ⇄ LTR Webpage Direction Toggle Bookmarklet

A lightweight, zero-dependency JavaScript bookmarklet that instantly toggles the text direction of any webpage between **RTL** (Right-to-Left, e.g., Persian, Arabic, Hebrew) and **LTR** (Left-to-Right), with dynamic CSS overrides and on-screen visual feedback.

---

## 🚀 Quick Install (Google Chrome, Firefox, Safari, Edge)

### Method 1: Drag to Bookmarks Bar (Fastest)
1. Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> (Mac: <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd>) to show your bookmarks toolbar.
2. Drag the bookmarklet link directly onto your bookmarks bar.

### Method 2: Manual Bookmark Creation
1. Right-click on your bookmarks bar and select **"Add page..."** (or **"Add Bookmark..."**).
2. Set the **Name** to `Toggle RTL/LTR` (or `تغییر جهت متن`).
3. In the **URL / Location** field, paste the encoded code below:

```javascript
javascript:(function(){var%20d=document.documentElement,b=document.body,cur=(d.getAttribute(%27dir%27)||window.getComputedStyle(d).direction||%27ltr%27).toLowerCase(),next=cur===%27rtl%27?%27ltr%27:%27rtl%27;d.setAttribute(%27dir%27,next);d.style.direction=next;if(b){b.setAttribute(%27dir%27,next);b.style.direction=next;}var%20styleId=%27__dir_toggle_style__%27,style=document.getElementById(styleId);if(next===%27rtl%27){if(!style){style=document.createElement(%27style%27);style.id=styleId;document.head.appendChild(style);}style.textContent=%27*%20{%20direction:%20rtl%20!important;%20text-align:%20right%20!important;%20}%20input,%20textarea%20{%20direction:%20rtl%20!important;%20text-align:%20right%20!important;%20}%20pre,%20code,%20pre%20*,%20code%20*%20{%20direction:%20ltr%20!important;%20text-align:%20left%20!important;%20}%27;}else{if(style)style.remove();}var%20toastId=%27__dir_toggle_toast__%27,oldToast=document.getElementById(toastId);if(oldToast)oldToast.remove();var%20toast=document.createElement(%27div%27);toast.id=toastId;toast.textContent=(next===%27rtl%27?%27Direction:%20RTL%20(Right-to-Left)%27:%27Direction:%20LTR%20(Left-to-Right)%27);toast.style.cssText=%27position:fixed;top:20px;right:20px;z-index:2147483647;padding:12px%2020px;background:#0f172a;color:#38bdf8;font-family:system-ui,-apple-system,sans-serif;font-size:14px;font-weight:700;border-radius:12px;box-shadow:0%2010px%2030px%20rgba(0,0,0,0.5);border:2px%20solid%20#6366f1;transition:opacity%200.4s%20ease;pointer-events:none;direction:rtl;text-align:right;%27;document.body.appendChild(toast);setTimeout(function(){toast.style.opacity=%270%27;setTimeout(function(){if(toast.parentNode)toast.parentNode.removeChild(toast);},400);},1600);})();
```
4. Click **Save**.
5. Click the bookmark on any webpage to immediately toggle text direction!

---

## 📱 Mobile Browsers (Chrome on Android / Safari on iOS)

1. Bookmark any page and name it `rtl`.
2. Edit the bookmark's URL and paste the bookmarklet code above.
3. On any webpage, type `rtl` in your browser address bar and tap the bookmark suggestion!

---

## 🛠 Features

- **Universal Deep Override**: Injects dynamic CSS with `!important` to force direction and right-alignment even on stubborn modern single-page apps.
- **Code Block Protection**: Preserves `<pre>` and `<code>` blocks in LTR so syntax and code remain legible.
- **On-Screen Confirmation**: Displays a brief floating toast badge confirming that the script ran and showing the active direction.
- **%27 URL-Safe**: Uses `%27` for single quotes and `%20` for spaces to prevent browser bookmark manager truncation.
- **Zero Dependencies**: Pure vanilla JavaScript running directly inside the browser DOM.

---

## 📖 Unminified Source Code

```javascript
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
```

---

## 📄 License

MIT License. Free to use, modify, and distribute.
