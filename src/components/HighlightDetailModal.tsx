import React from 'react';
import { HighlightProject } from '../data/resumeData';
import { X, CheckCircle, BarChart2, ShieldCheck, ArrowRight, Layers, Cpu, Server } from 'lucide-react';

interface HighlightDetailModalProps {
  highlight: HighlightProject | null;
  onClose: () => void;
}

export const HighlightDetailModal: React.FC<HighlightDetailModalProps> = ({
  highlight,
  onClose,
}) => {
  if (!highlight) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F1115]/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#0A0C10] border border-[#2D3748] rounded-lg shadow-2xl overflow-hidden max-h-[90vh] flex flex-col font-sans">
        
        {/* Header */}
        <div className="p-6 bg-[#0F1115] border-b border-[#2D3748] flex items-start justify-between">
          <div className="space-y-1">
            <span className="px-2.5 py-0.5 rounded bg-emerald-950/80 text-emerald-400 text-xs font-semibold border border-emerald-800/60">
              {highlight.tag}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white pt-2">
              {highlight.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              {highlight.companyRole} • {highlight.period}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded bg-[#131720] text-slate-400 hover:text-white hover:bg-[#1C232E] border border-[#2D3748] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Before vs After Benchmark Card */}
          <div className="p-5 rounded bg-[#0F1115] border border-[#2D3748] space-y-4">
            <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-emerald-400" />
              <span>前後優化成效數據對比</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {/* Before */}
              <div className="p-4 rounded bg-rose-950/20 border border-rose-900/50 space-y-2">
                <span className="px-2 py-0.5 rounded bg-rose-900/60 text-rose-300 text-xs font-semibold">
                  ⚠️ 優化前
                </span>
                <p className="text-xs text-slate-300 leading-relaxed pt-1">
                  {highlight.beforeVsAfter.before}
                </p>
              </div>

              {/* After */}
              <div className="p-4 rounded bg-emerald-950/20 border border-emerald-900/50 space-y-2">
                <span className="px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 text-xs font-semibold">
                  ✅ 重構後
                </span>
                <p className="text-xs text-slate-300 leading-relaxed pt-1">
                  {highlight.beforeVsAfter.after}
                </p>
              </div>
            </div>

            <div className="p-3 rounded bg-[#131720] border border-[#2D3748] flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">主要成效數據:</span>
              <span className="font-bold text-emerald-400 text-sm">
                {highlight.beforeVsAfter.metric}
              </span>
            </div>
          </div>

          {/* Key Actions */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>關鍵實作項目</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {highlight.keyActions.map((action, idx) => (
                <li key={idx} className="flex items-start gap-2.5 p-3 rounded bg-[#0F1115] border border-[#2D3748]">
                  <span className="w-5 h-5 rounded bg-[#131720] border border-[#2D3748] text-emerald-400 font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{action}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Points */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-400" />
              <span>核心架構亮點</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {highlight.architecturePoints.map((point, idx) => (
                <div key={idx} className="p-3 rounded bg-[#0F1115] border border-[#2D3748] text-xs font-mono text-slate-300 flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              使用技術
            </h4>
            <div className="flex flex-wrap gap-2">
              {highlight.techStack.map((tech, idx) => (
                <span key={idx} className="px-2.5 py-0.5 rounded bg-[#131720] border border-[#2D3748] text-xs font-mono text-emerald-400">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#0F1115] border-t border-[#2D3748] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded bg-[#131720] hover:bg-[#1C232E] border border-[#2D3748] text-slate-200 font-mono font-bold text-xs transition-colors"
          >
            關閉視窗
          </button>
        </div>

      </div>
    </div>
  );
};
