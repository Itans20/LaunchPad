import React from 'react';
import { Rocket, ShieldCheck, Globe, Cpu, Radio } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050711] border-t border-[#a855f7]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#a855f7] to-[#06b6d4] p-0.5 shadow-md shadow-purple-500/20">
                <div className="w-full h-full bg-[#0a0e1a] rounded-[10px] flex items-center justify-center">
                  <Rocket className="w-4 h-4 text-[#ddb7ff]" />
                </div>
              </div>
              <span className="font-heading text-xl font-bold tracking-tight text-white">LAUNCHPAD</span>
            </div>

            <p className="text-xs text-[#988d9f] leading-relaxed max-w-sm">
              Extracted from the Stitch LaunchPad design system (`projects/15325208526263569328`). High-contrast obsidian glassmorphism for Next-Gen Aerospace & Satellite Telemetry.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-[#06b6d4]">
              <span className="w-2 h-2 rounded-full bg-[#06b6d4] animate-ping"></span>
              <span>ALL GROUND STATIONS ONLINE</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="text-white font-bold block uppercase tracking-wider">Subsystems</span>
            <ul className="space-y-2 text-[#988d9f]">
              <li><a href="#telemetry" className="hover:text-[#ddb7ff] transition-colors">Real-time Telemetry</a></li>
              <li><a href="#mission-control" className="hover:text-[#ddb7ff] transition-colors">Mission Control Center</a></li>
              <li><a href="#specs" className="hover:text-[#ddb7ff] transition-colors">Avionics Architecture</a></li>
              <li><a href="#fleet" className="hover:text-[#ddb7ff] transition-colors">Orbital Fleet Matrix</a></li>
            </ul>
          </div>

          {/* Col 3: Compliance & Specs */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <span className="text-white font-bold block uppercase tracking-wider">System Specifications</span>
            <div className="p-3 rounded-xl bg-[#0a0e1a] border border-white/5 space-y-1.5 text-[#988d9f]">
              <div className="flex justify-between">
                <span>DESIGN THEME:</span>
                <span className="text-[#ddb7ff]">Orbital Pulse</span>
              </div>
              <div className="flex justify-between">
                <span>HEADLINE FONT:</span>
                <span className="text-[#4cd7f6]">Space Grotesk</span>
              </div>
              <div className="flex justify-between">
                <span>BODY FONT:</span>
                <span className="text-[#4cd7f6]">Inter</span>
              </div>
              <div className="flex justify-between">
                <span>REVISION:</span>
                <span className="text-emerald-400">v4.8.2-ORBITAL</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#988d9f]">
          <p>© 2026 LAUNCHPAD AEROSPACE & TELEMETRY INC. ALL RIGHTS RESERVED.</p>
          <p className="text-[11px] text-[#06b6d4]">POWERED BY STITCH DESIGN SYSTEM & VITE + TAILWIND</p>
        </div>

      </div>
    </footer>
  );
}
