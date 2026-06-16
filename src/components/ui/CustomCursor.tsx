"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heartTypes = [
  "text-[#F9C5D1] fill-current",
  "text-[#D4AF37] stroke-current fill-transparent stroke-[3px]",
  "text-[#E8A5B0] fill-current",
  "text-white fill-current opacity-70",
];

type Trail = {
  id: number;
  x: number;
  y: number;
  type: string;
  size: number;
  randomX: number;
  randomY: number;
  randomRotation: number;
  randomRotationEnd: number;
};

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const mouseRef = useRef({ x: -100, y: -100 });
  const [trails, setTrails] = useState<Trail[]>([]);
  const counterRef = useRef(0);

  useEffect(() => {
    const createHeart = (x: number, y: number) => {
      const type = heartTypes[Math.floor(Math.random() * heartTypes.length)];
      const size = Math.random() * 18 + 12;
      setTrails((prev) => {
        const next = [
          ...prev,
          {
            id: counterRef.current++,
            x,
            y,
            type,
            size,
            randomX: (Math.random() - 0.5) * 60,
            randomY: -(Math.random() * 60 + 30),
            randomRotation: Math.random() * 60 - 30,
            randomRotationEnd: Math.random() * 80 - 40,
          },
        ];
        // Hard cap at 12 — any more causes visible jank
        return next.length > 12 ? next.slice(next.length - 12) : next;
      });
    };

    let lastEmit = 0;
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      mouseRef.current = { x: e.clientX, y: e.clientY };

      // Throttle: only emit one heart every 80ms on move
      const now = Date.now();
      if (now - lastEmit > 80) {
        lastEmit = now;
        if (Math.random() > 0.4) createHeart(e.clientX, e.clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Idle emission — once every 400ms (not 150ms!)
    const idleInterval = setInterval(() => {
      if (mouseRef.current.x > 0 && Math.random() > 0.5) {
        createHeart(mouseRef.current.x, mouseRef.current.y);
      }
    }, 400);

    // Cleanup trails every 150ms
    const cleanupInterval = setInterval(() => {
      setTrails((prev) => (prev.length > 0 ? prev.slice(1) : prev));
    }, 150);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(idleInterval);
      clearInterval(cleanupInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden hidden md:block">
      {/* Cursor dot */}
      <motion.div
        className="absolute top-0 left-0 w-5 h-5 bg-gradient-to-tr from-[#F9C5D1] to-[#D4AF37] rounded-full opacity-90 shadow-[0_0_12px_rgba(249,197,209,0.8)] border border-white/50"
        animate={{ x: mousePosition.x - 10, y: mousePosition.y - 10 }}
        transition={{ type: "tween", ease: "backOut", duration: 0.08 }}
        style={{ willChange: "transform" }}
      />

      <AnimatePresence>
        {trails.map((trail) => (
          <motion.div
            key={trail.id}
            initial={{
              opacity: 0,
              scale: 0.4,
              x: trail.x - trail.size / 2,
              y: trail.y - trail.size / 2,
              rotate: trail.randomRotation,
            }}
            animate={{
              opacity: [0, 0.9, 0],
              scale: [0.4, 1.1, 0.7],
              x: trail.x - trail.size / 2 + trail.randomX,
              y: trail.y - trail.size / 2 + trail.randomY,
              rotate: trail.randomRotationEnd,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
            className={`absolute top-0 left-0 ${trail.type}`}
            style={{ width: trail.size, height: trail.size, willChange: "transform, opacity" }}
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
