import React from 'react';
import { 
  MARGEN_PROFILE, 
  ESSENTIAL_HIGHLIGHTS, 
  HighlightProject 
} from '../data/resumeData';
import { 
  Sparkles, 
  ArrowRight, 
  Database, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  CheckCircle2, 
  QrCode, 
  UserCheck, 
  Zap, 
  BarChart3, 
  ChevronRight,
  TrendingUp,
  Sliders,
  Server,
  Briefcase
} from 'lucide-react';

interface EssentialHomeProps {
  onSelectHighlight: (highlight: HighlightProject) => void;
  onNavigateTab: (tabId: string) => void;
  onNavigateToExperience: (expId: string) => void;
  onOpenExpoModal: () => void;
}

export const EssentialHome: React.FC<EssentialHomeProps> = ({
  onSelectHighlight,
  onNavigateTab,
  onNavigateToExperience,
  onOpenExpoModal,
}) => {
  return (
    <div className="space-y-12 sm:space-y-16 pb-12">
      
      {/* Hero Section: Geometric Balance High-Impact Personal Pitch */}
      <section className="relative overflow-hidden rounded-lg bg-[#0A0C10] border border-[#2D3748] p-6 sm:p-10 lg:p-12 shadow-2xl">
        {/* Subtle grid accent line */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-6">

          {/* Main Title & Tagline */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              {MARGEN_PROFILE.name} <span className="text-slate-400 font-normal text-2xl sm:text-4xl">({MARGEN_PROFILE.englishName})</span>
            </h1>
            <p className="text-lg sm:text-2xl font-bold text-emerald-400">
              {MARGEN_PROFILE.title}
            </p>
          </div>

          {/* Core Philosophy Statement */}
          <div className="p-4 sm:p-5 rounded bg-[#0F1115] border border-[#2D3748] text-slate-300 text-sm sm:text-base leading-relaxed">
            <p className="font-bold text-emerald-400 mb-1 text-xs">🎯 核心定位與工程理念</p>
            <p>{MARGEN_PROFILE.philosophy}</p>
          </div>

          {/* Key Metrics Dashboard Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-2">
            {MARGEN_PROFILE.stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="p-3.5 sm:p-4 rounded bg-[#131720] border border-[#2D3748] hover:border-emerald-500/60 transition-all group"
              >
                <div className="text-xl sm:text-2xl font-mono font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-slate-300 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] font-mono text-slate-500 mt-0.5">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Section 1: 個人核心優勢與定位 */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#2D3748] pb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              核心技術與工程思維
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {MARGEN_PROFILE.corePositioning.map((item, index) => {
            const Icon = index === 0 ? Cpu : index === 1 ? Layers : index === 2 ? ShieldCheck : TrendingUp;
            return (
              <div 
                key={index}
                className="p-6 rounded-lg bg-[#0A0C10] border border-[#2D3748] hover:border-emerald-500/60 transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded bg-[#131720] border border-[#2D3748] flex items-center justify-center text-emerald-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
                
                {/* Related Work Links */}
                <div className="mt-6 pt-4 border-t border-[#2D3748] space-y-2">
                  <div className="text-xs font-bold text-slate-400 flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
                    <span>相關的工作經歷：</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.relatedWorks?.map((work, wIdx) => (
                      <button
                        key={wIdx}
                        onClick={() => onNavigateToExperience(work.expId)}
                        className="px-2.5 py-1 rounded bg-[#131720] hover:bg-emerald-950/80 text-emerald-400 hover:text-emerald-300 text-xs font-medium border border-[#2D3748] hover:border-emerald-500/80 transition-all flex items-center gap-1 group/btn"
                      >
                        <span>{work.name}</span>
                        <ArrowRight className="w-3 h-3 text-emerald-400/80 group-hover/btn:translate-x-0.5 transition-transform" />
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* Section 2: 三大專案 / 成就 */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#2D3748] pb-4 gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              精選成就
            </h2>
          </div>
          <button
            onClick={() => onNavigateTab('experience')}
            className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 self-start sm:self-auto"
          >
            <span>查看完整職涯歷程</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {ESSENTIAL_HIGHLIGHTS.map((item, idx) => (
            <div 
              key={item.id}
              className="p-6 sm:p-8 rounded-lg bg-[#0A0C10] border border-[#2D3748] hover:border-emerald-500/60 transition-all group"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                
                {/* Left: Project Details */}
                <div className="space-y-4 lg:max-w-2xl">
                  
                  {/* Tag & Period & Company */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 text-xs font-semibold">
                      {item.tag}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {item.period}
                    </span>
                    {item.expId ? (
                      <button
                        onClick={() => onNavigateToExperience(item.expId!)}
                        className="text-xs text-emerald-400 hover:text-emerald-300 hover:underline flex items-center gap-1 font-medium transition-colors cursor-pointer"
                        title="點擊跳至職涯歷程此項工作"
                      >
                        <span>• {item.companyRole}</span>
                        <ArrowRight className="w-3 h-3 text-emerald-400" />
                      </button>
                    ) : (
                      <span className="text-xs text-slate-400">
                        • {item.companyRole}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-300 mt-1">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Key Actions Bullet Points */}
                  <ul className="space-y-2 pt-1 text-xs sm:text-sm text-slate-300">
                    {item.keyActions.slice(0, 2).map((action, actionIdx) => (
                      <li key={actionIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.techStack.map((tech, techIdx) => (
                      <span 
                        key={techIdx} 
                        className="px-2.5 py-0.5 rounded bg-[#131720] text-slate-300 text-xs font-mono border border-[#2D3748]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Right: Metrics Badges & Interactive Benchmark Button */}
                <div className="lg:w-72 bg-[#0F1115] p-5 rounded border border-[#2D3748] flex flex-col justify-between space-y-4 shrink-0">
                  <div className="space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                      <span>量化效益指標</span>
                      <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />
                    </p>
                    {item.impactMetrics.map((metric, metricIdx) => (
                      <div key={metricIdx} className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">{metric.label}</span>
                        <span className="font-mono font-bold text-emerald-400 text-sm">{metric.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => onSelectHighlight(item)}
                      className="w-full py-2 px-3 rounded bg-[#131720] hover:bg-emerald-600 text-slate-200 hover:text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-1.5 border border-[#2D3748] hover:border-emerald-500"
                    >
                      <span>開啟前後對比細節</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    
                    {item.expId && (
                      <button
                        onClick={() => onNavigateToExperience(item.expId!)}
                        className="w-full py-1.5 px-3 rounded bg-[#0A0C10] hover:bg-[#131720] text-emerald-400 font-semibold text-xs transition-all flex items-center justify-center gap-1 border border-emerald-900/60 hover:border-emerald-500/80"
                      >
                        <span>查看職涯歷程對應工作</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
