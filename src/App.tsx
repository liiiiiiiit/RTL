import React from 'react';
import { Header } from './components/Header.tsx';
import { BookmarkletHero } from './components/BookmarkletHero.tsx';
import { InteractiveSandbox } from './components/InteractiveSandbox.tsx';
import { BrowserInstructions } from './components/BrowserInstructions.tsx';
import { TechnicalExplainer } from './components/TechnicalExplainer.tsx';
import { ArrowLeftRight, HelpCircle, Check, Shield } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      <Header />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10 sm:space-y-12">
        {/* Hero Section with the bookmarklet code and drag button */}
        <BookmarkletHero />

        {/* Live Interactive Sandbox to try the bookmarklet directly */}
        <InteractiveSandbox />

        {/* Visual Step-by-Step Installation Guides */}
        <BrowserInstructions />

        {/* Technical Deep Dive */}
        <TechnicalExplainer />

        {/* FAQ Section */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-700">
              Frequently Asked Questions
            </span>
          </div>
          <h3 className="text-xl font-bold text-white mb-6">Common Questions</h3>

          <div className="space-y-4 text-xs sm:text-sm">
            <details className="group bg-slate-950/70 p-4 rounded-xl border border-slate-800/80 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between font-semibold text-white cursor-pointer select-none">
                <span>Does this bookmarklet work on any website?</span>
                <span className="text-indigo-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-slate-400 leading-relaxed">
                Yes! It works on Wikipedia, news portals, Reddit, GitHub, blogs, webmail, and documentation sites. It runs entirely in your browser&apos;s current tab session without transmitting any data externally.
              </p>
            </details>

            <details className="group bg-slate-950/70 p-4 rounded-xl border border-slate-800/80 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between font-semibold text-white cursor-pointer select-none">
                <span>Will it permanently modify the website?</span>
                <span className="text-indigo-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-slate-400 leading-relaxed">
                No. It modifies the in-memory DOM of your current tab. Clicking it a second time flips the direction right back. If you reload the page, the website returns to its original default state.
              </p>
            </details>

            <details className="group bg-slate-950/70 p-4 rounded-xl border border-slate-800/80 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between font-semibold text-white cursor-pointer select-none">
                <span>Why is the code URL-encoded with %27 instead of standard single quotes?</span>
                <span className="text-indigo-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-slate-400 leading-relaxed">
                Some browsers and bookmark managers treat unencoded single quotes (<code className="text-amber-300 font-mono">&apos;</code>) or double quotes as delimiters, causing the bookmark URL to get truncated or corrupted upon saving. Encoding quotes as <code className="text-amber-300 font-mono">%27</code> ensures that the bookmarklet pastes and executes without syntax errors.
              </p>
            </details>

            <details className="group bg-slate-950/70 p-4 rounded-xl border border-slate-800/80 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between font-semibold text-white cursor-pointer select-none">
                <span>Is it safe to run?</span>
                <span className="text-indigo-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-slate-400 leading-relaxed">
                100% safe. The bookmarklet contains only standard DOM manipulation commands to toggle the <code className="text-slate-300">dir</code> attribute and CSS <code className="text-slate-300">direction</code>. It makes zero network requests, loads no external scripts, and has no tracking.
              </p>
            </details>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950/80 mt-12 py-6 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-slate-400">
            <ArrowLeftRight className="w-4 h-4 text-indigo-400" />
            <span>RTL ↔ LTR Direction Toggle Bookmarklet</span>
          </div>
          <div>
            URL-encoded with <code className="text-amber-300 font-mono">%27</code> • Compatible with all modern browsers
          </div>
        </div>
      </footer>
    </div>
  );
}
