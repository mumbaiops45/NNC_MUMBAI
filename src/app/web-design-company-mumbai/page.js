import React from 'react'
import Hero from '@/components/Hero'
import CardCarouselLeftRight from '@/components/CardCarousel';
import FAQ from '@/components/FAQ';
import MobileAppCTA from '@/components/Web Design Company in Mumbai/CTA';
import Process from '@/components/Step';

const cardData = [
  {
    image: "/Mobile App Development Company in Mumbai/React Native.svg",
    heading: "React Native Cross-Platform Apps for Android and iOS",
    paragraph:
      "We build high-performance mobile applications using React Native, enabling seamless cross-platform functionality for both Android and iOS. Our solutions ensure faster development, cost efficiency, and a consistent user experience across devices.",
  },
  {
    image: "/Mobile App Development Company in Mumbai/QA Team.png",
    heading: "Dedicated QA Team for Bug-Free App Releases",
    paragraph:
      "Our dedicated quality assurance team rigorously tests every mobile application to ensure it is secure, bug-free, and performs flawlessly. We follow industry-standard testing practices to deliver reliable and high-quality apps.",
  },
  {
    image: "/Mobile App Development Company in Mumbai/App Store and Play Store.png",
    heading: "App Store and Play Store Submission Handled by Experts",
    paragraph:
      "We take care of the complete app deployment process, including submission to the Apple App Store and Google Play Store. Our team ensures compliance with all guidelines for a smooth and successful app launch.",
  },
  {
    image: "/Website Development Company in Mumbai/Post-launch support.png",
    heading: "Post-Launch Support and Maintenance Plans",
    paragraph:
      "Our services extend beyond development with comprehensive post-launch support, regular updates, performance monitoring, and maintenance to keep your mobile app running efficiently and securely.",
  },
  {
    image: "/Mobile App Development Company in Mumbai/clarity, trust, and flexibility.png",
    heading: "Transparent Milestone-Based Billing Process",
    paragraph:
      "We follow a transparent billing structure based on project milestones, ensuring clarity, trust, and flexibility. You only pay as progress is achieved, making the development process smooth and risk-free.",
  },
  {
    image: "/Mobile App Development Company in Mumbai/Apps Built for Healthcare, Logistics, Real Estate & E-commerce.webp",
    heading: "Apps Built for Healthcare, Logistics, Real Estate & E-commerce",
    paragraph:
      "We develop custom mobile applications tailored for industries like healthcare, logistics, real estate, and e-commerce. Our solutions are designed to improve efficiency, user engagement, and business growth.",
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
       <Hero
      title="Web Design Company in "
      highlight="Mumbai"
      
      subtext="Designs that impress. Pages that convert. Built for Mumbai's competitive market."
      description="NNC is a premium web design company in Mumbai that blends creativity with conversion-focused design thinking. Our designers understand the Mumbai market and know exactly what makes a local audience click, trust, and buy. We don't just make websites look good. We make them work."
      image="/Web Design Company in Mumbai/240_F_336883944_TYPsC4JqOxX6sY27Eb85Jr0ihP9iMgdg.jpg"
      buttonText="Get Quote"
      buttonLink="#contact"
    />
      
      <section id='Services' className="Services  w-full py-20 px-6 bg-gradient-to-b from-[var(--primary)]/10 to-transparent">
        <div className="max-w-6xl mx-auto flex items-center justify-center">

          <h2 className="mb-10 text-center text-gray-900">
            <span className="text-[var(--primary)]">Web Design </span>  Services in <span className="text-[var(--primary)]">Mumbai  </span> 

          </h2>

        </div>
        <CardCarouselLeftRight cards={leftSlideService} direction="left" />
        <CardCarouselLeftRight className='mt-10' cards={rightSlideService} direction="right" />
      </section>

      <section id='process' className="Services scroll-mt-10 w-full py-20 px-6 md:px-15 ">
        <div className="max-w-6xl mx-auto flex items-center justify-center">

          <h2 className="mb-10 text-center text-gray-900">Our Web Design
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
        <FAQ data={faqData} />
      </section>
      <section id='CTA' className="CTA scroll-mt-10 w-full pb-20 pt-10 px-6 md:px-15">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center">Want a 
 <span className="text-[var(--primary)]"> website  </span> that actually looks    <span className="text-[var(--primary)]">premium </span>?
          </h2>

        </div>
        <MobileAppCTA />
      </section>
     

    </>
  )
}

export default page