import React from 'react';
import { SIDE_PROJECTS_AND_RESEARCH } from '../data/resumeData';
import { Sparkles, BookOpen, Award, GraduationCap, CheckCircle2, ArrowUpRight } from 'lucide-react';

export const SideProjectSection: React.FC = () => {
  const { sideProject, education } = SIDE_PROJECTS_AND_RESEARCH;

  return (
    <div className="space-y-8 pb-12">
      
      {/* Side Project Card */}
      <section className="space-y-4">
        <div className="border-b border-[#2D3748] pb-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-emerald-400" />
            <span>即興劇 AI 互動系統</span>
          </h2>
        </div>

        <div className="p-6 sm:p-8 rounded-lg bg-[#0A0C10] border border-[#2D3748] space-y-4 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="px-2.5 py-0.5 rounded bg-emerald-950/80 text-emerald-400 text-xs font-semibold border border-emerald-800/60">
                {sideProject.period}
              </span>
              <h3 className="text-xl font-bold text-white mt-2">
                {sideProject.title}
              </h3>
              <p className="text-xs text-slate-400">
                角色：{sideProject.role}
              </p>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            {sideProject.description}
          </p>

          <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
            {sideProject.highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5 pt-2">
            {sideProject.techStack.map((tech, idx) => (
              <span key={idx} className="px-2.5 py-0.5 rounded bg-[#131720] text-slate-300 text-xs font-mono border border-[#2D3748]">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Academic Research */}
      <section className="space-y-4">
        <div className="border-b border-[#2D3748] pb-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-emerald-400" />
            <span>學歷與學術研究</span>
          </h2>
        </div>

        <div className="p-6 sm:p-8 rounded-lg bg-[#0A0C10] border border-[#2D3748] space-y-6">
          
          {/* School Degree */}
          <div>
            <h3 className="text-lg font-bold text-white">
              {education.school}
            </h3>
            <p className="text-sm text-slate-300 mt-0.5">
              {education.degree} • <span className="text-xs text-white">{education.period}</span>
            </p>
          </div>

          {/* Paper & Awards list */}
          <div className="space-y-3 pt-2 border-t border-[#2D3748]">
            <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              期刊論文發表與競賽獎項
            </h4>

            <div className="grid grid-cols-1 gap-3">
              {education.publicationsAndAwards.map((item, idx) => (
                <div key={idx} className="p-4 rounded bg-[#0F1115] border border-[#2D3748] space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-[#131720] text-emerald-400 text-[11px] font-bold border border-emerald-800/60">
                      {item.type}
                    </span>
                  </div>
                  <h5 className="text-sm font-bold text-white pt-1">
                    {item.title}
                  </h5>
                  <p className="text-xs text-slate-400">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
