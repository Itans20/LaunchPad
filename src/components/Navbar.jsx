import React, { useState, useEffect } from 'react';
import { Rocket, Activity, ShieldCheck, Compass, Radio, Layers } from 'lucide-react';

export default function Navbar({ onOpenLaunchModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [utcTime, setUtcTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    const timer = setInterval(() => {
      const now = new Date();
      setUtcTime(now.toUTCString().split(' ')[4] + ' UTC');
    }, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0f131f]/85 backdrop-blur-xl border-b border-[#a855f7]/20 py-3 shadow-lg shadow-purple-950/20' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#a855f7] via-[#7c3aed] to-[#06b6d4] p-0.5 shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-all">
              <div className="w-full h-full bg-[#0a0e1a] rounded-[10px] flex items-center justify-center">
                <Rocket className="w-5 h-5 text-[#ddb7ff] group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading text-xl font-bold tracking-tight bg-gradient-to-r from-white via-[#dfe2f3] to-[#ddb7ff] bg-clip-text text-transparent">
                  LAUNCHPAD
                </span>
                <span className="text-[10px] font-heading font-semibold uppercase px-2 py-0.5 rounded-full bg-[#06b6d4]/15 border border-[#06b6d4]/40 text-[#4cd7f6]">
                  PRO
                </span>
              </div>
              <p className="text-[11px] font-heading text-[#988d9f] tracking-widest uppercase">
                Orbital Propulsion Systems
              </p>
            </div>
          </a>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#telemetry" className="text-sm font-medium text-[#cfc2d6] hover:text-[#ddb7ff] transition-colors flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-[#a855f7]" /> Telemetry
            </a>
            <a href="#mission-control" className="text-sm font-medium text-[#cfc2d6] hover:text-[#ddb7ff] transition-colors flex items-center gap-1.5">
              <Radio className="w-4 h-4 text-[#06b6d4]" /> Mission Control
            </a>
            <a href="#specs" className="text-sm font-medium text-[#cfc2d6] hover:text-[#ddb7ff] transition-colors flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#c084fc]" /> Avionics & Specs
            </a>
            <a href="#fleet" className="text-sm font-medium text-[#cfc2d6] hover:text-[#ddb7ff] transition-colors flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-[#4cd7f6]" /> Fleet Tiers
            </a>
          </nav>

          {/* Telemetry Clock & CTA */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex flex-col items-end border-r border-white/10 pr-4">
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#06b6d4]">
                <span className="w-2 h-2 rounded-full bg-[#06b6d4] animate-ping"></span>
                <span>SYSTEM NOMINAL</span>
              </div>
              <span className="text-xs font-mono text-[#988d9f]">{utcTime || '16:15:00 UTC'}</span>
            </div>

            <button
              onClick={onOpenLaunchModal}
              className="relative group overflow-hidden rounded-xl p-px font-heading font-semibold text-sm text-white shadow-lg shadow-purple-500/25 active:scale-95 transition-transform"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#a855f7] via-[#c084fc] to-[#06b6d4] group-hover:opacity-90 transition-opacity"></span>
              <span className="relative block px-5 py-2.5 rounded-[11px] bg-[#0a0e1a]/80 backdrop-blur-md group-hover:bg-transparent transition-colors flex items-center gap-2">
                <Rocket className="w-4 h-4 text-[#ddb7ff] group-hover:text-white" />
                <span>INITIATE LAUNCH</span>
              </span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
