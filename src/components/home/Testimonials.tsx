"use client";

import React from "react";
import { motion } from "framer-motion";
import TornPaperDivider from "../ui/TornPaperDivider";

const testimonials = [
  {
    id: 1,
    text: "The softest plushie I've ever owned! It literally feels like a warm hug. Thank you BlushieBewwry! 💕",
    author: "Sarah J.",
    rotation: -3,
    color: "bg-[#FDFAFA]"
  },
  {
    id: 2,
    text: "I ordered a custom hamper for my sister's birthday and she cried happy tears. The packaging is out of this world.",
    author: "Emily R.",
    rotation: 2,
    color: "bg-[#F9C5D1]/30"
  },
  {
    id: 3,
    text: "So aesthetic and cute. It fits perfectly on my bed. I'm definitely adopting another one soon!",
    author: "Mia T.",
    rotation: -1,
    color: "bg-[#FDFAFA]"
  }
];

export default function Testimonials() {
  return (
    <section className="relative w-full bg-[#F5E6E8] bg-diy-dots pb-24 pt-20 overflow-hidden">
      {/* Torn Edge Transition */}
      <div className="absolute top-0 left-0 w-full -translate-y-[99%] z-10">
         <TornPaperDivider color="#F5E6E8" bgColor="#5C3A46" flipY />
      </div>

      {/* Hand-drawn squiggles */}
      <div className="absolute top-32 left-1/4 opacity-40 text-[#D4AF37] pointer-events-none rotate-12">
         <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <path d="M10 50 Q 25 20, 50 50 T 90 50" />
         </svg>
      </div>

      <div className="absolute bottom-32 right-1/4 opacity-30 text-[#B76E79] pointer-events-none -rotate-12">
         <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <path d="M50 80 C 20 80, 20 30, 50 50 C 80 30, 80 80, 50 80 Z" />
         </svg>
      </div>

      {/* Soft Glow */}
      <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-bold text-[var(--color-plum)]"
          >
            Happy Tears
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="font-miniver text-2xl text-[var(--color-plum)]/80 mt-4"
          >
            Love notes from our family to yours.
          </motion.p>
        </div>

        {/* Sticky Notes Wall */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {testimonials.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.8, rotate: review.rotation * 3 }}
              whileInView={{ opacity: 1, scale: 1, rotate: review.rotation }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2, type: "spring" }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
              className={`relative w-72 md:w-80 ${review.color} p-6 pb-10 rounded-sm shadow-[0_10px_20px_rgba(0,0,0,0.05)] border border-[#E0E0E0] cursor-pointer`}
            >
              {/* Paperclip SVG or Washi Tape */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[#D4AF37] opacity-80">
                <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 36C7.58172 36 4 32.4183 4 28V10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10V26C16 28.2091 14.2091 30 12 30C9.79086 30 8 28.2091 8 26V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>

              <p className="font-miniver text-xl text-[var(--color-plum)] leading-relaxed mt-4">
                "{review.text}"
              </p>
              
              <div className="mt-6 border-t border-[var(--color-plum)]/10 pt-4 flex justify-between items-center">
                <span className="font-nunito font-bold text-[var(--color-plum)]">{review.author}</span>
                <span className="text-[var(--color-gold)] text-lg">⭐⭐⭐⭐⭐</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}