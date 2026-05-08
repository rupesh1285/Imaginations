"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import RoseGoldButton from "../ui/RoseGoldButton";
import { Heart } from "lucide-react";

const Particle = ({ springX, springY }: { springX: any; springY: any }) => {
  const randomFactor = React.useMemo(() => Math.random() * 2 + 1, []);
  const tx = useTransform(springX, (val: number) => val * randomFactor);
  const ty = useTransform(springY, (val: number) => val * randomFactor);
  
  return (
    <motion.div
      className="absolute w-1.5 h-1.5 rounded-full bg-white/40 blur-[1px]"
      initial={{ 
        x: Math.random() * 100 + "%", 
        y: Math.random() * 100 + "%",
        opacity: Math.random() * 0.5 + 0.2
      }}
      animate={{
        x: [null, (Math.random() - 0.5) * 100 + "%"],
        y: [null, (Math.random() - 0.5) * 100 + "%"],
      }}
      style={{ x: tx, y: ty }}
      transition={{
        duration: Math.random() * 20 + 20,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
};

export default function Hero() {
  const { scrollY } = useScroll();
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse Parallax Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for mouse movement
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth - 0.5) * 40);
      mouseY.set((clientY / innerHeight - 0.5) * 40);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      
      {/* 1. Main Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/Background.png" 
          alt="Hero Background" 
          className="w-full h-full object-cover object-center scale-105" 
        />
        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/* 2. Particle Mist Overlay (Mouse Reactive) */}
      {mounted && (
        <div className="absolute inset-0 z-[5] pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <Particle key={i} springX={springX} springY={springY} />
          ))}
        </div>
      )}

      {/* Main Content Container */}
      <div className="max-w-[1100px] w-full mx-auto px-6 relative z-10 pt-44 pb-20 flex flex-col justify-start min-h-[100svh]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Glass Parchment Text Container */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative p-6 md:p-8 backdrop-blur-xl bg-white/15 rounded-[2.5rem] border border-white/30 shadow-[0_20px_80px_rgba(0,0,0,0.1)] overflow-hidden group w-full max-w-lg"
            >
              {/* Animated Inner Glow */}
              <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-gradient-to-br from-white/10 to-transparent rotate-45 pointer-events-none group-hover:translate-x-10 group-hover:translate-y-10 transition-transform duration-1000" />
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/30 mb-5 shadow-sm"
              >
                <span className="font-nunito font-black text-[#5C3A46] tracking-[0.2em] text-[9px] uppercase">✨ Premium Gifting</span>
              </motion.div>
            
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-5xl font-bold leading-[1.1] text-[#3A222C] font-great-vibes drop-shadow-md"
              >
                Gifts that feel like a
                <span className="font-miniver text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#B76E79] via-[#D4AF37] to-[#B76E79] font-normal block mt-2 drop-shadow-sm">
                  Warm hug.
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-sm md:text-base text-[#5C3A46] max-w-sm mt-5 font-nunito italic font-medium leading-relaxed"
              >
                Skip the generic. Discover beautifully curated surprises designed to make them smile instantly.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-row items-center gap-4 mt-8"
              >
                <Link href="/blushies" className="btn-shimmer relative flex-1">
                  <RoseGoldButton className="w-full px-6 py-4 rounded-full shadow-lg hover:shadow-[#B76E79]/20 text-xs">
                    Explore Blushies
                    <Heart className="w-3.5 h-3.5 ml-2 fill-white/20 group-hover:fill-white group-hover:scale-110 transition-all" />
                  </RoseGoldButton>
                </Link>
                
                <Link href="/contact" className="btn-shimmer relative flex-1">
                  <RoseGoldButton variant="outline" className="w-full px-6 py-4 rounded-full backdrop-blur-md text-xs">
                    Craft a Memory
                  </RoseGoldButton>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side: The Floating 3D Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ 
              x: useTransform(springX, (val) => val * -1), 
              y: useTransform(springY, (val) => val * -1),
              rotateX: useTransform(springY, (val) => val * 0.1),
              rotateY: useTransform(springX, (val) => val * -0.1),
            }}
            className="lg:col-span-6 relative perspective-1000 flex items-center justify-center mt-12 lg:mt-0"
          >
            {/* Floating Image Container */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-full max-w-md aspect-square"
            >
              {/* Main Product Image - Elevated Glass Platform */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-full border border-white/20 shadow-2xl overflow-hidden group">
                 <img 
                   src="/images/hero.png" 
                   alt="Beautiful Blushie Gift" 
                   className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700"
                 />
                 {/* Soft Radial Highlight */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />
              </div>
              
              {/* Secondary Floating Element (Hampers) */}
              <motion.div
                animate={{
                  y: [0, 30, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-6 -right-6 w-40 h-40 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl p-3 z-10"
              >
                <img src="/images/Hampers.png" alt="Hamper Box" className="w-full h-full object-cover rounded-2xl" />
              </motion.div>

              {/* Floating Glow Orbs */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#D4AF37]/20 blur-[60px] rounded-full animate-pulse" />
              <div className="absolute bottom-0 left-1/2 w-48 h-48 bg-[#B76E79]/20 blur-[80px] rounded-full -translate-x-1/2 animate-pulse" />
            </motion.div>
          </motion.div>

        </div> {/* Closes Grid */}
      </div> {/* Closes Main Content Container */}
    </section>
  );
}