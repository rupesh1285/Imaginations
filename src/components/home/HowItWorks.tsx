"use client";

import React from "react";
import { motion } from "framer-motion";
import TornPaperDivider from "../ui/TornPaperDivider";

export default function HowItWorks() {
  const steps = [
    { num: "01", title: "Pick a Blushie", desc: "Find the perfect fluffy companion for your loved one." },
    { num: "02", title: "Add Custom Magic", desc: "Write a heartfelt note and pick their favorite treats." },
    { num: "03", title: "We Deliver Smiles", desc: "We pack it with love and deliver it straight to their door!" }
  ];

  return (
    <section className="relative w-full bg-[#E8A5B0] bg-diy-grid pb-24 pt-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full -translate-y-[99%] z-10">
        <TornPaperDivider color="#E8A5B0" bgColor="var(--color-soft-pink)" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#4A232E]"
          >
            How The Magic Happens
          </motion.h2>
          <p className="font-miniver text-2xl text-[#4A232E]/70 mt-4">Three steps to a perfect surprise...</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -3 : 4 }}
              whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -3 : 4 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, type: "spring" }}
              className="bg-[#FDFAFA] p-8 border border-[#E3D1D1] shadow-xl relative flex flex-col items-center text-center group"
            >
              {/* Tape */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-[#F9C5D1]/60 backdrop-blur-md -rotate-3 z-10 shadow-sm border border-white/50" style={{ clipPath: 'polygon(0% 10%, 100% 0%, 95% 100%, 5% 90%)' }} />
              
              <div className="w-16 h-16 rounded-full bg-[#D4AF37] text-white flex items-center justify-center font-bold text-2xl mb-6 font-miniver rotate-12 group-hover:rotate-0 transition-transform shadow-lg border-2 border-white">
                {step.num}
              </div>
              <h3 className="text-2xl font-bold text-[#4A232E] mb-3 font-poppins">{step.title}</h3>
              <p className="text-[#5C3A46]/80 font-medium leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
