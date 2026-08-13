import React from 'react';
import { MARGEN_PROFILE } from '../data/resumeData';
import { Mail, Phone, QrCode, Sparkles, Heart } from 'lucide-react';

interface FooterProps {
  onNavigateTab: (tabId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTab }) => {
  return (
    <footer className="mt-16 bg-[#0A0C10] border-t border-[#2D3748] text-slate-400 text-xs py-10 px-4 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-sans font-medium">
          <button onClick={() => onNavigateTab('home')} className="hover:text-emerald-400 transition-colors">
            首頁
          </button>
          <button onClick={() => onNavigateTab('experience')} className="hover:text-emerald-400 transition-colors">
            職涯歷程
          </button>
          <button onClick={() => onNavigateTab('skills')} className="hover:text-emerald-400 transition-colors">
            技術矩陣
          </button>
        </div>

        {/* Contact Info (Email & Phone) */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${MARGEN_PROFILE.contact.email}`}
            className="px-3.5 py-1.5 rounded bg-[#131720] hover:bg-[#1C232E] border border-[#2D3748] text-slate-200 hover:text-emerald-400 transition-colors flex items-center gap-2 text-xs"
            title="Email"
          >
            <Mail className="w-4 h-4 text-emerald-400" />
            <span>{MARGEN_PROFILE.contact.email}</span>
          </a>
          <a
            href={`tel:${MARGEN_PROFILE.contact.phone}`}
            className="px-3.5 py-1.5 rounded bg-[#131720] hover:bg-[#1C232E] border border-[#2D3748] text-slate-200 hover:text-emerald-400 transition-colors flex items-center gap-2 text-xs"
            title="Phone"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>{MARGEN_PROFILE.contact.phone}</span>
          </a>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-[#2D3748] text-center text-slate-500 text-[11px] font-sans">
        © 2026 {MARGEN_PROFILE.name} ({MARGEN_PROFILE.englishName}). All Rights Reserved.
      </div>
    </footer>
  );
};
