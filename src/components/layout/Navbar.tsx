"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SignInButton, UserButton, useUser, Show } from "@clerk/nextjs";
import { Gift, ShoppingBag, Menu } from "lucide-react";

export default function Navbar() {
  const { isSignedIn } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed w-full z-50 top-4 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto bg-[#FCF9F2]/95 backdrop-blur-xl border border-[#EBE3D5] border-b-[#D4AF37] shadow-lg shadow-[#D4AF37]/10 rounded-full px-6 py-3 flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-2 cursor-pointer group text-black">
          <div className="bg-gradient-to-br from-[#D4AF37] to-[#FFDF73] p-2 rounded-full shadow-[0_0_10px_rgba(212,175,55,0.4)] transition-transform group-hover:scale-110">
            <Gift className="text-black w-5 h-5" />
          </div>
          <h1 className="text-2xl font-miniver tracking-wide drop-shadow-sm">
            BlushieBe<span className="text-[#D4AF37] italic font-bold drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]">ww</span>ry
          </h1>
        </Link>

        {/* Links are explicitly black to maintain your typography preference */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm">
          <Link href="/" className="text-black hover:text-[#D4AF37] transition-colors">Home</Link>
          <Link href="/blushies" className="text-black hover:text-[#D4AF37] transition-colors">Our Blushies</Link>
          <Link href="/about" className="text-black hover:text-[#D4AF37] transition-colors">About Us</Link>
          <Link href="/policy" className="text-black hover:text-[#D4AF37] transition-colors">Policies</Link>
          <Link href="/contact" className="text-black hover:text-[#D4AF37] transition-colors">Contact</Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-black hover:text-[#D4AF37] transition-colors p-2 bg-white/50 rounded-full hover:bg-white border border-transparent">
            <ShoppingBag className="w-5 h-5" />
          </button>
          <div className="pl-4 border-l border-[#B27C8C]/30 flex items-center">
            <Show when="signed-out">
              <SignInButton mode="modal">
                <button className="bg-black text-[#FFDF73] px-6 py-2.5 rounded-full text-sm font-medium border border-[#D4AF37]/50 transition-all">
                  Sign In
                </button>
              </SignInButton>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}