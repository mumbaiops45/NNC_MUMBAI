"use client";

import React from "react";

const caseStudies = [
  {
    client: "Puran Interiors",
    industry: "Interior Design",
    location: "",
    title: "Website & SEO Page 1 Google in 90 Days",

    before:
      "No website, no Google ranking. Every client searching for interior designers found competitors first.",

    solution:
      "NNC built a Next JS portfolio website with on-page SEO, custom CMS and Core Web Vitals optimisation. PageSpeed 95 on delivery.",

    result:
      "Page 1 Google ranking within 90 days. 12+ qualified enquiries per month ongoing.",

    tags: ["Next JS", "SEO", "CMS"],

    stats: [
      { value: "1st", label: "Google page · 90 days" },
      { value: "12+", label: "Enquiries/month" },
      { value: "95", label: "PageSpeed" },
      { value: "4wk", label: "Delivery" },
    ],
  },

  {
    client: "Vijaya Home Services",
    industry: "On-Demand Services",
    location: "",
    title: "Full Platform 340% Booking Growth in 6 Months",

    before:
      "All bookings managed by phone. No app, no CRM, zero management visibility. Revenue capped by manual processes.",

    solution:
      "NNC built a complete ecosystem: Android customer app, vendor staff app, admin CRM with analytics all on AWS.",

    result:
      "340% more bookings in 6 months. Zero phone bookings remaining. 4.6 stars Play Store.",

    tags: ["React Native", "Node JS", "AWS"],

    stats: [
      { value: "340%", label: "Booking growth" },
      { value: "4.6★", label: "Play Store" },
      { value: "0", label: "Phone bookings" },
      { value: "8wk", label: "Delivery" },
    ],
  },

  {
    client: "Pro Leverage",
    industry: "Finance & Investment",
    location: "",
    title: "Finance App 10,000 Downloads in Month One",

    before:
      "Real-time financial data needed to be accessible to retail investors on mobile. Competitor apps were unusable.",

    solution:
      "NNC built a Flutter app with real-time charts, live data feeds and a UI designed around retail investor behaviour.",

    result:
      "10,000+ Play Store downloads in month one. 4.4 stars. 60% fewer support queries.",

    tags: ["Flutter", "REST API"],

    stats: [
      { value: "10K+", label: "Downloads M1" },
      { value: "4.4★", label: "Play Store" },
      { value: "60%", label: "Fewer queries" },
      { value: "6wk", label: "Delivery" },
    ],
  },
];

export default function CaseStudyGrid() {
  return (
    <div className="w-full py-16 px-6 ">
      
      {/* Heading */}
      <div className="max-w-6xl mx-auto mb-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
  
  {/* LEFT CONTENT */}
  <div>
    <p className="text-sm bg-[var(--primary)]/25 inline px-6 py-3 rounded-full tracking-widest  uppercase">
      Case Studies
    </p>

    <h2 className="mt-10 text-3xl md:text-5xl font-bold leading-tight ">
      Real Outcomes.
      <br />
      <span className="text-[var(--primary)]">
        Documented Results.
      </span>
    </h2>
  </div>

  {/* RIGHT CONTENT */}
  <div className="max-w-md">
    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
      Three representative NNC projects the brief, what was built and the measured result.
    </p>
  </div>

</div>

      <div className="max-w-6xl mx-auto space-y-10">
        
        {caseStudies.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-md">

            {/* Top Dark Header */}
            <div className="bg-[#0B1F44] text-white p-6 flex flex-col md:flex-row md:justify-between md:items-center">
              
              <div>
                <p className="text-xs opacity-70 uppercase tracking-wide">
                  {item.client} · {item.industry} · {item.location}
                </p>

                <h3 className="text-xl md:text-2xl font-semibold mt-2">
                  {item.title}
                </h3>
              </div>

              <div className="flex gap-2 mt-4 md:mt-0">
                <span className="text-xs px-3 py-1 bg-white/10 rounded-full">Next JS</span>
                <span className="text-xs px-3 py-1 bg-white/10 rounded-full">SEO</span>
                <span className="text-xs px-3 py-1 bg-white/10 rounded-full">CMS</span>
              </div>
            </div>

            {/* Middle Section */}
            <div className="grid md:grid-cols-2 gap-6 p-6 text-gray-700">

              {/* Before */}
              <div>
                <p className="text-xs text-gray-400 uppercase mb-2">Before NNC</p>
                <p>{item.before}</p>
              </div>

              {/* Solution */}
              <div>
                <p className="text-xs text-gray-400 uppercase mb-2">What NNC Built</p>
                <p>{item.solution}</p>

                {/* Highlight Result */}
                <div className="mt-4 border-l-4 border-[var(--primary)] bg-[var(--primary)]/10 p-4 rounded">
                  <p className="text-sm font-medium">{item.result}</p>
                </div>
              </div>

            </div>

            {/* Bottom Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 border-t">
              {item.stats.map((stat, i) => (
                <div
                  key={i}
                  className="text-center py-6 border-r last:border-r-0"
                >
                  <span className="text-3xl font-bold text-[var(--primary)]">
                    {stat.value}
                  </span>
                  <p className="text-sm text-gray-500 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}