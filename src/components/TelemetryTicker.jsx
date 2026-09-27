import React, { useState, useEffect } from 'react';
import { Gauge, ShieldAlert, Cpu, Orbit, Signal, Flame } from 'lucide-react';

export default function TelemetryTicker() {
  const [telemetry, setTelemetry] = useState({
    altitude: 408.2,
    velocity: 27580,
    inclination: 51.6,
    bayTemp: 22.4,
    downlink: 1.24,
    fuelLevel: 98.6
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry(prev => ({
        altitude: +(prev.altitude + (Math.random() * 0.2 - 0.1)).toFixed(2),
        velocity: Math.floor(prev.velocity + (Math.random() * 10 - 5)),
        inclination: 51.64,
        bayTemp: +(prev.bayTemp + (Math.random() * 0.4 - 0.2)).toFixed(1),
        downlink: +(prev.downlink + (Math.random() * 0.04 - 0.02)).toFixed(2),
        fuelLevel: +(Math.max(90, prev.fuelLevel - 0.01)).toFixed(2)
      }));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="telemetry" className="w-full bg-[#0a0e1a]/90 border-y border-[#a855f7]/20 backdrop-blur-md py-3 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
        
        {/* Item 1 */}
        <div className="flex items-center gap-2">
          <Orbit className="w-4 h-4 text-[#a855f7] animate-spin-slow" />
          <span className="text-[#988d9f]">ALTITUDE:</span>
          <span className="text-[#ddb7ff] font-bold">{telemetry.altitude} KM</span>
          <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-1 rounded">LEO ACTIVE</span>
        </div>

        {/* Item 2 */}
        <div className="flex items-center gap-2">
          <Gauge className="w-4 h-4 text-[#06b6d4]" />
          <span className="text-[#988d9f]">VELOCITY:</span>
          <span className="text-[#4cd7f6] font-bold">{telemetry.velocity.toLocaleString()} KM/H</span>
        </div>

        {/* Item 3 */}
        <div className="flex items-center gap-2">
          <Flame className="w-4 h-4 text-[#c084fc]" />
          <span className="text-[#988d9f]">BAY TEMP:</span>
          <span className="text-[#ddb8ff] font-bold">{telemetry.bayTemp} °C</span>
        </div>

        {/* Item 4 */}
        <div className="flex items-center gap-2">
          <Signal className="w-4 h-4 text-[#06b6d4]" />
          <span className="text-[#988d9f]">DOWNLINK:</span>
          <span className="text-[#4cd7f6] font-bold">{telemetry.downlink} GB/S</span>
        </div>

        {/* Item 5 */}
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-[#a855f7]" />
          <span className="text-[#988d9f]">FUEL ARRAY:</span>
          <div className="w-16 h-2 bg-[#1b1f2c] rounded-full overflow-hidden border border-white/10">
            <div 
              className="h-full bg-gradient-to-r from-[#a855f7] to-[#06b6d4]"
              style={{ width: `${telemetry.fuelLevel}%` }}
            ></div>
          </div>
          <span className="text-[#ddb7ff]">{telemetry.fuelLevel}%</span>
        </div>

      </div>
    </div>
  );
}
