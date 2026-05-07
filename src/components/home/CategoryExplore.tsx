"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import TornPaperDivider from "../ui/TornPaperDivider";

const categories = [
  {
    id: "hampers",
    name: "Luxury Hampers",
    desc: "Curated boxes of joy",
    image: "/images/Hampers.png", // Replace with real
    color: "bg-[#E8A5B0]", // Deeper pink
    rotation: -4
  },
  {
    id: "plushies",
    name: "Soft Blushies",
    desc: "Huggable companions",
    image: "/images/hero.png", // Replace with real
    color: "bg-[#D4AF37]", // Gold
    rotation: 3
  },
  {
    id: "accessories",
    name: "Accessories",
    desc: "Little shiny things",
    image: "/images/premium-bg.jpg", // Placeholder
    color: "bg-[#B76E79]", // Rose gold
    rotation: -2
  }
];

export default function CategoryExplore() {
  return (
    <section className="relative w-full bg-[var(--color-soft-pink)] bg-diy-grid pb-24">
      {/* Torn Edge Transition from previous section */}
      <div className="absolute top-0 left-0 w-full -translate-y-[99%] z-10">
        <TornPaperDivider color="var(--color-soft-pink)" bgColor="transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 mt-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[var(--color-plum)]"
          >
            The Inspiration Board
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-miniver text-2xl text-[var(--color-plum)]/80 mt-4"
          >
            Find exactly what you're looking for...
          </motion.p>
        </div>

        {/* Circular "Pinned Scraps" Layout */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-16">
          {categories.map((category, index) => {
            const randomRotation = index % 2 === 0 ? -12 : 15;
            return (
            <Link href={`/blushies?category=${category.id}`} key={category.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: randomRotation }}
                whileInView={{ opacity: 1, scale: 1, rotate: category.rotation }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.05, rotate: 0 }}
                className="group relative cursor-pointer flex flex-col items-center"
              >
                {/* Washi Tape */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-[#Fdf1f4]/60 backdrop-blur-md rotate-[-5deg] z-20 shadow-sm border border-white/40" style={{ clipPath: 'polygon(5% 0%, 95% 0%, 100% 50%, 95% 100%, 5% 100%, 0% 50%)' }} />
                
                {/* Circle Image Wrapper */}
                <div className={`w-40 h-40 md:w-56 md:h-56 rounded-full p-2 ${category.color} shadow-lg transition-transform duration-300 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]`}>
                  <div className="w-full h-full rounded-full overflow-hidden border-[6px] border-[#FDFAFA] relative bg-white">
                    <img 
                      src={category.image} 
                      alt={category.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-[#5C3A46]/10 group-hover:bg-transparent transition-colors duration-300 mix-blend-multiply" />
                  </div>
                </div>

                {/* Hand-written Label */}
                <div className="mt-4 bg-[#FDFAFA] px-6 py-3 shadow-[2px_4px_10px_rgba(0,0,0,0.1)] rotate-[-4deg] group-hover:rotate-0 transition-all border border-[#E3D1D1] relative flex flex-col items-center">
                  <div className="absolute top-1 left-2 w-2 h-2 rounded-full bg-[#E8A5B0]" />
                  <h3 className="font-poppins font-bold text-[var(--color-plum)]">{category.name}</h3>
                  <p className="font-miniver text-sm text-[var(--color-plum)]/60 mt-1">{category.desc}</p>
                </div>
              </motion.div>
            </Link>
          )})}
        </div>
      </div>
    </section>
  );
}