"use client";

import dynamic from "next/dynamic";

// All below-fold sections are lazy-loaded in this client wrapper
// This lets page.tsx stay a server component while still code-splitting
const CategoryExplore = dynamic(() => import("@/components/home/CategoryExplore"), { loading: () => null });
const HowItWorks = dynamic(() => import("@/components/home/HowItWorks"), { loading: () => null });
const HamperAnatomy = dynamic(() => import("@/components/home/HamperAnatomy"), { loading: () => null });
const TopPicks = dynamic(() => import("@/components/home/TopPicks"), { loading: () => null });
const CustomGifting = dynamic(() => import("@/components/home/CustomGifting"), { loading: () => null });
const Testimonials = dynamic(() => import("@/components/home/Testimonials"), { loading: () => null });
const Newsletter = dynamic(() => import("@/components/home/Newsletter"), { loading: () => null });

export default function BelowFold() {
  return (
    <>
      <CategoryExplore />
      <HowItWorks />
      <HamperAnatomy />
      <TopPicks />
      <CustomGifting />
      <Testimonials />
      <Newsletter />
    </>
  );
}
