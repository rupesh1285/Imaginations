"use client";

import React from "react";
import { motion } from "framer-motion";
import TornPaperDivider from "../ui/TornPaperDivider";

export default function HamperAnatomy() {
  return (
    <section className="relative w-full bg-[#Fdf1f4] pb-32 pt-20 overflow-hidden">
      {/* Torn Edge Transition */}
      <div className="absolute top-0 left-0 w-full -translate-y-[99%] z-10">
         <TornPaperDivider color="#Fdf1f4" bgColor="#E8A5B0" flipY />
      </div>

      {/* Background Coffee Stains */}
      <div className="absolute top-1/4 right-10 opacity-10 mix-blend-multiply pointer-events-none rotate-45 text-[#4A232E]">
        <svg width="300" height="300" viewBox="0 0 100 100" fill="none">
           <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" strokeDasharray="12 6" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 mt-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-bold text-[#4A232E] font-great-vibes"
          >
            Anatomy of a Hamper
          </motion.h2>
          <p className="font-miniver text-2xl text-[#4A232E]/60 mt-4">Every detail crafted with absolute love.</p>
        </div>

        <div className="relative max-w-4xl mx-auto aspect-square md:aspect-video flex items-center justify-center mt-12">
           {/* Center Hamper */}
           <motion.div 
             initial={{ scale: 0.9, opacity: 0, rotate: -2 }}
             whileInView={{ scale: 1, opacity: 1, rotate: -2 }}
             viewport={{ once: true, margin: "-80px" }}
             transition={{ duration: 0.35 }}
             className="w-3/4 md:w-1/2 rounded-md overflow-hidden shadow-[0_0_50px_rgba(232,165,176,0.4)] border-[12px] border-white z-10 bg-white"
             style={{ willChange: "transform" }}
           >
              <img src="/images/Hampers.png" alt="Hamper Box" className="w-full h-full object-cover" />
           </motion.div>

           {/* Floating Annotations */}
           <motion.div 
             initial={{ opacity: 0, x: -40 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-80px" }}
             transition={{ delay: 0.1, duration: 0.35 }}
             className="absolute top-[15%] left-[5%] md:left-[10%] bg-white p-4 shadow-[5px_5px_15px_rgba(0,0,0,0.1)] rotate-[-6deg] border border-[#E8A5B0] z-20"
           >
             <div className="absolute top-1 left-1 w-2 h-2 rounded-full bg-[#E8A5B0]" />
             <p className="font-miniver text-xl text-[#4A232E]">✨ Premium Candies</p>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, x: 40 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-80px" }}
             transition={{ delay: 0.15, duration: 0.35 }}
             className="absolute top-1/3 right-[5%] md:right-[5%] bg-[#FDFAFA] p-4 shadow-[5px_5px_15px_rgba(0,0,0,0.1)] rotate-[8deg] border border-[#D4AF37] z-20"
           >
             <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#D4AF37]" />
             <p className="font-miniver text-xl text-[#4A232E]">🧸 Softest Plushie</p>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-80px" }}
             transition={{ delay: 0.2, duration: 0.35 }}
             className="absolute bottom-[20%] right-[20%] md:right-[25%] bg-[#4A232E] text-[#Fdf1f4] p-4 shadow-2xl rotate-[-4deg] z-30"
           >
             <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-4 bg-[#D4AF37]/80 backdrop-blur-sm -rotate-2" />
             <p className="font-miniver text-xl">💌 Handwritten Note</p>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
