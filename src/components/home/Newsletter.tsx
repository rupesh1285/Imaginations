"use client";

import React from "react";
import { motion } from "framer-motion";
import RoseGoldButton from "../ui/RoseGoldButton";

export default function Newsletter() {
  return (
    <section className="relative w-full bg-[var(--color-soft-pink)] py-24 overflow-hidden border-b border-white/20">
      
      {/* Soft Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/30 rounded-full blur-[80px]" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[var(--color-gold)]/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/40 backdrop-blur-md border border-white/60 p-10 md:p-14 rounded-[40px] shadow-[0_20px_50px_rgba(92,58,70,0.05)]"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-plum)] mb-4">
            Secret Drops & Surprises
          </h2>
          <p className="text-[var(--color-plum)]/80 text-lg mb-8 font-medium">
            Join our Blushie family to be the first to know about new adoptions, exclusive hampers, and warm hugs.
          </p>

          <form className="flex flex-col md:flex-row gap-4 justify-center max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address..." 
              className="flex-1 bg-white/70 border-2 border-white/80 rounded-full px-6 py-4 outline-none focus:border-[var(--color-rose-gold)] transition-colors text-[var(--color-plum)] placeholder-[var(--color-plum)]/50 font-medium shadow-sm"
              required
            />
            <RoseGoldButton type="submit" className="whitespace-nowrap">
              Join Family
            </RoseGoldButton>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
