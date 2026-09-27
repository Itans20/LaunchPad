import React from 'react';
import { Rocket, ShieldCheck, ChevronRight, Zap, Play, Terminal } from 'lucide-react';

export default function Hero({ onOpenLaunchModal }) {
  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      
      {/* Background Orbital Plasma Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#a855f7]/20 via-[#c084fc]/10 to-[#06b6d4]/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#06b6d4]/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#313442_1px,transparent_1px),linear-gradient(to_bottom,#313442_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 text-left space-y-8">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b1f2c]/80 border border-[#a855f7]/30 text-xs font-heading font-semibold text-[#ddb7ff] shadow-md shadow-purple-900/30">
              <span className="w-2 h-2 rounded-full bg-[#a855f7] animate-ping"></span>
              <span className="tracking-wider uppercase">ORBITAL PULSE DESIGN SYSTEM // v4.8</span>
              <span className="text-[#06b6d4]">●</span>
              <span className="text-[#cfc2d6]">LEO & DEEP SPACE</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              NEXT-GEN <br />
              <span className="bg-gradient-to-r from-[#ddb7ff] via-[#a855f7] to-[#06b6d4] bg-clip-text text-transparent">
                ORBITAL PROPULSION
              </span> <br />
              & TELEMETRY
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-[#cfc2d6] font-sans max-w-2xl leading-relaxed">
              Engineered with void-grade obsidian glassmorphic architecture, real-time trajectory analytics, and ultra-high ISP plasma propulsion for mission-critical satellite deployment.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenLaunchModal}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#a855f7] via-[#842bd2] to-[#06b6d4] hover:opacity-95 font-heading font-bold text-white text-base shadow-xl shadow-purple-600/30 hover:shadow-purple-500/50 flex items-center gap-3 transform hover:-translate-y-0.5 transition-all group"
              >
                <Rocket className="w-5 h-5 text-white group-hover:rotate-45 transition-transform" />
                <span>LAUNCH SIMULATION</span>
                <ChevronRight className="w-4 h-4 text-[#ddb7ff] group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#specs"
                className="px-7 py-4 rounded-xl bg-[#1b1f2c]/90 hover:bg-[#262a37] border border-white/15 text-white font-heading font-medium text-base flex items-center gap-2 transition-all hover:border-[#a855f7]/50"
              >
                <Terminal className="w-5 h-5 text-[#06b6d4]" />
                <span>EXPLORE SPECS</span>
              </a>
            </div>

            {/* Feature Checkmarks */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-6 text-sm text-[#cfc2d6]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#06b6d4]" />
                <span>99.98% Orbit Reliability</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#a855f7]" />
                <span>3,850s Thruster ISP</span>
              </div>
              <div className="flex items-center gap-2">
                <Play className="w-4 h-4 text-[#c084fc]" />
                <span>Real-Time Downlink</span>
              </div>
            </div>

          </div>

          {/* Right Column: High Orbit Interactive Dashboard Preview */}
          <div className="lg:col-span-5 relative">
            
            {/* Outer Glow Ring */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#a855f7] to-[#06b6d4] rounded-3xl blur-xl opacity-30 group-hover:opacity-100 transition duration-1000"></div>

            <div className="relative rounded-2xl bg-[#0a0e1a]/90 backdrop-blur-2xl border border-white/15 p-6 shadow-2xl space-y-6">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#06b6d4] animate-ping"></div>
                  <span className="font-heading font-semibold text-sm text-white">ORBITAL-1 COMMAND HUB</span>
                </div>
                <span className="text-xs font-mono text-[#988d9f]">REV 4.2.0</span>
              </div>

              {/* Central Graphic: Animated Orbit */}
              <div className="relative h-48 rounded-xl bg-gradient-to-b from-[#1b1f2c] to-[#0f131f] border border-white/10 flex items-center justify-center overflow-hidden">
                <div className="absolute w-36 h-36 rounded-full border border-dashed border-[#a855f7]/40 animate-orbit flex items-center justify-center">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#06b6d4] shadow-md shadow-cyan-400"></div>
                </div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#842bd2] to-[#a855f7] flex items-center justify-center shadow-lg shadow-purple-500/40">
                  <Rocket className="w-8 h-8 text-white rotate-45" />
                </div>
                <div className="absolute bottom-3 left-4 text-[11px] font-mono text-[#4cd7f6]">
                  TRAJECTORY: HEO &rarr; LEO TRANSIT
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-[#171b28] border border-white/5 space-y-1">
                  <span className="text-[#988d9f] block">PAYLOAD BAY</span>
                  <span className="text-white font-bold text-sm">22,500 KG</span>
                </div>
                <div className="p-3 rounded-lg bg-[#171b28] border border-white/5 space-y-1">
                  <span className="text-[#988d9f] block">THRUSTERS</span>
                  <span className="text-[#ddb7ff] font-bold text-sm">4x HALL PLASMA</span>
                </div>
                <div className="p-3 rounded-lg bg-[#171b28] border border-white/5 space-y-1">
                  <span className="text-[#988d9f] block">INSERTION TIME</span>
                  <span className="text-[#4cd7f6] font-bold text-sm">T+ 08:42 MIN</span>
                </div>
                <div className="p-3 rounded-lg bg-[#171b28] border border-white/5 space-y-1">
                  <span className="text-[#988d9f] block">STATUS</span>
                  <span className="text-emerald-400 font-bold text-sm">READY FOR STAGING</span>
                </div>
              </div>

              {/* Action Button inside widget */}
              <button 
                onClick={onOpenLaunchModal}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#a855f7]/20 to-[#06b6d4]/20 hover:from-[#a855f7]/30 hover:to-[#06b6d4]/30 border border-[#a855f7]/40 text-[#ddb7ff] font-heading font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <span>TEST ENGINE IGNITION</span>
                <Zap className="w-4 h-4 text-[#06b6d4]" />
              </button>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
