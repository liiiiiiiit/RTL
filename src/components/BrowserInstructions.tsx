import React, { useState } from 'react';
import {
  Bookmark,
  CheckCircle2,
  MousePointerClick,
  Sparkles,
  Laptop,
  Smartphone,
  ExternalLink,
  HelpCircle,
  Keyboard,
  Globe,
  AlertCircle,
} from 'lucide-react';

export const BrowserInstructions: React.FC = () => {
  const [lang, setLang] = useState<'fa' | 'en'>('fa');
  const [selectedBrowser, setSelectedBrowser] = useState<'chrome' | 'firefox' | 'safari' | 'edge' | 'mobile'>('chrome');

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-xl">
      {/* Header and Language Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
              {lang === 'fa' ? 'راهنمای نصب و راه‌اندازی' : 'Setup & Installation Guide'}
            </span>
          </div>
          <h3 className="text-xl font-bold text-white">
            {lang === 'fa'
              ? 'آموزش استفاده و نصب در Google Chrome و سایر مرورگرها'
              : 'How to Install & Use Your Bookmarklet'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            {lang === 'fa'
              ? 'کمتر از ۳۰ ثانیه زمان می‌برد و روی تمامی نسخه‌های دسکتاپ و موبایل کار می‌کند.'
              : 'Takes less than 30 seconds. Works across all modern desktop and mobile browsers.'}
          </p>
        </div>

        {/* Language Switcher Buttons */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
            <button
              onClick={() => setLang('fa')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
                lang === 'fa'
                  ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>فارسی</span>
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                lang === 'en'
                  ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>English</span>
            </button>
          </div>
        </div>
      </div>

      {lang === 'fa' ? (
        /* Persian Instructions Section */
        <div dir="rtl" className="mt-6 space-y-6 text-slate-300">
          {/* 3 Step Visual Flow in Persian */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-950/70 rounded-xl p-5 border border-slate-800/80 relative">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-sm mb-3 border border-indigo-500/30">
                ۱
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5">نوار بوک‌مارک کروم را باز کنید</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                در گوگل کروم، کلیدهای <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 font-mono text-[11px]">Ctrl+Shift+B</kbd> (در مک: <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 font-mono text-[11px]">Cmd+Shift+B</kbd>) را بزنید تا نوار بوک‌مارک‌ها در بالای صفحه نمایان شود.
              </p>
            </div>

            <div className="bg-slate-950/70 rounded-xl p-5 border border-slate-800/80 relative">
              <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-sm mb-3 border border-sky-500/30">
                ۲
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5">ایجاد بوک‌مارک و قرار دادن کد</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                روی نوار بوک‌مارک راست‌کلیک کرده و <strong>«Add page...»</strong> را بزنید. نام را <strong className="text-slate-200">تغییر جهت متن</strong> بگذارید و در بخش <strong>URL</strong>، کد جاوااسکریپت کپی شده را قرار دهید و Save کنید.
              </p>
            </div>

            <div className="bg-slate-950/70 rounded-xl p-5 border border-slate-800/80 relative">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm mb-3 border border-emerald-500/30">
                ۳
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5">کلیک در هر صفحه‌ای برای تغییر جهت</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                وارد هر سایتی (مانند ویکی‌پدیا، مقالات، توییتر، گیت‌هاب و ...) شوید و روی این بوک‌مارک کلیک کنید؛ بلافاصله کل متن و المان‌ها بین راست‌به‌چپ (RTL) و چپ‌به‌راست (LTR) تغییر می‌کنند!
              </p>
            </div>
          </div>

          {/* Detailed Chrome Methods Box */}
          <div className="bg-slate-950 rounded-xl p-6 border border-slate-800 space-y-5">
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <Laptop className="w-5 h-5 text-indigo-400" />
              <span>آموزش دقیق گام‌به‌گام در Google Chrome دسکتاپ:</span>
            </h4>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Method A: Drag & Drop */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  روش اول (سریع‌ترین روش - با کشیدن ماوس)
                </span>
                <p className="text-xs text-slate-300 leading-relaxed pt-1">
                  ۱. با زدن <kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-[11px] font-mono">Ctrl+Shift+B</kbd> مطمئن شوید نوار بوک‌مارک‌های کروم فعال است.
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  ۲. دکمه‌ی آبی‌رنگ بالای همین صفحه با عنوان <strong className="text-sky-300">«Drag to Bookmarks Bar»</strong> را با ماوس بگیرید (Drag) و روی نوار بوک‌مارک‌های بالای مرورگر رها (Drop) کنید.
                </p>
                <p className="text-xs text-emerald-400 leading-relaxed font-medium">
                  ✓ تمام شد! اکنون بوک‌مارک در نوار بالای کروم آماده است.
                </p>
              </div>

              {/* Method B: Manual Creation */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-sky-500/20 text-sky-300 border border-sky-500/30">
                  روش دوم (دستی - با کپی کردن کد)
                </span>
                <p className="text-xs text-slate-300 leading-relaxed pt-1">
                  ۱. روی دکمه‌ی <strong>«Copy Code»</strong> در بالای صفحه کلیک کنید تا کد کپی شود.
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  ۲. روی نوار بوک‌مارک‌های کروم راست‌کلیک کرده و گزینه‌ی <strong>Add page...</strong> را انتخاب کنید.
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  ۳. در فیلد <strong>Name</strong> بنویسید: <code className="text-indigo-300 font-mono">تغییر جهت متن (RTL/LTR)</code>
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  ۴. در فیلد <strong>URL</strong> هر آدرسی هست را پاک کرده و کد کپی‌شده را Paste کنید و دکمه‌ی <strong>Save</strong> را بزنید.
                </p>
              </div>
            </div>

            {/* Chrome Mobile Section */}
            <div className="pt-4 border-t border-slate-800/80">
              <h5 className="text-sm font-bold text-white flex items-center gap-2 mb-2">
                <Smartphone className="w-4 h-4 text-emerald-400" />
                <span>استفاده در گوگل کروم گوشی (اندروید و آیفون):</span>
              </h5>
              <div className="text-xs text-slate-300 space-y-1.5 leading-relaxed bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                <p>۱. همین صفحه را در مرورگر کروم گوشی خود بوک‌مارک کنید (منوی سه نقطه ⋮ سپس علامت ستاره ☆).</p>
                <p>۲. به بخش بوک‌مارک‌ها (Bookmarks) بروید، روی بوک‌مارک ساخته‌شده سه نقطه را بزنید و <strong>Edit</strong> را انتخاب کنید.</p>
                <p>۳. نام آن را به کلمه‌ای کوتاه مانند <code className="text-amber-300 font-mono font-bold">rtl</code> تغییر دهید و در بخش URL، کد بوک‌مارک را جایگزین کنید و ذخیره نمایید.</p>
                <p>۴. <strong>نحوه اجرا:</strong> در هر سایتی که بودید، نوار آدرس بالای کروم را لمس کرده و کلمه <code className="text-sky-300 font-mono font-bold">rtl</code> را تایپ کنید. از لیست پیشنهادات جستجو، روی بوک‌مارک خود کلیک کنید تا جهت صفحه درجا تغییر کند!</p>
              </div>
            </div>

            {/* Troubleshooting Common Issues */}
            <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 space-y-2.5">
              <div className="flex items-center gap-2 text-amber-300 font-bold text-xs sm:text-sm">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>اگر کلیک کردید و تغییری ایجاد نشد، این نکات را بررسی کنید:</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">۱.</span>
                  <span>
                    <strong>آیا کد را مستقیماً در نوار آدرس پیست کرده‌اید؟</strong> کروم به دلایل امنیتی کلمه <code className="text-rose-300 font-mono">javascript:</code> را از ابتدای متن حذف می‌کند. بنابراین اسکریپت اجرا نمی‌شود. حتماً باید کد را داخل یک <strong>بوک‌مارک</strong> ذخیره کنید و روی آن کلیک کنید.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">۲.</span>
                  <span>
                    <strong>آیا پیام تایید آبی‌رنگ را در بالای صفحه دیدید؟</strong> با کلیک روی نسخه جدید این بوک‌مارک، یک پیام شناور با متن <code className="text-sky-300 font-mono">«جهت متن: راست‌به‌چپ (RTL)»</code> در گوشه بالای صفحه ظاهر می‌شود. اگر این پیام دیده نشد، یعنی بوک‌مارک به درستی فراخوانی نشده است.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">۳.</span>
                  <span>
                    <strong>صفحات سیستمی کروم:</strong> در تب جدید خالی یا فروشگاه کروم (Chrome Web Store)، مرورگر کروم اجازه اجرای هیچ کدی را نمی‌دهد. آن را روی یک وب‌سایت واقعی مثل ویکی‌پدیا یا مقالات باز کنید.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        /* English Instructions Section */
        <div className="mt-6 space-y-6">
          {/* 3-Step Universal Process Visual Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-950/70 rounded-xl p-5 border border-slate-800/80 relative">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-sm mb-3 border border-indigo-500/30">
                1
              </div>
              <h4 className="text-sm font-bold text-white mb-1">Create a Bookmark</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                In Chrome, bookmark any page (press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 font-mono text-[11px]">Ctrl+D</kbd> or <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 font-mono text-[11px]">Cmd+D</kbd>), or right-click your bookmarks bar and choose &quot;Add page...&quot;.
              </p>
            </div>

            <div className="bg-slate-950/70 rounded-xl p-5 border border-slate-800/80 relative">
              <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-sm mb-3 border border-sky-500/30">
                2
              </div>
              <h4 className="text-sm font-bold text-white mb-1">Paste the Code</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Name it <strong className="text-slate-200">Toggle RTL/LTR</strong>, delete whatever is in the <strong className="text-slate-200">URL / Location</strong> field, and paste the URL-encoded JavaScript snippet.
              </p>
            </div>

            <div className="bg-slate-950/70 rounded-xl p-5 border border-slate-800/80 relative">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm mb-3 border border-emerald-500/30">
                3
              </div>
              <h4 className="text-sm font-bold text-white mb-1">Click on Any Website</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Navigate to any website (Wikipedia, documentation, blogs, social media) and click your bookmarklet to immediately flip the direction between RTL and LTR. Click again to revert.
              </p>
            </div>
          </div>

          {/* Browser Specific Guides Tabs */}
          <div className="mt-8 pt-6 border-t border-slate-800">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Browser Specific Instructions
              </span>

              <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs">
                <button
                  onClick={() => setSelectedBrowser('chrome')}
                  className={`px-2.5 py-1.5 rounded-md transition-colors ${
                    selectedBrowser === 'chrome'
                      ? 'bg-slate-800 text-white font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Chrome / Brave / Arc
                </button>
                <button
                  onClick={() => setSelectedBrowser('firefox')}
                  className={`px-2.5 py-1.5 rounded-md transition-colors ${
                    selectedBrowser === 'firefox'
                      ? 'bg-slate-800 text-white font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Firefox
                </button>
                <button
                  onClick={() => setSelectedBrowser('safari')}
                  className={`px-2.5 py-1.5 rounded-md transition-colors ${
                    selectedBrowser === 'safari'
                      ? 'bg-slate-800 text-white font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Safari (Mac)
                </button>
                <button
                  onClick={() => setSelectedBrowser('edge')}
                  className={`px-2.5 py-1.5 rounded-md transition-colors ${
                    selectedBrowser === 'edge'
                      ? 'bg-slate-800 text-white font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Edge
                </button>
                <button
                  onClick={() => setSelectedBrowser('mobile')}
                  className={`px-2.5 py-1.5 rounded-md transition-colors ${
                    selectedBrowser === 'mobile'
                      ? 'bg-slate-800 text-white font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Mobile (iOS & Android)
                </button>
              </div>
            </div>

            {/* Tab contents */}
            <div className="bg-slate-950 rounded-xl p-5 border border-slate-800/80 text-xs sm:text-sm text-slate-300">
              {selectedBrowser === 'chrome' && (
                <div className="space-y-3">
                  <h5 className="font-bold text-white text-sm">Google Chrome, Brave, and Arc:</h5>
                  <ol className="list-decimal list-inside space-y-2 text-slate-300 pl-1 leading-relaxed">
                    <li>
                      Make sure your bookmarks bar is visible (<kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 font-mono text-xs">Ctrl+Shift+B</kbd> on Windows/Linux or <kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 font-mono text-xs">Cmd+Shift+B</kbd> on Mac).
                    </li>
                    <li>
                      <strong className="text-indigo-400">Fastest method:</strong> Drag the &quot;Drag to Bookmarks Bar&quot; button above directly onto your bookmarks bar.
                    </li>
                    <li>
                      <strong className="text-sky-400">Manual method:</strong> Right-click on the bookmarks bar → select <strong>&quot;Add page...&quot;</strong>.
                    </li>
                    <li>
                      Set the <strong>Name</strong> to <code className="text-emerald-300 bg-slate-900 px-1.5 py-0.5 rounded">Toggle RTL/LTR</code> and in the <strong>URL</strong> box, paste the bookmarklet code.
                    </li>
                    <li>
                      Click <strong>Save</strong>. Whenever you are on an article, documentation page, or social feed, simply click the bookmarklet!
                    </li>
                  </ol>
                </div>
              )}

              {selectedBrowser === 'firefox' && (
                <div className="space-y-3">
                  <h5 className="font-bold text-white text-sm">Mozilla Firefox:</h5>
                  <ol className="list-decimal list-inside space-y-2 text-slate-300 pl-1 leading-relaxed">
                    <li>
                      Ensure the Bookmarks Toolbar is shown (press <kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 font-mono text-xs">Ctrl+Shift+B</kbd> or right-click the top bar and select <strong>Bookmarks Toolbar → Always Show</strong>).
                    </li>
                    <li>
                      Right-click anywhere on the Bookmarks Toolbar and choose <strong>&quot;Add Bookmark...&quot;</strong>.
                    </li>
                    <li>
                      Set <strong>Name</strong> to <code className="text-emerald-300 bg-slate-900 px-1.5 py-0.5 rounded">Toggle RTL/LTR</code>.
                    </li>
                    <li>
                      In the <strong>URL</strong> field, paste the full URL-encoded JavaScript bookmarklet.
                    </li>
                    <li>
                      Click <strong>Save</strong>. You are all set!
                    </li>
                  </ol>
                </div>
              )}

              {selectedBrowser === 'safari' && (
                <div className="space-y-3">
                  <h5 className="font-bold text-white text-sm">Apple Safari (macOS):</h5>
                  <ol className="list-decimal list-inside space-y-2 text-slate-300 pl-1 leading-relaxed">
                    <li>
                      Show the Favorites bar by pressing <kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 font-mono text-xs">Cmd+Shift+B</kbd> (or menu <strong>View → Show Favorites Bar</strong>).
                    </li>
                    <li>
                      Bookmark any page into Favorites (<kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 font-mono text-xs">Cmd+D</kbd>).
                    </li>
                    <li>
                      Open the Bookmarks editor (<kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 font-mono text-xs">Cmd+Option+B</kbd>) or right-click the bookmark in the Favorites bar and select <strong>Edit Address</strong>.
                    </li>
                    <li>
                      Rename the bookmark to <code className="text-emerald-300 bg-slate-900 px-1.5 py-0.5 rounded">Toggle RTL/LTR</code> and replace the address with the copied JavaScript code.
                    </li>
                    <li>
                      Click anywhere outside or press Enter to save.
                    </li>
                  </ol>
                </div>
              )}

              {selectedBrowser === 'edge' && (
                <div className="space-y-3">
                  <h5 className="font-bold text-white text-sm">Microsoft Edge:</h5>
                  <ol className="list-decimal list-inside space-y-2 text-slate-300 pl-1 leading-relaxed">
                    <li>
                      Show Favorites bar by pressing <kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 font-mono text-xs">Ctrl+Shift+B</kbd>.
                    </li>
                    <li>
                      Right-click the Favorites bar and click <strong>&quot;Add page&quot;</strong>.
                    </li>
                    <li>
                      Enter <strong>Toggle RTL/LTR</strong> for Name and paste the code into the <strong>URL</strong> field.
                    </li>
                    <li>
                      Click <strong>Save</strong>.
                    </li>
                  </ol>
                </div>
              )}

              {selectedBrowser === 'mobile' && (
                <div className="space-y-3">
                  <h5 className="font-bold text-white text-sm">Mobile Browsers (iOS Safari & Android Chrome):</h5>
                  <ol className="list-decimal list-inside space-y-2 text-slate-300 pl-1 leading-relaxed">
                    <li>
                      Bookmark this current webpage on your mobile browser (tap Share → Add Bookmark).
                    </li>
                    <li>
                      Edit the bookmark: rename it to <code className="text-emerald-300 bg-slate-900 px-1.5 py-0.5 rounded">rtl</code> or <code className="text-emerald-300 bg-slate-900 px-1.5 py-0.5 rounded">dir</code> for quick typing.
                    </li>
                    <li>
                      Delete the entire web address in the URL field and paste the bookmarklet code. Save the bookmark.
                    </li>
                    <li>
                      <strong>To use on any mobile webpage:</strong> Tap your address bar, type <code className="text-sky-300 font-mono">rtl</code>, and select your bookmark from the autocomplete search suggestions! The webpage will toggle immediately.
                    </li>
                  </ol>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
