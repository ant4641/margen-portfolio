import React, { useState, useEffect } from 'react';
import { WORK_HISTORY, WorkExperience } from '../data/resumeData';
import { Briefcase, Calendar, ChevronDown, ChevronUp, Layers, CheckCircle2, Code } from 'lucide-react';

interface CareerTimelineProps {
  targetExpId?: string | null;
}

export const CareerTimeline: React.FC<CareerTimelineProps> = ({ targetExpId }) => {
  const [expandedId, setExpandedId] = useState<string | null>("exp-1");

  useEffect(() => {
    if (targetExpId) {
      setExpandedId(targetExpId);
      setTimeout(() => {
        const el = document.getElementById(`exp-card-${targetExpId}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  }, [targetExpId]);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="space-y-8 pb-12">
      
      {/* Header */}
      <div className="border-b border-[#2D3748] pb-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
          <Briefcase className="w-7 h-7 text-emerald-400" />
          <span>職涯歷程</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          包含大型日誌平台重構、證券線上開戶系統、智慧長照與車辨 IoT 系統、招募顧問與 AdTech 數據平台。
        </p>
      </div>

      {/* Timeline List */}
      <div className="relative border-l-2 border-[#2D3748] ml-4 sm:ml-6 space-y-8">
        {WORK_HISTORY.map((exp) => {
          const isExpanded = expandedId === exp.id;
          return (
            <div key={exp.id} className="relative pl-6 sm:pl-8 group">
              
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded bg-[#0F1115] border-2 border-emerald-400 group-hover:bg-emerald-400 transition-all duration-200" />

              <div id={`exp-card-${exp.id}`} className="p-6 rounded-lg bg-[#0A0C10] border border-[#2D3748] hover:border-emerald-500/60 transition-all space-y-4">
                
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
                      <span>{exp.role}</span>
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-300">
                      <span className="font-semibold text-emerald-400">{exp.company}</span>
                      <span className="text-slate-500">•</span>
                      <span className="text-xs text-white flex items-center gap-1.5 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-white shrink-0" />
                        <span>{exp.period}</span>
                        <span>({exp.duration})</span>
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleExpand(exp.id)}
                    className="px-3 py-1.5 rounded bg-[#131720] hover:bg-[#1C232E] border border-[#2D3748] text-slate-200 text-xs font-semibold flex items-center gap-1 self-start sm:self-center shrink-0 transition-colors"
                  >
                    <span>{isExpanded ? '收合詳情' : '展開完整細節'}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>

                {/* Expanded Projects & Details */}
                {isExpanded && (
                  <div className="space-y-6 pt-3 border-t border-[#2D3748] animate-in fade-in duration-200">
                    {exp.projects.map((proj, projIdx) => (
                      <div key={projIdx} className="space-y-3 bg-[#0F1115] p-4 rounded border border-[#2D3748]">
                        
                        {/* Project Header */}
                        <div className="space-y-1">
                          <h4 className="text-sm sm:text-base font-bold text-emerald-400 tracking-wide flex items-center gap-2">
                            <span>{proj.title}</span>
                          </h4>
                          {proj.subtitle && (
                            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                              {proj.subtitle}
                            </p>
                          )}
                        </div>

                        {/* Project Bullet Highlights */}
                        <ul className="space-y-2 text-xs sm:text-sm text-slate-200 pt-1">
                          {proj.highlights.map((highlight, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{highlight}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Project Tech Stack */}
                        {proj.techStack && proj.techStack.length > 0 && (
                          <div className="pt-2 flex flex-wrap items-center gap-1.5">
                            <span className="text-xs font-bold text-slate-400 font-mono mr-1">使用技術：</span>
                            {proj.techStack.map((tech, tIdx) => (
                              <span key={tIdx} className="px-2 py-0.5 rounded bg-[#131720] text-slate-300 text-xs font-mono border border-[#2D3748]">
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}

                      </div>
                    ))}

                    {/* Overall Tech Stack if defined */}
                    {exp.techStack && exp.techStack.length > 0 && (
                      <div className="pt-2">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                          使用技術
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.techStack.map((tech, idx) => (
                            <span key={idx} className="px-2.5 py-0.5 rounded bg-[#131720] text-slate-300 text-xs font-mono border border-[#2D3748]">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
