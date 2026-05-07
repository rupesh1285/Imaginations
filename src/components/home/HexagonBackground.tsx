"use client";
import React, { useMemo } from "react";

export default function HexagonBackground() {
  const hexGrid = useMemo(() => {
    // 1. MUCH larger hexagons for a modern, uncluttered luxury look
    const rows = 8;
    const cols = 12;
    const hexRadius = 120; // Doubled the size
    const hexWidth = Math.sqrt(3) * hexRadius; 
    const hexHeight = 2 * hexRadius; 
    const rowOffset = hexHeight * 0.75; 

    const gradients = ["url(#grad-maroon)", "url(#grad-pink)", "url(#grad-white)"];
    const polygons = [];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const isOffset = row % 2 !== 0;
        const x = col * hexWidth + (isOffset ? hexWidth / 2 : 0) - 100;
        const y = row * rowOffset - 100;

        // 2. ORGANIC COLOR CLUSTERING (Using Sine/Cosine Waves)
        // This creates "veins" of color instead of a random checkerboard
        const wave = Math.sin(row * 0.5) + Math.cos(col * 0.5);
        let gradIndex = 1; // Default to pink
        if (wave > 0.6) gradIndex = 0; // Peaks are maroon
        if (wave < -0.6) gradIndex = 2; // Valleys are white
        
        const points = `
          ${x + hexWidth / 2},${y}
          ${x + hexWidth},${y + hexHeight * 0.25}
          ${x + hexWidth},${y + hexHeight * 0.75}
          ${x + hexWidth / 2},${y + hexHeight}
          ${x},${y + hexHeight * 0.75}
          ${x},${y + hexHeight * 0.25}
        `;

        polygons.push(
          <g key={`${row}-${col}`} className="group">
            {/* Base Color with slight transparency to let background glow through */}
            <polygon
              points={points}
              fill={gradients[gradIndex]}
              className="opacity-80 transition-opacity duration-1000 group-hover:opacity-100"
            />
            
            {/* Sweeping Glass Highlight (Subtle, not a harsh bubble) */}
            <polygon
              points={points}
              fill="url(#elegant-glass)"
              className="pointer-events-none opacity-60"
            />

            {/* Gold Stroke */}
            <polygon
              points={points}
              fill="none"
              stroke="url(#gold-stroke)"
              strokeWidth="3"
              className="pointer-events-none drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]"
            />
          </g>
        );
      }
    }
    return polygons;
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#2A1520] pointer-events-none">
      
      {/* 3. Global Glowing Backlight (Creates depth behind the hexagons) */}
      <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full pointer-events-none z-0 animate-pulse" style={{ background: 'radial-gradient(circle, rgba(232,165,176,0.2) 0%, transparent 70%)' }} />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)' }} />

      <svg className="w-full h-full relative z-10">
        <defs>
          {/* Elegant Metallic Gold */}
          <linearGradient id="gold-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="30%" stopColor="#FFF2CD" />
            <stop offset="50%" stopColor="#AA771C" />
            <stop offset="70%" stopColor="#FFDF73" />
            <stop offset="100%" stopColor="#8A5A19" />
          </linearGradient>

          {/* Elegant Glass Highlight (Linear instead of harsh Radial) */}
          <linearGradient id="elegant-glass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="40%" stopColor="#ffffff" stopOpacity="0.0" />
            <stop offset="60%" stopColor="#000000" stopOpacity="0.0" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.3" />
          </linearGradient>

          {/* Deep Plum / Maroon */}
          <linearGradient id="grad-maroon" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3A222C" />
            <stop offset="100%" stopColor="#1F0F16" />
          </linearGradient>

          {/* Blush Pink */}
          <linearGradient id="grad-pink" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#B27C8C" />
            <stop offset="100%" stopColor="#E8A5B0" />
          </linearGradient>

          {/* Pearl White */}
          <linearGradient id="grad-white" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E3D1D1" />
          </linearGradient>
        </defs>
        
        {hexGrid}
      </svg>

      {/* Bottom Fade-Out */}
      <div className="absolute bottom-0 w-full h-48 bg-gradient-to-t from-[#F5EDED] to-transparent z-20" />
    </div>
  );
}