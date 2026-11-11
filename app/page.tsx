"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroVideo from "@/components/HeroVideo";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

// Lazy-load the collection (below the fold) as the guide requires.
const Products = dynamic(() => import("@/components/Products"), {
  ssr: true,
  loading: () => (
    <div className="flex h-96 items-center justify-center bg-black">
      <span className="smallcaps text-[11px] text-[#C9A961]/60">
        Loading the collection…
      </span>
    </div>
  ),
});

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-[#F5F1E8]">
      <CustomCursor />
      <div className="grain-overlay" aria-hidden="true" />
      <Navbar />
      <HeroVideo />
      <Products />
      <Footer />
    </main>
  );
}
