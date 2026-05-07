"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import RoseGoldButton from "../ui/RoseGoldButton";
import { Heart } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacityText = useTransform(scrollY, [0, 400], [1, 0]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#8B5A2B]">
      
      {/* 1. Envelope Cardboard Texture & Inner Shadow */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none mix-blend-multiply" style={{ backgroundImage: "url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />
      <div className="absolute inset-0 z-0 shadow-[inset_0_0_150px_rgba(40,15,0,0.9)] pointer-events-none" />

      {/* 2. The Pink Flap Overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none drop-shadow-[15px_0_30px_rgba(40,15,0,0.8)]">
        <div className="absolute top-0 left-0 w-[150%] md:w-[120%] lg:w-[65%] h-full bg-[#E8A5B0]" style={{ clipPath: 'polygon(0 0, 100% 0, 75% 100%, 0% 100%)' }}>
           {/* Flap Texture */}
           <div className="absolute inset-0 opacity-10 mix-blend-multiply bg-diy-grid" />
           
           {/* Stitched Edge */}
           <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <line x1="100%" y1="0" x2="75%" y2="100%" stroke="rgba(255,255,255,0.5)" strokeWidth="4" strokeDasharray="12 12" />
           </svg>
        </div>
      </div>

      {/* Vintage Postage Stamps */}
      <div className="absolute top-10 right-10 md:right-20 z-0 opacity-90 drop-shadow-md pointer-events-none">
         <div className="absolute top-0 right-0 w-16 h-20 bg-[#f0e6d6] border-[3px] border-dashed border-white shadow-sm rotate-[10deg]">
            <div className="m-1 w-[3.25rem] h-[4.25rem] border border-[#5C3A46]/20 bg-[#E8A5B0]/20 flex items-center justify-center">
               <span className="text-[10px] text-[#5C3A46] font-bold opacity-50">15¢</span>
            </div>
         </div>
         <div className="absolute top-4 right-12 w-20 h-16 bg-[#f0e6d6] border-[3px] border-dashed border-white shadow-sm rotate-[-5deg]">
            <div className="m-1 w-[4.25rem] h-[3.25rem] border border-[#5C3A46]/20 bg-[#D4AF37]/20 flex items-center justify-center">
               <span className="text-[10px] text-[#5C3A46] font-bold opacity-50">BLUSH</span>
            </div>
         </div>
      </div>

      {/* Wax Seal */}
      <div className="absolute bottom-[10%] left-[65%] lg:left-[55%] z-20 pointer-events-none drop-shadow-2xl rotate-12 scale-110">
         <svg width="100" height="100" viewBox="0 0 100 100" fill="none" className="text-[#5A2A38]">
            <path d="M50 5 L60 15 L75 10 L80 25 L95 30 L90 45 L100 60 L85 70 L90 85 L75 85 L65 95 L50 90 L35 95 L25 85 L10 85 L15 70 L0 60 L10 45 L5 30 L20 25 L25 10 L40 15 Z" fill="currentColor"/>
            <circle cx="50" cy="50" r="35" fill="#4A232E" />
            <circle cx="50" cy="50" r="30" stroke="#D4AF37" strokeWidth="1" strokeDasharray="4 2" fill="none" />
            <path d="M40 40 Q50 30 60 40 Q70 50 60 60 Q50 70 40 60 Q30 50 40 40 Z" fill="#D4AF37" opacity="0.8" />
         </svg>
      </div>

      {/* Background Floating Particles (CSS or Framer) */}
      {mounted && (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                y: Math.random() * 100 - 50, 
                x: Math.random() * window.innerWidth,
                opacity: 0,
                scale: Math.random() * 0.5 + 0.5
              }}
              animate={{ 
                y: [null, -Math.random() * 200 - 100], 
                opacity: [0, 0.8, 0],
                rotate: Math.random() * 360
              }}
              transition={{ 
                duration: Math.random() * 5 + 5, 
                repeat: Infinity, 
                ease: "linear",
                delay: Math.random() * 5 
              }}
              className="absolute bottom-0 w-3 h-3 rounded-full bg-[var(--color-gold)] blur-[1px]"
              style={{
                left: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>
      )}

      {/* Main Content Container */}
      <div className="max-w-[1400px] w-full mx-auto px-6 relative z-10">
        
        {/* Floating Junk Journal Doodles */}
        <div className="absolute top-10 right-[40%] text-[#B76E79]/40 rotate-12 pointer-events-none">
           <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 10 Q60 40 90 50 Q60 60 50 90 Q40 60 10 50 Q40 40 50 10Z" fill="currentColor"/>
           </svg>
        </div>
        <div className="absolute bottom-10 left-10 text-[#D4AF37]/40 -rotate-12 pointer-events-none">
           <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 20 L80 80 M80 20 L20 80 M50 10 L50 90 M10 50 L90 50" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
           </svg>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Asymmetrical Left Text */}
          <div className="lg:col-span-5 flex flex-col items-start pt-10">
            <motion.div 
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: -2 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-[#5C3A46]/5 px-4 py-1 rounded-sm border border-[#5C3A46]/10 mb-6"
            >
              <span className="font-bold text-[#5C3A46] tracking-[0.2em] text-sm uppercase">Premium Gifting</span>
            </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold leading-tight text-[#3A222C]"
          >
            Gifts that feel <br className="hidden lg:block"/> like a{" "}
            <span className="font-miniver text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-rose-gold)] to-[var(--color-gold)] font-normal block mt-2">
              warm hug.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-[var(--color-plum)]/80 max-w-lg mt-4 font-medium"
          >
            Skip the generic. Discover beautifully curated surprises designed to make them smile instantly.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-wrap gap-4 mt-6 justify-center lg:justify-start"
          >
            <Link href="/blushies" className="group">
              <RoseGoldButton>
                Explore Blushies
                <Heart className="w-4 h-4 ml-1 fill-white/20 group-hover:fill-white group-hover:scale-110 transition-all" />
              </RoseGoldButton>
            </Link>
            
            <Link href="/contact">
              <RoseGoldButton variant="outline">
                Craft a Memory
              </RoseGoldButton>
            </Link>
          </motion.div>
        </div>

        {/* Right Side: The Vintage Envelope / Tear Reveal */}
        <motion.div 
          style={{ y: yBg }}
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
          className="lg:col-span-7 relative w-full max-w-md mx-auto lg:max-w-full aspect-[4/5] lg:aspect-auto lg:h-[600px] flex items-center justify-center mt-12 lg:mt-0"
        >
          {/* Main Polaroid */}
          <div className="absolute inset-0 bg-[#FDFAFA] p-4 pb-16 rounded-md shadow-2xl border border-[#E0E0E0] rotate-3 hover:rotate-0 transition-transform duration-500 z-20">
             {/* Washi Tape */}
             <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-[var(--color-soft-pink)]/50 backdrop-blur-md -rotate-2 z-30 border border-white/20 shadow-sm" />
             
             <div className="w-full h-full bg-[var(--color-beige)] overflow-hidden relative border border-[#E0E0E0]/50">
               <img 
                 src="/images/hero.png" 
                 alt="Beautiful Blushie Gift" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.1)] pointer-events-none" />
             </div>
             
             <p className="absolute bottom-5 w-full text-center left-0 font-miniver text-2xl text-[var(--color-plum)] -rotate-2">
               For you, with love.
             </p>
          </div>

          {/* Background offset polaroid for depth */}
          <div className="absolute inset-0 bg-white p-4 pb-16 rounded-md shadow-lg border border-[#E0E0E0] -rotate-6 scale-95 z-10 translate-x-4 translate-y-4 opacity-70 pointer-events-none">
             <div className="w-full h-full bg-[#f0e6d6]">
                <img src="/images/Hampers.png" alt="Hamper Box" className="w-full h-full object-cover opacity-80 mix-blend-multiply" />
             </div>
          </div>

        </motion.div>

        </div> {/* Closes Grid */}

      </div> {/* Closes Main Content Container */}
    </section>
  );
}