"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import Image from "next/image";

export default function CardCarouselFM({
  cards,
  direction = "left",
  speed = 100,
  className = "",
}) {
  // ===== DESKTOP =====
  const desktopControls = useAnimation();
  const desktopRef = useRef(null);
  const xDesktop = useRef(0);

  // ===== MOBILE =====
  const mobileRef = useRef(null);
  const xMobile = useMotionValue(0);
  const animationRef = useRef(null);
  const isPaused = useRef(false);

  const loopCards = [...cards, ...cards];

  // ===== DESKTOP ANIMATION (unchanged) =====
  const startDesktop = () => {
    const container = desktopRef.current;
    if (!container) return;

    const totalWidth = container.scrollWidth / 2;
    const duration = totalWidth / speed;

    desktopControls.start({
      x:
        direction === "left"
          ? [xDesktop.current, xDesktop.current - totalWidth]
          : [xDesktop.current, xDesktop.current + totalWidth],
      transition: {
        ease: "linear",
        duration,
      },
    });
  };

  // ===== MOBILE LOOP =====
  const startMobile = () => {
    cancelAnimationFrame(animationRef.current);

    const step = () => {
      if (isPaused.current) return;

      const container = mobileRef.current;
      if (!container) return;

      const totalWidth = container.scrollWidth / 2;
      const d = direction === "left" ? -1 : 1;

      xMobile.set(xMobile.get() + d * (speed / 60));

      const current = xMobile.get();
      if (current <= -totalWidth) xMobile.set(0);
      if (current >= 0) xMobile.set(-totalWidth);

      animationRef.current = requestAnimationFrame(step);
    };

    animationRef.current = requestAnimationFrame(step);
  };

  // ===== INIT =====
  useEffect(() => {
    const timeout = setTimeout(() => {
      startDesktop();
      startMobile();
    }, 100);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(animationRef.current);
    };
  }, [direction, speed]);

  return (
    <>
      {/* ================= DESKTOP (unchanged) ================= */}
      <div
        className={`w-full overflow-hidden hidden md:block ${className}`}
        onMouseEnter={() => desktopControls.stop()}
        onMouseLeave={() => setTimeout(startDesktop, 50)}
      >
        <motion.div
          ref={desktopRef}
          animate={desktopControls}
          onUpdate={(latest) => {
            const container = desktopRef.current;
            if (!container) return;

            const totalWidth = container.scrollWidth / 2;
            xDesktop.current = latest.x;

            if (direction === "left" && latest.x <= -totalWidth) {
              xDesktop.current = 0;
              desktopControls.set({ x: 0 });
            }

            if (direction === "right" && latest.x >= 0) {
              xDesktop.current = -totalWidth;
              desktopControls.set({ x: -totalWidth });
            }
          }}
          className="flex gap-6 w-max pt-4"
        >
          {loopCards.map((card, index) => (
            <div
              key={index}
              className="group w-[260px] sm:w-[280px] md:w-[300px] bg-white/10 backdrop-blur-xl rounded-xl shadow-sm p-5 flex-shrink-0 transition-all duration-300 hover:-translate-y-2 hover:shadow-md"
            >
              <div className="relative w-full h-40">
                <Image
                  src={card.image}
                  alt={card.heading}
                  fill
                  className="object-contain rounded-md bg-[var(--primary)]/10 py-2"
                />
              </div>

              <h3 className="mt-4 relative font-semibold text-white leading-snug after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-1/4 after:bg-[var(--secondary)] after:transition-all after:duration-300 group-hover:after:w-1/2">
                {card.heading}
              </h3>

              <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                {card.paragraph}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ================= MOBILE ================= */}
      <div
        className={`md:hidden w-full overflow-hidden ${className}`}
        onTouchStart={() => {
          isPaused.current = true;
          cancelAnimationFrame(animationRef.current);
        }}
        onTouchEnd={() => {
          isPaused.current = false;
          startMobile(); // resumes in prop direction from exact position
        }}
      >
        <motion.div
          ref={mobileRef}
          style={{ x: xMobile }}
          drag="x"
          dragElastic={0}
          dragMomentum={false}
          onDrag={(_, info) => {
            xMobile.set(xMobile.get() + info.delta.x);

            // keep loop bounds intact during drag
            const container = mobileRef.current;
            if (!container) return;
            const totalWidth = container.scrollWidth / 2;
            const current = xMobile.get();
            if (current <= -totalWidth) xMobile.set(0);
            if (current >= 0) xMobile.set(-totalWidth);
          }}
          className="flex gap-4 w-max px-4 py-4"
        >
          {loopCards.map((card, index) => (
            <div
              key={index}
              className="group w-[240px] bg-white/10 backdrop-blur-xl rounded-xl shadow-sm p-4 flex-shrink-0"
            >
              <div className="relative w-full h-32">
                <Image
                  src={card.image}
                  alt={card.heading}
                  fill
                  className="object-contain rounded-md bg-[var(--primary)]/10 py-2"
                />
              </div>

              <h3 className="mt-3 font-semibold text-white text-sm leading-snug">
                {card.heading}
              </h3>

              <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                {card.paragraph}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
}