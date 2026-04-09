import React from 'react'
import Hero from '@/components/Hero'
import CardList from '@/components/CardList';
import CardCarouselLeftRight from '@/components/CardCarousel';
import FAQ from '@/components/FAQ';
import MobileAppCTA from '@/components/Web Design Company in Mumbai/CTA';
import Process from '@/components/Step';
const webDesignSVG = (
  <svg viewBox="0 0 400 300" className="w-full h-auto" fill="none">
    {/* Browser Window */}
    <rect x="40" y="50" width="320" height="200" rx="12" stroke="white" strokeOpacity="0.3" />

    {/* Top bar */}
    <rect x="40" y="50" width="320" height="40" rx="12" fill="white" fillOpacity="0.05" />

    {/* Dots */}
    <circle cx="70" cy="70" r="4" fill="white" />
    <circle cx="90" cy="70" r="4" fill="white" />
    <circle cx="110" cy="70" r="4" fill="white" />

    {/* Layout blocks */}
    <rect x="70" y="110" width="100" height="60" rx="6" fill="white" fillOpacity="0.08" />
    <rect x="190" y="110" width="120" height="20" rx="4" fill="white" fillOpacity="0.08" />
    <rect x="190" y="140" width="120" height="20" rx="4" fill="white" fillOpacity="0.08" />
    <rect x="190" y="170" width="90" height="20" rx="4" fill="white" fillOpacity="0.08" />

    {/* Cursor */}
    <path
      d="M120 190 L120 230 L135 215 L150 240 L160 235 L145 210 L165 210 Z"
      stroke="white"
      strokeOpacity="0.4"
      strokeWidth="1.5"
      fill="none"
    />
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