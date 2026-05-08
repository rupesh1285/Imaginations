"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Newsletter() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 2500);
  };

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

      {/* The Soft Curved Pink Flap (Left Side) - with decorative patterns */}
      <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
        <div 
          className="absolute top-0 left-0 w-[120%] md:w-[75%] lg:w-[60%] h-full bg-[#Fdf1f4]"
          style={{ clipPath: 'url(#curveFlap)' }}
        >
           {/* Decorative filigree cross pattern */}
           <div className="absolute inset-0 opacity-[0.035]" style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235C3A46'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
           }} />
           {/* Soft edge vignette for depth */}
           <div className="absolute inset-0" style={{
             background: 'radial-gradient(ellipse at 25% 50%, transparent 30%, rgba(249, 197, 209, 0.15) 100%)'
           }} />
           {/* Subtle grid texture */}
           <div className="absolute inset-0 opacity-10 mix-blend-multiply bg-diy-grid" />
        </div>
      </div>

      {/* Floating Rose Petals (CSS animation) */}
      <div className="absolute top-0 left-0 w-[60%] h-full z-[11] pointer-events-none overflow-hidden">
        <div className="floating-petal absolute w-3 h-4 rounded-[50%_50%_50%_0] bg-[#F9C5D1]/30 rotate-45" style={{ top: '10%', left: '15%', animationDelay: '0s', animationDuration: '12s' }} />
        <div className="floating-petal absolute w-2 h-3 rounded-[50%_50%_50%_0] bg-[#F9C5D1]/20 rotate-[60deg]" style={{ top: '5%', left: '35%', animationDelay: '4s', animationDuration: '15s' }} />
        <div className="floating-petal absolute w-2.5 h-3.5 rounded-[50%_50%_50%_0] bg-[#e8b4bf]/25 rotate-[20deg]" style={{ top: '0%', left: '45%', animationDelay: '8s', animationDuration: '18s' }} />
      </div>

      <div className="max-w-[1400px] w-full mx-auto px-6 relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Premium Typography */}
        <div className="flex flex-col items-start text-left lg:pr-10 z-30 relative pl-4 md:pl-8 pt-4">
           
           {/* Scrapbook Decorations */}
           <div className="absolute -top-16 left-2 w-full h-20 pointer-events-none">
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
              {/* Tiny Wax Seal accent */}
              <svg className="absolute -top-4 left-40 w-8 h-8 rotate-[10deg] opacity-30" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="14" fill="#D4AF37" opacity="0.35"/>
                <circle cx="20" cy="20" r="10" stroke="#D4AF37" strokeWidth="0.8" fill="none" opacity="0.5"/>
                <text x="20" y="24" textAnchor="middle" fill="#5C3A46" fontSize="10" fontFamily="serif" opacity="0.5">B</text>
              </svg>
              {/* Tiny Feather accent */}
              <svg className="absolute top-10 left-[220px] w-5 h-9 rotate-[-25deg] opacity-25" viewBox="0 0 20 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0C10 0 3 12 3 24C3 34 10 40 10 40C10 40 17 34 17 24C17 12 10 0 10 0Z" fill="#e8c8a0" opacity="0.6"/>
                <line x1="10" y1="5" x2="10" y2="38" stroke="#d4b896" strokeWidth="0.5" opacity="0.5"/>
              </svg>
           </div>

           {/* Eyebrow Badge */}
           <motion.div
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0 }}
             className="mb-8"
           >
             <div className="inline-flex items-center gap-2 px-5 py-2 border-[1.5px] border-[#D4AF37]/50 rounded-full bg-gradient-to-r from-[#D4AF37]/5 to-[#B76E79]/5 shadow-sm">
               <span className="text-[10px] font-nunito font-bold tracking-[0.25em] text-[#D4AF37] uppercase">💌 Exclusive Membership</span>
             </div>
           </motion.div>

           {/* "Accept The" text */}
           <motion.span 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.15 }}
             className="font-great-vibes text-3xl md:text-4xl text-[#B76E79] ml-3 drop-shadow-sm block"
           >
             Accept The
           </motion.span>
           
           {/* "Invitation" with gold gradient */}
           <motion.h2 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.35 }}
             className="text-6xl md:text-8xl leading-[1] mt-1 mb-3 font-great-vibes drop-shadow-sm overflow-visible"
             style={{
               background: 'linear-gradient(135deg, #5C3A46 0%, #8B5E6B 30%, #D4AF37 55%, #B76E79 80%, #5C3A46 100%)',
               WebkitBackgroundClip: 'text',
               WebkitTextFillColor: 'transparent',
               backgroundClip: 'text',
             }}
           >
             Invitation
           </motion.h2>

           {/* Gold foil accent line */}
           <motion.div 
             initial={{ scaleX: 0 }}
             whileInView={{ scaleX: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.5 }}
             className="h-[1.5px] w-24 mt-2 mb-8 origin-left"
             style={{ background: 'linear-gradient(90deg, #D4AF37, #B76E79, transparent)' }}
           />

           {/* Body text */}
           <motion.p 
             initial={{ opacity: 0, y: 15 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.55 }}
             className="text-[#5C3A46]/80 text-base md:text-lg mb-10 font-nunito italic max-w-md leading-relaxed tracking-wide"
           >
             Join our Blushie family. Uncover secret drops, exclusive hampers, and a world of warm hugs delivered to your inbox.
           </motion.p>
           
           {/* Form */}
           <motion.form 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.7 }}
             className="w-full max-w-md"
             onSubmit={handleSubmit}
           >
             {/* Frosted glass form card */}
             <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-5 border border-[#B76E79]/20 shadow-lg">
               <div className="flex items-center gap-3">
                 <input 
                   type="email" 
                   placeholder="Your email address..." 
                   className="newsletter-input flex-1 min-w-0 bg-white/70 border-[1.5px] border-[#B76E79]/30 rounded-full pl-5 pr-4 py-3.5 outline-none focus:border-[#D4AF37] transition-all duration-500 text-[#5C3A46] placeholder-[#5C3A46]/40 font-nunito text-sm"
                   required
                   disabled={isSubmitted}
                 />
                 <button 
                   type="submit" 
                   className="btn-shimmer flex-shrink-0 px-7 py-3.5 bg-[#B76E79] text-white rounded-full text-sm font-nunito font-semibold border-[1.5px] border-[#D4AF37] shadow-md hover:bg-[#D4AF37] hover:text-[#5C3A46] hover:shadow-lg transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap"
                   disabled={isSubmitted}
                 >
                   {isSubmitted ? '💌 Welcome!' : 'Join Us'}
                 </button>
               </div>
               <p className="text-[10px] text-[#5C3A46]/40 font-nunito mt-3 ml-2 tracking-wide">No spam ever. Unsubscribe anytime ✨</p>
             </div>
           </motion.form>
        </div>

        {/* Right Side: Image shows through naturally */}
        <div className="hidden lg:block" />

      </div>
    </section>
  );
}
