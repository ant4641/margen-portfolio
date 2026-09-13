import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { EssentialHome } from './components/EssentialHome';
import { CareerTimeline } from './components/CareerTimeline';
import { TechStackMatrix } from './components/TechStackMatrix';
import { SideProjectSection } from './components/SideProjectSection';
import { HighlightDetailModal } from './components/HighlightDetailModal';
import { ExpoCardModal } from './components/ExpoCardModal';
import { Footer } from './components/Footer';
import { HighlightProject, ESSENTIAL_HIGHLIGHTS } from './data/resumeData';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [targetExpId, setTargetExpId] = useState<string | null>(null);
  const [selectedHighlight, setSelectedHighlight] = useState<HighlightProject | null>(null);
  const [expoModalOpen, setExpoModalOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('margen_theme');
      if (saved === 'light' || saved === 'dark') return saved;
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
    }
    localStorage.setItem('margen_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const [isPlayingMusic, setIsPlayingMusic] = useState<boolean>(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.35; // 舒適的環境音量
    }
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlayingMusic) {
      audioRef.current.pause();
      setIsPlayingMusic(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlayingMusic(true);
      }).catch((err) => {
        console.warn("Audio autoplay policy:", err);
      });
    }
  };

  const handleNavigateToExperience = (expId: string) => {
    setTargetExpId(expId);
    setActiveTab('experience');
  };

  return (
    <div className="min-h-screen bg-[#0F1115] text-[#E2E8F0] font-sans selection:bg-emerald-500 selection:text-slate-950 bg-geometric-grid transition-colors duration-200">

      {/* Background Audio Player */}
      <audio
        ref={audioRef}
        src="https://img.ai365.fans/artworks/e7da7802-c1ae-40df-bafc-d2c48866b21c/nkbs33np4d.mp3"
        loop
        preload="auto"
      />

      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        theme={theme}
        onToggleTheme={toggleTheme}
        isPlayingMusic={isPlayingMusic}
        onToggleMusic={toggleMusic}
        onOpenExpoModal={() => setExpoModalOpen(true)}
      />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
        {activeTab === 'home' && (
          <EssentialHome
            onSelectHighlight={(h) => setSelectedHighlight(h)}
            onNavigateTab={(tab) => setActiveTab(tab)}
            onNavigateToExperience={handleNavigateToExperience}
            onOpenExpoModal={() => setExpoModalOpen(true)}
          />
        )}

        {activeTab === 'experience' && (
          <div className="space-y-12">
            <CareerTimeline targetExpId={targetExpId} />
            <SideProjectSection />
          </div>
        )}

        {activeTab === 'skills' && (
          <TechStackMatrix />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigateTab={(tab) => setActiveTab(tab)}
      />

      {/* Modals */}
      <HighlightDetailModal
        highlight={selectedHighlight}
        onClose={() => setSelectedHighlight(null)}
      />

      <ExpoCardModal
        isOpen={expoModalOpen}
        onClose={() => setExpoModalOpen(false)}
      />

    </div>
  );
}
