"use client";

import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 px-5 relative w-full" id="contact">
      <div className="max-w-[1300px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 bg-white/40 backdrop-blur-2xl border border-[#D4AF37]/40 shadow-2xl shadow-[#3A222C]/10 p-8 md:p-14 rounded-[50px]">
          
          <div className="flex-1 space-y-8">
            <h2 className="text-5xl font-bold text-[#3A222C] mb-8 font-great-vibes">Say Hello 👋</h2>
            <div className="space-y-6 text-[#4A2B35] font-medium text-lg">
              <div className="flex items-center gap-4 bg-white/50 border border-[#D4AF37]/20 p-4 rounded-2xl"><MapPin className="text-[#D4AF37] w-6 h-6" /> <p>42B Avalanche Enclave, Dwarka Sec-10</p></div>
              <div className="flex items-center gap-4 bg-white/50 border border-[#D4AF37]/20 p-4 rounded-2xl"><Mail className="text-[#D4AF37] w-6 h-6" /> <p>info@imaginations.com</p></div>
              <div className="flex items-center gap-4 bg-white/50 border border-[#D4AF37]/20 p-4 rounded-2xl"><Phone className="text-[#D4AF37] w-6 h-6" /> <p>(123) 456-78910</p></div>
            </div>
          </div>

          <form className="flex-1 w-full flex flex-col gap-5">
            <input type="text" placeholder="Your name" className="w-full h-14 px-6 rounded-2xl border-2 border-[#D4AF37]/30 bg-white/60 focus:bg-white focus:border-[#D4AF37] outline-none transition-all text-[#3A222C] font-medium text-lg shadow-sm" />
            <input type="email" placeholder="Your email" className="w-full h-14 px-6 rounded-2xl border-2 border-[#D4AF37]/30 bg-white/60 focus:bg-white focus:border-[#D4AF37] outline-none transition-all text-[#3A222C] font-medium text-lg shadow-sm" />
            <textarea placeholder="Your message" className="w-full h-40 p-6 rounded-2xl border-2 border-[#D4AF37]/30 bg-white/60 focus:bg-white focus:border-[#D4AF37] outline-none transition-all text-[#3A222C] font-medium text-lg resize-y shadow-sm"></textarea>
            <button type="button" className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#FFDF73] text-[#3A222C] border border-[#FFDF73] font-bold text-lg rounded-2xl shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] transition-all transform hover:-translate-y-1 mt-2">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}