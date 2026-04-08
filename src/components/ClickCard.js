"use client";

import Image from "next/image";
import { useState } from "react";



const ServicesLayout = ({ servicesData, reverse = false, color,TextColor }) => {
    const [Active, setActive] = useState(
        servicesData[0]?.title
    );

    const activeService = servicesData.find(
        (service) => service.title === Active
    );

    return (
        <section className="py-16 px-6 md:px-15 ">
            {/* MAIN LAYOUT */}
            <div className={`max-w-7xl mx-auto grid grid-cols-1  gap-10 ${reverse ? "md:grid-cols-[1fr_40%]" : "md:grid-cols-[40%_1fr]"}`}>

                {/* LEFT SIDEBAR */}
                <div className={`flex flex-col gap-4 ${reverse ? "md:order-2" : "md:order-1"}`}>
                    {servicesData.map((service) => (
                        <div key={service.id}>
                            <div

                                onClick={() => setActive(service.title)}
                                className={`cursor-pointer border rounded-xl p-4 transition ${Active === service.title
                                    ? `${color} text-white shadow-md`
                                    : "bg-white border-gray-200 hover:shadow-md"
                                    }`}
                            >
                                <h3 className="font-semibold text-sm md:text-base">
                                    {service.title}
                                </h3>


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
                                                            className="flex flex-col items-center gap-4 md:gap-3 border border-gray-200 rounded-xl p-4 hover:shadow-md transition"
                                                        >
                                                            {/* IMAGE */}
                                                            <div className="relative w-full h-58 rounded-lg overflow-hidden shrink-0">
                                                                <Image
                                                                    src={subItem.img}
                                                                    alt={subItem.name}
                                                                    fill
                                                                    className="object-fill"
                                                                />
                                                            </div>

                                                            {/* TEXT */}
                                                            <div className="w-full md:w-2/3 md:text-left">
                                                                <h3 className={`text-lg md:text-xl font-semibold mb-3 py-2 text-${TextColor} border-l-4 border-${TextColor} pl-4`}>
                                                                    {subItem.heading}
                                                                </h3>
                                                                <p className="text-sm md:text-base text-gray-600">
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
                                    <div key={i} className="flex flex-col  items-center gap-6 border border-gray-200 rounded-xl p-6 hover:shadow-md transition">

                                        {/* LEFT IMAGE */}
                                        <div className="w-full md:w-1/3 relative h-64">
                                            <Image
                                                src={item.img}
                                                alt="Service Image"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>

                                        {/* RIGHT CONTENT */}
                                        <div className="w-full md:w-2/3 text-center md:text-left">
                                            <h3 className={`text-lg md:text-xl font-semibold mb-3 py-2 text-${TextColor} border-l-4 border-${TextColor} pl-4`}>
                                                {item.heading}
                                            </h3>
                                            <p className="text-sm md:text-base text-gray-600">
                                                {item.discription}
                                            </p>
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