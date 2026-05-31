import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import ProductDetailView from "@/components/ui/ProductDetailView";

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const product = await prisma.product.findUnique({
    where: { id },
    include: {
      category: true,
      tags: true,
    }
  });

  if (!product) {
    notFound();
  }

  return (
    <main className="relative bg-[#Fdf1f4] min-h-screen pt-28 font-nunito overflow-hidden flex flex-col">
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full mix-blend-multiply opacity-50 blur-3xl" style={{ background: 'radial-gradient(circle, rgba(249,197,209,0.8) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full mix-blend-multiply opacity-40 blur-3xl" style={{ background: 'radial-gradient(circle, rgba(232,165,176,0.8) 0%, transparent 70%)' }} />
      </div>

      <Navbar />

      <div className="flex-grow max-w-7xl mx-auto px-6 py-12 w-full">
        <div className="mb-8 flex items-center gap-2 text-sm text-[#8C5A6A]">
          <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blushies" className="hover:text-[#D4AF37] transition-colors">Blushies</Link>
          {product.category && (
            <>
              <span>/</span>
              <Link href={`/blushies?category=${product.categoryId}`} className="hover:text-[#D4AF37] transition-colors">{product.category.name}</Link>
            </>
          )}
          <span>/</span>
          <span className="font-bold text-[#4A232E]">{product.name}</span>
        </div>

        <ProductDetailView product={{
          ...product,
          price: Number(product.price)
        }} />

      </div>
      <Footer />
    </main>
  );
}
