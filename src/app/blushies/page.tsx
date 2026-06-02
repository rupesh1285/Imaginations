import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import PolaroidCard from "@/components/ui/PolaroidCard";
import SearchBar from "@/components/ui/SearchBar";
import CategoryTabs from "@/components/ui/CategoryTabs";

export default async function BlushiesPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; category?: string }>;
}) {
  const resolvedParams = await searchParams;
  const q = resolvedParams.q || "";
  const category = resolvedParams.category || "";

  // Fetch all categories for tabs
  const categories = await prisma.category.findMany({
    select: { id: true, name: true }
  });

  // Build prisma query
  const whereClause: any = {};
  
  if (category && category !== "all") {
    whereClause.categoryId = category;
  }
  
  if (q) {
    whereClause.OR = [
      { name: { contains: q, mode: 'insensitive' } },
      { tags: { some: { name: { contains: q, mode: 'insensitive' } } } }
    ];
  }

  let products = await prisma.product.findMany({
    where: whereClause,
    include: {
      category: true,
      tags: true,
    },
    orderBy: { createdAt: 'desc' }
  });

  // Shuffle products randomly
  products = products.sort(() => Math.random() - 0.5);

  return (
    <main className="min-h-screen flex flex-col font-nunito relative overflow-hidden text-black">
      {/* Designer Aurora Background */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-[#Fdf1f4] overflow-hidden">
        {/* Animated Mesh Gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-blob" style={{ backgroundColor: '#F9C5D1', animationDuration: '20s' }} />
        <div className="absolute top-[10%] right-[-10%] w-[50vw] h-[50vw] rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animate-blob animation-delay-2000" style={{ backgroundColor: '#D4AF37', animationDuration: '25s' }} />
        <div className="absolute bottom-[-20%] left-[20%] w-[70vw] h-[70vw] rounded-full mix-blend-multiply filter blur-[130px] opacity-50 animate-blob animation-delay-4000" style={{ backgroundColor: '#FF9AA2', animationDuration: '22s' }} />
        <div className="absolute bottom-[-10%] right-[10%] w-[50vw] h-[50vw] rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob animation-delay-6000" style={{ backgroundColor: '#A40000', animationDuration: '28s' }} />
        
        {/* Subtle premium grain texture overlay */}
        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
      </div>

      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10 flex-grow w-full">
        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-6xl font-bold text-[#4A232E] mb-4 font-great-vibes">
            All Blushies
          </h1>
          <p className="text-xl text-[#8C5A6A]">
            Find your perfect cuddle companion.
          </p>
        </div>

        <SearchBar />
        <CategoryTabs categories={categories} />

        {/* Polaroid Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {products.map((product) => (
            <Link key={product.id} href={`/blushies/${product.id}`} prefetch={false}>
              <PolaroidCard 
                title={product.name}
                imageSrc={product.imageUrls && product.imageUrls.length > 0 ? product.imageUrls[0] : "/images/placeholder.jpg"}
                price={`$${Number(product.price).toFixed(2)}`}
                note={product.tagline || ""}
                sticker={product.tags.length > 0 ? product.tags[0].name : undefined}
              />
            </Link>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-20 text-[#8C5A6A] bg-white/40 rounded-2xl border border-[#D4AF37]/30">
            <h3 className="text-2xl font-bold mb-2">No products found</h3>
            <p>We couldn't find any plushies matching your search. Try different keywords or check back later!</p>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}