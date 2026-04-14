"use client";

import React from "react";
import Image from "next/image";

const logos = [
  "/BrandLogo/brand_1.png",
  "/BrandLogo/brand_2.png",
  "/BrandLogo/brand_3.png",
  "/BrandLogo/brand_4.webp",
  "/BrandLogo/brand_5.webp",
  "/BrandLogo/brand_6.webp",
  "/BrandLogo/brand_7.webp",
  "/BrandLogo/brand_8.png",
  "/BrandLogo/brand_10.jpeg",
  "/BrandLogo/brand_11.jpeg",
  "/BrandLogo/brand_12.jpg",
  "/BrandLogo/brand_13.png",
  "/BrandLogo/brand_14.jpeg",
  "/BrandLogo/brand_15.png",
  "/BrandLogo/brand_16.png",
  "/BrandLogo/brand_18.png",
  "/BrandLogo/brand_19.jpeg",
  "/BrandLogo/brand_20.webp",
  "/BrandLogo/brand_21.webp",
  "/BrandLogo/brand_23.png",
  "/BrandLogo/brand_24.png",
];

export default function InfiniteLogoCarousel() {
  return (
    <div className="w-full py-16 overflow-hidden carousel">

      {/* Heading */}
      <h2 className="text-center text-3xl font-semibold mb-10">
        We are <span className="text-[var(--primary)]">Partnered</span> with
      </h2>

      {/* Mask fade */}
      <div className="relative w-full  overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">

        {/* TRACK (IMPORTANT CLASS NAME = track) */}
        <div className="track flex w-max gap-12 animate-logo-scroll">

          {/* First set */}
          {logos.map((logo, index) => (
            <div
              key={index}
              className="w-20 h-20 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl shrink-0"
            >
              <Image
                src={logo}
                alt="client logo"
                width={80}
                height={80}
                className="object-contain opacity-80 hover:opacity-100 transition"
              />
            </div>
          ))}

          {/* Duplicate set */}
          {logos.map((logo, index) => (
            <div
              key={`dup-${index}`}
              className="w-20 h-20 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl shrink-0"
            >
              <Image
                src={logo}
                alt="client logo"
                width={80}
                height={80}
                className="object-contain opacity-80 hover:opacity-100 transition"
              />
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}