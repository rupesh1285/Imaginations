"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heartTypes = [
  "text-[#F9C5D1] fill-current", // Soft Pink Solid
  "text-[#4A232E] fill-current opacity-80", // Dark Velvet Solid
  "text-[#D4AF37] stroke-current fill-transparent stroke-[3px]", // Gold Outline
  "text-[#E8A5B0] fill-current", // Darker Pink Solid
];

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trails, setTrails] = useState<{ id: number; x: number; y: number; type: string; size: number }[]>([]);

  useEffect(() => {
    let idCounter = 0;
    
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Throttle trail creation slightly
      if (Math.random() > 0.6) {
        setTrails((prev) => {
          const type = heartTypes[Math.floor(Math.random() * heartTypes.length)];
          const size = Math.random() * 20 + 20; // 20px to 40px

          const newTrails = [...prev, { id: idCounter++, x: e.clientX, y: e.clientY, type, size }];
          if (newTrails.length > 20) newTrails.shift(); // Keep max 20 trails to prevent lag
          return newTrails;
        });
      }
    };

    window.addEventListener("mousemove", updateMousePosition);

    // Cleanup old trails automatically if mouse stops
    const interval = setInterval(() => {
      setTrails((prev) => (prev.length > 0 ? prev.slice(1) : prev));
    }, 100);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden hidden md:block">
      {/* Main Cursor Dot */}
      <motion.div
        className="absolute top-0 left-0 w-5 h-5 bg-[#F9C5D1] rounded-full mix-blend-multiply opacity-60 blur-[1px] border border-[#4A232E]/20"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      
      {/* Sparkle Trails */}
      <AnimatePresence>
        {trails.map((trail) => (
          <motion.div
            key={trail.id}
            initial={{ opacity: 0.8, scale: 1, x: trail.x - trail.size/2, y: trail.y - trail.size/2, rotate: Math.random() * 60 - 30 }}
            animate={{ opacity: 0, scale: 0, y: trail.y - 40, rotate: Math.random() * 100 - 50 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className={`absolute top-0 left-0 ${trail.type}`}
            style={{ width: trail.size, height: trail.size }}
          >
             <svg viewBox="0 0 24 24" className="w-full h-full drop-shadow-md">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
             </svg>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
