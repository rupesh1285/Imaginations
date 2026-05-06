import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function BlushiesPage() {
  return (
    <main className="bg-[#F5EDED] min-h-screen pt-32">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-[#3A222C] mb-4">All Blushies</h1>
        <p className="text-xl text-[#5C3A46] mb-12">Everything cute, all in one place.</p>
        <div className="bg-white/40 p-20 rounded-[40px] border border-[#D4AF37]/30 text-center">
          <h2 className="text-3xl font-miniver text-[#8C5A6A]">Products loading soon...</h2>
        </div>
      </div>
      <Footer />
    </main>
  );
}