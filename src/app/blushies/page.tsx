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

  const products = await prisma.product.findMany({
    where: whereClause,
    include: {
      category: true,
      tags: true,
    },
    orderBy: { createdAt: 'desc' }
  });

  return (
    <main className="min-h-screen bg-[#Fdf1f4] flex flex-col font-nunito relative overflow-hidden">
      {/* Designer Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full mix-blend-multiply opacity-60 blur-3xl animate-pulse" style={{ background: 'radial-gradient(circle, rgba(249,197,209,0.8) 0%, transparent 70%)', animationDuration: '8s' }} />
        <div className="absolute top-[20%] right-[-5%] w-[40vw] h-[40vw] rounded-full mix-blend-multiply opacity-50 blur-3xl animate-pulse" style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.3) 0%, transparent 70%)', animationDuration: '12s' }} />
        <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] rounded-full mix-blend-multiply opacity-40 blur-3xl animate-pulse" style={{ background: 'radial-gradient(circle, rgba(232,165,176,0.6) 0%, transparent 70%)', animationDuration: '10s' }} />
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <Link key={product.id} href={`/blushies/${product.id}`}>
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