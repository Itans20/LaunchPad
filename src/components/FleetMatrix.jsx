import React, { useState } from 'react';
import { Rocket, ShieldCheck, Check, Zap, Sparkles, Layers } from 'lucide-react';

export default function FleetMatrix({ onOpenLaunchModal }) {
  const [billingCycle, setBillingCycle] = useState('single');

  const tiers = [
    {
      name: 'CubeSat RideShare Slot',
      badge: 'MICRO-PAYLOAD',
      price: billingCycle === 'single' ? '$4.5M' : '$3.8M',
      unit: '/ launch slot',
      payload: 'Up to 250 KG',
      orbit: 'Sun-Synchronous LEO',
      features: [
        '3U to 24U CubeSat Pod Integration',
        'Standard Spring Deployer System',
        'Downlink Telemetry API Access',
        'Shared Ground Station Relay'
      ],
      cta: 'Book Micro Slot',
      featured: false
    },
    {
      name: 'Heavy-Lift Orbital Insertion',
      badge: 'MOST POPULAR',
      price: billingCycle === 'single' ? '$28.5M' : '$24.2M',
      unit: '/ dedicated launch',
      payload: 'Up to 12,500 KG',
      orbit: 'Geostationary Transfer (GTO)',
      features: [
        'Dedicated 5.2m Payload Fairing',
        'Dual-Burn Vacuum Plasma Engine Stage',
        '24/7 Priority Mission Control Telemetry',
        'Custom Orbit Insertion Window Select',
        'Full Payload Thermal Shielding'
      ],
      cta: 'Reserve Heavy Launch',
      featured: true
    },
    {
      name: 'Constellation Fleet Deployment',
      badge: 'ENTERPRISE FLEET',
      price: billingCycle === 'single' ? '$85.0M' : '$72.5M',
      unit: '/ 4-mission fleet array',
      payload: 'Up to 45,000 KG Total',
      orbit: 'Multi-Plane Orbit Network',
      features: [
        '4x Dedicated Orbital Launches',
        'Autonomous Swarm Deployment Scripting',
        'Quantum Laser Optical Inter-Sat Relay',
        'Dedicated Mission Commander Assignment',
        'Zero-Loss Guarantee Insured Flight'
      ],
      cta: 'Commission Fleet',
      featured: false
    }
  ];

  return (
    <section id="fleet" className="py-24 relative bg-[#0a0e1a]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#06b6d4]/15 border border-[#06b6d4]/30 text-xs font-mono text-[#4cd7f6]">
            <Layers className="w-4 h-4 text-[#06b6d4]" />
            <span>COMMERCIAL PAYLOAD CAPACITY</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            ORBITAL FLEET MATRIX & RESERVATIONS
          </h2>
          <p className="text-[#cfc2d6] font-sans max-w-2xl mx-auto text-sm sm:text-base">
            Transparent payload pricing for micro-satellites, dedicated heavy launches, and orbital fleet constellations.
          </p>

          {/* Cycle Toggle */}
          <div className="pt-4 flex items-center justify-center">
            <div className="p-1 rounded-xl bg-[#1b1f2c] border border-white/10 flex items-center gap-1 font-mono text-xs">
              <button
                onClick={() => setBillingCycle('single')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  billingCycle === 'single' ? 'bg-[#a855f7] text-white font-bold shadow-md' : 'text-[#988d9f] hover:text-white'
                }`}
              >
                SINGLE LAUNCH
              </button>
              <button
                onClick={() => setBillingCycle('fleet')}
                className={`px-4 py-2 rounded-lg flex items-center gap-1.5 transition-all ${
                  billingCycle === 'fleet' ? 'bg-[#a855f7] text-white font-bold shadow-md' : 'text-[#988d9f] hover:text-white'
                }`}
              >
                <span>ANNUAL FLEET CONTRACT</span>
                <span className="px-1.5 py-0.5 rounded bg-[#06b6d4] text-[#0a0e1a] text-[10px] font-bold">SAVE 15%</span>
              </button>
            </div>
          </div>

        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
                tier.featured
                  ? 'bg-[#121836]/90 border-2 border-[#a855f7] shadow-2xl shadow-purple-900/40 scale-105 z-10'
                  : 'bg-[#0f131f]/80 border border-white/10 hover:border-[#a855f7]/40'
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#a855f7] to-[#06b6d4] text-white font-heading font-bold text-xs shadow-lg uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>MISSION RECOMMENDED</span>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <span className="text-[11px] font-mono text-[#4cd7f6] uppercase tracking-wider block">{tier.badge}</span>
                  <h3 className="font-heading text-xl font-bold text-white mt-1">{tier.name}</h3>
                </div>

                <div className="border-y border-white/10 py-4 space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="font-heading text-4xl font-extrabold text-white">{tier.price}</span>
                    <span className="text-xs font-mono text-[#988d9f]">{tier.unit}</span>
                  </div>
                  <div className="flex justify-between text-xs font-mono pt-2 text-[#ddb7ff]">
                    <span>PAYLOAD: {tier.payload}</span>
                    <span>ORBIT: {tier.orbit}</span>
                  </div>
                </div>

                <ul className="space-y-3 font-sans text-xs text-[#cfc2d6]">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#06b6d4] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <button
                  onClick={onOpenLaunchModal}
                  className={`w-full py-3.5 rounded-xl font-heading font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                    tier.featured
                      ? 'bg-gradient-to-r from-[#a855f7] to-[#06b6d4] hover:opacity-95 text-white shadow-lg shadow-purple-500/30'
                      : 'bg-[#1b1f2c] hover:bg-[#262a37] text-white border border-white/15'
                  }`}
                >
                  <Rocket className="w-4 h-4" />
                  <span>{tier.cta}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
