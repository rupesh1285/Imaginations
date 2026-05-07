"use client";
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import CategoryExplore from "@/components/home/CategoryExplore";
import HowItWorks from "@/components/home/HowItWorks";
import HamperAnatomy from "@/components/home/HamperAnatomy";
import TopPicks from "@/components/home/TopPicks";
import CustomGifting from "@/components/home/CustomGifting";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <main className="relative min-h-screen font-nunito overflow-hidden">
      
      {/* 1. Global Soft Pink Background Base (Pinterest Aesthetic) */}
      <div className="fixed inset-0 bg-[#Fdf1f4] bg-diy-grid -z-20" />

      {/* 2. Soft Pink/Plum Gradient Orbs for depth */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full" style={{ background: 'radial-gradient(circle, rgba(249,197,209,0.3) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] rounded-full" style={{ background: 'radial-gradient(circle, rgba(232,165,176,0.2) 0%, transparent 70%)' }} />
      </div>

      <Navbar />
      
      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col items-center w-full">
        <Hero />
        <CategoryExplore />
        <HowItWorks />
        <HamperAnatomy />
        <TopPicks />
        <CustomGifting />
        <Testimonials />
        <Newsletter />
      </div>
      
      <Footer />
    </main>
  );
}