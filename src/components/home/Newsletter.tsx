import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Newsletter() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [placeholderText, setPlaceholderText] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const placeholders = [
    "Your best email address...",
    "Join the Blushie family...",
    "Claim your secret drops...",
    "Enter the world of hugs...",
  ];

  useEffect(() => {
    let currentText = "";
    let isDeleting = false;
    let typingSpeed = 100;
    let timer: NodeJS.Timeout;

    const handleTyping = () => {
      const fullText = placeholders[placeholderIndex];
      
      if (!isDeleting) {
        currentText = fullText.substring(0, currentText.length + 1);
        typingSpeed = 100;
      } else {
        currentText = fullText.substring(0, currentText.length - 1);
        typingSpeed = 50;
      }

      setPlaceholderText(currentText);

      if (!isDeleting && currentText === fullText) {
        timer = setTimeout(() => {
          isDeleting = true;
          handleTyping();
        }, 2000);
      } else if (isDeleting && currentText === "") {
        isDeleting = false;
        setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
        timer = setTimeout(handleTyping, 500);
      } else {
        timer = setTimeout(handleTyping, typingSpeed);
      }
    };

    handleTyping();
    return () => clearTimeout(timer);
  }, [placeholderIndex]);

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
        <div className="flex flex-col items-start text-left lg:pr-10 z-30 relative pl-6 md:pl-16 pt-4">
           
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
             className="font-great-vibes text-3xl md:text-4xl text-[#B76E79] ml-6 drop-shadow-sm block"
           >
             Accept The
           </motion.span>
           
           {/* "Invitation" with gold gradient */}
           <motion.h2 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.35 }}
             className="text-6xl md:text-8xl leading-[1] mt-1 mb-3 font-great-vibes drop-shadow-sm overflow-visible ml-6"
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
             className="h-[1.5px] w-24 mt-2 mb-8 origin-left ml-6"
             style={{ background: 'linear-gradient(90deg, #D4AF37, #B76E79, transparent)' }}
           />

           {/* Body text */}
           <motion.p 
             initial={{ opacity: 0, y: 15 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.55 }}
             className="text-[#5C3A46]/80 text-base md:text-lg mb-10 font-nunito italic max-w-md leading-relaxed tracking-wide ml-6"
           >
             Join our Blushie family. Uncover secret drops, exclusive hampers, and a world of warm hugs delivered to your inbox.
           </motion.p>
           
           {/* Form - Modern Sleek Glass Bar */}
           <motion.form 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.7 }}
             className="w-full max-w-md relative mt-6 ml-6"
             onSubmit={handleSubmit}
           >
             {/* The Sleek Glass Bar with Enhanced Glowing Border */}
             <div className="relative flex items-center p-[2px] bg-gradient-to-r from-white/60 via-[#D4AF37]/40 to-white/60 rounded-full shadow-[0_20px_50px_rgba(92,58,70,0.15)] group transition-all duration-500 hover:shadow-[0_25px_60px_rgba(212,175,55,0.25)] overflow-hidden">
               
               <div className="relative flex items-center w-full bg-[#Fdf1f4]/90 backdrop-blur-2xl rounded-full p-1.5 overflow-hidden">
                 {/* Subtle Texture Overlay */}
                 <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay" style={{
                   backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                 }} />
                 
                 <input 
                   type="email" 
                   placeholder={placeholderText}
                   className="newsletter-input flex-1 bg-transparent border-none pl-6 pr-4 py-3 outline-none text-[#5C3A46] font-nunito text-base font-semibold placeholder-[#5C3A46]/30 placeholder:font-medium placeholder:italic transition-all duration-300"
                   required
                   disabled={isSubmitted}
                 />
                 
                 <button 
                   type="submit" 
                   className="btn-shimmer relative px-8 py-3 bg-[#B76E79] text-white rounded-full text-sm font-nunito font-bold border border-[#D4AF37]/50 shadow-lg hover:bg-[#D4AF37] hover:text-[#5C3A46] transition-all duration-500 overflow-hidden whitespace-nowrap active:scale-95"
                   disabled={isSubmitted}
                 >
                   {isSubmitted ? '💌 Welcome!' : 'Join Us'}
                 </button>
               </div>
             </div>
             
             {/* Modern helper text */}
             <p className="text-[10px] text-[#5C3A46]/40 font-nunito mt-4 ml-6 tracking-widest uppercase font-black">
               Secret drops • Exclusive hampers • Warm hugs
             </p>
           </motion.form>
        </div>

        {/* Right Side: Image shows through naturally */}
        <div className="hidden lg:block" />

      </div>
    </section>
  );
}

