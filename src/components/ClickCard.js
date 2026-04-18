"use client";

import Image from "next/image";
import { useState } from "react";



const ServicesLayout = ({ servicesData, reverse = false, color, TextColor, hMobImg = "h-58" }) => {
    const [Active, setActive] = useState(
        servicesData[0]?.title
    );

    const activeService = servicesData.find(
        (service) => service.title === Active
    );

    return (
        <section className="py-10 px-6 md:px-15 ">
            {/* MAIN LAYOUT */}
            <div className={servicesData[0]?.title !== 'Custom React.js + Node.js stores for full flexibility' ? `max-w-7xl mx-auto grid grid-cols-1 gap-4 ${reverse ? "md:grid-cols-[1fr_50%]" : "md:grid-cols-[50%_1fr]"}`
                : `max-w-7xl mx-auto grid grid-cols-1 gap-4 ${reverse ? "md:grid-cols-[1fr_65%]" : "md:grid-cols-[50%_1fr]"}`
            }>
                {/* LEFT SIDEBAR */}
                <div className={`flex flex-col gap-4 h-full ${reverse ? "md:order-2" : "md:order-1"}`}>
                    {servicesData.map((service) => (
                        <div key={service.id} className=" md:flex-1">
                            <div

                                onClick={() => setActive(service.title)}
                                className={servicesData[0]?.title !== 'Custom React.js + Node.js stores for full flexibility' ? (`md:h-full flex items-center justify-center cursor-pointer border rounded-md p-4 transition ${Active === service.title
                                    ? `${color} text-white shadow-md`
                                    : "bg-gray-200 border-gray-200 hover:shadow-md"
                                    }`) : (`md:h-full flex flex-col  cursor-pointer border rounded-md px-4 py-2 transition ${Active === service.title
                                        ? `${color} text-white shadow-md`
                                        : "bg-gray-200 border-gray-200 hover:shadow-md"
                                        }`)}
                            >
                                <h3 className="font-semibold text-sm md:text-base">
                                    {service.title}
                                </h3>

                                {servicesData[0]?.title === 'Custom React.js + Node.js stores for full flexibility' && <p className="hidden md:block ">
                                    {service.items[0].discription}
                                </p>}


                            </div>
                            <div>
                                {Active === service.title && (
                                    <div className="md:hidden">
                                        {activeService && (
                                            <>
                                                {/* TITLE */}
                                                <h2 className="hidden text-xl md:text-2xl font-semibold text-[var(--primary)] border-l-4 border-[var(--primary)] pl-4 mb-6">
                                                    {activeService.title}
                                                </h2>

                                                {/* ITEMS GRID */}
                                                <div className="grid grid-cols-1 gap-6">
                                                    {activeService.items.map((subItem, i) => (
                                                        <div
                                                            key={i}
                                                            className="flex flex-col items-center gap-4 md:gap-3  rounded-xl p-4 hover:shadow-md transition"
                                                        >
                                                            {/* IMAGE */}
                                                            <div className={`relative w-full ${hMobImg} rounded-lg overflow-hidden shrink-0`}>
                                                                <Image
                                                                    src={subItem.img}
                                                                    alt={subItem.name}
                                                                    fill
                                                                    className="object-contain"
                                                                />
                                                            </div>

                                                            {/* TEXT */}
                                                            <div className="w-full md:w-2/3 md:text-left">
                                                                <h3 className={`text-lg md:text-xl font-semibold mb-3 py-2 text-${TextColor} border-l-4 border-${TextColor} pl-4`}>
                                                                    {subItem.heading}
                                                                </h3>
                                                                <p className="text-sm md:text-base text-gray-400">
                                                                    {subItem.discription}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>


                    ))}
                </div>

                {/* RIGHT CONTENT */}
                <div className={`hidden md:block ${reverse ? "md:order-1" : "md:order-2"}`}>
                    {activeService && (
                        <>
                            {/* TITLE */}


                            {/* ITEMS GRID */}
                            <div>
                                {activeService.items.map((item, i) => (
                                    <div key={i} className="flex flex-col  items-center gap-6  rounded-xl p-6 hover:shadow-md transition">

                                        {/* LEFT IMAGE */}
                                        <div className="w-full md:w-1/2 relative h-64">
                                            <Image
                                                src={item.img}
                                                alt="Service Image"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>

                                        {/* RIGHT CONTENT */}
                                        <div className={`w-full  ${servicesData[0]?.title !== 'Custom React.js + Node.js stores for full flexibility' ? "md:w-2/3" : "w-full"} text-center md:text-left`}>
                                            <h3 className={`text-lg md:text-xl font-semibold mb-3 py-2 text-${TextColor} border-l-4 border-${TextColor} pl-4`}>
                                                {item.heading}
                                            </h3>
                                            {servicesData[0]?.title !== 'Custom React.js + Node.js stores for full flexibility' && <p className="text-sm md:text-base text-gray-400">
                                                {item.discription}
                                            </p>}

                                        </div>

                                    </div>
                                ))}
                            </div>


                        </>
                    )}
                </div>

            </div>
        </section>
    );
};

export default ServicesLayout;