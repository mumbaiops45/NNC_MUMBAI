import React from 'react'
import Image from "next/image";


const Process = ({ processSteps }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 justify-items-end  gap-x-6 gap-y-10 pb-6'>
            {processSteps.map((item, index) => {
                return (
                    <div key={index} className="group relative md:w-[22vw] md:h-[46vh] flex items-center">

                        {/* IMAGE (outside card, fully visible) */}
                        <div className="hidden md:block absolute opacity-0 -left-33 w-52 h-52 z-10 group-hover:opacity-100 transition">
                            <Image
                                src="/Web Design Company in Mumbai/walking1.png"
                                alt="Sample Image"
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* CARD */}
                        <div className="w-full h-full bg-white/10 rounded-md shadow-md hover:shadow-xl transition relative overflow-hidden px-10 pt-5 pb-6">

                            {/* INDEX (half visible because of overflow-hidden on card) */}
                            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-20 h-20 flex items-end justify-end p-4 rounded-full bg-[var(--secondary)] text-white text-lg font-bold z-20">
                                {index + 1}
                            </div>

                            {/* CONTENT */}
                            <div className="relative z-20 mt-6">
                                <h3 className="font-semibold text-lg mb-2 text-white">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-400">
                                    {item.description}
                                </p>
                            </div>

                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Process