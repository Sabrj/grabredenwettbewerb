"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full pt-24 lg:pt-28 relative" aria-label="Hero">
      <Image
        src="/grabreden_hg.png"
        alt="1. Wiener Grabredenwettbewerb"
        width={1920}
        height={800}
        className="w-full h-auto object-cover block"
        priority
      />
      {/* Fade into page background */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #f7f3e8)" }}
        aria-hidden="true"
      />
    </section>
  );
}
