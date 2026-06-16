"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import RoseGoldButton from "../ui/RoseGoldButton";
import { Heart } from "lucide-react";

export default function Hero() {
  const floatingRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY, currentTarget } = e as MouseEvent & { currentTarget: Window };
      const { innerWidth, innerHeight } = window;
      const dx = (clientX / innerWidth - 0.5) * 18;
      const dy = (clientY / innerHeight - 0.5) * 18;

      if (floatingRef.current) {
        floatingRef.current.style.transform = `translate(${-dx}px, ${-dy}px) rotateX(${dy * 0.15}deg) rotateY(${-dx * 0.15}deg)`;
      }
      if (cardRef.current) {
        cardRef.current.style.transform = `translate(${dx * 0.3}px, ${dy * 0.3}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden">
      
      {/* 1. Background Image — no JS animation */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Background.png"
          alt="Hero Background"
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/* 2. CSS-only ambient floating orbs (no JS) */}
      <div className="absolute inset-0 z-[3] pointer-events-none overflow-hidden">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
      </div>

      {/* Main Content Container */}
      <div className="max-w-[1100px] w-full mx-auto px-6 relative z-10 pt-44 pb-20 flex flex-col justify-start min-h-[100svh]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Glass Parchment Text Container */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <motion.div
              ref={cardRef}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative p-6 md:p-8 bg-white/75 rounded-[2.5rem] border border-white/60 shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden w-full max-w-lg"
              style={{ willChange: "transform" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F9C5D1]/40 border border-[#F9C5D1]/60 mb-5 shadow-sm"
              >
                <span className="font-nunito font-black text-[#5C3A46] tracking-[0.2em] text-[9px] uppercase">✨ Premium Gifting</span>
              </motion.div>
            
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold leading-[1.1] text-[#3A222C] font-great-vibes drop-shadow-sm"
              >
                Gifts that feel like a
                <span className="font-miniver text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#B76E79] via-[#D4AF37] to-[#B76E79] font-normal block mt-2">
                  Warm hug.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-sm md:text-base text-[#5C3A46] max-w-sm mt-5 font-nunito italic font-medium leading-relaxed"
              >
                Skip the generic. Discover beautifully curated surprises designed to make them smile instantly.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-row items-center gap-4 mt-8"
              >
                <Link href="/blushies" className="btn-shimmer relative flex-1">
                  <RoseGoldButton className="w-full px-6 py-4 rounded-full shadow-lg text-xs">
                    Explore Blushies
                    <Heart className="w-3.5 h-3.5 ml-2 fill-white/20" />
                  </RoseGoldButton>
                </Link>
                
                <Link href="/contact" className="btn-shimmer relative flex-1">
                  <RoseGoldButton variant="outline" className="w-full px-6 py-4 rounded-full text-xs">
                    Craft a Memory
                  </RoseGoldButton>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side: Floating Showcase — CSS animation, no continuous JS */}
          <motion.div
            ref={floatingRef}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 relative flex items-center justify-center mt-12 lg:mt-0"
            style={{ willChange: "transform", perspective: "1000px" }}
          >
            {/* Floating Image Container — CSS keyframe animation */}
            <div className="hero-float relative w-full max-w-md aspect-square" style={{ willChange: "transform" }}>
              {/* Main Product Image */}
              <div className="absolute inset-0 bg-white/5 rounded-full border border-white/20 shadow-2xl overflow-hidden group">
                <img
                  src="/images/hero.png"
                  alt="Beautiful Blushie Gift"
                  className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
              </div>
              
              {/* Secondary Floating Element — CSS animation */}
              <div className="hero-float-delayed absolute -bottom-6 -right-6 w-40 h-40 bg-white/10 rounded-3xl border border-white/20 shadow-2xl p-3 z-10" style={{ willChange: "transform" }}>
                <img src="/images/Hampers.png" alt="Hamper Box" className="w-full h-full object-cover rounded-2xl" />
              </div>

              {/* Glow Orbs — CSS only */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#D4AF37]/20 blur-[60px] rounded-full" />
              <div className="absolute bottom-0 left-1/2 w-48 h-48 bg-[#B76E79]/20 blur-[80px] rounded-full -translate-x-1/2" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}