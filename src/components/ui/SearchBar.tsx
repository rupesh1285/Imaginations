"use client";

import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useDebounce } from "@/lib/useDebounce";

export default function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    const currentQ = params.get("q") || "";
    
    if (debouncedQuery !== currentQ) {
      if (debouncedQuery) {
        params.set("q", debouncedQuery);
      } else {
        params.delete("q");
      }
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }
  }, [debouncedQuery, pathname, router, searchParams]);

  return (
    <div className="relative w-full max-w-2xl mx-auto mb-12 group">
      {/* Premium glowing backdrop behind the search bar */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/20 via-[#F9C5D1]/30 to-[#D4AF37]/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 opacity-70"></div>
      
      <div className="relative flex items-center w-full">
        <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-[#D4AF37] drop-shadow-sm group-hover:scale-110 transition-transform duration-300" />
        </div>
        <input
          type="text"
          className="block w-full pl-14 pr-6 py-4 bg-[#FCF9F2]/80 backdrop-blur-md border-2 border-[#EBE3D5] rounded-full text-[#4A232E] placeholder-[#8C5A6A]/70 focus:ring-4 focus:ring-[#D4AF37]/30 focus:border-[#D4AF37] outline-none transition-all duration-300 shadow-[0_8px_30px_rgba(92,58,70,0.08)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)] text-lg font-medium"
          placeholder="Search for cute plushies, tags, or colors..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* Subtle decorative sparkle */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
           <i className="fa-solid fa-sparkles text-[#D4AF37]/60 text-sm animate-pulse"></i>
        </div>
      </div>
    </div>
  );
}
