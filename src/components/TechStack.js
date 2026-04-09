"use client";

import React from "react";
import Image from "next/image";

export default function TackStack({ items = [], className = "",hColor }) {
  return (
    <section className={`w-full py-12 ${className}`}>
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          
          {items.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center group cursor-pointer rounded-xl  ${item.HoverBG ? `p-4` : 'p-0'}  ${item.HoverBG ? `${item.HoverBG}` :'hove:bg-[var(--primary)]'}` }
            >
              
              {/* Image */}
              <div
                style={{
                  height: item.height ? `${item.height}px` : "90px",
                  width: item.width ? `${item.width}px` : "90px",
                }}
                className="flex justify-center relative rounded-xl overflow-hidden transition-transform duration-300 group-hover:scale-110"
              >
                <Image
                  src={item.image}
                  alt={item.heading}
                  fill
                  className="object-contain p-2"
                />
              </div>

              {/* Heading */}
              <h3 className={`${hColor} ${item.height ? `h-${item.height}` : 'h-20'} ${item.width ? `w-${item.width}` : 'w-20'} mt-4 text-lg font-semibold text-gray-900 transition-colors duration-300 ${item.text ? `${item.text}` : 'group-hover:text-[var(--primary)]'} ${item.height ? `text-start` : 'text-center'}  text-center` }>
                {item.heading}
              </h3>

              {/* Description */}
              {item.description && (
                <p className={` ${item.height ? `text-start` : 'text-center'} mt-2 text-sm text-gray-400 ` }>
                  {item.description}
                </p>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}