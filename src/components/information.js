import React from "react";
import Image from "next/image";

const Information = ({
  backgroundImage,
  backgroundImageAltName,
  title,
  highlightText = "",
  description,
  align = "left",
}) => {
  const parts = highlightText
    ? title.split(highlightText)
    : [title];

  return (
    <section className="relative w-full py-15 px-6 md:py-0 md:px-0 min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">

      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt={backgroundImageAltName}
        fill
        priority
        className="object-fill"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,20,53,0.55)_0%,rgba(7,20,53,0.88)_100%)]"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto w-full">
        <div
          className={`flex ${align === "right" ? "justify-end" : "justify-start"
            }`}
        >
          <div className="max-w-xl text-white">

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              {parts[0].trim()}
              {highlightText && (
                <span className="text-[var(--logoColor)] px-2 py-1 mx-1 rounded">
                  {highlightText.trim()}
                </span>
              )}
              {parts[1].trim()}
            </h2>

            {/* Description */}
            <p className="mt-4 text-sm md:!text-[16px] text-white/90">
              {description}
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;