"use client";
import React from "react";
import Link from "next/link";

export default function CategoryExplore() {
  // Just grabbing the first 10 for the tease rows
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
    <section className="py-24 relative max-w-7xl mx-auto px-5 w-full">
      <h2 className="text-5xl font-bold text-center text-[#3A222C] mb-12">Explore BlushieBewwry</h2>
      
      {/* Fixed height with hidden overflow to cut it off */}
      <div className="relative h-[450px] overflow-hidden rounded-[40px]">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {products.map((p, i) => (
            <div key={i} className="bg-white/40 border border-[#D4AF37]/20 p-3 rounded-[30px] text-center">
              <img src={p.img} className="w-full aspect-square rounded-[20px] object-cover mb-2" />
              <h3 className="font-bold text-[#3A222C] text-sm">{p.name}</h3>
            </div>
          ))}
        </div>

        {/* The beautiful blur overlay */}
        <div className="absolute bottom-0 left-0 w-full h-[250px] bg-gradient-to-t from-[#F5EDED] via-[#F5EDED]/80 to-transparent flex items-end justify-center pb-10 z-10">
          <Link href="/blushies" className="bg-[#3A222C] text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:bg-black transition-colors hover:scale-105 transform border border-[#D4AF37]">
            View All Blushies
          </Link>
        </div>
      </div>
    </section>
  );
}