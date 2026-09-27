import React, { useState, useEffect } from 'react';
import { X, Rocket, Flame, CheckCircle, AlertOctagon, RotateCcw, Volume2, VolumeX } from 'lucide-react';

export default function LaunchModal({ isOpen, onClose }) {
  const [countdown, setCountdown] = useState(10);
  const [status, setStatus] = useState('IDLE'); // IDLE, COUNTDOWN, IGNITION, IN_FLIGHT, ORBIT_ACHIEVED
  const [altitude, setAltitude] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    let timer;
    if (status === 'COUNTDOWN') {
      if (countdown > 0) {
        timer = setTimeout(() => setCountdown(c => c - 1), 1000);
      } else {
        setStatus('IGNITION');
        setTimeout(() => setStatus('IN_FLIGHT'), 2000);
      }
    }
    return () => clearTimeout(timer);
  }, [countdown, status]);

  useEffect(() => {
    let flightInterval;
    if (status === 'IN_FLIGHT') {
      flightInterval = setInterval(() => {
        setAltitude(prev => {
          if (prev >= 408) {
            setStatus('ORBIT_ACHIEVED');
            return 408;
          }
          return prev + 24;
        });
      }, 400);
    }
    return () => clearInterval(flightInterval);
  }, [status]);

  if (!isOpen) return null;

  const handleStartCountdown = () => {
    setCountdown(10);
    setAltitude(0);
    setStatus('COUNTDOWN');
  };

  const handleReset = () => {
    setCountdown(10);
    setAltitude(0);
    setStatus('IDLE');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050711]/85 backdrop-blur-2xl">
      
      {/* Modal Box */}
      <div className="relative w-full max-w-2xl bg-[#0a0e1a] border border-[#a855f7]/40 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-purple-950/50 space-y-6 overflow-hidden">
        
        {/* Glow Header Background */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#a855f7] via-[#c084fc] to-[#06b6d4]"></div>

        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#1b1f2c] border border-white/10">
              <Rocket className="w-5 h-5 text-[#a855f7]" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-white">SIMULATED ORBITAL LAUNCH</h3>
              <p className="text-xs font-mono text-[#06b6d4]">MISSION SIMULATION PROTOCOL // MISSION: ORBITAL-PULSE-1</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[#1b1f2c] hover:bg-[#262a37] text-[#988d9f] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Display Visualizer Screen */}
        <div className="relative h-64 rounded-xl bg-gradient-to-b from-[#0f131f] to-[#050711] border border-white/10 p-6 flex flex-col items-center justify-between overflow-hidden">
          
          {/* Background Star field effect */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>

          {/* Status Display Header */}
          <div className="z-10 w-full flex justify-between text-xs font-mono">
            <span className="text-[#988d9f]">TARGET ORBIT: 408 KM (LEO)</span>
            <span className="text-[#4cd7f6] font-bold">CURRENT ALTITUDE: {altitude} KM</span>
          </div>

          {/* Center Rocket Graphic & Status */}
          <div className="z-10 flex flex-col items-center justify-center space-y-3">
            
            {status === 'IDLE' && (
              <div className="text-center space-y-2">
                <Rocket className="w-16 h-16 text-[#ddb7ff] mx-auto animate-bounce" />
                <p className="font-heading font-bold text-white text-lg">SYSTEM READY FOR LAUNCH SEQUENCE</p>
              </div>
            )}

            {status === 'COUNTDOWN' && (
              <div className="text-center space-y-2">
                <span className="font-heading text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#06b6d4]">
                  T- {countdown}
                </span>
                <p className="font-mono text-xs text-[#ddb7ff] animate-pulse">FINAL PRE-FLIGHT VERIFICATIONS</p>
              </div>
            )}

            {status === 'IGNITION' && (
              <div className="text-center space-y-2">
                <Flame className="w-20 h-20 text-amber-500 mx-auto animate-ping" />
                <p className="font-heading font-bold text-amber-400 text-xl tracking-widest">IGNITION & LIFT OFF!</p>
              </div>
            )}

            {status === 'IN_FLIGHT' && (
              <div className="text-center space-y-2">
                <div className="relative">
                  <Rocket className="w-16 h-16 text-[#06b6d4] mx-auto rotate-45 animate-pulse" />
                  <div className="w-4 h-12 bg-gradient-to-b from-amber-500 via-purple-500 to-transparent mx-auto rounded-full blur-sm"></div>
                </div>
                <p className="font-mono text-sm text-[#4cd7f6] font-bold">ASCENDING THROUGH ATMOSPHERE...</p>
              </div>
            )}

            {status === 'ORBIT_ACHIEVED' && (
              <div className="text-center space-y-2">
                <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto animate-scale" />
                <p className="font-heading font-bold text-emerald-400 text-xl">ORBITAL INSERTION SUCCESSFUL!</p>
                <p className="font-mono text-xs text-[#cfc2d6]">PERIGEE: 408 KM | APOGEE: 412 KM</p>
              </div>
            )}

          </div>

          {/* Progress Altitude Bar */}
          <div className="z-10 w-full bg-[#171b28] h-2 rounded-full overflow-hidden border border-white/10">
            <div
              className="h-full bg-gradient-to-r from-[#a855f7] via-[#c084fc] to-[#06b6d4] transition-all duration-300"
              style={{ width: `${(altitude / 408) * 100}%` }}
            ></div>
          </div>

        </div>

        {/* Action Controls */}
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-3 rounded-xl bg-[#1b1f2c] hover:bg-[#262a37] border border-white/10 text-[#cfc2d6] flex items-center gap-2 text-xs font-mono"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-[#06b6d4]" /> : <VolumeX className="w-4 h-4 text-red-400" />}
            <span>AUDIO FX: {soundEnabled ? 'ON' : 'MUTED'}</span>
          </button>

          <div className="flex items-center gap-3">
            {status !== 'IDLE' && (
              <button
                onClick={handleReset}
                className="px-4 py-3 rounded-xl bg-[#1b1f2c] hover:bg-[#262a37] border border-white/10 text-white font-heading font-semibold text-xs flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>RESET</span>
              </button>
            )}

            {status === 'IDLE' && (
              <button
                onClick={handleStartCountdown}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#a855f7] via-[#842bd2] to-[#06b6d4] text-white font-heading font-bold text-sm shadow-xl shadow-purple-500/30 hover:opacity-95 flex items-center gap-2"
              >
                <Rocket className="w-4 h-4" />
                <span>START COUNTDOWN</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
