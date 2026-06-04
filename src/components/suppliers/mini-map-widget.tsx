"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Target } from "lucide-react";

interface MiniMapWidgetProps {
  selectedDivision: string;
  onSelect: (division: string) => void;
}

const HUBS = [
  { id: "Dhaka", x: 150, y: 150 },
  { id: "Chittagong", x: 230, y: 220 },
  { id: "Sylhet", x: 220, y: 80 },
  { id: "Khulna", x: 80, y: 210 },
  { id: "Rajshahi", x: 60, y: 110 },
  { id: "Barisal", x: 140, y: 230 },
];

export function MiniMapWidget({ selectedDivision, onSelect }: MiniMapWidgetProps) {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <div className="relative w-full aspect-square bg-[#0A3622] rounded-sm overflow-hidden flex flex-col p-6 group transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 shadow-[0_1px_3px_rgba(10,54,34,0.04)] hover:shadow-[0_32px_64px_-16px_rgba(10,54,34,0.08)]">
      {/* Header */}
      <div className="flex justify-between items-start z-10">
        <div>
          <h3 className="text-[#FDFDFB] font-display tracking-tight text-lg">Sourcing Radar</h3>
          <p className="text-[#D4AF37] font-mono text-[11px] uppercase tracking-widest mt-1">Live Locator System</p>
        </div>
        <div className="p-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
          <Target className="w-4 h-4 text-[#D4AF37]" />
        </div>
      </div>

      {/* Map Area */}
      <div className="flex-1 relative mt-6 border border-white/5 bg-black/20 rounded-sm overflow-hidden">
        <svg viewBox="0 0 300 300" className="w-full h-full">
          {/* Radar grids */}
          <circle cx="150" cy="150" r="120" fill="none" stroke="rgba(212, 175, 55, 0.1)" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="150" cy="150" r="80" fill="none" stroke="rgba(212, 175, 55, 0.15)" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="150" cy="150" r="40" fill="none" stroke="rgba(212, 175, 55, 0.2)" strokeWidth="1" strokeDasharray="4 4" />
          
          {/* Crosshairs */}
          <line x1="150" y1="30" x2="150" y2="270" stroke="rgba(253, 253, 251, 0.05)" strokeWidth="1" />
          <line x1="30" y1="150" x2="270" y2="150" stroke="rgba(253, 253, 251, 0.05)" strokeWidth="1" />

          {/* Radar Sweep Animation */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            style={{ originX: "150px", originY: "150px" }}
          >
            <path
              d="M 150 150 L 150 30 A 120 120 0 0 1 270 150 Z"
              fill="url(#radar-gradient)"
            />
          </motion.g>
          
          <defs>
            <linearGradient id="radar-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(212, 175, 55, 0.2)" />
              <stop offset="100%" stopColor="rgba(212, 175, 55, 0)" />
            </linearGradient>
            
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Connection Lines */}
          {HUBS.filter(h => h.id !== "Dhaka").map(hub => {
            const isRelated = selectedDivision === hub.id || selectedDivision === "Dhaka" || (!selectedDivision);
            return (
              <line
                key={`line-${hub.id}`}
                x1={150}
                y1={150}
                x2={hub.x}
                y2={hub.y}
                stroke={isRelated ? "rgba(212, 175, 55, 0.3)" : "rgba(253, 253, 251, 0.05)"}
                strokeWidth={selectedDivision === hub.id ? "1.5" : "1"}
                strokeDasharray="2 4"
                className="transition-all duration-500"
              />
            );
          })}

          {/* Nodes */}
          {HUBS.map((hub) => {
            const isSelected = selectedDivision === hub.id;
            const isHovered = hoveredNode === hub.id;
            const isActive = isSelected || isHovered;
            
            return (
              <g
                key={hub.id}
                className="cursor-pointer outline-none"
                onMouseEnter={() => setHoveredNode(hub.id)}
                onMouseLeave={() => setHoveredNode(null)}
                onClick={() => onSelect(hub.id)}
              >
                {/* Ping Animation for Selected/Hovered */}
                {isActive && (
                  <motion.circle
                    cx={hub.x}
                    cy={hub.y}
                    r="14"
                    fill="transparent"
                    stroke="rgba(212, 175, 55, 0.6)"
                    strokeWidth="1"
                    animate={{ scale: [1, 2], opacity: [1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                  />
                )}
                
                {/* Node Outer Ring */}
                <circle
                  cx={hub.x}
                  cy={hub.y}
                  r={isActive ? "8" : "6"}
                  fill="rgba(10, 54, 34, 0.8)"
                  stroke={isActive ? "#D4AF37" : "rgba(253, 253, 251, 0.3)"}
                  strokeWidth="2"
                  className="transition-all duration-300"
                  filter={isActive ? "url(#glow)" : undefined}
                />
                
                {/* Node Inner Dot */}
                <circle
                  cx={hub.x}
                  cy={hub.y}
                  r="3"
                  fill={isActive ? "#FDFDFB" : "rgba(253, 253, 251, 0.6)"}
                  className="transition-all duration-300"
                />

                {/* Node Label */}
                {isActive && (
                  <motion.g
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="pointer-events-none"
                  >
                    <rect
                      x={hub.x - 40}
                      y={hub.y - 32}
                      width="80"
                      height="20"
                      rx="2"
                      fill="rgba(253, 253, 251, 0.95)"
                      filter="drop-shadow(0 4px 6px rgba(0,0,0,0.1))"
                    />
                    <text
                      x={hub.x}
                      y={hub.y - 18}
                      textAnchor="middle"
                      className="text-[10px] font-mono uppercase tracking-widest fill-[#0A3622] font-bold"
                    >
                      {hub.id}
                    </text>
                  </motion.g>
                )}
              </g>
            );
          })}
        </svg>
        
        {/* Coordinates overlay for aesthetics */}
        <div className="absolute bottom-3 right-3 text-right pointer-events-none">
          <div className="font-mono text-[9px] text-[#FDFDFB]/30 uppercase tracking-widest">Lat 23.8103° N</div>
          <div className="font-mono text-[9px] text-[#FDFDFB]/30 uppercase tracking-widest">Lon 90.4125° E</div>
        </div>
      </div>
      
      {/* Footer Info */}
      <div className="z-10 mt-5 pt-4 border-t border-white/10 flex justify-between items-end">
        <div>
          <div className="font-mono text-[10px] text-[#FDFDFB]/50 uppercase tracking-widest mb-1">Network Status</div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
            <span className="font-display text-sm text-[#FDFDFB]">Active</span>
          </div>
        </div>
        <div className="text-right">
          <div className="font-mono text-[10px] text-[#FDFDFB]/50 uppercase tracking-widest mb-1">Nodes Online</div>
          <div className="font-mono text-sm text-[#D4AF37]">0{HUBS.length}</div>
        </div>
      </div>
    </div>
  );
}
