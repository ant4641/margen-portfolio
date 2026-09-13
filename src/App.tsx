import React, { useState } from 'react';
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

  const handleNavigateToExperience = (expId: string) => {
    setTargetExpId(expId);
    setActiveTab('experience');
  };

  return (
    <div className="min-h-screen bg-[#0F1115] text-[#E2E8F0] font-sans selection:bg-emerald-500 selection:text-slate-950 bg-geometric-grid">

      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
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
