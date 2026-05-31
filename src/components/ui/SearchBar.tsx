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
    <div className="relative w-full max-w-md mx-auto mb-8">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-[#8C5A6A]" />
      </div>
      <input
        type="text"
        className="block w-full pl-11 pr-4 py-3 bg-white/60 border border-[#D4AF37]/40 rounded-full text-[#4A232E] placeholder-[#8C5A6A]/60 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-shadow shadow-sm backdrop-blur-sm"
        placeholder="Search blushies, tags, or colors..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
