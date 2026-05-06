import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/home/Contact"; // Reusing your existing component!

export default function ContactPage() {
  return (
    <main className="bg-[#F5EDED] min-h-screen pt-20">
      <Navbar />
      <ContactForm />
      <Footer />
    </main>
  );
}