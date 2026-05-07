"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Newsletter() {
  return (
    <section 
      className="relative w-full min-h-[80vh] flex items-center overflow-hidden py-24 md:py-32"
      style={{ background: 'radial-gradient(circle at 80% 20%, #562B3C 0%, #2E131E 55%, #12050A 100%)' }}
    >
      
      {/* SVG Clip Path Definition for the Curved Flap */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="curveFlap" clipPathUnits="objectBoundingBox">
            <path d="M0,0 L0.8,0 Q1,0.5 0.8,1 L0,1 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* 1. Premium Shiny Plum Background (Replaces the blurry noise texture) */}
      <div className="absolute inset-0 z-0 pointer-events-none" />

      {/* 2. The Soft Curved Pink Flap (Left Side) */}
      <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
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
          className="flex flex-col items-start text-left lg:pr-10 z-30 relative"
        >
           {/* Subtle Scrapbook Decorations */}
           <div className="absolute -top-14 left-2 w-full h-16 pointer-events-none">
              {/* Gold Sparkle 1 */}
              <svg className="absolute top-2 left-0 w-4 h-4 rotate-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C12 0 12 10.5 24 12C24 12 13.5 12 12 24C12 24 12 13.5 0 12C0 12 10.5 12 12 0Z" fill="#D4AF37" opacity="0.7"/>
              </svg>
              {/* Gold Sparkle 2 */}
              <svg className="absolute top-8 left-12 w-3 h-3 rotate-45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C12 0 12 10.5 24 12C24 12 13.5 12 12 24C12 24 12 13.5 0 12C0 12 10.5 12 12 0Z" fill="#D4AF37" opacity="0.5"/>
              </svg>
              {/* Gold Sparkle 3 */}
              <svg className="absolute -top-2 left-24 w-5 h-5 -rotate-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C12 0 12 10.5 24 12C24 12 13.5 12 12 24C12 24 12 13.5 0 12C0 12 10.5 12 12 0Z" fill="#D4AF37" opacity="0.6"/>
              </svg>
              {/* Rose Petal 1 */}
              <svg className="absolute top-6 -left-4 w-6 h-6 rotate-[30deg]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C16 2 21 7 21 13C21 19 16 22 12 22C6 22 3 16 3 11C3 6 8 2 12 2Z" fill="#F9C5D1" opacity="0.9"/>
              </svg>
              {/* Rose Petal 2 */}
              <svg className="absolute top-2 left-16 w-5 h-5 -rotate-[15deg]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C16 2 21 7 21 13C21 19 16 22 12 22C6 22 3 16 3 11C3 6 8 2 12 2Z" fill="#F9C5D1" opacity="0.7"/>
              </svg>
           </div>

           <span className="font-miniver text-4xl md:text-5xl text-[#B76E79] mb-[-10px] ml-2 drop-shadow-sm">Accept the</span>
           <h2 className="text-5xl md:text-7xl font-medium text-[#5C3A46] leading-none mb-6 font-serif tracking-tight drop-shadow-sm italic">
             INVITATION
           </h2>
           <p className="text-[#5C3A46] text-lg md:text-xl mb-10 font-medium max-w-md leading-relaxed">
             Join our Blushie family. Uncover secret drops, exclusive hampers, and a world of warm hugs delivered to your inbox.
           </p>
           
           <form className="flex w-full max-w-md relative group shadow-2xl" onSubmit={(e) => e.preventDefault()}>
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

        {/* Right Side: Velvet Red Envelope */}
        <div className="flex justify-center items-center relative w-full h-[400px] md:h-[600px] perspective-1000 z-20">
           
           {/* Soft Studio Wall Glow */}
           <div 
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] md:w-[700px] md:h-[700px] rounded-full pointer-events-none z-0"
             style={{ background: 'radial-gradient(circle, rgba(138,80,96,0.5) 0%, rgba(122,74,90,0.2) 40%, transparent 70%)' }}
           />

           {/* Envelope Wrapper */}
           <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateZ: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotateZ: 2 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring", stiffness: 80 }}
              className="relative w-[450px] h-[325px] md:w-[625px] md:h-[450px] md:mr-8 hover:rotateZ-0 hover:scale-[1.02] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer group"
           >
              
              {/* Envelope Image Replacement */}
              <div className="absolute inset-0 z-10">
                 <Image src="/images/envelope.png" alt="Premium Velvet Envelope" fill priority unoptimized quality={100} className="object-contain pointer-events-none drop-shadow-lg will-change-transform" />
              </div>

              {/* Orchid Image */}
              <motion.div 
                 className="absolute -bottom-6 -left-16 w-52 h-52 md:w-72 md:h-72 md:-bottom-8 md:-left-20 z-30 drop-shadow-xl"
                 whileHover={{ scale: 1.05, rotate: -5 }}
                 transition={{ duration: 0.5 }}
              >
                 <Image src="/images/orchid.png" alt="Pink Orchid" fill unoptimized quality={100} className="object-contain pointer-events-none" />
              </motion.div>

           </motion.div>
        </div>

      </div>
    </section>
  );
}
