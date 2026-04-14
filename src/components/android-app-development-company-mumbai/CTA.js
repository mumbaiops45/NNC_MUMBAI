"use client";

import React from "react";
import { Phone, Globe } from "lucide-react";

export default function MobileAppCTA({
  phone = "+91 99005 66466",
  website = "https://nakshatranamahacreations.com",
  className = "",
}) {
  return (
    <section id="CTA" className={`w-full ${className}`}>
      <div className="max-w-5xl mx-auto ">

        <div className="rounded-2xl p-8 md:py-10 text-center shadow-md">
          
          {/* Contact Info with icons */}
          <p className="text-sm md:text-base mb-6 opacity-90 flex flex-col sm:flex-row justify-center items-center gap-4">
            <span className="flex items-center gap-2 text-white">
              <Phone className="text-[var(--primary)] w-4 h-4" />  Call NNC at {" "}
              <a href={`tel:${phone}`} className="font-semibold underline">
                {phone}
              </a>
            </span>
            <span className="block md:flex items-center gap-2 text-white">or email us
              <span className="flex">
                <Globe className="text-[var(--secondary)] w-4 h-4" />  {" "}
              <a href={website} target="_blank" className="font-semibold underline mb-4">
                {website.replace(/^https?:\/\//, "")}
              </a>
              </span>
               for a free consultation.
            </span>
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            
            {/* Primary Button */}
            <a
              href={`tel:${phone}`}
              className="px-6 py-3 rounded-xl primary-btn flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" /> Call Now
            </a>

            {/* Secondary Button */}
            <a
              href={website}
              target="_blank"
              className="px-6 py-3 rounded-xl secondary-btn flex items-center justify-center gap-2"
            >
              <Globe className="w-5 h-5" /> Visit Website
            </a>

          </div>

        </div>

      </div>
    </section>
  );
} 