"use client";
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Showcase from "@/components/home/Showcase";
import TopPicks from "@/components/home/TopPicks";
import CategoryExplore from "@/components/home/CategoryExplore";

export default function Home() {
  return (
    <main className="relative min-h-screen font-poppins overflow-hidden">
      
      {/* 1. Hardware-Accelerated Background (No more scroll lag!) */}
      <div className="fixed inset-0 -z-20">
        {/* <img 
          src="/images/premium-bg.jpg" 
          alt="Premium Texture" 
          className="w-full h-full object-cover opacity-90"
        /> */}
      </div>

      {/* 2. Static Frosted Glass Layer (Cheap for the GPU) */}
      <div className="fixed inset-0 bg-[#F9C5D1]/20 backdrop-blur-[4px] -z-10 pointer-events-none" />

      {/* 3. Static Lighting Orbs (Removed the laggy animation and mix-blend) */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#D4AF37]/30 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#E8A5B0]/30 blur-[120px]" />
      </div>

      <Navbar />
      
      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col items-center w-full">
        <Hero />
        <Showcase />
        <TopPicks />
        <CategoryExplore />
      </div>
      
      <Footer />
    </main>
  );
}