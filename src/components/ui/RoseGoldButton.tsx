import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface RoseGoldButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: "primary" | "outline";
}

export default function RoseGoldButton({ children, variant = "primary", className = "", ...props }: RoseGoldButtonProps) {
  const baseStyles = "relative overflow-hidden rounded-full font-nunito font-bold text-sm md:text-base px-8 py-4 transition-all duration-300 flex items-center justify-center gap-2 group";
  
  const primaryStyles = "bg-gradient-to-r from-[var(--color-rose-gold)] to-[var(--color-soft-pink)] text-white shadow-[0_0_15px_rgba(183,110,121,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] border border-white/20";
  
  const outlineStyles = "bg-white/30 backdrop-blur-md border-2 border-[var(--color-rose-gold)] text-[var(--color-plum)] hover:bg-[var(--color-rose-gold)] hover:text-white shadow-sm";

  return (
    <motion.button
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variant === "primary" ? primaryStyles : outlineStyles} ${className}`}
      {...props}
    >
      {/* Shine effect overlay for primary button */}
      {variant === "primary" && (
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shine_1s_ease-in-out]" />
      )}
      {children}
    </motion.button>
  );
}
