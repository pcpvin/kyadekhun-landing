import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { HowItWorks } from './components/HowItWorks';
import { MoodExplorer } from './components/MoodExplorer';
import { PersonalizationSection } from './components/PersonalizationSection';
import { Testimonials } from './components/Testimonials';
import { FeatureGrid } from './components/FeatureGrid';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { InteractiveVibeModal } from './components/InteractiveVibeModal';
import { MoodCategory } from './data/landingData';

export const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [activeModalMood, setActiveModalMood] = useState<MoodCategory | undefined>(undefined);

  const handleOpenModalWithMood = (mood?: MoodCategory) => {
    setActiveModalMood(mood);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#08080C] text-white flex flex-col selection:bg-[#8B5CF6]/30 selection:text-white">
      {/* 1. Navigation */}
      <Navbar onOpenModal={() => handleOpenModalWithMood()} />

      {/* Main Page Flow */}
      <main className="flex-grow">
        {/* 2. Hero Section (Includes Real App Experience & 4 Mobile Screens) */}
        <Hero onFindWatch={() => handleOpenModalWithMood()} />

        {/* 3. Problem Section */}
        <ProblemSection />

        {/* 4. Solution Section */}
        <SolutionSection />

        {/* 5. How It Works */}
        <HowItWorks onFindWatch={() => handleOpenModalWithMood()} />

        {/* 6. Mood Discovery Section */}
        <MoodExplorer onSelectMood={(mood) => handleOpenModalWithMood(mood)} />

        {/* 7. Personalization Section */}
        <PersonalizationSection />

        {/* 8. Social Proof / Trust */}
        <Testimonials />

        {/* 9. Feature Grid */}
        <FeatureGrid />

        {/* 10. Final CTA */}
        <FinalCTA onFindWatch={() => handleOpenModalWithMood()} />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* Interactive Discovery Helper Modal */}
      <InteractiveVibeModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialMood={activeModalMood}
      />
    </div>
  );
};

export default App;
