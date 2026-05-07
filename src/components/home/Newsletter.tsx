"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section 
      className="relative w-full min-h-[80vh] flex items-center overflow-hidden py-24 md:py-32"
    >
      
      {/* SVG Clip Path Definition for the Curved Flap */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="curveFlap" clipPathUnits="objectBoundingBox">
            <path d="M0,0 L0.8,0 Q1,0.5 0.8,1 L0,1 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Background Image (right side, replaces plum gradient) */}
      <div className="absolute top-0 right-0 w-full lg:w-[55%] h-full z-0">
        <img 
          src="/images/envelope.png" 
          alt="" 
          className="w-full h-full object-cover object-center" 
        />
      </div>

      {/* The Soft Curved Pink Flap (Left Side) */}
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
           <h2 className="text-5xl md:text-7xl font-medium text-[#5C3A46] leading-none mb-6 font-great-vibes tracking-[0.1em] drop-shadow-sm">
             INVITATION
           </h2>
           <p className="text-[#5C3A46] text-lg md:text-xl mb-10 font-medium max-w-md leading-relaxed">
             Join our Blushie family. Uncover secret drops, exclusive hampers, and a world of warm hugs delivered to your inbox.
           </p>
           
           <form className="flex w-full max-w-md relative group shadow-2xl" onSubmit={(e) => e.preventDefault()}>
             <input 
               type="email" 
               placeholder="Your mail address..." 
               className="w-full bg-white/50 border-[1.5px] border-[#B76E79] rounded-full pl-6 pr-36 py-4 outline-none focus:border-[#D4AF37] transition-all text-[#5C3A46] placeholder-[#5C3A46]/50 font-medium shadow-[inset_0_2px_5px_rgba(0,0,0,0.02)] text-base"
               required
             />
             <button type="submit" className="absolute right-1 top-1 bottom-1 px-8 bg-[#B76E79] text-white rounded-full text-sm font-medium border-[1.5px] border-[#D4AF37] shadow-sm hover:bg-[#D4AF37] hover:text-[#5C3A46] transition-all duration-300 ease-in-out">
               Join Us
             </button>
           </form>
        </motion.div>

        {/* Right Side: Image shows through naturally */}
        <div className="hidden lg:block" />

      </div>
    </section>
  );
}
