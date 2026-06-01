"use client";

import React from "react";
import { motion } from "framer-motion";

interface PolaroidCardProps {
  imageSrc: string;
  title: string;
  price: string;
  note?: string;
  tiltAngle?: number;
  sticker?: string;
}

export default function PolaroidCard({ imageSrc, title, price, note, sticker }: PolaroidCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, zIndex: 10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative w-full bg-[#FDFAFA] p-3 pb-4 rounded-sm shadow-[0_10px_20px_rgba(92,58,70,0.1)] border border-[#E0E0E0] mx-auto flex flex-col group cursor-pointer"
    >
      {/* Washi Tape at the top */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#F9C5D1]/80 backdrop-blur-sm -rotate-2 z-10 shadow-sm border border-white/40" />
      
      {/* Sticker Badge */}
      {sticker && (
        <div className="absolute -top-4 -right-4 bg-[#D4AF37] text-white font-nunito font-bold text-xs px-3 py-1 rounded-full shadow-md rotate-12 z-30 border border-white">
          {sticker}
        </div>
      )}

      {/* Photo Area */}
      <div className="relative aspect-square w-full bg-gray-50 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 shadow-[inset_0_0_15px_rgba(0,0,0,0.05)] pointer-events-none" />
      </div>

      {/* Text Content Area */}
      <div className="mt-3 flex flex-col flex-grow items-center justify-center gap-1">
        <h3 className="font-nunito font-bold text-[#5C3A46] text-base leading-tight text-center">{title}</h3>
        <p className="font-nunito font-extrabold text-[#D4AF37] text-sm">{price}</p>
        
        {note && (
          <p className="font-miniver text-[#8C5A6A] text-sm tracking-wide -rotate-2 leading-snug text-center mt-1">
            {note}
          </p>
        )}
      </div>
    </motion.div>
  );
}
