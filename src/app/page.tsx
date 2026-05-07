"use client";
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import CategoryExplore from "@/components/home/CategoryExplore";
import TopPicks from "@/components/home/TopPicks";
import CustomGifting from "@/components/home/CustomGifting";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <main className="relative min-h-screen font-poppins overflow-hidden">
      
      {/* 1. Global Soft Pink Background Base (Pinterest Aesthetic) */}
      <div className="fixed inset-0 bg-[#Fdf1f4] bg-diy-grid -z-20" />

      {/* 2. Soft Pink/Plum Gradient Orbs for depth */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#F9C5D1]/30 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-[#E8A5B0]/20 blur-[150px]" />
      </div>

      <Navbar />
      
      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col items-center w-full">
        <Hero />
        <CategoryExplore />
        <TopPicks />
        <CustomGifting />
        <Testimonials />
        <Newsletter />
      </div>
      
      <Footer />
    </main>
  );
}