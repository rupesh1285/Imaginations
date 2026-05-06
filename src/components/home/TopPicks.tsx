"use client";
import React from "react";

export default function TopPicks() {
  const picks = [
    { name: "Velvet Snug Bear", price: "₹899", img: "/images/Soft-toys.png" },
    { name: "Rose Charm Necklace", price: "₹1,299", img: "/images/Jwellery.png" },
    { name: "Night Light Cloud", price: "₹650", img: "/images/lamps.png" },
    { name: "Memory Polaroid Set", price: "₹499", img: "/images/Polaroids.png" },
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-5">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-4xl font-bold text-[#3A222C]">Today's Top Picks</h2>
          <p className="text-[#8C5A6A] mt-2 font-medium">Updated daily at 12:00 AM IST</p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {picks.map((pick, i) => (
          <div key={i} className="bg-white/60 backdrop-blur-md rounded-3xl p-4 border border-[#D4AF37]/20 hover:-translate-y-2 transition-transform">
            <img src={pick.img} className="w-full aspect-square object-cover rounded-2xl mb-4" />
            <h4 className="font-bold text-[#3A222C]">{pick.name}</h4>
            <p className="text-[#D4AF37] font-bold mt-1">{pick.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}