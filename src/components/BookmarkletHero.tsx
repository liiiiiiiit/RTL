import React, { useState } from 'react';
import {
  Copy,
  Check,
  Bookmark,
  Code2,
  Sliders,
  Sparkles,
  MousePointerClick,
  Info,
  CheckCircle2,
} from 'lucide-react';
import {
  encodeBookmarklet,
  getRawBookmarkletScript,
  BookmarkletOptions,
  STANDARD_BOOKMARKLET_URL,
} from '../utils/bookmarklet.ts';

interface BookmarkletHeroProps {
  onTestInPage?: (url: string) => void;
}

export const BookmarkletHero: React.FC<BookmarkletHeroProps> = () => {
  const [activeTab, setActiveTab] = useState<'encoded' | 'raw'>('encoded');
  const [copied, setCopied] = useState(false);
  const [options, setOptions] = useState<BookmarkletOptions>({
    showToast: true,
    overrideStyle: true,
    targetSelection: false,
  });

  // Calculate current scripts based on options
  const rawScript = getRawBookmarkletScript(options);
  const encodedUrl = encodeBookmarklet(rawScript);

  const displayedCode = activeTab === 'encoded' ? encodedUrl : rawScript;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(displayedCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
      const textarea = document.createElement('textarea');
      textarea.value = displayedCode;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-0 right-1/4 -mt-16 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 -mb-16 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col gap-6">
        {/* Title area */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Production-Ready & Fully URL-Encoded</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2 flex-wrap">
              <span>Get Your RTL</span>
              <span className="text-indigo-400">↔</span>
              <span>LTR Bookmarklet</span>
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              Drag the button below to your bookmarks toolbar, or copy the encoded code into any browser bookmark&apos;s URL field. Clicking it toggles text direction from LTR to RTL and back.
            </p>
          </div>

          {/* Drag & Drop Quick Bookmark CTA */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href={encodedUrl}
              onClick={(e) => {
                // If clicked directly in page, prompt user or run safely
                e.preventDefault();
                alert(
                  '💡 Tip: Drag this button directly into your browser Bookmarks Bar (Ctrl+Shift+B / Cmd+Shift+B), or click "Copy Code" below and paste it into a bookmark\'s URL field.'
                );
              }}
              draggable
              className="group flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 hover:from-indigo-400 hover:to-sky-400 text-white font-bold text-sm shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-grab active:cursor-grabbing border border-indigo-400/30"
              title="Drag and drop this link onto your bookmarks bar!"
            >
              <Bookmark className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
              <span>Drag to Bookmarks Bar</span>
            </a>

            <button
              onClick={handleCopy}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm border border-slate-700 transition-colors shadow-sm"
              aria-label="Copy bookmarklet code"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-300" />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Customization Options Bar */}
        <div className="bg-slate-950/60 rounded-xl p-4 border border-slate-800/80">
          <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <Sliders className="w-3.5 h-3.5 text-indigo-400" />
            <span>Customize Bookmarklet Behavior (Optional)</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <label className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-slate-700 cursor-pointer transition-colors">
              <input
                type="checkbox"
                checked={options.showToast}
                onChange={(e) => setOptions({ ...options, showToast: e.target.checked })}
                className="mt-1 rounded bg-slate-800 border-slate-700 text-indigo-500 focus:ring-indigo-500/20"
              />
              <div>
                <span className="text-xs font-semibold text-slate-200 block">
                  Show On-Screen Toast
                </span>
                <span className="text-[11px] text-slate-400 leading-snug block mt-0.5">
                  Displays a 1-second floating notification (&quot;Text direction: RTL&quot;) on the website when toggled.
                </span>
              </div>
            </label>

            <label className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-slate-700 cursor-pointer transition-colors">
              <input
                type="checkbox"
                checked={options.overrideStyle}
                onChange={(e) => setOptions({ ...options, overrideStyle: e.target.checked })}
                className="mt-1 rounded bg-slate-800 border-slate-700 text-indigo-500 focus:ring-indigo-500/20"
              />
              <div>
                <span className="text-xs font-semibold text-slate-200 block">
                  Deep CSS Override (!important)
                </span>
                <span className="text-[11px] text-slate-400 leading-snug block mt-0.5">
                  Injects a dynamic stylesheet to override stubborn modern apps with fixed CSS direction rules.
                </span>
              </div>
            </label>

            <label className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-slate-700 cursor-pointer transition-colors">
              <input
                type="checkbox"
                checked={options.targetSelection}
                onChange={(e) => setOptions({ ...options, targetSelection: e.target.checked })}
                className="mt-1 rounded bg-slate-800 border-slate-700 text-indigo-500 focus:ring-indigo-500/20"
              />
              <div>
                <span className="text-xs font-semibold text-slate-200 block">
                  Focused Element / Selection Only
                </span>
                <span className="text-[11px] text-slate-400 leading-snug block mt-0.5">
                  Toggles only the highlighted text or active input/textarea rather than the entire page.
                </span>
              </div>
            </label>
          </div>
        </div>

        {/* Code View Card */}
        <div className="rounded-xl border border-slate-800 bg-slate-950 overflow-hidden">
          {/* Header tabs */}
          <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-slate-900/80 border-b border-slate-800 gap-2">
            <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs font-medium">
              <button
                onClick={() => setActiveTab('encoded')}
                className={`px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 ${
                  activeTab === 'encoded'
                    ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Bookmark className="w-3.5 h-3.5" />
                <span>URL-Encoded (%27 Quotes)</span>
                <span className="text-[10px] bg-indigo-500/30 text-indigo-200 px-1.5 py-0.2 rounded">
                  Bookmark Ready
                </span>
              </button>
              <button
                onClick={() => setActiveTab('raw')}
                className={`px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 ${
                  activeTab === 'raw'
                    ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Formatted JavaScript</span>
              </button>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span>{displayedCode.length} characters</span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Code display area */}
          <div className="p-4 overflow-x-auto max-h-72 font-mono text-xs text-slate-300 leading-relaxed bg-slate-950/90 select-all">
            {activeTab === 'encoded' ? (
              <p className="break-all whitespace-pre-wrap text-emerald-300/90 selection:bg-emerald-500/30">
                {displayedCode}
              </p>
            ) : (
              <pre className="text-sky-300 whitespace-pre selection:bg-sky-500/30">
                {displayedCode}
              </pre>
            )}
          </div>

          {/* Footer note on encoding */}
          <div className="px-4 py-2.5 bg-slate-900/40 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Info className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
              <span>
                Single quotes are URL-encoded as <code className="text-amber-300 bg-amber-500/10 px-1.5 py-0.5 rounded font-mono text-[11px]">%27</code> to guarantee browser address bar compatibility.
              </span>
            </div>
            {activeTab === 'encoded' && (
              <span className="text-emerald-400 hidden sm:inline-flex items-center gap-1 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" /> Ready to paste into URL field
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
