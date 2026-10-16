import React from 'react';
import { Code, Terminal, Layers, HelpCircle, CheckCircle, ShieldAlert } from 'lucide-react';

export const TechnicalExplainer: React.FC = () => {
  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-xl">
      <div className="flex items-center gap-2 mb-2">
        <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold border border-indigo-500/20">
          Under the Hood
        </span>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">
        How the Bookmarklet Works
      </h3>
      <p className="text-xs sm:text-sm text-slate-400 mb-6">
        Designed for strict web standard compliance, zero side-effects, and universal browser safety.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Why %27 */}
        <div className="bg-slate-950/70 p-5 rounded-xl border border-slate-800/80">
          <div className="flex items-center gap-2 mb-2 text-white font-semibold text-sm">
            <span className="font-mono text-amber-300 text-xs bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
              %27
            </span>
            <span>Why Single Quotes are URL-Encoded</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            When you paste a script into a browser bookmark URL, raw characters like unescaped quotes (<code className="text-slate-300">&apos;</code> or <code className="text-slate-300">&quot;</code>) and unencoded spaces can get cut off by browser URL parsers or interpreted as string delimiters. Using <code className="text-amber-300 font-mono">%27</code> ensures the bookmarklet can be pasted safely into any browser without truncation or syntax corruption.
          </p>
        </div>

        {/* Why IIFE */}
        <div className="bg-slate-950/70 p-5 rounded-xl border border-slate-800/80">
          <div className="flex items-center gap-2 mb-2 text-white font-semibold text-sm">
            <span className="font-mono text-sky-300 text-xs bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
              (function(){'{...}'})()
            </span>
            <span>Why Wrapped in an IIFE</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            If a bookmarklet expression evaluates to any value (like a string or boolean), the browser navigates away and replaces the entire web page with that plain text output! Encapsulating the code inside an Immediately Invoked Function Expression (IIFE) with no return value prevents this and keeps your local variables scoped.
          </p>
        </div>

        {/* Target html & body */}
        <div className="bg-slate-950/70 p-5 rounded-xl border border-slate-800/80">
          <div className="flex items-center gap-2 mb-2 text-white font-semibold text-sm">
            <Layers className="w-4 h-4 text-emerald-400" />
            <span>Targeting &lt;html&gt; and &lt;body&gt;</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            While standard HTML sets document direction on <code className="text-slate-300">document.documentElement</code> (<code className="text-slate-300">&lt;html dir=&quot;...&quot;&gt;</code>), many modern Single Page Apps (React, Next.js, Vue) or CSS frameworks attach directional styles to <code className="text-slate-300">&lt;body&gt;</code>. Setting both the HTML <code className="text-slate-300">dir</code> attribute and inline <code className="text-slate-300">style.direction</code> guarantees instantaneous cascading inheritance across every child element.
          </p>
        </div>

        {/* Unicode BiDi */}
        <div className="bg-slate-950/70 p-5 rounded-xl border border-slate-800/80">
          <div className="flex items-center gap-2 mb-2 text-white font-semibold text-sm">
            <CheckCircle className="w-4 h-4 text-indigo-400" />
            <span>Unicode Bidirectional (BiDi) Algorithm</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Browsers automatically handle mixed scripts (e.g. English words, URLs, and code snippets embedded inside Arabic or Hebrew sentences). Toggling the base direction establishes the primary paragraph flow, correcting punctuation placement (such as trailing question marks and periods) which otherwise display on the wrong side.
          </p>
        </div>
      </div>
    </div>
  );
};
