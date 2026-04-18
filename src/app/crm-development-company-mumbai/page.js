import React from 'react'
import Hero from '@/components/Hero';
import CardList from '@/components/CardList';
import TackStack from '@/components/TechStack';
import FAQ from '@/components/FAQ';
import MobileAppCTA from '@/components/crm-development-company-mumbai/CTA';
import Testimonial from '@/components/Testimonial';
import InfiniteLogoCarousel from '@/components/BrandLogo';
import CaseStudyGrid from '@/components/CaseStudy';
import Information from '@/components/information';

const crmSVG = (
  <svg viewBox="0 0 400 300" className="w-full h-auto" fill="none">

    {/* Decorative rings */}
    <circle cx="44" cy="234" r="22" stroke="white" strokeOpacity="0.1" strokeWidth="1.2"/>
    <circle cx="44" cy="234" r="14" stroke="white" strokeOpacity="0.07" strokeWidth="0.6" strokeDasharray="3 3"/>
    <circle cx="362" cy="68" r="26" stroke="white" strokeOpacity="0.1" strokeWidth="1.2"/>
    <circle cx="362" cy="68" r="16" stroke="white" strokeOpacity="0.07" strokeWidth="0.6" strokeDasharray="3 3"/>

    {/* Dot accents */}
    <circle cx="366" cy="230" r="3" fill="white" fillOpacity="0.08"/>
    <circle cx="36" cy="90" r="2" fill="white" fillOpacity="0.08"/>

    {/* Dashboard frame */}
    <rect x="54" y="44" width="292" height="208" rx="13" fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.15" strokeWidth="1.2"/>
    <rect x="54" y="44" width="292" height="34" rx="13" fill="white" fillOpacity="0.07"/>
    <rect x="54" y="64" width="292" height="14" fill="white" fillOpacity="0.07"/>

    {/* Traffic lights */}
    <circle cx="76" cy="61" r="5" fill="#ef4444" fillOpacity="0.7"/>
    <circle cx="94" cy="61" r="5" fill="#f59e0b" fillOpacity="0.7"/>
    <circle cx="112" cy="61" r="5" fill="#22c55e" fillOpacity="0.7"/>

    {/* Title strip */}
    <rect x="128" y="57" width="100" height="6" rx="2" fill="white" fillOpacity="0.12"/>
    <rect x="300" y="55" width="36" height="10" rx="4" fill="white" fillOpacity="0.08" stroke="white" strokeOpacity="0.15" strokeWidth="0.7"/>
    <rect x="305" y="58" width="26" height="4" rx="2" fill="white" fillOpacity="0.2"/>

    {/* Sidebar */}
    <rect x="62" y="82" width="62" height="160" rx="7" fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.1" strokeWidth="0.8"/>
    <rect x="70" y="90" width="46" height="14" rx="4" fill="white" fillOpacity="0.08"/>
    <circle cx="79" cy="97" r="4" fill="#38bdf8" fillOpacity="0.6"/>
    <rect x="87" y="94" width="22" height="4" rx="2" fill="white" fillOpacity="0.2"/>
    <rect x="87" y="100" width="14" height="3" rx="1.5" fill="white" fillOpacity="0.1"/>

    {/* Contact rows */}
    {[120, 146, 172].map((y, i) => (
      <g key={i}>
        <circle cx="80" cy={y} r="8" fill="white" fillOpacity="0.12" stroke="white" strokeOpacity="0.2" strokeWidth="0.7"/>
        <circle cx="80" cy={y - 3} r="3" fill="white" fillOpacity="0.25"/>
        <path d={`M73 ${y + 6} Q80 ${y + 2} 87 ${y + 6}`} stroke="white" strokeOpacity="0.2" strokeWidth="0.8" strokeLinecap="round" fill="none"/>
        <rect x="91" y={y - 3} width="26" height="3" rx="1.5" fill="white" fillOpacity="0.15"/>
        <rect x="91" y={y + 2} width="18" height="3" rx="1.5" fill="white" fillOpacity="0.08"/>
      </g>
    ))}

    <rect x="70" y="220" width="46" height="14" rx="4" fill="white" fillOpacity="0.06" stroke="white" strokeOpacity="0.1" strokeWidth="0.6"/>
    <rect x="75" y="225" width="22" height="4" rx="2" fill="white" fillOpacity="0.12"/>

    {/* Pipeline header */}
    <rect x="134" y="82" width="202" height="18" rx="5" fill="white" fillOpacity="0.06" stroke="white" strokeOpacity="0.1" strokeWidth="0.7"/>
    <rect x="142" y="88" width="50" height="5" rx="2" fill="#38bdf8" fillOpacity="0.5"/>
    <rect x="284" y="85" width="44" height="12" rx="4" fill="#22c55e" fillOpacity="0.15" stroke="#22c55e" strokeOpacity="0.4" strokeWidth="0.7"/>
    <rect x="289" y="89" width="34" height="4" rx="2" fill="#22c55e" fillOpacity="0.6"/>

    {/* Pipeline cards — Lead */}
    <rect x="134" y="106" width="60" height="52" rx="7" fill="white" fillOpacity="0.06" stroke="white" strokeOpacity="0.12" strokeWidth="0.8"/>
    <rect x="140" y="113" width="30" height="5" rx="2" fill="#38bdf8" fillOpacity="0.5"/>
    <rect x="140" y="122" width="48" height="4" rx="2" fill="white" fillOpacity="0.1"/>
    <rect x="140" y="130" width="36" height="4" rx="2" fill="white" fillOpacity="0.07"/>
    <rect x="140" y="148" width="40" height="6" rx="3" fill="#38bdf8" fillOpacity="0.15" stroke="#38bdf8" strokeOpacity="0.3" strokeWidth="0.6"/>
    <rect x="144" y="151" width="24" height="3" rx="1.5" fill="#38bdf8" fillOpacity="0.5"/>

    {/* Pipeline cards — Proposal */}
    <rect x="202" y="106" width="60" height="52" rx="7" fill="white" fillOpacity="0.06" stroke="white" strokeOpacity="0.12" strokeWidth="0.8"/>
    <rect x="208" y="113" width="36" height="5" rx="2" fill="#a78bfa" fillOpacity="0.6"/>
    <rect x="208" y="122" width="48" height="4" rx="2" fill="white" fillOpacity="0.1"/>
    <rect x="208" y="130" width="30" height="4" rx="2" fill="white" fillOpacity="0.07"/>
    <rect x="208" y="148" width="40" height="6" rx="3" fill="#a78bfa" fillOpacity="0.15" stroke="#a78bfa" strokeOpacity="0.3" strokeWidth="0.6"/>
    <rect x="212" y="151" width="24" height="3" rx="1.5" fill="#a78bfa" fillOpacity="0.5"/>

    {/* Pipeline cards — Won */}
    <rect x="270" y="106" width="60" height="52" rx="7" fill="white" fillOpacity="0.06" stroke="white" strokeOpacity="0.12" strokeWidth="0.8"/>
    <rect x="276" y="113" width="28" height="5" rx="2" fill="#22c55e" fillOpacity="0.6"/>
    <rect x="276" y="122" width="48" height="4" rx="2" fill="white" fillOpacity="0.1"/>
    <rect x="276" y="130" width="36" height="4" rx="2" fill="white" fillOpacity="0.07"/>
    <rect x="276" y="148" width="40" height="6" rx="3" fill="#22c55e" fillOpacity="0.15" stroke="#22c55e" strokeOpacity="0.3" strokeWidth="0.6"/>
    <rect x="280" y="151" width="24" height="3" rx="1.5" fill="#22c55e" fillOpacity="0.5"/>

    {/* Card connectors */}
    <line x1="194" y1="132" x2="202" y2="132" stroke="white" strokeOpacity="0.15" strokeWidth="0.8" strokeDasharray="3 2"/>
    <line x1="262" y1="132" x2="270" y2="132" stroke="white" strokeOpacity="0.15" strokeWidth="0.8" strokeDasharray="3 2"/>

    {/* Growth chart */}
    <rect x="134" y="166" width="202" height="64" rx="7" fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.1" strokeWidth="0.8"/>
    <line x1="142" y1="196" x2="328" y2="196" stroke="white" strokeOpacity="0.06" strokeWidth="0.6"/>
    <line x1="142" y1="210" x2="328" y2="210" stroke="white" strokeOpacity="0.06" strokeWidth="0.6"/>
    <line x1="142" y1="182" x2="328" y2="182" stroke="white" strokeOpacity="0.06" strokeWidth="0.6"/>
    <path d="M148 218 L175 202 L202 210 L229 188 L256 194 L283 174 L310 180 L322 168 L322 224 L148 224 Z" fill="white" fillOpacity="0.04"/>
    <polyline points="148,218 175,202 202,210 229,188 256,194 283,174 310,180 322,168"
      stroke="#38bdf8" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <circle cx="148" cy="218" r="2.5" fill="#38bdf8" fillOpacity="0.7"/>
    <circle cx="202" cy="210" r="2.5" fill="#38bdf8" fillOpacity="0.7"/>
    <circle cx="256" cy="194" r="2.5" fill="#38bdf8" fillOpacity="0.7"/>
    <circle cx="310" cy="180" r="2.5" fill="#38bdf8" fillOpacity="0.7"/>
    <circle cx="322" cy="168" r="3.5" fill="#22c55e" fillOpacity="0.8" stroke="white" strokeOpacity="0.2" strokeWidth="0.8"/>

    {/* Mumbai badge */}
    <rect x="140" y="264" width="90" height="24" rx="8" fill="#3b82f6" fillOpacity="0.12" stroke="#3b82f6" strokeWidth="1.1"/>
    <circle cx="156" cy="276" r="5" fill="#3b82f6" fillOpacity="0.25" stroke="#3b82f6" strokeWidth="1"/>
    <circle cx="156" cy="275" r="2.5" fill="#3b82f6"/>
    <line x1="156" y1="277" x2="156" y2="282" stroke="#3b82f6" strokeWidth="1.2" strokeLinecap="round"/>
    <text x="198" y="280" textAnchor="middle" fontSize="10" fill="#3b82f6" fontFamily="sans-serif" fontWeight="500">Mumbai</text>

  </svg>
);
const cardData = [
  {
    image: "/crm-development-company-mumbai/Lead Capture & Pipeline Management.png",
    heading: "Lead Capture & Pipeline Management",
    paragraph:
      "Easily capture leads from multiple channels and manage your sales pipeline efficiently, ensuring no opportunity is missed.",
  },
  {
    image: "/crm-development-company-mumbai/Contact & Company Database.png",
    heading: "Contact & Company Database",
    paragraph:
      "Maintain a centralized database of contacts and companies, with easy search, segmentation, and up-to-date information for better communication.",
  },
  {
    image: "/crm-development-company-mumbai/Task & Follow-Up Automation.png",
    heading: "Task & Follow-Up Automation",
    paragraph:
      "Automate daily tasks, reminders, and follow-ups so your team can focus on closing deals instead of manual work.",
  },
  {
    image: "/crm-development-company-mumbai/Sales Forecasting & Reporting.webp",
    heading: "Sales Forecasting & Reporting",
    paragraph:
      "Get accurate sales forecasts and detailed reports to track performance, plan strategies, and make data-driven decisions.",
  },
  {
    image: "/crm-development-company-mumbai/Invoice & Payment Tracking.png",
    heading: "Invoice & Payment Tracking",
    paragraph:
      "Track invoices, payments, and outstanding balances seamlessly to improve cash flow and financial management.",
  },
  {
    image: "/crm-development-company-mumbai/WhatsApp & Email Integration.png",
    heading: "WhatsApp & Email Integration",
    paragraph:
      "Integrate messaging and email tools to communicate with leads and customers directly from your CRM platform.",
  },
  {
    image: "/crm-development-company-mumbai/Role-Based Access for Teams.png",
    heading: "Role-Based Access for Teams",
    paragraph:
      "Assign roles and permissions to team members to maintain data security while improving collaboration.",
  },
  {
    image: "/crm-development-company-mumbai/Custom Dashboard & Analytics.png",
    heading: "Custom Dashboard & Analytics",
    paragraph:
      "Monitor KPIs and performance metrics with customizable dashboards and analytics for smarter business decisions.",
  },
];

const techStackData = [
  {
    image: "/crm-development-company-mumbai/Real Estate Agencies & Brokers.png",
    heading: "Real Estate Agencies & Brokers",
    description:
      "We build CRM systems to manage property listings, track leads, schedule site visits, and automate follow-ups to close deals faster.",
      height: "220",
      width: "220",
       text: "group-hover:text-[var(--primary)]",
       HoverBG: "hover:bg-white/10"
  },
  {
    image: "/crm-development-company-mumbai/Healthcare Clinics & Hospitals.png",
    heading: "Healthcare Clinics & Hospitals",
    description:
      "Custom CRM solutions to handle patient records, appointment scheduling, communication, and improve overall patient management.",
       height: "220",
      width: "220",
       text: "group-hover:text-[var(--primary)]",
       HoverBG: "hover:bg-white/10"
  },
  {
    image: "/crm-development-company-mumbai/Legal Firms & Consulting Practices.png",
    heading: "Legal Firms & Consulting Practices",
    description:
      "Manage clients, cases, documents, and communication efficiently with secure and scalable CRM systems tailored for legal workflows.",
       height: "220",
      width: "220",
       text: "group-hover:text-[var(--primary)]",
       HoverBG: "hover:bg-white/10"
  },
  {
    image: "/crm-development-company-mumbai/FMCG & Distribution Companies.jpg",
    heading: "FMCG & Distribution Companies",
    description:
      "Track distributors, manage orders, monitor inventory, and streamline supply chain operations with powerful CRM tools.",
       height: "220",
      width: "220",
       text: "group-hover:text-[var(--primary)]",
       HoverBG: "hover:bg-white/10"
  },
  {
    image: "/crm-development-company-mumbai/Event Management Companies.png",
    heading: "Event Management Companies",
    description:
      "Organize events seamlessly by managing clients, vendors, bookings, and timelines in one centralized CRM platform.",
       height: "220",
      width: "220",
       text: "group-hover:text-[var(--primary)]",
       HoverBG: "hover:bg-white/10"
  },
  {
    image: "/crm-development-company-mumbai/Logistics & Freight Forwarders.png",
    heading: "Logistics & Freight Forwarders",
    description:
      "Optimize operations with CRM systems for shipment tracking, client communication, documentation, and delivery management.",
       height: "220",
      width: "220",
       text: "group-hover:text-[var(--primary)]",
       HoverBG: "hover:bg-white/10"
  },
  {
    image: "/crm-development-company-mumbai/E-commerce & Retail Businesses.png",
    heading: "E-commerce & Retail Businesses",
    description:
      "Enhance customer experience with CRM solutions for order tracking, customer data, marketing automation, and sales insights.",
       height: "220",
       width: "220",
       text: "group-hover:text-[var(--primary)]",
       HoverBG: "hover:bg-white/10"
  },
];
const faqData = [
  {
    question: "How is a custom CRM better than Salesforce or Zoho?",
    answer:
      "A custom CRM is built around your exact workflows, has no per-seat monthly fees, and is fully owned by you. No compromise on features.",
  },
  {
    question: "What is the cost of building a custom CRM in Mumbai?",
    answer:
      "Basic CRM systems start from Rs. 75,000. Enterprise-grade CRMs with full integrations are quoted based on module count.",
  },
];

const page = () => {
  return (
    <>
       {/* <Hero
      title="CRM Development Company in "
      highlight="Mumbai"
      subtext="Build tailor-made CRM solutions to streamline your sales, automate workflows, and boost team productivity."
      description="A generic CRM forces your team to adapt to the software. A custom CRM is built to match how your business actually works. NNC builds bespoke CRM systems for Mumbai businesses across real estate, healthcare, logistics, legal, and service industries. Built on React.js + Node.js + MongoDB for speed, scale, and flexibility."
      image="/crm-development-company-mumbai/CRM Development Company in Mumbai.jpg"
      buttonText="Get Quote"
      buttonLink="#contact"
    /> */}
    <Hero
  title="CRM Development Company in "
  highlight="Mumbai"
  subtext="Build tailor-made CRM solutions to streamline your sales, automate workflows, and boost team productivity."
  description="A generic CRM forces your team to adapt to the software. A custom CRM is built to match how your business actually works. NNC builds bespoke CRM systems for Mumbai businesses across Andheri, Mumbai, BKC, Mumbai, and Thane, Mumbai, serving industries like real estate, healthcare, logistics, legal, and services. Built on React.js + Node.js + MongoDB for speed, scale, and flexibility."
  svg={crmSVG}
/>
      <section id='crm-we-build' className="Why_Us scroll-mt-10 w-full py-20 md:px-15 px-6">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center text-gray-900">
           <span className="text-[var(--primary)]">CRM Modules  </span>  We Build  for <span className="text-[var(--primary)]">Mumbai  </span>Clients 
          </h2>

        </div>
        <CardList cards={cardData} />
      </section>
     
      <section id='Industries' className=" w-full py-20 md:px-15 px-6 bg-gradient-to-r from-[#041027] to-[#0c245a]">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className=" text-center text-white">Industries We Build 
            <span className="text-[var(--primary)]"> CRMs  </span> For in  <span className="text-[var(--primary)]">Mumbai  </span>
          </h2>

        </div>
        <TackStack items={techStackData} hColor='text-white' />
      </section>
      <CaseStudyGrid />
      <Information
  backgroundImage="/crm-development-company-mumbai/CRM.jpg"
  backgroundImageAltName='CRM Development Company in Mumbai for Custom Business Workflows' 
  title="CRM Development Company in Mumbai for Custom Business Workflows"
  highlightText="Mumbai"
  description="Looking for a CRM that fits your business perfectly? NNC builds custom CRM systems in Mumbai designed around your workflows and processes. Serving businesses across Andheri, BKC, and Thane, we develop scalable solutions for industries like real estate, healthcare, logistics, legal, and services using modern technologies like React.js, Node.js, and MongoDB."
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
      <section id='FAQ' className="FAQ scroll-mt-10 w-full py-20 md:px-15 px-6 bg-gradient-to-b from-[var(--secondary)]/5 to-transparent">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center">
            Frequently Asked  <span className="text-[var(--primary)]">Questions</span>
          </h2>

        </div>
          <FAQ data={faqData} qColor="bg-gradient-to-r from-[#041027] to-[var(--primary)]" qTextColor="text-white" />
      </section>
      <section id='CTA' className="CTA scroll-mt-10 w-full pb-20 pt-10 md:px-15 px-6 bg-gradient-to-r from-[#041027] to-[#0c245a]">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center text-white">Need a 
          <span className="text-[var(--primary)]"> CRM  </span>built for your   <span className="text-[var(--primary)]">Mumbai  </span>business?
          </h2>

        </div>
         <MobileAppCTA />
      </section>
     

    </>
  )
}

export default page