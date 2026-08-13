import React from 'react';
import { SKILL_CATEGORIES } from '../data/resumeData';
import { Code2, Check, Star, ShieldCheck, Zap } from 'lucide-react';

export const TechStackMatrix: React.FC = () => {
  return (
    <div className="space-y-8 pb-12">
      
      {/* Header */}
      <div className="border-b border-[#2D3748] pb-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
          <Code2 className="w-7 h-7 text-emerald-400" />
          <span>技術技能與架構矩陣</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          涵蓋 Java Spring Boot, PHP Laravel, MariaDB/MSSQL 效能優化, Kafka/ELK 大數據串流, Modbus/RTSP IoT 協定與 DDD 模組化劃分。
        </p>
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILL_CATEGORIES.map((cat, catIdx) => (
          <div 
            key={catIdx}
            className="p-6 rounded-lg bg-[#0A0C10] border border-[#2D3748] hover:border-emerald-500/60 transition-all space-y-4"
          >
            <h3 className="text-base font-bold text-emerald-400 flex items-center gap-2 border-b border-[#2D3748] pb-3 uppercase tracking-wider">
              <span className="w-2 h-2 bg-emerald-400 inline-block" />
              <span>{cat.title}</span>
            </h3>

            <div className="space-y-3">
              {cat.skills.map((skill, skillIdx) => (
                <div 
                  key={skillIdx}
                  className="p-3.5 rounded bg-[#0F1115] border border-[#2D3748] hover:border-emerald-500/50 transition-colors space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-white">{skill.name}</span>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                      skill.level === 'Master' 
                        ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' 
                        : 'bg-[#131720] text-slate-300 border border-[#2D3748]'
                    }`}>
                      {skill.level === 'Master' ? '精通' : '熟練'}
                    </span>
                  </div>
                  {skill.highlight && (
                    <p className="text-xs text-slate-400 flex items-center gap-1.5 font-sans">
                      <Zap className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>{skill.highlight}</span>
                    </p>
                  )}
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
