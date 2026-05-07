"use client";

import React from "react";
import { motion } from "framer-motion";
import RoseGoldButton from "../ui/RoseGoldButton";

export default function Newsletter() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center overflow-hidden bg-[#8B5A2B] py-24 md:py-32">
      
      {/* 1. Global Brown Cardboard Background (The inside of the giant envelope) */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />
      <div className="absolute inset-0 z-0 shadow-[inset_0_0_150px_rgba(40,15,0,0.9)] pointer-events-none" />

      {/* 2. The Giant Pink Flap (Left Side) */}
      {/* This acts as the left background but shaped like an envelope flap, casting a shadow to the right */}
      <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none drop-shadow-[20px_0_40px_rgba(40,15,0,0.7)]">
        <div 
          className="absolute top-0 left-0 w-[120%] md:w-[75%] lg:w-[60%] h-full bg-[#Fdf1f4]"
          style={{ clipPath: 'polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%)' }}
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
           <h2 className="text-6xl md:text-8xl font-bold text-[#4A232E] leading-none mb-6 font-poppins tracking-tight drop-shadow-md">
             INVITATION
           </h2>
           <p className="text-[#5C3A46] text-lg md:text-xl mb-10 font-medium max-w-md leading-relaxed">
             Join our Blushie family. Uncover secret drops, exclusive hampers, and a world of warm hugs delivered to your inbox.
           </p>
           
           <form className="flex w-full max-w-md relative group drop-shadow-xl" onSubmit={(e) => e.preventDefault()}>
             <input 
               type="email" 
               placeholder="Your mail address..." 
               className="w-full bg-white border-2 border-[#D4AF37]/40 rounded-full pl-6 pr-36 py-4 outline-none focus:border-[#D4AF37] transition-all text-[#4A232E] placeholder-[#4A232E]/40 font-medium shadow-[inset_0_2px_5px_rgba(0,0,0,0.05)] text-base"
               required
             />
             <RoseGoldButton type="submit" className="!absolute right-1 top-1 bottom-1 !py-0 !px-6 shadow-md rounded-full text-sm">
               Join Us
             </RoseGoldButton>
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
              className="relative w-[360px] h-[260px] md:w-[500px] md:h-[360px] drop-shadow-[0_40px_60px_rgba(20,5,5,0.7)] hover:rotateZ-0 hover:scale-[1.02] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer group"
           >
              
              {/* Base Envelope (Inside) */}
              <div className="absolute inset-0 bg-[#5c0211] rounded-sm overflow-hidden shadow-[inset_0_20px_50px_rgba(0,0,0,0.9)]" />

              {/* Bottom Flap */}
              <div 
                 className="absolute bottom-0 left-0 w-full h-[70%] bg-[#9A2C40] drop-shadow-[0_-5px_10px_rgba(0,0,0,0.5)] z-10"
                 style={{ clipPath: 'polygon(0 100%, 50% 0, 100% 100%)' }}
              >
                 {/* CSS Velvet Texture */}
                 <div className="absolute inset-0 opacity-20 bg-diy-grid mix-blend-multiply" />
                 {/* Gold Border Outline using absolute lines to avoid SVG color issues */}
                 <div className="absolute top-0 left-0 w-[50%] h-full border-r-[3px] border-[#D4AF37] origin-bottom-left rotate-[34deg] translate-y-[-5px]" />
                 <div className="absolute top-0 right-0 w-[50%] h-full border-l-[3px] border-[#D4AF37] origin-bottom-right rotate-[-34deg] translate-y-[-5px]" />
              </div>

              {/* Left Side Flap */}
              <div 
                 className="absolute top-0 left-0 w-[60%] h-full bg-[#B02A42] drop-shadow-[5px_0_10px_rgba(0,0,0,0.4)] z-10"
                 style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
              >
                 <div className="absolute inset-0 opacity-20 bg-diy-grid mix-blend-multiply" />
                 <div className="absolute top-0 left-0 w-full h-[50%] border-b-[2px] border-[#D4AF37] origin-top-left rotate-[28deg]" />
                 <div className="absolute bottom-0 left-0 w-full h-[50%] border-t-[2px] border-[#D4AF37] origin-bottom-left rotate-[-28deg]" />
              </div>

              {/* Right Side Flap */}
              <div 
                 className="absolute top-0 right-0 w-[60%] h-full bg-[#B02A42] drop-shadow-[-5px_0_10px_rgba(0,0,0,0.4)] z-10"
                 style={{ clipPath: 'polygon(100% 0, 0 50%, 100% 100%)' }}
              >
                 <div className="absolute inset-0 opacity-20 bg-diy-grid mix-blend-multiply" />
                 <div className="absolute top-0 right-0 w-full h-[50%] border-b-[2px] border-[#D4AF37] origin-top-right rotate-[-28deg]" />
                 <div className="absolute bottom-0 right-0 w-full h-[50%] border-t-[2px] border-[#D4AF37] origin-bottom-right rotate-[28deg]" />
              </div>

              {/* Animated Top Flap */}
              <motion.div 
                 className="absolute top-0 left-0 w-full h-[65%] bg-[#8B1A2F] z-20 origin-top drop-shadow-[0_15px_20px_rgba(0,0,0,0.6)]"
                 style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)', transformPerspective: '1000px' }}
                 whileHover={{ rotateX: 15, y: -2 }}
                 transition={{ type: "spring", stiffness: 120, damping: 15 }}
              >
                 <div className="absolute inset-0 opacity-20 bg-diy-grid mix-blend-multiply" />
                 
                 {/* Gold Border on Top Flap */}
                 <div className="absolute top-0 left-0 w-[50%] h-full border-r-[3px] border-[#D4AF37] origin-top-left rotate-[-34deg]" />
                 <div className="absolute top-0 right-0 w-[50%] h-full border-l-[3px] border-[#D4AF37] origin-top-right rotate-[34deg]" />
                 
                 {/* Shiny Monogram "BB" at the tip */}
                 <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 text-transparent bg-clip-text bg-gradient-to-br from-[#F9D423] to-[#FF4E50] font-miniver text-3xl md:text-4xl font-bold drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)] z-30">
                    BB
                 </div>
              </motion.div>

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
