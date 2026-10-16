import React, { useState } from 'react';
import {
  ArrowLeftRight,
  RotateCcw,
  Sparkles,
  FileText,
  FormInput,
  Table,
  MessageSquare,
  Edit3,
  Check,
} from 'lucide-react';

export const InteractiveSandbox: React.FC = () => {
  const [direction, setDirection] = useState<'ltr' | 'rtl'>('ltr');
  const [activeTab, setActiveTab] = useState<'article' | 'form' | 'table' | 'chat' | 'custom'>('article');
  const [customText, setCustomText] = useState<string>(
    'The quick brown fox jumps over the lazy dog. الثعلب البني السريع يقفز فوق الكلب الكسول. השועל החום הזריז קופץ מעל הכלב העצלן.'
  );
  const [notification, setNotification] = useState<string | null>(null);

  const toggleDirection = () => {
    const next = direction === 'rtl' ? 'ltr' : 'rtl';
    setDirection(next);

    setNotification(`Text direction toggled to: ${next.toUpperCase()}`);
    setTimeout(() => {
      setNotification(null);
    }, 2000);
  };

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-xl">
      {/* Header and Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-400 text-xs font-semibold border border-sky-500/20">
              Interactive Test Sandbox
            </span>
            <span className="text-xs text-slate-400">Try before installing</span>
          </div>
          <h3 className="text-xl font-bold text-white">
            Live Webpage Direction Simulator
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            See how the bookmarklet immediately flips alignment, punctuation, form controls, and bilingual layout.
          </p>
        </div>

        {/* Live Simulator Trigger Button */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 text-xs">
            <span className="text-slate-400">Direction:</span>
            <span
              className={`font-mono font-bold px-2 py-0.5 rounded ${
                direction === 'rtl'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                  : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
              }`}
            >
              {direction.toUpperCase()} ({direction === 'rtl' ? 'Right-to-Left' : 'Left-to-Right'})
            </span>
          </div>

          <button
            onClick={toggleDirection}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 text-white font-semibold text-sm shadow-md shadow-indigo-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            aria-label="Toggle text direction in sandbox"
          >
            <ArrowLeftRight className="w-4 h-4" />
            <span>Simulate Bookmarklet Click</span>
          </button>
        </div>
      </div>

      {/* Preset tabs */}
      <div className="flex items-center gap-1.5 py-4 overflow-x-auto border-b border-slate-800 text-xs font-medium scrollbar-thin">
        <button
          onClick={() => setActiveTab('article')}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
            activeTab === 'article'
              ? 'bg-slate-800 text-white border border-slate-700'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Multilingual Article</span>
        </button>

        <button
          onClick={() => setActiveTab('form')}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
            activeTab === 'form'
              ? 'bg-slate-800 text-white border border-slate-700'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <FormInput className="w-3.5 h-3.5" />
          <span>Form Inputs & UI</span>
        </button>

        <button
          onClick={() => setActiveTab('table')}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
            activeTab === 'table'
              ? 'bg-slate-800 text-white border border-slate-700'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Table className="w-3.5 h-3.5" />
          <span>Data Table</span>
        </button>

        <button
          onClick={() => setActiveTab('chat')}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
            activeTab === 'chat'
              ? 'bg-slate-800 text-white border border-slate-700'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Chat Messages</span>
        </button>

        <button
          onClick={() => setActiveTab('custom')}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
            activeTab === 'custom'
              ? 'bg-slate-800 text-white border border-slate-700'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Edit3 className="w-3.5 h-3.5" />
          <span>Custom Text</span>
        </button>
      </div>

      {/* Sandbox Container (has dir attribute dynamically set) */}
      <div className="relative mt-6">
        {notification && (
          <div className="absolute top-3 right-3 z-30 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-900/90 text-indigo-200 border border-indigo-700 shadow-lg text-xs font-semibold backdrop-blur animate-in fade-in slide-in-from-top-2 duration-200">
            <Sparkles className="w-3.5 h-3.5 text-indigo-300" />
            <span>{notification}</span>
          </div>
        )}

        <div
          dir={direction}
          style={{ direction }}
          className="min-h-[280px] bg-slate-950 p-6 rounded-xl border border-slate-800/90 transition-all duration-300"
        >
          {activeTab === 'article' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/60">
                <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  Article Preview • {direction === 'rtl' ? 'Right-To-Left Flow' : 'Left-To-Right Flow'}
                </span>
                <span className="text-xs text-slate-400">October 16, 2026</span>
              </div>

              <h4 className="text-xl font-bold text-white">
                {direction === 'rtl'
                  ? 'Welcome to RTL Mode! (BiDi Text Direction)'
                  : 'Welcome to LTR Mode! (BiDi Text Direction)'}
              </h4>

              <p className="text-sm text-slate-300 leading-relaxed">
                When you read Right-to-Left languages such as <strong className="text-indigo-400 font-semibold">Arabic</strong>, <strong className="text-sky-400 font-semibold">Hebrew</strong>, Persian, or Urdu, web browsers need the <code className="text-amber-300 font-mono text-xs bg-slate-900 px-1.5 py-0.5 rounded">dir=&quot;rtl&quot;</code> attribute to position sentences, punctuation, and margin padding correctly.
              </p>

              <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800 space-y-2">
                <p className="text-base text-slate-200 leading-relaxed font-sans">
                  &ldquo;Notice how this entire paragraph, quotation marks, and punctuation flip from one margin to the opposite margin!&rdquo;
                </p>
                <p className="text-xs text-indigo-300 font-mono">
                  Current direction: {direction.toUpperCase()} • Alignment: {direction === 'rtl' ? 'Right-Aligned (start)' : 'Left-Aligned (start)'}
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Notice how exclamation marks, periods, list numbers, and quotation marks anchor to the appropriate margin side depending on whether RTL or LTR is active.
              </p>
            </div>
          )}

          {activeTab === 'form' && (
            <div className="max-w-md mx-auto space-y-4">
              <h4 className="text-base font-bold text-white mb-2">
                {direction === 'rtl' ? 'نموذج تسجيل المستخدم' : 'User Registration Form'}
              </h4>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  {direction === 'rtl' ? 'الاسم الكامل' : 'Full Name'}
                </label>
                <input
                  type="text"
                  placeholder={direction === 'rtl' ? 'أدخل اسمك هنا...' : 'e.g. Alex Morgan'}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-sm text-slate-200 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  {direction === 'rtl' ? 'البريد الإلكتروني' : 'Email Address'}
                </label>
                <input
                  type="email"
                  placeholder="user@example.com"
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-sm text-slate-200 focus:outline-none focus:border-indigo-500 font-mono text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  {direction === 'rtl' ? 'ملاحظات أو نبذة شخصية' : 'Personal Notes / Bio'}
                </label>
                <textarea
                  rows={3}
                  placeholder={
                    direction === 'rtl'
                      ? 'اكتب أي ملاحظات إضافية هنا...'
                      : 'Type any thoughts or notes here...'
                  }
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-sm text-slate-200 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold transition-colors"
                >
                  {direction === 'rtl' ? 'إرسال النموذج' : 'Submit Form'}
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-medium transition-colors"
                >
                  {direction === 'rtl' ? 'إلغاء' : 'Cancel'}
                </button>
              </div>
            </div>
          )}

          {activeTab === 'table' && (
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-slate-300">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400">
                    <th className="py-2.5 px-3 font-semibold text-start">
                      {direction === 'rtl' ? 'المعرف' : 'ID'}
                    </th>
                    <th className="py-2.5 px-3 font-semibold text-start">
                      {direction === 'rtl' ? 'اسم الوثيقة' : 'Document Title'}
                    </th>
                    <th className="py-2.5 px-3 font-semibold text-start">
                      {direction === 'rtl' ? 'اللغة' : 'Language'}
                    </th>
                    <th className="py-2.5 px-3 font-semibold text-start">
                      {direction === 'rtl' ? 'الحالة' : 'Status'}
                    </th>
                    <th className="py-2.5 px-3 font-semibold text-end">
                      {direction === 'rtl' ? 'الحجم' : 'Size'}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-900">
                  <tr>
                    <td className="py-2.5 px-3 font-mono text-slate-500">#101</td>
                    <td className="py-2.5 px-3 font-medium text-white">دليل المستخدم الرسمي</td>
                    <td className="py-2.5 px-3">العربية (Arabic)</td>
                    <td className="py-2.5 px-3">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-semibold text-[10px]">
                        <Check className="w-3 h-3" /> Published
                      </span>
                    </td>
                    <td className="py-2.5 px-3 font-mono text-end">1.4 MB</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-mono text-slate-500">#102</td>
                    <td className="py-2.5 px-3 font-medium text-white">Getting Started Guide</td>
                    <td className="py-2.5 px-3">English (US)</td>
                    <td className="py-2.5 px-3">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 font-semibold text-[10px]">
                        <Check className="w-3 h-3" /> Published
                      </span>
                    </td>
                    <td className="py-2.5 px-3 font-mono text-end">820 KB</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-mono text-slate-500">#103</td>
                    <td className="py-2.5 px-3 font-medium text-white">הנחיות אינטגרציה</td>
                    <td className="py-2.5 px-3">עברית (Hebrew)</td>
                    <td className="py-2.5 px-3">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 font-semibold text-[10px]">
                        Review
                      </span>
                    </td>
                    <td className="py-2.5 px-3 font-mono text-end">2.1 MB</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'chat' && (
            <div className="max-w-md mx-auto space-y-3">
              <div className="flex flex-col gap-1 items-start">
                <div className="px-3.5 py-2 rounded-2xl rounded-tl-sm bg-slate-800 text-slate-200 text-xs max-w-[85%]">
                  Hello! How does this bookmarklet handle mixed English and RTL text?
                </div>
                <span className="text-[10px] text-slate-500">10:14 AM</span>
              </div>

              <div className="flex flex-col gap-1 items-end">
                <div className="px-3.5 py-2 rounded-2xl rounded-tr-sm bg-indigo-600 text-white text-xs max-w-[85%]">
                  أهلاً بك! يتم التعامل مع النصوص المختلطة وفق معيار يونيكود ثنائي الاتجاه (Unicode BiDi Algorithm) بسلاسة فائقة.
                </div>
                <span className="text-[10px] text-slate-500">10:15 AM</span>
              </div>

              <div className="flex flex-col gap-1 items-start">
                <div className="px-3.5 py-2 rounded-2xl rounded-tl-sm bg-slate-800 text-slate-200 text-xs max-w-[85%]">
                  Click &quot;Simulate Bookmarklet Click&quot; above to see how this entire chat flips!
                </div>
                <span className="text-[10px] text-slate-500">10:16 AM</span>
              </div>
            </div>
          )}

          {activeTab === 'custom' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-slate-400">
                  Custom Text Live Input
                </label>
                <button
                  onClick={() =>
                    setCustomText(
                      'The quick brown fox jumps over the lazy dog. الثعلب البني السريع يقفز فوق الكلب الكسول. השועל החום הזריז קופץ מעל הכלב העצלן.'
                    )
                  }
                  className="flex items-center gap-1 text-[11px] text-indigo-400 hover:text-indigo-300"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset to Sample</span>
                </button>
              </div>

              <textarea
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                rows={4}
                className="w-full p-3 bg-slate-900 border border-slate-800 rounded-xl text-sm text-slate-200 focus:outline-none focus:border-indigo-500 leading-relaxed font-sans"
                placeholder="Type or paste any text to see how it looks in RTL vs LTR..."
              />

              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
                <div className="text-[10px] uppercase font-bold text-slate-500 mb-1">
                  Rendered Result ({direction.toUpperCase()}):
                </div>
                <div className="text-sm text-slate-200 leading-relaxed break-words">
                  {customText || <span className="text-slate-600 italic">No text entered.</span>}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
