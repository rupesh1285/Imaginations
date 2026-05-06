"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";

export default function Testimonials() {
  const testimonials = [
    { img: "/images/100K+.png", title: "100K+ Customers", desc: "Trusted by 7 Million+ gift lovers." },
    { img: "/images/Customized.jpg", title: "Customized", desc: 'Because "just anything" doesn’t cut it.' },
    { img: "/images/cute-package.jpg", title: "Cute Packaging", desc: "Our boxes blush harder than your crush!" },
    { img: "/images/Delivery.png", title: "Pan-India", desc: "We deliver your love everywhere." },
    { img: "/images/Payment.png", title: "Safe Payments", desc: "Swipe, tap, or chill with COD." },
  ];

  return (
    <section className="py-24 w-full" id="whats-special">
      <div className="max-w-[1300px] mx-auto px-5">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#3A222C]">Why Choose Us?</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#D4AF37] to-[#FFDF73] mx-auto mt-6 rounded-full shadow-[0_0_10px_rgba(212,175,55,0.4)]"></div>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          className="px-4 pb-20"
        >
          {testimonials.map((test, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white/50 backdrop-blur-xl border border-[#D4AF37]/30 shadow-xl shadow-[#3A222C]/5 p-8 rounded-[40px] flex flex-col items-center text-center h-full transform transition-transform hover:-translate-y-2 hover:border-[#D4AF37]/60 hover:shadow-[0_15px_35px_rgba(212,175,55,0.15)]">
                <img src={test.img} alt={test.title} className="w-[180px] h-[180px] object-cover rounded-[30px] mb-6 shadow-md border-4 border-[#FFDF73]" />
                <h3 className="text-2xl font-bold text-[#3A222C] mb-3">{test.title}</h3>
                <p className="text-[#5C3A46] font-medium leading-relaxed">{test.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}