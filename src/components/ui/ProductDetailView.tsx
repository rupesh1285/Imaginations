"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Heart, ShieldCheck, Truck, RotateCcw, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

interface Product {
  id: string;
  name: string;
  price: any;
  description: string | null;
  imageUrls: string[];
  tags: { name: string }[];
  rating: number;
  reviews: number;
  features: string[];
  inStock: boolean;
}

export default function ProductDetailView({ product }: { product: Product }) {
  const images = product.imageUrls && product.imageUrls.length > 0 ? product.imageUrls : ["/images/placeholder.jpg"];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div className="relative">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="sticky top-32"
        >
          <div className="relative aspect-square w-full rounded-[2rem] overflow-hidden bg-white/40 border-4 border-white shadow-2xl">
            {images.length > 1 ? (
              <Swiper
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                effect="fade"
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 7000, disableOnInteraction: false }}
                loop={true}
                className="w-full h-full product-swiper"
              >
                {images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img src={img} alt={`${product.name} - image ${idx + 1}`} className="w-full h-full object-cover" />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <img 
                src={images[0]} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            )}
            
            {product.tags && product.tags.length > 0 && (
              <div className="absolute top-6 right-6 z-10 bg-[#D4AF37] text-white font-bold px-4 py-2 rounded-full shadow-lg rotate-3 border-2 border-white pointer-events-none">
                {product.tags[0].name}
              </div>
            )}
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col justify-center"
      >
        <h1 className="text-5xl lg:text-6xl font-bold text-[#4A232E] font-great-vibes mb-2">
          {product.name}
        </h1>
        
        <div className="flex items-center gap-4 mb-4">
          {product.rating > 0 && (
            <div className="flex items-center gap-1 text-[#D4AF37]">
              <Star size={18} fill="currentColor" />
              <span className="font-bold text-gray-800">{product.rating.toFixed(1)}</span>
              {product.reviews > 0 && (
                <span className="text-gray-500 text-sm font-normal ml-1">({product.reviews} reviews)</span>
              )}
            </div>
          )}
          {product.inStock ? (
            <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-md">In Stock</span>
          ) : (
            <span className="bg-red-100 text-red-800 text-xs font-bold px-2 py-1 rounded-md">Out of Stock</span>
          )}
        </div>
        
        <p className="text-3xl font-extrabold text-[#D4AF37] mb-6">${Number(product.price).toFixed(2)}</p>
        
        <p className="text-lg text-[#5C3A46] leading-relaxed mb-8">
          {product.description || "No description provided for this product."}
        </p>

        {product.features && product.features.length > 0 && (
          <div className="mb-10">
            <h3 className="font-bold text-[#4A232E] text-xl mb-4">Why you'll love it:</h3>
            <ul className="space-y-3">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-[#5C3A46]">
                  <div className="w-6 h-6 rounded-full bg-[#F9C5D1] flex items-center justify-center text-[#4A232E] shrink-0 mt-0.5">
                    <ShieldCheck size={14} />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <button 
            disabled={!product.inStock}
            className="flex-1 flex items-center justify-center gap-2 bg-[#4A232E] text-white font-bold text-lg py-4 px-8 rounded-full shadow-[0_10px_20px_rgba(74,35,46,0.2)] hover:bg-[#5C3A46] hover:-translate-y-1 transition-all disabled:opacity-50 disabled:hover:translate-y-0"
          >
            <ShoppingCart size={22} />
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </button>
          <button className="flex items-center justify-center gap-2 bg-white text-[#4A232E] border-2 border-[#4A232E] font-bold text-lg py-4 px-8 rounded-full hover:bg-[#F9C5D1]/20 transition-all">
            <Heart size={22} />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 py-6 border-t border-[#8C5A6A]/20">
          <div className="flex items-center gap-3 text-[#8C5A6A]">
            <Truck size={24} className="text-[#D4AF37]" />
            <span className="text-sm font-semibold">Free shipping over $50</span>
          </div>
          <div className="flex items-center gap-3 text-[#8C5A6A]">
            <RotateCcw size={24} className="text-[#D4AF37]" />
            <span className="text-sm font-semibold">30-day easy returns</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
