import React from "react";
import { motion } from "framer-motion";

interface ScrapbookCardProps {
  imageSrc: string;
  title: string;
  note?: string;
  tiltAngle?: number;
  sticker?: string;
}

export default function ScrapbookCard({ imageSrc, title, note, tiltAngle = 0, sticker }: ScrapbookCardProps) {
  return (
    <motion.div
      initial={{ rotate: tiltAngle }}
      whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative w-64 md:w-72 bg-[#FDFAFA] p-4 pb-6 rounded-sm shadow-[0_10px_20px_rgba(92,58,70,0.1)] border border-[#E0E0E0] mx-auto flex flex-col"
    >
      {/* Washi Tape at the top */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-[var(--color-soft-pink)]/60 backdrop-blur-sm -rotate-2 z-10 shadow-sm border border-white/20" />
      
      {/* Sticker Badge */}
      {sticker && (
        <div className="absolute -top-4 -right-4 bg-[#D4AF37] text-white font-poppins font-bold text-xs px-3 py-1 rounded-full shadow-md rotate-12 z-30 border border-white">
          {sticker}
        </div>
      )}

      {/* Photo Area */}
      <div className="w-full h-56 md:h-64 bg-[var(--color-beige)] overflow-hidden rounded-sm relative border border-[#E0E0E0]/50 shrink-0">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {/* Soft vignette/inner shadow for the photo */}
        <div className="absolute inset-0 shadow-[inset_0_0_15px_rgba(0,0,0,0.05)] pointer-events-none" />
      </div>

      {/* Text Content Area */}
      <div className="mt-4 flex flex-col flex-grow items-center justify-center gap-1.5">
        {/* Title */}
        <h3 className="font-poppins font-bold text-[var(--color-plum)] text-lg leading-tight text-center">{title}</h3>
        
        {/* Handwritten Note underneath */}
        {note && (
          <p className="font-miniver text-[var(--color-plum)]/80 text-lg md:text-xl tracking-wide -rotate-2 leading-snug text-center">
            {note}
          </p>
        )}
      </div>
    </motion.div>
  );
}
