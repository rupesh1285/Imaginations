"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import RoseGoldButton from "../ui/RoseGoldButton";
import TornPaperDivider from "../ui/TornPaperDivider";

export default function CustomGifting() {
  return (
    <section className="relative w-full bg-[#5C3A46] text-white pb-24 pt-20">
      {/* Torn Edge Transition from Beige to Plum */}
      <div className="absolute top-0 left-0 w-full -translate-y-[99%] z-10">
        <TornPaperDivider color="#5C3A46" bgColor="var(--color-beige)" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Side: Images/Aesthetic Visuals */}
        <div className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, rotate: -5, x: -40 }}
            whileInView={{ opacity: 1, rotate: -2, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
            className="absolute left-0 md:left-10 w-64 md:w-80 h-80 md:h-[400px] bg-[#FAF3E0] p-3 pb-12 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-20 border border-white/10"
            style={{ willChange: "transform" }}
          >
             <div className="w-full h-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 overflow-hidden relative">
                {/* Replace with an image of someone tying a ribbon or making a custom box */}
                <img src="/images/Hampers.png" alt="Crafting a memory" className="w-full h-full object-cover mix-blend-luminosity opacity-80" />
             </div>
             <p className="absolute bottom-4 left-0 w-full text-center font-miniver text-[#5C3A46] text-xl">Hand-tied ribbons.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, rotate: 5, x: 40 }}
            whileInView={{ opacity: 1, rotate: 4, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: 0.08, type: "spring", stiffness: 200 }}
            className="absolute right-0 md:right-10 top-20 w-56 md:w-72 h-72 md:h-80 bg-[#FDFAFA] p-3 pb-10 rounded-sm shadow-[0_15px_40px_rgba(0,0,0,0.2)] z-10 border border-white/10"
            style={{ willChange: "transform" }}
          >
             <div className="w-full h-full bg-[#F9C5D1]/30 border border-[#F9C5D1]/50 overflow-hidden">
                <img src="/images/hero.png" alt="Custom box" className="w-full h-full object-cover mix-blend-luminosity opacity-80" />
             </div>
          </motion.div>
        </div>

        {/* Right Side: Text & CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.35 }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 backdrop-blur-sm text-[#D4AF37] font-bold text-sm tracking-widest uppercase">
            Exclusive
          </div>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight font-great-vibes">
            Craft a <br className="hidden lg:block"/>
            <span className="font-miniver text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F9C5D1] font-normal block mt-2">
              Memory.
            </span>
          </h2>

          <p className="text-lg text-[#FAF3E0]/80 max-w-lg mt-2 font-medium leading-relaxed">
            Because the best gifts are the ones made just for them. Let us help you curate the perfect hamper with hand-picked items, custom notes, and premium ribbons.
          </p>

          <div className="mt-6">
            <Link href="/contact">
              <RoseGoldButton>
                Start Customizing
              </RoseGoldButton>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
