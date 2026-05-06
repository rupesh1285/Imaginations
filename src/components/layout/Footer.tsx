"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#E3D1D1] pt-16 pb-8 text-[#3A222C] border-t border-[#D4AF37]/30 shadow-[0_-10px_20px_rgba(212,175,55,0.1)] mt-20 rounded-t-[50px]">
      <div className="max-w-[1300px] mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        {/* Column 1: Brand */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="bg-white/50 p-6 rounded-full border-2 border-[#D4AF37]/40 shadow-lg mb-2">
            <h2 className="text-3xl font-miniver text-black">
              BlushieBe<span className="text-[#D4AF37]">ww</span>ry
            </h2>
          </div>
          <p className="italic font-medium text-[#5C3A46]">"We love you bewwry much!"</p>
          <div className="flex gap-4 mt-4 text-2xl">
            <a href="#" className="text-black hover:text-[#D4AF37] transition-all"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="text-black hover:text-[#D4AF37] transition-all"><i className="fa-brands fa-pinterest"></i></a>
            <a href="#" className="text-black hover:text-[#D4AF37] transition-all"><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>

        {/* Column 2: Links */}
        <div className="flex flex-col gap-3 font-medium">
          <h3 className="text-xl font-bold mb-4 text-[#3A222C]">Info</h3>
          <Link href="/blushies" className="text-black hover:text-[#D4AF37] transition-colors">Search & Shop</Link>
          <Link href="/policy" className="text-black hover:text-[#D4AF37] transition-colors">Return & Refund Policy</Link>
          <Link href="/policy" className="text-black hover:text-[#D4AF37] transition-colors">Shipping Policy</Link>
          <Link href="/about" className="text-black hover:text-[#D4AF37] transition-colors">About Us</Link>
          <Link href="/contact" className="text-black hover:text-[#D4AF37] transition-colors">Contact Information</Link>
        </div>

        {/* Column 3: Contact */}
        <div className="flex flex-col gap-3 font-medium">
          <h3 className="text-xl font-bold mb-4 text-[#3A222C]">Reach Us</h3>
          <p className="text-[#5C3A46]"><strong className="text-black">Address:</strong><br/>42B Avalanche Enclave,<br/>Dwarka Sec-10, 110075</p>
          <p className="text-[#5C3A46] mt-2"><strong className="text-black">Timing:</strong> 11 AM - 10 PM (Mon Closed)</p>
          <p className="text-[#5C3A46] mt-2"><strong className="text-black">Queries:</strong> info@blushiebewwry.com</p>
          <p className="text-[#5C3A46] mt-2"><strong className="text-black">WhatsApp:</strong> +91 9811833348</p>
        </div>
      </div>
      
      <div className="text-center border-t border-[#3A222C]/10 pt-8 font-medium text-[#5C3A46] text-sm">
        <p>© 2026 BlushieBewwry™. All rights reserved.</p>
      </div>
    </footer>
  );
}