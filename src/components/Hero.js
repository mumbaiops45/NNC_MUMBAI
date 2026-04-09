"use client";

import React from "react";
import Link from "next/link";

export default function Hero({
  title,
  highlight,
  subtext,
  description,
  svg,
  buttonText,
  buttonLink,
}) {
  return (
    <section className="relative w-full px-6 md:px-12 py-16 lg:py-15  overflow-hidden">

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#041027] to-[#0c245a]" />

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/10" /> */}

      {/* Content */}
      <div className="relative z-10  mx-auto ">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              {title}{" "}
              <span className="text-[var(--primary)]">
                {highlight}
              </span>
            </h1>

            {/* Subtext */}
            {subtext && (
              <p className="text-lg md:text-xl text-gray-300 mb-4">
                {subtext}
              </p>
            )}

            {/* Description */}
            {description && (
              <p className="text-base md:text-lg text-gray-400 mb-6 leading-relaxed">
                {description}
              </p>
            )}

            {/* Button (NOW PERFECTLY PLACED) */}
           {/* Contact Button */}
<div className="mt-4 primary-btn px-6 py-3 inline-block rounded-xl">
  <a
    href="tel:+919900566466"
    className=""
  >
    Contact Us
  </a>
</div>

          </div>

          {/* RIGHT SVG */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="w-full max-w-[500px] h-auto opacity-90">
              {svg}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}