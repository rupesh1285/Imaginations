"use client";

import React from "react";
import { motion } from "framer-motion";
import ScrapbookCard from "../ui/ScrapbookCard";
import TornPaperDivider from "../ui/TornPaperDivider";

const topPicks = [
  {
    id: 1,
    title: "Rosy Bunny",
    image: "/images/Rosy_bunny.jpeg",
    note: "The coolest cuddle buddy around 🐰",
    tiltAngle: -3,
    sticker: "Best Seller"
  },
  {
    id: 2,
    title: "Golden Bear",
    image: "/images/Golden_bear.jpeg",
    note: "Take me home! 💖",
    tiltAngle: 4
  },
  {
    id: 3,
    title: "Sir Sass-a-Lot",
    image: "/images/Plum_kitty.jpeg",
    note: "I guess you can hug me. Whatever. 🙄",
    tiltAngle: -2,
    sticker: "Sassy"
  },
  {
    id: 4,
    title: "Waffle the Pup",
    image: "/images/Beige_puppy.jpeg",
    note: "Will trade tail wags for treats! 🦴",
    tiltAngle: 3
  },
  {
    id: 5,
    title: "Hello Kitty",
    image: "/images/Blushie_kitten.jpeg",
    note: "I'm a barbie girl 😽",
    tiltAngle: -5,
    sticker: "Cute"
  },
  {
    id: 6,
    title: "The Bear Bros",
    image: "/images/We_bare_bears.jpeg",
    note: "Stackable, snackable, ready for hugs! 🐻",
    tiltAngle: 2
  },
  {
    id: 7,
    title: "Velvet Panda",
    image: "/images/Softie_panda.jpeg",
    note: "I'm super soft! 🥺",
    tiltAngle: -3,
    sticker: "Loved"
  },
  {
    id: 8,
    title: "Rex the Menace",
    image: "/images/Crazy_dinausaur.webp",
    note: "Ready to chomp snacks & steal hearts 🦖",
    tiltAngle: 4,
    sticker: "Naughty"
  }
];

export default function TopPicks() {
  return (
    <section className="relative w-full pb-24 pt-12 overflow-hidden">
      {/* Blurred Plushies Background */}
      <div className="absolute inset-0 z-0">
        <img src="/images/Plushies.jpeg" alt="" className="w-full h-full object-cover scale-105" />
      </div>

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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(253,241,244,0.3) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-16 relative w-fit mx-auto">
          {/* Decorated Scrapbook Label */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.35 }}
            className="relative bg-[#FDFAFA]/90 px-12 py-8 rounded-lg shadow-xl border-2 border-[#D4AF37]/40"
          >
            {/* Gold corner ornaments */}
            <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-[#D4AF37] rounded-tl-sm" />
            <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[#D4AF37] rounded-tr-sm" />
            <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-[#D4AF37] rounded-bl-sm" />
            <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-[#D4AF37] rounded-br-sm" />

            {/* Badge */}
            <div className="flex justify-center mb-4">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37]/30 to-[#D4AF37]/20 border border-[#D4AF37] px-6 py-2 rounded-full shadow-sm">
                <span className="text-xs font-bold text-[#D4AF37] tracking-[0.2em] uppercase">🧸 Adopt a Blushie</span>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-plum)] text-center leading-tight font-great-vibes">
              Looking for a Home
            </h2>

            {/* Subtle gold line underneath */}
            <div className="mt-4 mx-auto w-24 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-full" />
          </motion.div>
        </div>

        {/* Polaroid Horizontal/Wrap Gallery */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-12">
          {topPicks.map((pick, index) => (
            <motion.div
              key={pick.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              style={{ willChange: "transform" }}
            >
              <ScrapbookCard 
                title={pick.title}
                imageSrc={pick.image}
                note={pick.note}
                tiltAngle={pick.tiltAngle}
                sticker={pick.sticker}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}