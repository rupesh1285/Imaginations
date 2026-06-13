"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Products() {
  const products = [
    { img: "/images/stationary_items.png", name: "Desk Cuties" },
    { img: "/images/Jwellery.png", name: "Sparkle & Charms" },
    { img: "/images/Frag.png", name: "Scents & Smiles" },
    { img: "/images/Skin.png", name: "Glow & Glam" },
    { img: "/images/Hampers.png", name: "Hugs & Hampers" },
    { img: "/images/Flowers.png", name: "Florals & Decor" },
    { img: "/images/Soft-toys.png", name: "Velvet Snugs" },
    { img: "/images/Polaroids.png", name: "Polaroids" },
    { img: "/images/lamps.png", name: "Night Lights" },
    { img: "/images/Bottles.png", name: "Cute Bottles" },
  ];

  return (
    <section className="py-24 px-5 relative w-full" id="products">
      <div className="max-w-[1300px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-[#3A222C] font-great-vibes">Our Collection</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#D4AF37] to-[#FFDF73] mx-auto mt-6 rounded-full shadow-[0_0_10px_rgba(212,175,55,0.4)]"></div>
        </motion.div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {products.map((product, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/40 backdrop-blur-lg border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 shadow-lg shadow-[#3A222C]/5 p-3 rounded-[30px] flex flex-col items-center text-center group cursor-pointer hover:bg-white/70 hover:shadow-[0_10px_25px_rgba(212,175,55,0.15)] hover:-translate-y-3 transition-all duration-300"
            >
              <div className="w-full aspect-square rounded-[20px] overflow-hidden mb-4 bg-[#F5EDED]">
                <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <h3 className="text-sm md:text-base font-bold text-[#3A222C] mb-2">{product.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}