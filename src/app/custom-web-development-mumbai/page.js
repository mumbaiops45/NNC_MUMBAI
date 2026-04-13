import React from 'react'
import Hero from '@/components/Hero'
import CardList from '@/components/CardList'
import CardCarouselLeftRight from '@/components/CardCarousel';
import TackStack from '@/components/TechStack';
import FAQ from '@/components/FAQ';
import MobileAppCTA from '@/components/custom-web-development-mumbai/CTA';
import Testimonial from '@/components/Testimonial';
import InfiniteLogoCarousel from '@/components/BrandLogo';
import CaseStudyGrid from '@/components/CaseStudy';
import Information from '@/components/information';
const customWebSVG = (
  <svg viewBox="0 0 400 300" className="w-full h-auto" fill="none">

    {/* Decorative rings */}
    <circle cx="82" cy="248" r="22" stroke="#334155" strokeWidth="1.2"/>
    <circle cx="82" cy="248" r="14" stroke="#334155" strokeWidth="0.6" strokeDasharray="3 3"/>
    <circle cx="355" cy="72" r="20" stroke="#334155" strokeWidth="1.2"/>
    <circle cx="355" cy="72" r="12" stroke="#334155" strokeWidth="0.6" strokeDasharray="3 3"/>

    {/* Dot accents */}
    <circle cx="360" cy="200" r="3" fill="#334155"/>
    <circle cx="38" cy="120" r="2" fill="#475569"/>
    <circle cx="370" cy="240" r="2" fill="#475569"/>

    {/* Browser frame */}
    <rect x="38" y="36" width="324" height="218" rx="13" fill="#0f1e2e" stroke="#475569" strokeWidth="1.4"/>
    <rect x="38" y="36" width="324" height="34" rx="13" fill="#1e293b"/>
    <rect x="38" y="56" width="324" height="14" fill="#1e293b"/>

    {/* Traffic lights */}
    <circle cx="64" cy="53" r="5" fill="#ef4444"/>
    <circle cx="82" cy="53" r="5" fill="#f59e0b"/>
    <circle cx="100" cy="53" r="5" fill="#22c55e"/>

    {/* URL bar */}
    <rect x="118" y="44" width="180" height="18" rx="5" fill="#0f1e2e" stroke="#334155" strokeWidth="0.8"/>
    <rect x="126" y="49" width="90" height="5" rx="2" fill="#334155"/>
    <circle cx="290" cy="53" r="4" fill="#334155"/>

    {/* Left code panel */}
    <rect x="52" y="82" width="108" height="150" rx="8" fill="#142135" stroke="#2d4a6a" strokeWidth="1"/>
    <rect x="62" y="94" width="20" height="5" rx="2" fill="#38bdf8" opacity="0.7"/>
    <rect x="86" y="94" width="50" height="5" rx="2" fill="#334155"/>
    <rect x="62" y="106" width="16" height="5" rx="2" fill="#a78bfa" opacity="0.7"/>
    <rect x="82" y="106" width="40" height="5" rx="2" fill="#334155"/>
    <rect x="70" y="118" width="55" height="5" rx="2" fill="#334155"/>
    <rect x="70" y="130" width="42" height="5" rx="2" fill="#334155" opacity="0.7"/>
    <rect x="62" y="142" width="30" height="5" rx="2" fill="#38bdf8" opacity="0.5"/>
    <rect x="96" y="142" width="35" height="5" rx="2" fill="#334155"/>
    <rect x="70" y="154" width="48" height="5" rx="2" fill="#334155"/>
    <rect x="70" y="166" width="36" height="5" rx="2" fill="#a78bfa" opacity="0.5"/>
    <rect x="62" y="178" width="22" height="5" rx="2" fill="#38bdf8" opacity="0.6"/>
    <rect x="88" y="178" width="44" height="5" rx="2" fill="#334155"/>
    <rect x="62" y="190" width="60" height="5" rx="2" fill="#334155" opacity="0.5"/>
    <rect x="62" y="202" width="16" height="5" rx="2" fill="#38bdf8" opacity="0.7"/>
    <rect x="82" y="202" width="30" height="5" rx="2" fill="#334155"/>
    <rect x="62" y="214" width="50" height="5" rx="2" fill="#334155" opacity="0.4"/>

    {/* Dashed connectors */}
    <line x1="160" y1="122" x2="196" y2="118" stroke="#475569" strokeWidth="1" strokeDasharray="4 3"/>
    <line x1="160" y1="148" x2="196" y2="160" stroke="#475569" strokeWidth="1" strokeDasharray="4 3"/>
    <line x1="160" y1="178" x2="196" y2="196" stroke="#475569" strokeWidth="1" strokeDasharray="4 3"/>

    {/* Top right — UI component */}
    <rect x="200" y="84" width="118" height="44" rx="7" fill="#1a2d4a" stroke="#2d4a6a" strokeWidth="1"/>
    <rect x="210" y="94" width="60" height="6" rx="2" fill="#38bdf8" opacity="0.5"/>
    <rect x="210" y="105" width="44" height="5" rx="2" fill="#334155"/>
    <rect x="258" y="105" width="20" height="5" rx="2" fill="#22c55e" opacity="0.5"/>

    {/* Middle right — API */}
    <rect x="200" y="140" width="118" height="44" rx="7" fill="#1a2d4a" stroke="#2d4a6a" strokeWidth="1"/>
    <rect x="210" y="150" width="42" height="6" rx="2" fill="#a78bfa" opacity="0.6"/>
    <rect x="256" y="150" width="24" height="6" rx="2" fill="#334155"/>
    <rect x="210" y="162" width="70" height="5" rx="2" fill="#334155" opacity="0.7"/>

    {/* Bottom right — DB */}
    <rect x="200" y="196" width="118" height="44" rx="7" fill="#1a2d4a" stroke="#2d4a6a" strokeWidth="1"/>
    <rect x="210" y="206" width="36" height="6" rx="2" fill="#f59e0b" opacity="0.6"/>
    <rect x="250" y="206" width="30" height="6" rx="2" fill="#334155"/>
    <rect x="210" y="218" width="55" height="5" rx="2" fill="#334155" opacity="0.6"/>

    {/* Mumbai badge */}
    <rect x="130" y="265" width="90" height="24" rx="8" fill="#3b82f6" fillOpacity="0.12" stroke="#3b82f6" strokeWidth="1.1"/>
    <circle cx="146" cy="277" r="5" fill="#3b82f6" fillOpacity="0.25" stroke="#3b82f6" strokeWidth="1"/>
    <circle cx="146" cy="276" r="2.5" fill="#3b82f6"/>
    <line x1="146" y1="278" x2="146" y2="283" stroke="#3b82f6" strokeWidth="1.2" strokeLinecap="round"/>
    <text x="188" y="281" textAnchor="middle" fontSize="10" fill="#3b82f6" fontFamily="sans-serif" fontWeight="500">Mumbai</text>

  </svg>
);
const cardData = [
  {
    image: "/Custom Web Development in Mumbai/crm and lead management systems.jpg",
    heading: "CRM and Lead Management Systems",
    paragraph:
      "We build powerful CRM and lead management platforms that streamline sales, track customer interactions, and improve conversion rates for businesses of all sizes.",
  },
  {
    image: "/Custom Web Development in Mumbai/Real Estate Property Portals.png",
    heading: "Real Estate Property Portals",
    paragraph:
      "Our property portals provide seamless listings, advanced search, and interactive features to enhance property discovery and client engagement.",
  },
  {
    image: "/Custom Web Development in Mumbai/Healthcare Patient Portals.png",
    heading: "Healthcare Patient Portals",
    paragraph:
      "We develop secure patient portals that enable appointment scheduling, medical record access, and efficient communication between healthcare providers and patients.",
  },
  {
    image: "/Custom Web Development in Mumbai/Booking and Appointment.webp",
    heading: "Booking and Appointment Platforms",
    paragraph:
      "Our booking systems simplify scheduling, reduce conflicts, and offer a smooth experience for customers across various industries.",
  },
  {
    image: "/Custom Web Development in Mumbai/Multi-Vendor Marketplace Applications.png",
    heading: "Multi-Vendor Marketplace Applications",
    paragraph:
      "We create scalable multi-vendor marketplaces that support seamless product listings, vendor management, and secure transactions for a robust e-commerce ecosystem.",
  },
  {
    image: "/Custom Web Development in Mumbai/Admin Dashboards and Reporting.png",
    heading: "Admin Dashboards and Reporting Tools",
    paragraph:
      "Our admin dashboards provide real-time insights, data visualization, and reporting tools to help businesses make informed decisions efficiently.",
  },
  {
    image: "/Custom Web Development in Mumbai/SaaS Web Applications.png",
    heading: "SaaS Web Applications",
    paragraph:
      "We build feature-rich SaaS applications with secure architecture, user management, and subscription models tailored to modern business needs.",
  },
  {
    image: "/Custom Web Development in Mumbai/API Integrations with Third-Party Tools.png",
    heading: "API Integrations with Third-Party Tools",
    paragraph:
      "We integrate your web applications with third-party tools and services, ensuring smooth data flow, automation, and enhanced functionality.",
  },
];

const techStackData1 = [
  {
    image: "/Website Development Company in Mumbai/React.svg",
    heading: "React.js",
  },
  {
    image: "/Website Development Company in Mumbai/Next.png",
    heading: "Next.js",
  },
 

];
const techStackData2 = [

  {
    image: "/Website Development Company in Mumbai/Node.svg",
    heading: "Node.js",
  },
  {
    image: "/Custom Web Development in Mumbai/Express1.png",
    heading: "Express.js",
  },

];
const techStackData3 = [
  {
    image: "/Website Development Company in Mumbai/MongoDB.svg",
    heading: "MongoDB",
  },
  {
    image: "/Custom Web Development in Mumbai/mysql.svg",
    heading: "MySQL",
  },

];
const techStackData4 = [
 
  {
    image: "/Website Development Company in Mumbai/AWS.png",
    heading: "AWS",
  },
 
  {
    image: "/Custom Web Development in Mumbai/DigitalOcean.svg",
    heading: "DigitalOcean",
  }, 
  {
    image: "/Website Development Company in Mumbai/Cloudflare.svg",
    heading: "Cloudflare",
  },
];
const techStackData5 = [
 
  {
    image: "/Custom Web Development in Mumbai/React Native.svg",
    heading: "React Native",
  },
];
const faqData = [
  {
    question: "How is custom development different from template-based websites?",
    answer:
      "Custom development is built from scratch to match your exact business logic, workflows, and design. No template restrictions.",
  },
  {
    question: "Do you sign NDAs for custom projects?",
    answer:
      "Yes. We sign NDAs before any detailed scope discussion.",
  },
];
const page = () => {
  return (
    <>
       {/* <Hero
      title="Custom Web Development in"
      highlight="Mumbai"
      subtext="Custom websites built for Mumbai businesses. React.js, Next.js, WordPress. Delivered on time. Priced fairly."
      description="Off-the-shelf templates don't cut it when your business has specific logic, workflows, or integrations. NNC builds custom web applications in Mumbai tailored to your exact requirements. Whether it's a booking engine, marketplace, or CRM portal, we architect it ground up using scalable technology."
      image="/Custom Web Development in Mumbai/Web Design Company in Mumbai.jpg"
      buttonText="Get Quote"
      buttonLink="#contact"
    /> */}
    <Hero
  title="Custom Web Development in "
  highlight="Mumbai"
  subtext="Custom websites built for Mumbai businesses. React.js, Next.js, WordPress. Delivered on time. Priced fairly."
  description="Off-the-shelf templates don't cut it when your business has specific logic, workflows, or integrations. NNC builds custom web applications in Mumbai tailored to your exact requirements. Whether it's a booking engine, marketplace, or CRM portal, we architect it ground up using scalable technology."
  svg={customWebSVG}
/>
      <section id='what-we-build' className="Why_Us  w-full py-20 md:px-15 px-6">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center text-gray-900">
           What We <span className="text-[var(--primary)]">Build  </span>  for  <span className="text-[var(--primary)]">Mumbai </span>Clients
          </h2>

        </div>
        <CardList cards={cardData} />
      </section>
     
      <section id='Tech_Stack' className="Tech_Stack  w-full py-20 px-15 bg-gradient-to-r from-[#041027] to-[#0c245a]">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center text-white">
            <span className="text-[var(--primary)]">Technology  </span> Stack
          </h2>

        </div>
        <h3 className='text-[var(--primary)] py-2  border-l-4 border-[var(--primary)] pl-4'>Frontend</h3>
        <TackStack items={techStackData1} hColor="text-white" />
        <h3 className='text-[var(--primary)] py-2  border-l-4 border-[var(--primary)] pl-4'>Backend</h3>
        <TackStack items={techStackData2} hColor="text-white" />
        <h3 className='text-[var(--primary)] py-2  border-l-4 border-[var(--primary)] pl-4'>Database</h3>
        <TackStack items={techStackData3} hColor="text-white" />
        <h3 className='text-[var(--primary)] py-2  border-l-4 border-[var(--primary)] pl-4'>Hosting</h3>
        <TackStack items={techStackData4} hColor="text-white" />
        <h3 className='text-[var(--primary)] py-2  border-l-4 border-[var(--primary)] pl-4'>Mobile</h3>
        <TackStack items={techStackData5} hColor="text-white" />
      </section>
      <CaseStudyGrid />
      <Information
  backgroundImage="/Custom Web Development in Mumbai/Web Design Company in Mumbai.jpg"
  backgroundImageAltName="Custom web development workspace with website dashboards and application interfaces for businesses in Mumbai"
  title="Custom Web Development in Mumbai for Scalable & Tailored Solutions"
  highlightText="Mumbai"
  description="Looking for custom web development in Mumbai? NNC builds powerful web applications designed around your unique business needs. From booking systems to marketplaces and CRM platforms, we create scalable, high-performance solutions that align perfectly with your workflows and integrations."
  align="left"
/>
       <InfiniteLogoCarousel />
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
      <section id='FAQ' className="FAQ  w-full py-20 md:px-15 px-6 ">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center">
            Frequently Asked  <span className="text-[var(--primary)]">Questions</span>
          </h2>

        </div>
        <FAQ data={faqData} qColor="bg-gradient-to-r from-[#041027] to-[var(--primary)]" qTextColor="text-white" />
      </section>
      <section id='CTA' className="CTA  w-full pb-20 pt-10 md:px-15 px-6 bg-gradient-to-r from-[#041027] to-[#0c245a]">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center text-white">
           Ready to  <span className="text-[var(--primary)]">launch  </span>your new website in <span className="text-[var(--primary)]"> Mumbai </span>?
          </h2>

        </div>
         <MobileAppCTA />
      </section>
     

    </>
  )
}

export default page