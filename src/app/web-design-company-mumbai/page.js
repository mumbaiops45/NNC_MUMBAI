import React from 'react'
import Hero from '@/components/Hero'
import CardList from '@/components/CardList';
import CardCarouselLeftRight from '@/components/CardCarousel';
import FAQ from '@/components/FAQ';
import MobileAppCTA from '@/components/Web Design Company in Mumbai/CTA';
import Process from '@/components/Step';
import Testimonial from '@/components/Testimonial';
const webDesignSVG = (
  <svg viewBox="0 0 400 300" className="w-full h-auto" fill="none">

    {/* Decorative rings */}
    <circle cx="368" cy="66" r="20" stroke="#334155" strokeWidth="1.2"/>
    <circle cx="368" cy="66" r="12" stroke="#334155" strokeWidth="0.6" strokeDasharray="3 3"/>
    <circle cx="48" cy="258" r="18" stroke="#334155" strokeWidth="1.2"/>
    <circle cx="48" cy="258" r="11" stroke="#334155" strokeWidth="0.6" strokeDasharray="3 3"/>

    {/* Dot accents */}
    <circle cx="365" cy="230" r="3" fill="#334155"/>
    <circle cx="38" cy="90" r="2" fill="#475569"/>
    <circle cx="372" cy="180" r="2" fill="#475569"/>

    {/* Browser frame */}
    <rect x="38" y="44" width="324" height="212" rx="13" fill="#0f1e2e" stroke="#475569" strokeWidth="1.4"/>
    <rect x="38" y="44" width="324" height="34" rx="13" fill="#1e293b"/>
    <rect x="38" y="64" width="324" height="14" fill="#1e293b"/>

    {/* Traffic lights */}
    <circle cx="64" cy="61" r="5" fill="#ef4444"/>
    <circle cx="82" cy="61" r="5" fill="#f59e0b"/>
    <circle cx="100" cy="61" r="5" fill="#22c55e"/>

    {/* URL bar */}
    <rect x="118" y="51" width="186" height="18" rx="5" fill="#0f1e2e" stroke="#334155" strokeWidth="0.8"/>
    <rect x="126" y="57" width="80" height="4" rx="2" fill="#334155"/>
    <rect x="213" y="57" width="30" height="4" rx="2" fill="#334155" opacity="0.4"/>
    <circle cx="296" cy="60" r="4" fill="#334155"/>

    {/* Sidebar */}
    <rect x="50" y="82" width="66" height="158" rx="7" fill="#142135" stroke="#2d4a6a" strokeWidth="1"/>
    <rect x="60" y="92" width="46" height="16" rx="4" fill="#1e3a5a"/>
    <circle cx="70" cy="100" r="4" fill="#38bdf8" opacity="0.5"/>
    <rect x="78" y="97" width="22" height="4" rx="2" fill="#334155"/>
    <rect x="78" y="103" width="14" height="3" rx="1.5" fill="#334155" opacity="0.5"/>

    {/* Nav items */}
    <rect x="60" y="116" width="46" height="8" rx="3" fill="#38bdf8" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="0.6"/>
    <rect x="64" y="119" width="28" height="3" rx="1.5" fill="#38bdf8" opacity="0.7"/>
    <rect x="60" y="130" width="46" height="8" rx="3" fill="#1e3a5a"/>
    <rect x="64" y="133" width="22" height="3" rx="1.5" fill="#334155"/>
    <rect x="60" y="144" width="46" height="8" rx="3" fill="#1e3a5a"/>
    <rect x="64" y="147" width="30" height="3" rx="1.5" fill="#334155"/>
    <rect x="60" y="158" width="46" height="8" rx="3" fill="#1e3a5a"/>
    <rect x="64" y="161" width="18" height="3" rx="1.5" fill="#334155"/>
    <rect x="60" y="172" width="46" height="8" rx="3" fill="#1e3a5a"/>
    <rect x="64" y="175" width="26" height="3" rx="1.5" fill="#334155"/>

    {/* Sidebar avatar */}
    <circle cx="73" cy="222" r="10" fill="#1e3a5a" stroke="#2d4a6a" strokeWidth="0.8"/>
    <circle cx="73" cy="219" r="4" fill="#334155"/>
    <path d="M64 228 Q73 224 82 228" stroke="#334155" strokeWidth="1" strokeLinecap="round" fill="none"/>

    {/* Header row */}
    <rect x="128" y="82" width="222" height="22" rx="6" fill="#1a2d4a" stroke="#2d4a6a" strokeWidth="0.8"/>
    <rect x="138" y="90" width="70" height="5" rx="2" fill="#38bdf8" opacity="0.5"/>
    <rect x="298" y="88" width="42" height="10" rx="4" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="0.7"/>
    <rect x="305" y="91" width="28" height="4" rx="2" fill="#22c55e" opacity="0.6"/>

    {/* Hero banner */}
    <rect x="128" y="110" width="222" height="60" rx="8" fill="#0f2540" stroke="#1e4a7a" strokeWidth="1"/>
    <circle cx="168" cy="140" r="22" fill="#38bdf8" fillOpacity="0.08" stroke="#38bdf8" strokeWidth="0.7"/>
    <circle cx="168" cy="140" r="13" fill="#38bdf8" fillOpacity="0.1"/>
    <rect x="202" y="122" width="100" height="8" rx="3" fill="#1e4a7a"/>
    <rect x="202" y="135" width="76" height="6" rx="3" fill="#1e4a7a" opacity="0.7"/>
    <rect x="202" y="147" width="56" height="6" rx="3" fill="#1e4a7a" opacity="0.5"/>
    <rect x="202" y="158" width="44" height="10" rx="4" fill="#38bdf8" fillOpacity="0.25" stroke="#38bdf8" strokeWidth="0.7"/>
    <rect x="207" y="161" width="28" height="4" rx="2" fill="#38bdf8" opacity="0.6"/>

    {/* Card row */}
    <rect x="128" y="178" width="68" height="52" rx="6" fill="#142135" stroke="#2d4a6a" strokeWidth="0.8"/>
    <rect x="136" y="186" width="52" height="18" rx="4" fill="#1a2d4a"/>
    <rect x="136" y="210" width="40" height="5" rx="2" fill="#334155"/>
    <rect x="136" y="218" width="28" height="4" rx="2" fill="#334155" opacity="0.5"/>

    <rect x="205" y="178" width="68" height="52" rx="6" fill="#142135" stroke="#2d4a6a" strokeWidth="0.8"/>
    <rect x="213" y="186" width="52" height="18" rx="4" fill="#1a2d4a"/>
    <rect x="213" y="210" width="40" height="5" rx="2" fill="#334155"/>
    <rect x="213" y="218" width="28" height="4" rx="2" fill="#334155" opacity="0.5"/>

    <rect x="282" y="178" width="68" height="52" rx="6" fill="#142135" stroke="#2d4a6a" strokeWidth="0.8"/>
    <rect x="290" y="186" width="52" height="18" rx="4" fill="#1a2d4a"/>
    <rect x="290" y="210" width="40" height="5" rx="2" fill="#334155"/>
    <rect x="290" y="218" width="28" height="4" rx="2" fill="#334155" opacity="0.5"/>

    {/* Design cursor */}
    <path d="M248 128 L244 158 L254 151 L260 168 L267 164 L261 147 L273 147 Z"
      stroke="#94a3b8" strokeWidth="1.4" strokeLinejoin="round"
      fill="#0f1e2e" fillOpacity="0.6"/>

    {/* Mumbai badge */}
    <rect x="138" y="268" width="90" height="24" rx="8" fill="#3b82f6" fillOpacity="0.12" stroke="#3b82f6" strokeWidth="1.1"/>
    <circle cx="154" cy="280" r="5" fill="#3b82f6" fillOpacity="0.25" stroke="#3b82f6" strokeWidth="1"/>
    <circle cx="154" cy="279" r="2.5" fill="#3b82f6"/>
    <line x1="154" y1="281" x2="154" y2="286" stroke="#3b82f6" strokeWidth="1.2" strokeLinecap="round"/>
    <text x="196" y="284" textAnchor="middle" fontSize="10" fill="#3b82f6" fontFamily="sans-serif" fontWeight="500">Mumbai</text>

  </svg>
);
const cardData = [
  {
    image: "/Web Design Company in Mumbai/UIUX Design for Websites and Apps.png",
    heading: "UI/UX Design for Websites and Apps",
    paragraph:
      "We design intuitive and engaging user interfaces for both websites and mobile applications. Our UI/UX approach focuses on user behavior, usability, and conversion, ensuring every interaction feels seamless and meaningful.",
  },
  {
    image: "/Web Design Company in Mumbai/Responsive Mobile-First Design.webp",
    heading: "Responsive Mobile-First Design",
    paragraph:
      "All our designs follow a mobile-first approach to ensure flawless performance across smartphones, tablets, and desktops. We create responsive layouts that adapt perfectly to every screen size and device.",
  },
  {
    image: "/Web Design Company in Mumbai/Lead Generation.png",
    heading: "Landing Page Design for Lead Generation",
    paragraph:
      "We design high-converting landing pages optimized for lead generation and marketing campaigns. Every section is strategically crafted to guide users toward action and maximize conversions.",
  },
  {
    image: "/Web Design Company in Mumbai/E-commerce Product Page Design.png",
    heading: "E-commerce Product Page Design",
    paragraph:
      "Our e-commerce designs focus on product visibility, trust, and conversion. We create clean and compelling product pages that enhance user experience and drive more sales.",
  },
  {
    image: "/Web Design Company in Mumbai/Brand Identity Integration.png",
    heading: "Brand Identity Integration",
    paragraph:
      "We align every design with your brand identity, including colors, typography, and visual elements. This ensures a consistent and professional look that strengthens brand recognition and trust.",
  },
  {
    image: "/Web Design Company in Mumbai/Wireframing and Prototype Design.png",
    heading: "Wireframing and Prototype Design",
    paragraph:
      "Before development, we create detailed wireframes and interactive prototypes to visualize the structure and flow of your website or app. This helps in refining ideas and ensuring clarity before execution.",
  },
  {
    image: "/Web Design Company in Mumbai/Website Redesign and Revamp.png",
    heading: "Website Redesign and Revamp",
    paragraph:
      "We transform outdated websites into modern, high-performing platforms. Our redesign process improves UI, speed, mobile experience, and overall usability to boost engagement and conversions.",
  },
];
const leftSlideService = [
  {
    image: "/Web Design Company in Mumbai/UIUX Design for Websites and Apps.png",
    heading: "UI/UX Design for Websites and Apps",
    paragraph:
      "Craft intuitive and visually engaging UI/UX designs for websites and mobile apps, focusing on user behavior, seamless navigation, and enhanced user experience.",
  },
  {
    image: "/Web Design Company in Mumbai/Responsive Mobile-First Design.webp",
    heading: "Responsive Mobile-First Design",
    paragraph:
      "Design mobile-first, fully responsive interfaces that adapt perfectly across all devices, ensuring consistent performance and user experience on smartphones, tablets, and desktops.",
  },
  {
    image: "/Web Design Company in Mumbai/Lead Generation.png",
    heading: "Landing Page Design for Lead Generation",
    paragraph:
      "Create high-converting landing pages optimized for lead generation with clear messaging, strong CTAs, and user-focused design strategies.",
  },
  {
    image: "/Web Design Company in Mumbai/E-commerce Product Page Design.png",
    heading: "E-commerce Product Page Design",
    paragraph:
      "Design visually appealing and conversion-focused e-commerce product pages that enhance product visibility, improve user trust, and drive higher sales.",
  },
];
const rightSlideService = [
  {
    image: "/Web Design Company in Mumbai/Brand Identity Integration.png",
    heading: "Brand Identity Integration",
    paragraph:
      "Seamlessly integrate your brand identity into your website and app design, ensuring consistent visuals, typography, and messaging that reflect your brand values and create a strong market presence.",
  },
  {
    image: "/Web Design Company in Mumbai/Wireframing and Prototype Design.png",
    heading: "Wireframing and Prototype Design",
    paragraph:
      "Plan and visualize your product with detailed wireframes and interactive prototypes, allowing you to refine user journeys, layouts, and functionality before development begins.",
  },
  {
    image: "/Web Design Company in Mumbai/Website Redesign and Revamp.png",
    heading: "Website Redesign and Revamp",
    paragraph:
      "Revamp outdated websites with modern UI/UX, improved performance, and optimized user flows to enhance engagement, boost conversions, and align with current design trends.",
  },
   {
    image: "/Web Design Company in Mumbai/E-commerce Product Page Design.png",
    heading: "E-commerce Product Page Design",
    paragraph:
      "Design visually appealing and conversion-focused e-commerce product pages that enhance product visibility, improve user trust, and drive higher sales.",
  },
];
const processSteps = [
  {
    title: "Discovery call to understand your brand and goals",
    description:
      "We begin with a detailed discussion to understand your business vision, target audience, and objectives so we can align the project with your goals.",
  },
  {
    title: "Wireframe and sitemap approval",
    description:
      "We create wireframes and a clear sitemap to define the structure and flow of your website, ensuring everything is well-organized before design begins.",
  },
  {
    title: "Visual design with your brand colours",
    description:
      "Our designers craft an engaging and modern interface using your brand colors, typography, and style to create a strong visual identity.",
  },
  {
    title: "Development handoff and responsive coding",
    description:
      "We convert the approved design into a fully responsive, fast, and scalable website using clean and optimized code.",
  },
  {
    title: "Testing across devices and browsers",
    description:
      "Your website is tested thoroughly on different devices, screen sizes, and browsers to ensure smooth performance and a seamless user experience.",
  },
  {
    title: "Launch and post-launch support",
    description:
      "We deploy your website live and provide continuous support, updates, and maintenance to keep it running efficiently.",
  },
];
const faqData = [
  {
    question: "What is the cost of web design in Mumbai?",
    answer:
      "Design-only projects start from Rs. 15,000. Full design and development packages start from Rs. 24,999.",
  },
  {
    question: "How long does web design take?",
    answer:
      "For a 5 to 8 page website, design is completed within 7 to 10 working days after content approval.",
  },
];
const page = () => {
  return (
    <>
       {/* <Hero
      title="Web Design Company in "
      highlight="Mumbai"
      
      subtext="Designs that impress. Pages that convert. Built for Mumbai's competitive market."
      description="NNC is a premium web design company in Mumbai that blends creativity with conversion-focused design thinking. Our designers understand the Mumbai market and know exactly what makes a local audience click, trust, and buy. We don't just make websites look good. We make them work."
      image="/Web Design Company in Mumbai/240_F_336883944_TYPsC4JqOxX6sY27Eb85Jr0ihP9iMgdg.jpg"
      buttonText="Get Quote"
      buttonLink="#contact"
    /> */}
      <Hero
  title="Web Design Company in "
  highlight="Mumbai"
  subtext="Designs that impress. Pages that convert. Built for Mumbai's competitive market."
  description="NNC is a premium web design company in Mumbai that blends creativity with conversion-focused design thinking. Our designers understand the Mumbai market and know exactly what makes a local audience click, trust, and buy. We don't just make websites look good. We make them work."
  svg={webDesignSVG}
/>
 <section id='Services' className="Services  w-full py-20 md:px-15 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-center">

          <h2 className="mb-10 text-center text-gray-900">
            <span className="text-[var(--primary)]">Web Design </span>  Services in <span className="text-[var(--primary)]">Mumbai  </span> 

          </h2>

        </div>
        <CardList cards={cardData} />
      </section>
      {/* <section id='Services' className="Services  w-full py-20 px-6 bg-gradient-to-b from-[var(--primary)]/10 to-transparent">
        <div className="max-w-6xl mx-auto flex items-center justify-center">

          <h2 className="mb-10 text-center text-gray-900">
            <span className="text-[var(--primary)]">Web Design </span>  Services in <span className="text-[var(--primary)]">Mumbai  </span> 

          </h2>

        </div>
        <CardCarouselLeftRight cards={leftSlideService} direction="left" />
        <CardCarouselLeftRight className='mt-10' cards={rightSlideService} direction="right" />
      </section> */}

      <section id='process' className="Services scroll-mt-10 w-full py-20 px-6 md:px-15 bg-[var(--sectioncolor)] ">
        <div className="max-w-6xl mx-auto flex items-center justify-center">

          <h2 className="mb-10 text-center text-white">Our Web Design
            <span className="text-[var(--primary)]">  Process </span>

          </h2>

        </div>
        <Process processSteps={processSteps} />
      </section>

      <section id='Rewiew' className="Rewiew  w-full py-20 px-6 bg-[var(--sectioncolor)]">
              <div className="max-w-6xl mx-auto flex items-center justify-between mb-10 flex-wrap gap-4">
      
                {/* LEFT: Heading */}
                <h2 className="text-white text-left max-w-lg">
                  <span className="text-[var(--primary)]">Trusted </span>
                  by Businesses Across
                  <span className="text-[var(--primary)]"> Mumbai </span>
                  & <span className="text-[var(--primary)]"> Beyond </span>
                </h2>
      
                {/* RIGHT: Button */}
                <a
                  href="https://www.google.com/maps/place/Nakshatra+Namaha+Creations+Private+Limited+%7C+Website+Development+Company+in+Mumbai/@19.2345775,68.3744923,7z/data=!4m10!1m2!2m1!1snakshatra+namaha+creations!3m6!1s0x3be7bb2a3d75529f:0x9a21f9c6add3f2aa!8m2!3d19.2345775!4d72.9887501!15sChpuYWtzaGF0cmEgbmFtYWhhIGNyZWF0aW9uc1ocIhpuYWtzaGF0cmEgbmFtYWhhIGNyZWF0aW9uc5IBEHdlYnNpdGVfZGVzaWduZXLgAQA!16s%2Fg%2F11yt9b9y2b?entry=ttu&g_ep=EgoyMDI2MDQwNy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-btn whitespace-nowrap px-6 py-3 rounded-xl"
                >
                  View All on Google
                </a>
      
              </div>
              <Testimonial CardColor="bg-white/10" ClintTextColor="text-[var(--primary)]" />
            </section>
      
      <section id='FAQ' className="FAQ scroll-mt-10 w-full py-20 px-6 md:px-15 bg-gradient-to-b from-[var(--secondary)]/5 to-transparent">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center">
            Frequently Asked  <span className="text-[var(--primary)]">Questions</span>
          </h2>

        </div>
        <FAQ data={faqData} qColor="bg-gradient-to-r from-[#041027] to-[var(--primary)]" qTextColor="text-white"/>
      </section>
      <section id='CTA' className="CTA scroll-mt-10 w-full pb-20 pt-10 px-6 md:px-15 bg-gradient-to-r from-[#041027] to-[#0c245a]">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center text-white">Want a 
 <span className="text-[var(--primary)]"> website  </span> that actually looks    <span className="text-[var(--primary)]">premium </span>?
          </h2>

        </div>
        <MobileAppCTA />
      </section>
     

    </>
  )
}

export default page