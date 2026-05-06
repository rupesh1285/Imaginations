import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PolicyPage() {
  return (
    <main className="bg-[#F5EDED] min-h-screen pt-32">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-[#3A222C] mb-8">Policies</h1>
        <div className="bg-white/50 p-8 rounded-[30px] border border-[#D4AF37]/20 text-[#5C3A46]">
          <h2 className="text-2xl font-bold text-black mb-4">Returns & Refunds</h2>
          <p>Because our items are customized and delicate, we only accept returns for damaged goods reported within 24 hours of delivery. Love you bewwry much for understanding!</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}