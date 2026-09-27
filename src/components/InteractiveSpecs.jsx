import React, { useState } from 'react';
import { Cpu, Flame, Shield, Sun, Database, CheckCircle, Info } from 'lucide-react';

export default function InteractiveSpecs() {
  const [selectedHotspot, setSelectedHotspot] = useState('thruster');

  const hotspots = [
    {
      id: 'thruster',
      name: 'Hall-Effect Plasma Thruster',
      icon: Flame,
      color: '#a855f7',
      top: '80%',
      left: '50%',
      desc: 'High-efficiency xenon plasma thruster cluster providing 3,850s specific impulse (ISP) with micro-Newton precision vectoring for orbital adjustment.',
      specs: [
        { label: 'ISP Efficiency', val: '3,850 seconds' },
        { label: 'Propellant', val: 'High-purity Xenon Gas' },
        { label: 'Thrust Range', val: '2.5 N to 45 N Continuous' }
      ]
    },
    {
      id: 'heatshield',
      name: 'Carbon-Carbon Heat Shield',
      icon: Shield,
      color: '#06b6d4',
      top: '15%',
      left: '50%',
      desc: 'Lightweight reinforced carbon-carbon ablative heat shield designed to withstand hyper-velocity atmospheric entry temperatures up to 3,200°C.',
      specs: [
        { label: 'Max Thermal Load', val: '3,200°C Peak' },
        { label: 'Thickness', val: '45 mm Composite' },
        { label: 'Ablation Rate', val: '< 0.02 mm/sec' }
      ]
    },
    {
      id: 'avionics',
      name: 'Quantum Avionics Core',
      icon: Cpu,
      color: '#c084fc',
      top: '40%',
      left: '50%',
      desc: 'Triple-redundant radiation-hardened flight processing matrix with real-time autonomous trajectory correction and satellite rendezvous positioning.',
      specs: [
        { label: 'Redundancy', val: 'TMR 3-Way Fault Tolerant' },
        { label: 'Clock Speed', val: '3.2 GHz Optical Bus' },
        { label: 'Rad-Hardening', val: '> 300 kRad (Si)' }
      ]
    },
    {
      id: 'solar',
      name: 'Gallium Arsenide Solar Array',
      icon: Sun,
      color: '#4cd7f6',
      top: '55%',
      left: '25%',
      desc: 'Ultra-thin, deployable solar wings utilizing 32% efficiency triple-junction GaAs solar cells with active sun-tracking gimbals.',
      specs: [
        { label: 'Total Output', val: '35.4 kW' },
        { label: 'Cell Efficiency', val: '32.5%' },
        { label: 'Deployment Mechanism', val: 'Shape Memory Alloy' }
      ]
    },
    {
      id: 'propellant',
      name: 'Cryogenic Tankage Matrix',
      icon: Database,
      color: '#ddb7ff',
      top: '65%',
      left: '75%',
      desc: 'Isogrid-machined aluminum-lithium tanks wrapped in high-density carbon fiber overwrap pressure vessel (COPV) insulation.',
      specs: [
        { label: 'Operating Pressure', val: '320 Bar' },
        { label: 'Boil-off Suppression', val: 'Active Zero-Boil-Off Cryo-Cooler' },
        { label: 'Structural Margin', val: '2.2x Yield' }
      ]
    }
  ];

  const activeData = hotspots.find(h => h.id === selectedHotspot) || hotspots[0];

  return (
    <section id="specs" className="py-24 relative bg-[#0f131f] border-t border-[#a855f7]/20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b1f2c] border border-[#a855f7]/40 text-xs font-mono text-[#ddb7ff]">
            <Cpu className="w-4 h-4 text-[#a855f7]" />
            <span>INTERACTIVE AVIONICS ARCHITECTURE</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            SPACECRAFT BLUEPRINT & SPECS
          </h2>
          <p className="text-[#cfc2d6] font-sans max-w-2xl mx-auto text-sm sm:text-base">
            Click on any telemetry hot-spot to inspect the subsystem specifications.
          </p>
        </div>

        {/* Blueprint & Specs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Blueprint Hotspot Visualizer */}
          <div className="lg:col-span-7 relative h-[520px] bg-[#0a0e1a] rounded-2xl border border-white/10 p-6 flex items-center justify-center overflow-hidden">
            
            {/* Grid blueprint background */}
            <div className="absolute inset-0 bg-[radial-gradient(#313442_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>

            {/* Stylized Rocket Silhouette (SVG/CSS) */}
            <div className="relative w-48 h-[440px] border-2 border-dashed border-[#a855f7]/30 rounded-t-full rounded-b-3xl bg-[#1b1f2c]/50 flex flex-col items-center justify-between p-4 shadow-2xl">
              
              {/* Nose cone */}
              <div className="w-16 h-20 rounded-t-full bg-gradient-to-b from-[#06b6d4]/40 to-[#a855f7]/20 border-b border-white/10 flex items-center justify-center">
                <span className="text-[10px] font-mono text-[#4cd7f6]">FAIRING</span>
              </div>

              {/* Body */}
              <div className="w-full flex-1 border-y border-white/10 my-2 flex items-center justify-center bg-gradient-to-b from-transparent via-[#a855f7]/5 to-transparent">
                <span className="text-[11px] font-heading font-bold text-[#988d9f] tracking-widest rotate-90 uppercase">
                  LAUNCHPAD PRO
                </span>
              </div>

              {/* Nozzle */}
              <div className="w-24 h-12 bg-gradient-to-t from-[#a855f7]/40 to-transparent rounded-b-lg border-t border-purple-500/30 flex items-center justify-center">
                <div className="w-8 h-4 bg-[#06b6d4] rounded-full animate-ping opacity-75"></div>
              </div>

            </div>

            {/* Interactive Hotspot Buttons */}
            {hotspots.map((spot) => {
              const IconComp = spot.icon;
              const isSelected = spot.id === selectedHotspot;
              return (
                <button
                  key={spot.id}
                  onClick={() => setSelectedHotspot(spot.id)}
                  style={{ top: spot.top, left: spot.left }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border transition-all duration-300 group flex items-center justify-center ${
                    isSelected
                      ? 'bg-[#a855f7] border-white shadow-xl shadow-purple-500/60 scale-125 z-20'
                      : 'bg-[#0a0e1a]/90 border-white/20 hover:border-[#a855f7] hover:scale-110 z-10'
                  }`}
                >
                  <IconComp className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-[#ddb7ff]'}`} />
                  <span className="absolute left-full ml-3 px-2 py-1 rounded bg-[#0a0e1a] border border-white/10 text-[10px] font-mono text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    {spot.name}
                  </span>
                </button>
              );
            })}

          </div>

          {/* Detailed Inspector Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#0a0e1a] border border-[#a855f7]/40 p-8 shadow-2xl space-y-6">
              
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="p-3 rounded-xl bg-[#1b1f2c] border border-white/10">
                  <activeData.icon className="w-6 h-6 text-[#a855f7]" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#06b6d4] uppercase">SUBSYSTEM DIAGNOSTIC</span>
                  <h3 className="font-heading text-xl font-bold text-white">{activeData.name}</h3>
                </div>
              </div>

              <p className="text-sm text-[#cfc2d6] font-sans leading-relaxed">
                {activeData.desc}
              </p>

              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono text-[#988d9f] uppercase tracking-wider block">KEY SPECIFICATIONS</span>
                
                {activeData.specs.map((spec, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-[#171b28] border border-white/5 flex items-center justify-between font-mono text-xs">
                    <span className="text-[#988d9f]">{spec.label}:</span>
                    <span className="text-[#4cd7f6] font-bold">{spec.val}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400 font-mono">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>FLIGHT HARDWARE VERIFIED & TESTED</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
