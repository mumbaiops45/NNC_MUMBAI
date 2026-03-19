"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh]">
      {/* Background Image using Next.js Image */}
      <Image
        src="/Website Development Company in Mumbai/hero1.jpg" // Replace with your image path
        alt="Website Development Background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65 bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-6 md:px-16">
        <div className="max-w-xl text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Website Development Company in <span className="text-[var(--primary)]">Mumbai</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6">
            Custom websites built for Mumbai businesses. React.js, Next.js,
            WordPress. Delivered on time. Priced fairly.
          </p>
          <a
            href="#contact" // Replace with your contact section link
            className="inline-block primary-btn text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            Get Quote
          </a>
        </div>
      </div>
    </section>
  );
}