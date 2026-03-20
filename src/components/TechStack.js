"use client";

import React from "react";
import Image from "next/image";

export default function TackStack({ items = [], className = "" }) {
  return (
    <section className={`w-full py-12 ${className}`}>
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center group cursor-pointer"
            >
              
              {/* Image */}
              <div className="flex justify-center relative w-20 h-20 rounded-xl overflow-hidden transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={item.image}
                  alt={item.heading}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Heading */}
              <h3 className="mt-4 text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-[var(--primary)]">
                {item.heading}
              </h3>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}