import React from 'react'
import Hero from '@/components/Hero'
import CardList from '@/components/CardList'
import CardCarouselLeftRight from '@/components/CardCarousel';
import TackStack from '@/components/TechStack';
import FAQ from '@/components/FAQ';
import MobileAppCTA from '@/components/custom-web-development-mumbai/CTA';
const customWebSVG = (
  <svg viewBox="0 0 400 300" className="w-full h-auto" fill="none">
    
    {/* Main Browser Window */}
    <rect x="40" y="40" width="320" height="220" rx="12" stroke="white" strokeOpacity="0.3" />

    {/* Top Bar */}
    <rect x="40" y="40" width="320" height="40" rx="12" fill="white" fillOpacity="0.05" />

    {/* Window Dots */}
    <circle cx="70" cy="60" r="4" fill="white" />
    <circle cx="90" cy="60" r="4" fill="white" />
    <circle cx="110" cy="60" r="4" fill="white" />

    {/* Code Brackets */}
    <text x="130" y="170" fill="white" fillOpacity="0.4" fontSize="40" fontFamily="monospace">
      &lt;/&gt;
    </text>

    {/* Layout Blocks */}
    <rect x="70" y="100" width="80" height="50" rx="6" fill="white" fillOpacity="0.08" />
    <rect x="260" y="100" width="60" height="20" rx="4" fill="white" fillOpacity="0.08" />
    <rect x="260" y="130" width="60" height="20" rx="4" fill="white" fillOpacity="0.08" />

    {/* Connection Lines */}
    <line x1="150" y1="125" x2="260" y2="110" stroke="white" strokeOpacity="0.15" strokeDasharray="4 4" />
    <line x1="150" y1="140" x2="260" y2="140" stroke="white" strokeOpacity="0.15" strokeDasharray="4 4" />

    {/* Gear (logic/workflow) */}
    <circle cx="300" cy="200" r="18" stroke="white" strokeOpacity="0.3" />
    <circle cx="300" cy="200" r="8" stroke="white" strokeOpacity="0.2" />

    {/* Floating shapes */}
    <circle cx="90" cy="230" r="25" stroke="white" strokeOpacity="0.1" />
    <circle cx="350" cy="80" r="20" stroke="white" strokeOpacity="0.1" />

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
            <span className="text-[var(--primary)]">Tech </span> Stack
          </h2>

        </div>
        <h3 className='text-[var(--secondary)] py-2  border-l-4 border-[var(--secondary)] pl-4'>Frontend</h3>
        <TackStack items={techStackData1} hColor="text-white" />
        <h3 className='text-[var(--secondary)] py-2  border-l-4 border-[var(--secondary)] pl-4'>Backend</h3>
        <TackStack items={techStackData2} hColor="text-white" />
        <h3 className='text-[var(--secondary)] py-2  border-l-4 border-[var(--secondary)] pl-4'>Database</h3>
        <TackStack items={techStackData3} hColor="text-white" />
        <h3 className='text-[var(--secondary)] py-2  border-l-4 border-[var(--secondary)] pl-4'>Hosting</h3>
        <TackStack items={techStackData4} hColor="text-white" />
        <h3 className='text-[var(--secondary)] py-2  border-l-4 border-[var(--secondary)] pl-4'>Mobile</h3>
        <TackStack items={techStackData5} hColor="text-white" />
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