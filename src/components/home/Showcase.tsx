"use client";

"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/effect-fade";

export default function Showcase() {
  const images = ["/images/Hampers.png", "/images/Flowers.png", "/images/hero.png"];
  return (
    <section className="py-12 w-full max-w-6xl mx-auto px-5">
      <div className="rounded-[40px] overflow-hidden shadow-2xl border-4 border-white/50 relative h-[400px] md:h-[600px]">
        <Swiper modules={[Autoplay, EffectFade]} effect="fade" autoplay={{ delay: 2500 }} loop className="h-full w-full">
          {images.map((src, i) => (
            <SwiperSlide key={i} className="h-full w-full">
              <img src={src} className="w-full h-full object-cover" alt="Brand Showcase" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 bg-gradient-to-t from-[#3A222C]/60 to-transparent z-10 flex items-end p-10">
          <h3 className="text-4xl text-white font-miniver drop-shadow-md">Curated with pure love...</h3>
        </div>
      </div>
    </section>
  );
}