"use client";

import React from "react";
import { motion } from "framer-motion";
import ScrapbookCard from "../ui/ScrapbookCard";
import TornPaperDivider from "../ui/TornPaperDivider";

const topPicks = [
  {
    id: 1,
    title: "Rosy Bunny",
    image: "/images/hero.png", // Replace
    note: "I'm super soft! 🥺",
    tiltAngle: -3
  },
  {
    id: 2,
    title: "Golden Bear",
    image: "/images/Hampers.png", // Replace
    note: "Take me home! 💖",
    tiltAngle: 4
  },
  {
    id: 3,
    title: "Plum Kitty",
    image: "/images/premium-bg.jpg", // Replace
    note: "Perfect cuddles! ✨",
    tiltAngle: -2
  },
  {
    id: 4,
    title: "Beige Puppy",
    image: "/images/hero.png", // Replace
    note: "Your new bestie 🐾",
    tiltAngle: 3
  }
];

export default function TopPicks() {
  return (
    <section className="relative w-full bg-[#FADCD9] pb-24 pt-12 overflow-hidden">
      {/* Torn Edge Transition */}
      <div className="absolute top-0 left-0 w-full -translate-y-[99%] z-10">
        <TornPaperDivider color="#FADCD9" bgColor="transparent" flipY />
      </div>

      {/* Scrapbook Elements */}
      <div className="absolute top-20 right-10 opacity-20 mix-blend-multiply pointer-events-none rotate-[20deg] text-[#4A232E]">
        {/* Coffee Stain */}
        <svg width="250" height="250" viewBox="0 0 100 100" fill="none">
           <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 4" />
           <circle cx="53" cy="48" r="42" stroke="currentColor" strokeWidth="1" />
           <path d="M40 90 Q50 95 60 88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      <div className="absolute bottom-20 left-10 opacity-30 pointer-events-none -rotate-[15deg]">
         {/* Dried Leaf Doodle */}
         <svg width="120" height="120" viewBox="0 0 100 100" fill="none" stroke="#5A2A38" strokeWidth="2" strokeLinecap="round">
            <path d="M50 90 L50 10 M50 50 Q30 30 50 10 Q70 30 50 50 M50 70 Q35 55 50 40 Q65 55 50 70" />
         </svg>
      </div>

      {/* Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-[var(--color-soft-pink)]/20 blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/40 border border-[#D4AF37]/50 px-5 py-2 rounded-full shadow-sm mb-4"
          >
            <span className="text-sm font-bold text-[var(--color-plum)] tracking-wider">Adopt a Blushie</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[var(--color-plum)] text-center"
          >
            Looking for a Home
          </motion.h2>
        </div>

        {/* Polaroid Horizontal/Wrap Gallery */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-12">
          {topPicks.map((pick, index) => (
            <motion.div
              key={pick.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <ScrapbookCard 
                title={pick.title}
                imageSrc={pick.image}
                note={pick.note}
                tiltAngle={pick.tiltAngle}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}