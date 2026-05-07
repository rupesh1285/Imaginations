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
        </div>
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
          className="lg:col-span-7 relative w-full max-w-md mx-auto lg:max-w-full aspect-[4/5] lg:aspect-auto lg:h-[600px] flex items-center justify-center"
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

      {/* Scrolling Marquee */}
      <div className="absolute bottom-0 left-0 w-full bg-[#5C3A46] text-[#F9C5D1] py-3 overflow-hidden border-t border-[#D4AF37]/30 z-20">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex whitespace-nowrap gap-12 font-miniver text-xl tracking-wide"
        >
          <span>✨ Hand-packed with love ✨</span>
          <span>🎁 Premium custom gifting 🎁</span>
          <span>💖 Delivered to their door 💖</span>
          <span>✨ Hand-packed with love ✨</span>
          <span>🎁 Premium custom gifting 🎁</span>
          <span>💖 Delivered to their door 💖</span>
          <span>✨ Hand-packed with love ✨</span>
          <span>🎁 Premium custom gifting 🎁</span>
          <span>💖 Delivered to their door 💖</span>
        </motion.div>
      </div>
    </section>
  );
}