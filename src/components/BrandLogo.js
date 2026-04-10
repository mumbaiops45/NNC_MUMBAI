import React from "react";

const logos = [
  "/BrandLogo/brand_1.png",
  "/BrandLogo/brand_2.png",
  "/BrandLogo/brand_3.png",
  "/BrandLogo/brand_4.webp",
  "/BrandLogo/brand_5.webp",
  "/BrandLogo/brand_6.webp",
  "/BrandLogo/brand_7.webp",
  "/BrandLogo/brand_8.png",
  "/BrandLogo/brand_9.png",
  "/BrandLogo/brand_10.jpeg",
  "/BrandLogo/brand_11.jpeg",
  "/BrandLogo/brand_12.jpg",
  "/BrandLogo/brand_13.png",
  "/BrandLogo/brand_14.png",
  "/BrandLogo/brand_15.png",
  "/BrandLogo/brand_16.png",
  "/BrandLogo/brand_17.png",
  "/BrandLogo/brand_18.png",
  "/BrandLogo/brand_19.png",
  "/BrandLogo/brand_20.png",
  "/BrandLogo/brand_21.png",
  "/BrandLogo/brand_22.png",
  "/BrandLogo/brand_23.png",
  "/BrandLogo/brand_24.png",
];

const InfiniteLogoCarousel = () => {
  return (
    <div className="w-full py-16 bg-black overflow-hidden">
      
      {/* Heading */}
      <h2 className="text-center text-white text-3xl font-semibold mb-10">
        We are <span className="text-[var(--primary)]">Partnered</span> with
      </h2>

      {/* Carousel */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-scroll gap-12 hover:[animation-play-state:paused]">
          
          {/* First Set */}
          {logos.map((logo, index) => (
            <div
              key={index}
              className="w-40 h-20 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl"
            >
              <img
                src={logo}
                alt="client logo"
                className="max-h-12 object-contain opacity-80 hover:opacity-100 transition"
              />
            </div>
          ))}

          {/* Duplicate Set for Infinite Effect */}
          {logos.map((logo, index) => (
            <div
              key={`dup-${index}`}
              className="w-40 h-20 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl"
            >
              <img
                src={logo}
                alt="client logo"
                className="max-h-12 object-contain opacity-80 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteLogoCarousel;