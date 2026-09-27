import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TelemetryTicker from './components/TelemetryTicker';
import Hero from './components/Hero';
import MissionControl from './components/MissionControl';
import InteractiveSpecs from './components/InteractiveSpecs';
import FleetMatrix from './components/FleetMatrix';
import LaunchModal from './components/LaunchModal';
import Footer from './components/Footer';

export default function App() {
  const [isLaunchModalOpen, setIsLaunchModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0f131f] text-[#dfe2f3] font-sans selection:bg-[#a855f7] selection:text-white relative">
      
      {/* Navigation Header */}
      <Navbar onOpenLaunchModal={() => setIsLaunchModalOpen(true)} />

      {/* Main Content */}
      <main>
        <Hero onOpenLaunchModal={() => setIsLaunchModalOpen(true)} />
        <TelemetryTicker />
        <MissionControl />
        <InteractiveSpecs />
        <FleetMatrix onOpenLaunchModal={() => setIsLaunchModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Launch Modal */}
      <LaunchModal
        isOpen={isLaunchModalOpen}
        onClose={() => setIsLaunchModalOpen(false)}
      />

    </div>
  );
}
