"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import HexagonBackground from "./HexagonBackground"; // Import your new grid!

export default function Hero() {
  return (
    // Make sure overflow-hidden is here so the hexagons don't break the page width
    <section className="relative pt-40 pb-20 px-6 min-h-screen flex items-center w-full overflow-hidden">
      
      {/* 1. Our Code-Generated Hexagon Grid Background */}
      <HexagonBackground />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Glassmorphism Text Panel */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }} 
          className="flex flex-col gap-8 bg-white/20 backdrop-blur-2xl border border-white/50 shadow-[0_8px_32px_rgba(212,175,55,0.15)] p-10 rounded-[40px]"
        >
          <div className="inline-flex items-center gap-2 bg-white/40 border border-[#D4AF37]/50 px-5 py-2.5 rounded-full w-fit shadow-sm">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-sm font-bold text-[#5C3A46] tracking-wider">Premium Gifting</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold leading-[1.1] text-[#3A222C]">
            Gifts that <br/> feel like a <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#E8A5B0] to-[#D4AF37] font-miniver text-6xl md:text-8xl drop-shadow-sm">
              warm hug.
            </span>
          </h2>
          
          <p className="text-lg text-[#5C3A46] font-medium leading-relaxed">
            Skip the generic. Discover beautifully curated surprises designed to make them smile instantly.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/blushies" className="group flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#FFDF73] text-[#3A222C] px-8 py-4 rounded-full font-bold shadow-[0_0_20px_rgba(212,175,55,0.5)] hover:shadow-[0_0_30px_rgba(212,175,55,0.7)] transition-all transform hover:-translate-y-1">
              Explore Blushies <Heart className="w-5 h-5 fill-[#3A222C] group-hover:scale-110 transition-transform" />
            </Link>
            <Link href="/contact" className="group flex items-center gap-2 bg-white/30 backdrop-blur-md border-2 border-white/60 text-[#3A222C] px-8 py-4 rounded-full font-bold hover:bg-white/60 transition-all transform hover:-translate-y-1">
              Craft a Memory
            </Link>
          </div>
        </motion.div>

        {/* Floating Glass Image Panels */}
        <div className="relative h-[600px] hidden lg:block">
          <motion.div 
            animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} 
            className="absolute top-5 right-5 w-[380px] h-[480px] rounded-[40px] overflow-hidden bg-white/30 backdrop-blur-2xl border border-white/50 shadow-[0_20px_50px_rgba(58,34,44,0.2)] p-3 z-20 will-change-transform"
          >
            <img src="/images/hero.png" alt="Premium Gift" className="w-full h-full object-cover rounded-[30px]" />
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 20, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }} 
            className="absolute bottom-10 right-[350px] w-[240px] h-[300px] rounded-[30px] overflow-hidden bg-white/30 backdrop-blur-2xl border border-white/50 shadow-[0_15px_40px_rgba(212,175,55,0.15)] p-2 z-30 will-change-transform"
          >
            <img src="/images/Hampers.png" alt="Luxury Hamper" className="w-full h-full object-cover rounded-[20px]" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}