"use client";
import React from "react";

// === Dynamic Testimonials Array ===
const testimonialsArray = [
  {
    id: 1,
    quote: "Highly recommend this company! Beyond their technical skills, I really appreciated the human connection. They actually listen to your needs and provide very good service with a personal approach. Great team and support!",
    name: "Sneha Sathyaprakash",
    title: "Client",
    location: "Mumbai",
    platform: "Google Review",
    rating: 5,
    tag: { text: "Personal Approach", color: "text-emerald-400 bg-emerald-950/50" }
  },
  {
    id: 2,
    quote: "Great people to work with. Harish and team are very patient in listening and understanding the client needs and deliver the service fast and accurate.",
    name: "Lavanya Krishna",
    title: "Client",
    location: "Mumbai",
    platform: "Google Review",
    rating: 5,
    tag: { text: "Fast & Accurate", color: "text-emerald-400 bg-emerald-950/50" }
  },
  {
    id: 3,
    quote: "Nakshatra Namha Creations is an excellent website provider with great after-service facilities. May God bless ❤️",
    name: "Gurunath Sawle",
    title: "Client",
    location: "Mumbai",
    platform: "Google Review",
    rating: 5,
    tag: { text: "Great Support", color: "text-sky-400 bg-sky-950/50" }
  }
];

// === Metrics ===
const metricDefinitions = [
  { id: "rating", label: "Rating", value: 5, suffix: "" },
  { id: "reviews", label: "Verified Reviews", value: 7, suffix: "" },
  { id: "projects", label: "Projects Delivered from All branches ", value: 565, suffix: "+" },
  { id: "years", label: "Years Operating", value: 8, suffix: "+" },
];

// ==========================================
// === Main Component ===
// ==========================================
export default function Testimonial({CardColor,ClintTextColor}) {
  return (
    <section className="text-white">
      <div className="mx-auto">

        {/* Metrics */}
        <div className={`${CardColor}  border border-gray-800 rounded-2xl p-8 md:p-10 mb-12 shadow-xl flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 text-center md:text-left`}>
          {metricDefinitions.map((metric) => (
            <div key={metric.id} className="flex-1 px-4 border-gray-800 last:border-0 md:border-r md:last:border-0 w-full md:w-auto">
              <div className="flex justify-center">
                <div className="text-5xl font-extrabold tracking-tighter text-white mb-2">
                {metric.id === "rating" ? metric.value.toFixed(1) : metric.value}
                <span className="text-4xl font-bold text-gray-500">{metric.suffix}</span>
              </div>
              </div>
              <div className="flex justify-center">
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
                {metric.label}
              </p>
              </div>
              
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {testimonialsArray.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`${CardColor} border border-gray-800 rounded-2xl p-8 flex flex-col h-full shadow-lg transition-all duration-300 hover:border-emerald-800/50 hover:shadow-emerald-950/30 hover:-translate-y-1`}
            >

              {/* Stars + Tag */}
              <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>

                {/* <div className={`text-xs font-bold py-1.5 px-3 rounded-full flex items-center gap-1.5 ${testimonial.tag.color}`}>
                  <span className="text-lg">✓</span>
                  {testimonial.tag.text}
                </div> */}
              </div>

              {/* Quote */}
              <blockquote className=" leading-relaxed text-gray-100 font-medium mb-10 flex-grow relative">
           
                <p className="relative text-[#fff6] text-[14px] z-10">{testimonial.quote}</p>
              </blockquote>

              {/* Footer */}
              <div className=" pt-0 border-t border-gray-800">
                <h3 className={`${ClintTextColor} text-xl font-bold  mb-1.5`}>{testimonial.name}</h3>
                <p className="text-sm font-medium text-gray-400 tracking-wide">
                  {testimonial.location} · {testimonial.platform}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}