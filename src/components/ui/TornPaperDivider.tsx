import React from "react";

interface TornPaperDividerProps {
  color?: string; // The color of the paper (top color)
  bgColor?: string; // The color behind the tear (bottom color)
  flipY?: boolean; // Flip the tear upside down
}

export default function TornPaperDivider({ color = "#FAF3E0", bgColor = "transparent", flipY = false }: TornPaperDividerProps) {
  return (
    <div className={`w-full overflow-hidden leading-none z-20 relative flex ${flipY ? "rotate-180" : ""}`} style={{ backgroundColor: bgColor }}>
      <svg 
        className="block w-full h-12 md:h-16" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
      >
        {/* Fibrous/White torn paper edge layer */}
        <path 
          d="M0,120 L0,15 C80,35 150,5 250,25 C350,45 420,10 520,30 C620,50 700,15 800,35 C900,55 980,10 1050,20 C1120,30 1180,5 1200,15 L1200,120 Z" 
          fill="#ffffff" 
          opacity="0.5"
        />
        {/* Main paper layer (slightly offset and rougher) */}
        <path 
          d="M0,120 L0,25 C75,45 145,15 245,35 C345,55 415,20 515,40 C615,60 695,25 795,45 C895,65 975,20 1045,30 C1115,40 1175,15 1200,25 L1200,120 Z" 
          fill={color} 
        />
        {/* Detail jagged bits for organic feel */}
        <path d="M140,20 L150,15 L160,25 Z M410,25 L420,18 L430,28 Z M690,30 L700,22 L710,32 Z M970,25 L980,18 L990,28 Z" fill="#ffffff" opacity="0.4"/>
      </svg>
    </div>
  );
}
