import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <main className="bg-[#F5EDED] min-h-screen pt-32">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h1 className="text-5xl font-bold text-[#3A222C] mb-8">Our Story</h1>
        <p className="text-xl leading-relaxed text-[#5C3A46]">
          BlushieBewwry started with a simple idea: gifting shouldn't feel like a chore. It should feel like a warm hug. 
          We curate every single piece with love, ensuring that when your person opens their box, they feel adored.
        </p>
      </div>
      <Footer />
    </main>
  );
}