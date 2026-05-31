import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Loading() {
  return (
    <main className="relative bg-[#Fdf1f4] min-h-screen pt-28 font-nunito overflow-hidden flex flex-col">
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full mix-blend-multiply opacity-50 blur-3xl" style={{ background: 'radial-gradient(circle, rgba(249,197,209,0.8) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full mix-blend-multiply opacity-40 blur-3xl" style={{ background: 'radial-gradient(circle, rgba(232,165,176,0.8) 0%, transparent 70%)' }} />
      </div>

      <Navbar />

      <div className="flex-grow max-w-7xl mx-auto px-6 py-32 w-full flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-[#F9C5D1] border-t-[#D4AF37] rounded-full animate-spin"></div>
          <p className="text-[#8C5A6A] font-bold text-xl animate-pulse font-miniver mt-4">Unpacking your plushie...</p>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
