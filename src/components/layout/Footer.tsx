"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#4A232E] pt-24 pb-8 text-[#Fdf1f4] mt-20">
      {/* Torn Edge Top for Footer */}
      <div className="absolute top-0 left-0 w-full -translate-y-full z-10 text-[#4A232E]">
         <svg className="block w-full h-8 md:h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,120 L0,15 C80,35 150,5 250,25 C350,45 420,10 520,30 C620,50 700,15 800,35 C900,55 980,10 1050,20 C1120,30 1180,5 1200,15 L1200,120 Z" fill="currentColor"/>
         </svg>
      </div>

      <div className="max-w-[1300px] mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 relative z-20">
        
        {/* Column 1: Brand */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="bg-[#5A2A38] p-6 rounded-full border border-[#D4AF37]/40 shadow-lg mb-2 relative">
            <div className="absolute -top-3 -right-3 rotate-[15deg]">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <h2 className="text-3xl font-miniver text-[#Fdf1f4]">
              BlushieBe<span className="text-[#D4AF37]">ww</span>ry
            </h2>
          </div>
          <p className="font-miniver text-xl text-[#F9C5D1]">"We love you bewwry much!"</p>
          <div className="flex gap-6 mt-4 text-2xl">
            <a href="#" className="text-[#F9C5D1] hover:text-[#D4AF37] hover:scale-110 transition-all"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="text-[#F9C5D1] hover:text-[#D4AF37] hover:scale-110 transition-all"><i className="fa-brands fa-pinterest"></i></a>
            <a href="#" className="text-[#F9C5D1] hover:text-[#D4AF37] hover:scale-110 transition-all"><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>

        {/* Column 2: Links */}
        <div className="flex flex-col gap-3 font-medium">
          <h3 className="text-xl font-bold mb-4 text-[#D4AF37] font-miniver text-2xl tracking-wide">Info</h3>
          <Link href="/blushies" className="text-[#Fdf1f4]/80 hover:text-[#D4AF37] transition-colors">Search & Shop</Link>
          <Link href="/policy" className="text-[#Fdf1f4]/80 hover:text-[#D4AF37] transition-colors">Return & Refund Policy</Link>
          <Link href="/policy" className="text-[#Fdf1f4]/80 hover:text-[#D4AF37] transition-colors">Shipping Policy</Link>
          <Link href="/about" className="text-[#Fdf1f4]/80 hover:text-[#D4AF37] transition-colors">About Us</Link>
          <Link href="/contact" className="text-[#Fdf1f4]/80 hover:text-[#D4AF37] transition-colors">Contact Information</Link>
          <Link href="/admin" className="text-[#Fdf1f4]/80 hover:text-[#D4AF37] transition-colors mt-2 text-sm">Admin Portal</Link>
        </div>

        {/* Column 3: Contact */}
        <div className="flex flex-col gap-3 font-medium">
          <h3 className="text-xl font-bold mb-4 text-[#D4AF37] font-miniver text-2xl tracking-wide">Reach Us</h3>
          <p className="text-[#Fdf1f4]/80"><strong className="text-[#Fdf1f4]">Address:</strong><br/>42B Avalanche Enclave,<br/>Dwarka Sec-10, 110075</p>
          <p className="text-[#Fdf1f4]/80 mt-2"><strong className="text-[#Fdf1f4]">Timing:</strong> 11 AM - 10 PM (Mon Closed)</p>
          <p className="text-[#Fdf1f4]/80 mt-2"><strong className="text-[#Fdf1f4]">Queries:</strong> info@blushiebewwry.com</p>
          <p className="text-[#Fdf1f4]/80 mt-2"><strong className="text-[#Fdf1f4]">WhatsApp:</strong> +91 9811833348</p>
        </div>
      </div>
      
      <div className="text-center border-t border-[#Fdf1f4]/10 pt-8 font-medium text-[#Fdf1f4]/50 text-sm">
        <p>© 2026 BlushieBewwry™. All rights reserved.</p>
      </div>
    </footer>
  );
}