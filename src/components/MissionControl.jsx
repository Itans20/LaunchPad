import React, { useState, useEffect } from 'react';
import { Radio, Terminal, Sliders, CheckCircle2, AlertTriangle, ShieldCheck, Play, Pause, RefreshCw, Cpu, Layers } from 'lucide-react';

export default function MissionControl() {
  const [activeTab, setActiveTab] = useState('trajectory');
  const [throttle, setThrottle] = useState(85);
  const [stageProgress, setStageProgress] = useState(42);
  const [isRunning, setIsRunning] = useState(true);
  const [logs, setLogs] = useState([
    { id: 1, time: '16:15:02', type: 'INFO', msg: 'Primary avionics handshake established via Deep Space Network.' },
    { id: 2, time: '16:15:05', type: 'TELEMETRY', msg: 'Stage 1 Liquid Oxygen pressure nominal at 4.2 MPa.' },
    { id: 3, time: '16:15:09', type: 'SUCCESS', msg: 'Thruster gimbal alignment verified (Roll: 0.02°, Pitch: -0.01°).' },
    { id: 4, time: '16:15:12', type: 'INFO', msg: 'Downlink throughput synchronized at 1.24 GB/s.' },
  ]);

  // Log simulation
  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      const logTypes = ['INFO', 'TELEMETRY', 'SUCCESS', 'WARN'];
      const msgs = [
        'Hall effect thruster plasma density stable.',
        'Thermal blanket sensor array calibrated.',
        'Orbit insertion tracking lock confirmed by Ground Station Alpha.',
        'Telemetry packet telemetry-v4 handshake verified.',
        'Solar array deployment motor thermal status optimal.'
      ];
      const randomType = logTypes[Math.floor(Math.random() * logTypes.length)];
      const randomMsg = msgs[Math.floor(Math.random() * msgs.length)];
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];

      setLogs(prev => [
        { id: Date.now(), time: timeStr, type: randomType, msg: randomMsg },
        ...prev.slice(0, 15)
      ]);

      setStageProgress(prev => (prev >= 100 ? 15 : prev + 1.5));
    }, 3000);

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <section id="mission-control" className="py-24 relative bg-[#0a0e1a]">
      
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#06b6d4]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06b6d4]/15 border border-[#06b6d4]/30 text-xs font-mono text-[#4cd7f6]">
            <Radio className="w-3.5 h-3.5 text-[#06b6d4] animate-pulse" />
            <span>REAL-TIME FLIGHT CONTROL</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            ORBITAL MISSION CONTROL CENTER
          </h2>
          <p className="text-[#cfc2d6] font-sans max-w-2xl mx-auto text-sm sm:text-base">
            Monitor real-time staging telemetry, throttle plasma outputs, and inspect payload bay sub-systems.
          </p>
        </div>

        {/* Console Container */}
        <div className="rounded-2xl bg-[#0f131f] border border-[#a855f7]/30 shadow-2xl overflow-hidden">
          
          {/* Top Control Bar */}
          <div className="bg-[#171b28] p-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            
            {/* Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto">
              <button
                onClick={() => setActiveTab('trajectory')}
                className={`px-4 py-2 rounded-lg font-heading text-xs font-semibold flex items-center gap-2 transition-all ${
                  activeTab === 'trajectory'
                    ? 'bg-[#a855f7] text-white shadow-lg shadow-purple-500/30'
                    : 'bg-[#1b1f2c] text-[#cfc2d6] hover:text-white'
                }`}
              >
                <Sliders className="w-3.5 h-3.5" /> Trajectory & Staging
              </button>

              <button
                onClick={() => setActiveTab('logs')}
                className={`px-4 py-2 rounded-lg font-heading text-xs font-semibold flex items-center gap-2 transition-all ${
                  activeTab === 'logs'
                    ? 'bg-[#a855f7] text-white shadow-lg shadow-purple-500/30'
                    : 'bg-[#1b1f2c] text-[#cfc2d6] hover:text-white'
                }`}
              >
                <Terminal className="w-3.5 h-3.5" /> Telemetry Console
              </button>

              <button
                onClick={() => setActiveTab('payload')}
                className={`px-4 py-2 rounded-lg font-heading text-xs font-semibold flex items-center gap-2 transition-all ${
                  activeTab === 'payload'
                    ? 'bg-[#a855f7] text-white shadow-lg shadow-purple-500/30'
                    : 'bg-[#1b1f2c] text-[#cfc2d6] hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" /> Payload Diagnostics
              </button>
            </div>

            {/* Run / Pause Live Telemetry Toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsRunning(!isRunning)}
                className="px-3 py-1.5 rounded-lg bg-[#1b1f2c] border border-white/10 hover:border-[#a855f7] text-xs font-mono text-[#ddb7ff] flex items-center gap-1.5 transition-all"
              >
                {isRunning ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
                <span>{isRunning ? 'PAUSE STREAM' : 'RESUME STREAM'}</span>
              </button>
            </div>

          </div>

          {/* Console Body Content */}
          <div className="p-6 sm:p-8">
            
            {/* Tab 1: Trajectory & Staging */}
            {activeTab === 'trajectory' && (
              <div className="space-y-8">
                
                {/* Stage Progress Bar */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#cfc2d6]">STAGE 2 ORBITAL INSERTION PROGRESS</span>
                    <span className="text-[#4cd7f6] font-bold">{Math.round(stageProgress)}% COMPLETE</span>
                  </div>
                  <div className="h-4 w-full bg-[#171b28] rounded-full p-1 border border-white/10 relative overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#a855f7] via-[#c084fc] to-[#06b6d4] rounded-full transition-all duration-500 relative"
                      style={{ width: `${stageProgress}%` }}
                    >
                      <div className="absolute right-0 top-0 bottom-0 w-2 bg-white rounded-full animate-ping"></div>
                    </div>
                  </div>
                </div>

                {/* Staging Timeline Events */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 font-mono text-xs">
                  <div className="p-4 rounded-xl bg-[#171b28] border border-emerald-500/30 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[#988d9f]">T+ 02:40</span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    </div>
                    <p className="font-bold text-white">BOOSTER MECO</p>
                    <span className="text-[10px] text-emerald-400 block">CLEARED & SEPARATED</span>
                  </div>

                  <div className={`p-4 rounded-xl bg-[#171b28] border transition-all ${
                    stageProgress > 30 ? 'border-emerald-500/30' : 'border-[#a855f7]/50 shadow-md shadow-purple-500/20'
                  } space-y-2`}>
                    <div className="flex items-center justify-between">
                      <span className="text-[#988d9f]">T+ 03:15</span>
                      {stageProgress > 30 ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <RefreshCw className="w-4 h-4 text-[#a855f7] animate-spin" />}
                    </div>
                    <p className="font-bold text-white">VACUUM IGNITION</p>
                    <span className="text-[10px] text-[#ddb7ff] block">
                      {stageProgress > 30 ? 'ACTIVE THRUST' : 'BURNING'}
                    </span>
                  </div>

                  <div className={`p-4 rounded-xl bg-[#171b28] border ${
                    stageProgress > 65 ? 'border-emerald-500/30' : 'border-white/10 opacity-70'
                  } space-y-2`}>
                    <div className="flex items-center justify-between">
                      <span className="text-[#988d9f]">T+ 06:10</span>
                      {stageProgress > 65 && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                    </div>
                    <p className="font-bold text-white">FAIRING JETTISON</p>
                    <span className="text-[10px] text-[#988d9f] block">
                      {stageProgress > 65 ? 'EXPOSED TO VOID' : 'PENDING ALTITUDE'}
                    </span>
                  </div>

                  <div className={`p-4 rounded-xl bg-[#171b28] border ${
                    stageProgress > 90 ? 'border-emerald-500/30' : 'border-white/10 opacity-70'
                  } space-y-2`}>
                    <div className="flex items-center justify-between">
                      <span className="text-[#988d9f]">T+ 08:45</span>
                      {stageProgress > 90 && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                    </div>
                    <p className="font-bold text-white">PAYLOAD SEPARATION</p>
                    <span className="text-[10px] text-[#988d9f] block">FINAL INJECTION</span>
                  </div>
                </div>

                {/* Throttle Control Slider */}
                <div className="p-5 rounded-xl bg-[#171b28] border border-white/10 space-y-4">
                  <div className="flex items-center justify-between font-heading text-sm">
                    <span className="text-[#dfe2f3] font-semibold flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-[#06b6d4]" />
                      MAIN THRUSTER THROTTLE OVERRIDE
                    </span>
                    <span className="font-mono text-[#4cd7f6] font-bold text-base">{throttle}% POWER</span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="100"
                    value={throttle}
                    onChange={(e) => setThrottle(e.target.value)}
                    className="w-full h-2 bg-[#0a0e1a] rounded-lg appearance-none cursor-pointer accent-[#a855f7]"
                  />
                  <div className="flex justify-between text-[11px] font-mono text-[#988d9f]">
                    <span>40% (IDLE STABILIZATION)</span>
                    <span>75% (CRUISE)</span>
                    <span>100% (MAXIMUM ISP BURST)</span>
                  </div>
                </div>

              </div>
            )}

            {/* Tab 2: Live Telemetry Console Logs */}
            {activeTab === 'logs' && (
              <div className="space-y-4 font-mono text-xs">
                <div className="bg-[#0a0e1a] border border-white/10 rounded-xl p-4 h-80 overflow-y-auto space-y-2.5">
                  {logs.map((log) => (
                    <div key={log.id} className="flex items-start gap-3 hover:bg-white/5 p-1.5 rounded transition-colors">
                      <span className="text-[#988d9f] shrink-0">[{log.time}]</span>
                      
                      {log.type === 'INFO' && <span className="px-1.5 py-0.5 rounded bg-blue-950 text-blue-400 font-bold text-[10px] shrink-0">INFO</span>}
                      {log.type === 'TELEMETRY' && <span className="px-1.5 py-0.5 rounded bg-purple-950 text-purple-400 font-bold text-[10px] shrink-0">TELEM</span>}
                      {log.type === 'SUCCESS' && <span className="px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 font-bold text-[10px] shrink-0">OK</span>}
                      {log.type === 'WARN' && <span className="px-1.5 py-0.5 rounded bg-amber-950 text-amber-400 font-bold text-[10px] shrink-0">WARN</span>}

                      <span className="text-[#dfe2f3] leading-relaxed">{log.msg}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 3: Payload Diagnostics */}
            {activeTab === 'payload' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="p-5 rounded-xl bg-[#171b28] border border-[#a855f7]/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-sm font-bold text-white">CubeSat Constellation</span>
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  </div>
                  <p className="text-xs text-[#cfc2d6]">12x High-resolution optical micro-satellites for earth telemetry.</p>
                  <div className="pt-2 border-t border-white/10 flex justify-between text-xs font-mono">
                    <span className="text-[#988d9f]">BAY LOCK:</span>
                    <span className="text-emerald-400 font-bold">SECURED</span>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-[#171b28] border border-[#06b6d4]/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-sm font-bold text-white">Deep Space Optical Relay</span>
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  </div>
                  <p className="text-xs text-[#cfc2d6]">Quantum-encrypted laser downlink array for lunar orbital relay.</p>
                  <div className="pt-2 border-t border-white/10 flex justify-between text-xs font-mono">
                    <span className="text-[#988d9f]">POWER ARRAY:</span>
                    <span className="text-[#4cd7f6] font-bold">CHARGED 100%</span>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-[#171b28] border border-amber-500/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-sm font-bold text-white">Atmospheric Probe</span>
                    <AlertTriangle className="w-5 h-5 text-amber-400" />
                  </div>
                  <p className="text-xs text-[#cfc2d6]">Autonomous descent probe equipped with mass spectrometer.</p>
                  <div className="pt-2 border-t border-white/10 flex justify-between text-xs font-mono">
                    <span className="text-[#988d9f]">THERMAL SHIELD:</span>
                    <span className="text-amber-400 font-bold">PRE-HEATING</span>
                  </div>
                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
