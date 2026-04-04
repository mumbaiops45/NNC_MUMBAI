"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero({
  title,
  highlight,
  subtext,
  description,
  image,
}) {
  return (
    <section className="relative w-full h-[80vh]">
      
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-6 md:px-16">
        <div className="max-w-xl text-left">
          
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {title}{" "}
            <span className="text-[var(--primary)]">
              {highlight}
            </span>
          </h1>

          {/* sub text */}
          <p className="text-lg md:text-xl text-gray-200 mb-6">
            {subtext}
          </p>

           {/* Description */}
          <p className="text-lg md:text-xl text-gray-200 mb-6">
            {description}
          </p>

         
        </div>
      </div>
    </section>
  );
}