"use client";

import React, { useState } from "react";

export default function FAQ({ data = [], className = "" }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={`w-full ${className}`}>
      <div className="max-w-4xl mx-auto px-4">

        <div className="space-y-4">
          {data.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-sm border transition-all duration-300"
              >
                {/* Question */}
                <div
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center px-5 py-4 cursor-pointer bg-[var(--primary)]/20 "
                >
                  <h3 className="font-semibold text-base md:text-lg">
                    {item.question}
                  </h3>

                  {/* Icon */}
                  <span
                    className={`text-2xl font-light transition-transform duration-300 ${
                      isActive ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </div>

                {/* Answer */}
                <div
                  className={`bg-white transition-all duration-300 overflow-hidden ${
                    isActive ? "max-h-40 p-5" : "max-h-0 px-5"
                  }`}
                >
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}