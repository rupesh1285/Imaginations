import React from "react";
import { motion } from "framer-motion";

interface ScrapbookCardProps {
  imageSrc: string;
  title: string;
  note?: string;
  tiltAngle?: number;
}

export default function ScrapbookCard({ imageSrc, title, note, tiltAngle = 0 }: ScrapbookCardProps) {
  return (
    <motion.div
      initial={{ rotate: tiltAngle }}
      whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative w-64 md:w-72 bg-[#FDFAFA] p-4 pb-12 rounded-sm shadow-[0_10px_20px_rgba(92,58,70,0.1)] border border-[#E0E0E0] mx-auto"
    >
      {/* Washi Tape at the top */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-[var(--color-soft-pink)]/60 backdrop-blur-sm -rotate-2 z-10 shadow-sm border border-white/20" />
      
      {/* Photo Area */}
      <div className="w-full h-56 md:h-64 bg-[var(--color-beige)] overflow-hidden rounded-sm relative border border-[#E0E0E0]/50">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {/* Soft vignette/inner shadow for the photo */}
        <div className="absolute inset-0 shadow-[inset_0_0_15px_rgba(0,0,0,0.05)] pointer-events-none" />
      </div>

      {/* Title */}
      <div className="mt-4 text-center">
        <h3 className="font-poppins font-bold text-[var(--color-plum)] text-lg">{title}</h3>
      </div>

      {/* Handwritten Note underneath */}
      {note && (
        <div className="absolute bottom-3 left-0 w-full text-center px-4">
          <p className="font-miniver text-[var(--color-plum)]/80 text-xl tracking-wide -rotate-2">{note}</p>
        </div>
      )}
    </motion.div>
  );
}
