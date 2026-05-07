"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center overflow-hidden bg-[#5C3A46] py-24 md:py-32">
      
      {/* SVG Clip Path Definition for the Curved Flap */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="curveFlap" clipPathUnits="objectBoundingBox">
            <path d="M0,0 L0.8,0 Q1,0.5 0.8,1 L0,1 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* 1. Global Plum Background (The inside of the giant envelope) */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />
      <div className="absolute inset-0 z-0 shadow-[inset_0_0_150px_rgba(20,5,20,0.8)] pointer-events-none" />

      {/* 2. The Soft Curved Pink Flap (Left Side) */}
      <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none drop-shadow-[20px_0_40px_rgba(20,5,20,0.6)]">
        <div 
          className="absolute top-0 left-0 w-[120%] md:w-[75%] lg:w-[60%] h-full bg-[#Fdf1f4]"
          style={{ clipPath: 'url(#curveFlap)' }}
        >
           {/* Subtle texture for the pink flap */}
           <div className="absolute inset-0 opacity-10 mix-blend-multiply bg-diy-grid" />
        </div>
      </div>

      <div className="max-w-[1400px] w-full mx-auto px-6 relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Premium Typography (Sitting ON the pink flap) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start text-left lg:pr-10 z-30"
        >
           <span className="font-miniver text-4xl md:text-5xl text-[#B76E79] mb-[-10px] ml-2 drop-shadow-sm">Accept the</span>
           <h2 className="text-5xl md:text-7xl font-medium text-[#5C3A46] leading-none mb-6 font-serif tracking-tight drop-shadow-sm italic">
             INVITATION
           </h2>
           <p className="text-[#5C3A46] text-lg md:text-xl mb-10 font-medium max-w-md leading-relaxed">
             Join our Blushie family. Uncover secret drops, exclusive hampers, and a world of warm hugs delivered to your inbox.
           </p>
           
           <form className="flex w-full max-w-md relative group drop-shadow-xl" onSubmit={(e) => e.preventDefault()}>
             <input 
               type="email" 
               placeholder="Your mail address..." 
               className="w-full bg-[#FDFAFA] border border-[#E3D1D1] rounded-full pl-6 pr-36 py-4 outline-none focus:border-[#D4AF37] transition-all text-[#5C3A46] placeholder-[#5C3A46]/40 font-medium shadow-[inset_0_2px_5px_rgba(0,0,0,0.02)] text-base"
               required
             />
             <button type="submit" className="absolute right-1 top-1 bottom-1 px-8 bg-[#B76E79] text-white rounded-full text-sm font-medium border border-[#D4AF37] shadow-sm hover:bg-[#A65D68] transition-colors">
               Join Us
             </button>
           </form>
        </motion.div>

        {/* Right Side: Velvet Red Envelope (Sitting ON the brown cardboard) */}
        <div className="flex justify-center items-center relative w-full h-[400px] md:h-[600px] perspective-1000 z-20">
           
           {/* Envelope Wrapper */}
           <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateZ: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotateZ: 2 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring", stiffness: 80 }}
              className="relative w-[450px] h-[325px] md:w-[625px] md:h-[450px] md:mr-8 drop-shadow-[0_40px_60px_rgba(20,5,5,0.7)] hover:rotateZ-0 hover:scale-[1.02] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer group"
           >
              
              {/* Envelope Image Replacement */}
              <div className="absolute inset-0 z-10">
                 <img src="/images/envelope.png" alt="Premium Velvet Envelope" className="w-full h-full object-contain pointer-events-none drop-shadow-[0_15px_20px_rgba(0,0,0,0.4)]" />
              </div>

              {/* Orchid Image */}
              <motion.div 
                 className="absolute -bottom-12 -left-12 w-40 h-40 md:w-56 md:h-56 z-30 drop-shadow-[10px_10px_15px_rgba(0,0,0,0.5)]"
                 whileHover={{ scale: 1.05, rotate: -5 }}
                 transition={{ duration: 0.5 }}
              >
                 <img src="/images/orchid.png" alt="Pink Orchid" className="w-full h-full object-contain pointer-events-none" />
              </motion.div>

           </motion.div>
        </div>

      </div>
    </section>
  );
}
