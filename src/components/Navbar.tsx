import React, { useState } from 'react';
import { 
  Sparkles, 
  Briefcase, 
  Award, 
  Code2, 
  QrCode, 
  Menu, 
  X, 
  ChevronRight,
  UserCheck
} from 'lucide-react';
import { MARGEN_PROFILE } from '../data/resumeData';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenExpoModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenExpoModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: '首頁', icon: Sparkles },
    { id: 'experience', label: '職涯歷程', icon: Briefcase },
    { id: 'skills', label: '技術矩陣', icon: Code2 },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0A0C10]/90 backdrop-blur-md border-b border-[#2D3748] text-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Name */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-md bg-[#131720] border border-[#2D3748] flex items-center justify-center font-mono font-bold text-emerald-400 text-sm shadow-md group-hover:border-emerald-500/80 transition-colors">
              ML
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base sm:text-lg text-white tracking-tight">{MARGEN_PROFILE.name}</span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-800/60">
                  {MARGEN_PROFILE.englishName}
                </span>
              </div>
              <p className="text-xs text-slate-400 font-sans hidden sm:block">
                資深後端工程師 • 5 年+ 經驗
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0F1115] p-1.5 rounded-md border border-[#2D3748]">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded text-xs font-mono transition-all duration-150 ${
                    isActive
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/50 font-bold shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-[#131720]'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-400' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Quick Action Buttons (Expo Mode) */}
          <div className="hidden sm:flex items-center gap-2 font-mono">
            <button
              onClick={onOpenExpoModal}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#131720] hover:bg-emerald-950/60 border border-[#2D3748] hover:border-emerald-600/60 text-emerald-400 text-xs font-semibold transition-all"
              title="資訊展現場名片 & QR Code"
            >
              <QrCode className="w-3.5 h-3.5 text-emerald-400" />
              <span>展場名片</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-slate-300 hover:text-white hover:bg-[#131720] focus:outline-none border border-[#2D3748]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0C10] border-b border-[#2D3748] px-4 pt-3 pb-6 space-y-2 font-mono">
          <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider px-2 py-1">
            選單導覽
          </p>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/50 font-bold'
                    : 'text-slate-300 hover:bg-[#131720] hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4 text-emerald-400" />
                  <span>{item.label}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </button>
            );
          })}

          <div className="pt-3 border-t border-[#2D3748] flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenExpoModal();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-[#131720] text-emerald-400 border border-[#2D3748] font-medium text-xs"
            >
              <QrCode className="w-4 h-4 text-emerald-400" />
              <span>打開資訊展 數位名片 & QR</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
