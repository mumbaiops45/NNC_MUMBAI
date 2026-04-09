"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

export default function CardCarouselFM({
    cards,
    direction = "left",
    speed = 100,
    className = "",
}) {
    const controls = useAnimation();
    const xRef = useRef(0);
    const containerRef = useRef(null);

    const loopCards = [...cards, ...cards];

    const startAnimation = () => {
        const container = containerRef.current;
        if (!container) return;

        const totalWidth = container.scrollWidth / 2; // one full set

        const duration = totalWidth / speed;

        controls.start({
            x:
                direction === "left"
                    ? [xRef.current, xRef.current - totalWidth]
                    : [xRef.current, xRef.current + totalWidth],
            transition: {
                ease: "linear",
                duration,
            },
        });
    };

    useEffect(() => {
        startAnimation();
    }, [direction, speed]);

    return (
        <div
            className={`w-full  overflow-hidden ${className}`}
            onMouseEnter={() => controls.stop()}
            onMouseLeave={() => setTimeout(startAnimation, 50)}
        >
            <motion.div
                ref={containerRef}
                animate={controls}
                onUpdate={(latest) => {
                    const container = containerRef.current;
                    if (!container) return;

                    const totalWidth = container.scrollWidth / 2;

                    xRef.current = latest.x;

                    // 🔥 Infinite loop reset (key logic)
                    if (direction === "left" && latest.x <= -totalWidth) {
                        xRef.current = 0;
                        controls.set({ x: 0 });
                    }

                    if (direction === "right" && latest.x >= 0) {
                        xRef.current = -totalWidth;
                        controls.set({ x: -totalWidth });
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
                                className="object-contain rounded-md bg-[var(--primary)]/10 py-2  "
                            />
                        </div>

                        <h3 className="mt-4 relative font-semibold text-white leading-snug after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-1/4 after:bg-[var(--secondary)] after:transition-all after:duration-300 group-hover:after:w-1/2">
                            {card.heading}
                        </h3>

                        <p className=" text-gray-400 text-sm mt-4 leading-relaxed">
                            {card.paragraph}
                        </p>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}