"use client";

import React, { useState } from "react";
import { Show, SignInButton, UserButton } from "@clerk/nextjs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Updated to point to your new /images/ folder
  const products = [
    { img: "/images/stationary_items.png", name: "Desk Cuties & Stationery" },
    { img: "/images/Jwellery.png", name: "Sparkle & Charms" },
    { img: "/images/Frag.png", name: "Scents & Smiles" },
    { img: "/images/Skin.png", name: "Glow & Glam" },
    { img: "/images/Hampers.png", name: "Hugs & Hampers" },
    { img: "/images/Flowers.png", name: "Florals & Pretty Decor" },
    { img: "/images/Soft-toys.png", name: "Velvet Snugs & Plushies" },
    { img: "/images/Polaroids.png", name: "Frames & Polaroids" },
    { img: "/images/lamps.png", name: "Night Light Delights" },
    { img: "/images/Bottles.png", name: "Bottle Full of Feelings" },
    { img: "/images/Lunch.png", name: "Lunch-Boxes" },
    { img: "/images/Sling-bags.png", name: "Sling-Bags" },
    { img: "/images/Hairs-t.png", name: "For your Hairs" },
    { img: "/images/Keychains.png", name: "Cute Keychains" },
    { img: "/images/Cars.png", name: "Hot-Wheels" },
    { img: "/images/Col.png", name: "Art & Doodle Zone" },
    { img: "/images/Board.png", name: "Board-Games" },
    { img: "/images/Clock.png", name: "Aesthetic-clocks" },
    { img: "/images/DIY.png", name: "DIY-Items" },
    { img: "/images/Mugs.png", name: "Fancy-Mugs" },
  ];

  // Updated to point to your new /images/ folder
  const testimonials = [
    { img: "/images/100K+.png", title: "100K+ Customers", desc: "Trusted by 7 Million+ gift lovers (and some overthinkers)" },
    { img: "/images/Customized.jpg", title: "Customized-Surprises", desc: 'Customized Specially for your loved ones Because "just anything" doesn’t cut it.' },
    { img: "/images/cute-package.jpg", title: "Fast & Cute Packaging", desc: "Cutest packaging in town (and it flies out fast). Our boxes blush harder than your crush !!" },
    { img: "/images/Delivery.png", title: "Pan-India Delivery", desc: "From Kashmir to kanyakumari & From metro cities to mountain towns — we deliver your love everywhere." },
    { img: "/images/Payment.png", title: "Safe Payments + COD", desc: "Whatever suits your vibe — swipe, tap, or chill with cash. (Even cash from Dad is also accepted !!)" },
  ];

  return (
    <main className="relative">
      {/* Header & Navbar */}
      <header className="fixed w-full z-50 bg-[var(--primary-color)] shadow-sm">
        <nav className="max-w-[1300px] mx-auto px-5 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center">
            <h2 className="text-3xl font-semibold font-miniver text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-pink-600 to-pink-500">
              <i className="fa-solid fa-gift mr-2 text-[var(--secondary-color)]"></i> 
              Imaginations
            </h2>
          </a>

          {/* Desktop Menu */}
          <ul className={`fixed lg:static top-0 ${isMenuOpen ? "left-0" : "-left-full"} h-screen lg:h-auto w-[300px] lg:w-auto bg-white lg:bg-transparent flex flex-col lg:flex-row items-center pt-24 lg:pt-0 gap-4 lg:gap-2 transition-all duration-300 shadow-xl lg:shadow-none z-40`}>
            <button 
              onClick={() => setIsMenuOpen(false)} 
              className="lg:hidden absolute top-6 right-6 text-2xl text-[var(--dark-color)]"
            >
              <i className="fas fa-times"></i>
            </button>
            
            {["Home", "Products", "What's Special", "Contact"].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase().replace(" ", "-").replace("'", "")}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[var(--dark-color)] text-lg px-5 py-2 rounded-full hover:bg-[var(--secondary-color)] hover:text-[var(--primary-color)] transition-colors block"
                >
                  {item}
                </a>
              </li>
            ))}

            <li className="lg:ml-4 mt-4 lg:mt-0">
              <div className="bg-white px-5 py-2 rounded-full font-semibold shadow-sm hover:scale-105 transition-transform cursor-pointer border-2 border-[var(--secondary-color)]">
                <Show when="signed-out">
                  <SignInButton mode="modal" />
                </Show>
                <Show when="signed-in">
                  <UserButton />
                </Show>
              </div>
            </li>
          </ul>

          <button 
            onClick={() => setIsMenuOpen(true)} 
            className="lg:hidden text-2xl text-[var(--dark-color)]"
          >
            <i className="fas fa-bars"></i>
          </button>
        </nav>
      </header>

      {/* Overlay for Mobile Menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Hero Section */}
      <section className="bg-[var(--primary-color)] min-h-screen flex items-center pt-20" id="home">
        <div className="max-w-[1300px] mx-auto px-5 flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-10 lg:gap-0">
          <div className="text-white text-center lg:text-left flex-1">
            <h2 className="text-5xl md:text-6xl text-[var(--secondary-color)] font-miniver drop-shadow-sm">
              Spreading Love
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold mt-4 max-w-2xl mx-auto lg:mx-0">
              Bless Your loved ones with Imaginations
            </h3>
            <p className="text-lg mt-6 mb-10 max-w-xl mx-auto lg:mx-0 opacity-90">
              Our gifts are little hugs wrapped in ribbon — sweet, Full of charm, comfort and love.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a href="#products" className="px-8 py-3 bg-[var(--secondary-color)] text-[var(--primary-color)] font-medium rounded-full border-2 border-transparent hover:bg-transparent hover:border-[var(--dark-color)] hover:text-[var(--dark-color)] transition-all">
                Order Now
              </a>
              <a href="#contact" className="px-8 py-3 bg-transparent text-[var(--dark-color)] border-2 border-[var(--dark-color)] font-medium rounded-full hover:bg-[var(--secondary-color)] hover:border-[var(--secondary-color)] hover:text-[var(--primary-color)] transition-all">
                Reach Us
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <img src="/images/hero.png" alt="Hero Gift Box" className="max-w-[280px] md:max-w-[400px] lg:max-w-[500px] animate-float drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-white py-24" id="products">
        <div className="max-w-[1300px] mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold uppercase text-[var(--dark-color)]">Our Products</h2>
            <div className="w-20 h-1 bg-[var(--primary-color)] mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-12">
            {products.map((product, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group cursor-pointer hover:scale-105 transition-transform duration-300">
                <img src={product.img} alt={product.name} className="w-full aspect-square object-cover rounded-2xl drop-shadow-sm group-hover:drop-shadow-lg transition-all" />
                <h3 className="mt-4 text-lg font-medium text-[var(--dark-color)] leading-tight">{product.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[var(--secondary-color)] py-24 text-white" id="whats-special">
        <div className="max-w-[1300px] mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold uppercase">The Cutest Reasons to Pick Us !!</h2>
            <div className="w-20 h-1 bg-[var(--primary-color)] mx-auto mt-4 rounded-full"></div>
          </div>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="px-10 pb-16"
          >
            {testimonials.map((test, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col items-center text-center px-4">
                  <img src={test.img} alt={test.title} className="w-[250px] h-[250px] object-cover rounded-[30px] mb-8 shadow-lg" />
                  <h3 className="text-2xl font-semibold mb-4">{test.title}</h3>
                  <i className="text-lg opacity-90 leading-relaxed">{test.desc}</i>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-24" id="contact">
        <div className="max-w-[1300px] mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold uppercase text-[var(--dark-color)]">Contact Us</h2>
            <div className="w-20 h-1 bg-[var(--primary-color)] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 justify-between items-start">
            <div className="flex-1 space-y-6 text-[var(--dark-color)] text-lg">
              <div className="flex items-center gap-4"><i className="fa-solid fa-location-crosshairs text-2xl text-[var(--primary-color)]"></i> <p>42B Avalanche Enclave, Dwarka Sec-10, 110075</p></div>
              <div className="flex items-center gap-4"><i className="fa-regular fa-envelope text-2xl text-[var(--primary-color)]"></i> <p>info@imaginations.com</p></div>
              <div className="flex items-center gap-4"><i className="fa-solid fa-phone text-2xl text-[var(--primary-color)]"></i> <p>(123) 456-78910</p></div>
              <div className="flex items-center gap-4"><i className="fa-regular fa-clock text-2xl text-[var(--primary-color)]"></i> <p>Monday - Friday : 9:00 AM - 5:00 PM</p></div>
              <div className="flex items-center gap-4"><i className="fa-regular fa-clock text-2xl text-[var(--primary-color)]"></i> <p>Saturday : 10:00 AM - 3:00 PM</p></div>
              <div className="flex items-center gap-4"><i className="fa-regular fa-clock text-2xl text-[var(--primary-color)]"></i> <p>Sunday: Closed</p></div>
              <div className="flex items-center gap-4"><i className="fa-solid fa-globe text-2xl text-[var(--primary-color)]"></i> <p>www.codemodern.com</p></div>
            </div>

            <form className="flex-1 w-full flex flex-col gap-4">
              <input type="text" placeholder="Your name" required className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-[var(--secondary-color)] outline-none bg-white text-[var(--dark-color)] transition-colors" />
              <input type="email" placeholder="Your email" required className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:border-[var(--secondary-color)] outline-none bg-white text-[var(--dark-color)] transition-colors" />
              <textarea placeholder="Your message" required className="w-full h-32 p-4 rounded-lg border border-gray-300 focus:border-[var(--secondary-color)] outline-none bg-white text-[var(--dark-color)] resize-y transition-colors"></textarea>
              <button type="submit" className="self-start px-8 py-3 bg-[var(--primary-color)] text-[var(--dark-color)] font-medium rounded-full border border-[var(--primary-color)] hover:bg-[var(--secondary-color)] hover:text-white transition-all">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--dark-color)] py-8 text-white">
        <div className="max-w-[1300px] mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="opacity-90">© 2026 Imaginations. All rights reserved.</p>
          <div className="flex gap-6 text-2xl">
            <a href="#" className="hover:text-[var(--primary-color)] transition-colors"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://www.instagram.com/_rupesh_agrwl/?hl=en" target="_blank" rel="noreferrer" className="hover:text-[var(--primary-color)] transition-colors"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://x.com/Rupesh_1285" target="_blank" rel="noreferrer" className="hover:text-[var(--primary-color)] transition-colors"><i className="fa-brands fa-x-twitter"></i></a>
          </div>
          <div className="flex gap-2 opacity-90">
            <a href="#" className="hover:text-[var(--primary-color)] transition-colors">Privacy policy</a>
            <span>●</span>
            <a href="#" className="hover:text-[var(--primary-color)] transition-colors">Refund policy</a>
          </div>
        </div>
      </footer>
    </main>
  );
}