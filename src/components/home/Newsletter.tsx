"use client";

import React from "react";
import { motion } from "framer-motion";
import RoseGoldButton from "../ui/RoseGoldButton";

export default function Newsletter() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center overflow-hidden bg-[#Fdf1f4] py-24 md:py-32">
      
      {/* The Lifted Brown Cardboard Diagonal Background on the Right */}
      <div className="absolute top-0 right-0 w-[95%] md:w-[65%] h-full z-0 drop-shadow-[-30px_0_50px_rgba(40,15,0,0.3)] pointer-events-none">
        <div 
          className="absolute inset-0 bg-[#6b4226]"
          style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
        >
          {/* Real Cardboard Noise Texture */}
          <div className="absolute inset-0 z-0 opacity-50 mix-blend-multiply" style={{ backgroundImage: "url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%221.2%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />
          <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(30,10,0,0.9)] pointer-events-none" />
        </div>
      </div>

      <div className="max-w-[1400px] w-full mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Premium Typography */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start text-left lg:pr-10 z-20"
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
               className="w-full bg-[#FDFAFA] border-2 border-[#D4AF37]/40 rounded-full pl-6 pr-36 py-4 outline-none focus:border-[#D4AF37] transition-all text-[#4A232E] placeholder-[#4A232E]/40 font-medium shadow-[inset_0_2px_5px_rgba(0,0,0,0.05)] text-base"
               required
             />
             <RoseGoldButton type="submit" className="!absolute right-1 top-1 bottom-1 !py-0 !px-6 shadow-md rounded-full text-sm">
               Join Us
             </RoseGoldButton>
           </form>
        </motion.div>

        {/* Right Side: Hyper-Realistic Velvet Envelope */}
        <div className="flex justify-center items-center relative w-full h-[400px] md:h-[600px] perspective-1000">
           
           {/* Envelope Wrapper */}
           <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateZ: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotateZ: -4 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring", stiffness: 80 }}
              className="relative w-[360px] h-[260px] md:w-[500px] md:h-[360px] drop-shadow-[0_40px_60px_rgba(20,5,5,0.7)] hover:rotateZ-0 hover:scale-[1.02] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer group"
           >
              {/* Shared SVG Defs for gradients and textures */}
              <svg className="hidden">
                 <defs>
                    <filter id="velvetNoise">
                       <feTurbulence type="fractalNoise" baseFrequency="1.5" numOctaves="4" stitchTiles="stitch"/>
                       <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.15 0" />
                    </filter>
                    <linearGradient id="envBase" x1="0%" y1="0%" x2="100%" y2="100%">
                       <stop offset="0%" stopColor="#4a0610" />
                       <stop offset="100%" stopColor="#200105" />
                    </linearGradient>
                    <linearGradient id="flapLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                       <stop offset="0%" stopColor="#8c1024" />
                       <stop offset="100%" stopColor="#5c0614" />
                    </linearGradient>
                    <linearGradient id="flapRight" x1="100%" y1="0%" x2="0%" y2="0%">
                       <stop offset="0%" stopColor="#8c1024" />
                       <stop offset="100%" stopColor="#5c0614" />
                    </linearGradient>
                    <linearGradient id="flapBottom" x1="50%" y1="100%" x2="50%" y2="0%">
                       <stop offset="0%" stopColor="#a3132a" />
                       <stop offset="100%" stopColor="#6b0b1a" />
                    </linearGradient>
                    <linearGradient id="flapTop" x1="50%" y1="0%" x2="50%" y2="100%">
                       <stop offset="0%" stopColor="#ba1731" />
                       <stop offset="100%" stopColor="#7a0c1d" />
                    </linearGradient>
                    <linearGradient id="goldFoil" x1="0%" y1="0%" x2="100%" y2="100%">
                       <stop offset="0%" stopColor="#F9D423" />
                       <stop offset="50%" stopColor="#FF4E50" />
                       <stop offset="100%" stopColor="#F9D423" />
                    </linearGradient>
                 </defs>
              </svg>

              {/* Base Envelope (Inside) */}
              <div className="absolute inset-0 rounded-sm overflow-hidden shadow-[inset_0_20px_50px_rgba(0,0,0,0.9)]">
                 <svg width="100%" height="100%" preserveAspectRatio="none">
                    <rect width="100%" height="100%" fill="url(#envBase)" />
                    <rect width="100%" height="100%" fill="url(#velvetNoise)" style={{ mixBlendMode: 'multiply' }} />
                 </svg>
              </div>

              {/* Left and Right Flaps */}
              <div className="absolute inset-0 z-10 pointer-events-none drop-shadow-[0_0_10px_rgba(0,0,0,0.4)]">
                 <svg width="100%" height="100%" preserveAspectRatio="none">
                    <polygon points="0,0 50%,55% 0,100%" fill="url(#flapLeft)" stroke="#D4AF37" strokeWidth="1" />
                    <polygon points="0,0 50%,55% 0,100%" fill="url(#velvetNoise)" style={{ mixBlendMode: 'multiply' }} />
                    
                    <polygon points="100%,0 50%,55% 100%,100%" fill="url(#flapRight)" stroke="#D4AF37" strokeWidth="1" />
                    <polygon points="100%,0 50%,55% 100%,100%" fill="url(#velvetNoise)" style={{ mixBlendMode: 'multiply' }} />
                 </svg>
              </div>

              {/* Bottom Flap */}
              <div className="absolute inset-0 z-10 pointer-events-none drop-shadow-[0_-8px_12px_rgba(0,0,0,0.6)]">
                 <svg width="100%" height="100%" preserveAspectRatio="none">
                    <polygon points="0,100% 50%,55% 100%,100%" fill="url(#flapBottom)" stroke="#D4AF37" strokeWidth="2" strokeLinejoin="round" />
                    <polygon points="0,100% 50%,55% 100%,100%" fill="url(#velvetNoise)" style={{ mixBlendMode: 'multiply' }} />
                 </svg>
              </div>

              {/* Animated Top Flap */}
              <motion.div 
                 className="absolute top-0 left-0 w-full h-[65%] z-20 origin-top drop-shadow-[0_20px_25px_rgba(0,0,0,0.8)]"
                 whileHover={{ rotateX: 12, y: -2 }}
                 transition={{ type: "spring", stiffness: 120, damping: 15 }}
              >
                 <svg width="100%" height="100%" viewBox="0 0 500 234" preserveAspectRatio="none">
                    <path d="M0,0 L250,234 L500,0 Z" fill="url(#flapTop)" stroke="#D4AF37" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M0,0 L250,234 L500,0 Z" fill="url(#velvetNoise)" style={{ mixBlendMode: 'multiply' }} />
                    
                    {/* The "BB" Monogram */}
                    <text x="250" y="195" fontFamily="Miniver" fontSize="42" fill="url(#goldFoil)" textAnchor="middle" filter="drop-shadow(0px 3px 4px rgba(0,0,0,0.8))" fontWeight="bold">
                       BB
                    </text>
                 </svg>
              </motion.div>

              {/* Real Photorealistic Orchid Image */}
              <motion.div 
                 className="absolute -bottom-16 -left-16 w-48 h-48 md:w-64 md:h-64 z-30 drop-shadow-[15px_15px_20px_rgba(0,0,0,0.6)]"
                 whileHover={{ scale: 1.05, rotate: 5 }}
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
