"use client";

import React from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface CategoryTabsProps {
  categories: { id: string; name: string }[];
}

export default function CategoryTabs({ categories }: CategoryTabsProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const currentCategory = searchParams.get("category") || "all";

  const handleSelect = (categoryId: string) => {
    const params = new URLSearchParams(searchParams);
    if (categoryId === "all") {
      params.delete("category");
    } else {
      params.set("category", categoryId);
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="w-full flex overflow-x-auto gap-3 pb-4 mb-8 snap-x hide-scrollbar">
      <button
        onClick={() => handleSelect("all")}
        className={`shrink-0 snap-start px-6 py-2 rounded-full font-bold transition-all shadow-sm ${
          currentCategory === "all" 
            ? "bg-[#4A232E] text-white" 
            : "bg-white/60 text-[#8C5A6A] border border-[#D4AF37]/30 hover:bg-[#Fdf1f4]"
        }`}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => handleSelect(cat.id)}
          className={`shrink-0 snap-start px-6 py-2 rounded-full font-bold transition-all shadow-sm ${
            currentCategory === cat.id 
              ? "bg-[#4A232E] text-white" 
              : "bg-white/60 text-[#8C5A6A] border border-[#D4AF37]/30 hover:bg-[#Fdf1f4]"
          }`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}
