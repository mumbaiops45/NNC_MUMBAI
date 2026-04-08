import React from 'react'
import Hero from '@/components/Hero'
import CardList from '@/components/CardList'
import CardCarouselLeftRight from '@/components/CardCarousel';
import TackStack from '@/components/TechStack';
import FAQ from '@/components/FAQ';
import MobileAppCTA from '@/components/crm-development-company-mumbai/CTA';
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
       text: "group-hover:text-[var(--secondary)]",
       HoverBG: "hover:bg-[var(--secondary)]/3"
  },
  {
    image: "/crm-development-company-mumbai/Healthcare Clinics & Hospitals.png",
    heading: "Healthcare Clinics & Hospitals",
    description:
      "Custom CRM solutions to handle patient records, appointment scheduling, communication, and improve overall patient management.",
       height: "220",
      width: "220",
       text: "group-hover:text-[var(--secondary)]",
       HoverBG: "hover:bg-[var(--secondary)]/3"
  },
  {
    image: "/crm-development-company-mumbai/Legal Firms & Consulting Practices.png",
    heading: "Legal Firms & Consulting Practices",
    description:
      "Manage clients, cases, documents, and communication efficiently with secure and scalable CRM systems tailored for legal workflows.",
       height: "220",
      width: "220",
       text: "group-hover:text-[var(--secondary)]",
       HoverBG: "hover:bg-[var(--secondary)]/3"
  },
  {
    image: "/crm-development-company-mumbai/FMCG & Distribution Companies.jpg",
    heading: "FMCG & Distribution Companies",
    description:
      "Track distributors, manage orders, monitor inventory, and streamline supply chain operations with powerful CRM tools.",
       height: "220",
      width: "220",
       text: "group-hover:text-[var(--secondary)]",
       HoverBG: "hover:bg-[var(--secondary)]/3"
  },
  {
    image: "/crm-development-company-mumbai/Event Management Companies.png",
    heading: "Event Management Companies",
    description:
      "Organize events seamlessly by managing clients, vendors, bookings, and timelines in one centralized CRM platform.",
       height: "220",
      width: "220",
       text: "group-hover:text-[var(--secondary)]",
       HoverBG: "hover:bg-[var(--secondary)]/3"
  },
  {
    image: "/crm-development-company-mumbai/Logistics & Freight Forwarders.png",
    heading: "Logistics & Freight Forwarders",
    description:
      "Optimize operations with CRM systems for shipment tracking, client communication, documentation, and delivery management.",
       height: "220",
      width: "220",
       text: "group-hover:text-[var(--secondary)]",
       HoverBG: "hover:bg-[var(--secondary)]/3"
  },
  {
    image: "/crm-development-company-mumbai/E-commerce & Retail Businesses.png",
    heading: "E-commerce & Retail Businesses",
    description:
      "Enhance customer experience with CRM solutions for order tracking, customer data, marketing automation, and sales insights.",
       height: "220",
       width: "220",
       text: "group-hover:text-[var(--secondary)]",
       HoverBG: "hover:bg-[var(--secondary)]/3"
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
       <Hero
      title="CRM Development Company in "
      highlight="Mumbai"
      subtext="Build tailor-made CRM solutions to streamline your sales, automate workflows, and boost team productivity."
      description="A generic CRM forces your team to adapt to the software. A custom CRM is built to match how your business actually works. NNC builds bespoke CRM systems for Mumbai businesses across real estate, healthcare, logistics, legal, and service industries. Built on React.js + Node.js + MongoDB for speed, scale, and flexibility."
      image="/crm-development-company-mumbai/CRM Development Company in Mumbai.jpg"
      buttonText="Get Quote"
      buttonLink="#contact"
    />
      <section id='crm-we-build' className="Why_Us scroll-mt-10 w-full py-20 md:px-15 px-6">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center text-gray-900">
           <span className="text-[var(--primary)]">CRM Modules  </span>  We Build  for <span className="text-[var(--primary)]">Mumbai  </span>Clients 
          </h2>

        </div>
        <CardList cards={cardData} />
      </section>
     
      <section id='Industries' className=" w-full py-20 md:px-15 px-6 bg-gradient-to-b from-[var(--primary)]/5 to-transparent">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className=" text-center">Industries We Build 
            <span className="text-[var(--primary)]"> CRMs  </span> For in  <span className="text-[var(--primary)]">Mumbai  </span>
          </h2>

        </div>
        <TackStack items={techStackData} />
      </section>
      <section id='FAQ' className="FAQ scroll-mt-10 w-full py-20 md:px-15 px-6 bg-gradient-to-b from-[var(--secondary)]/5 to-transparent">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center">
            Frequently Asked  <span className="text-[var(--primary)]">Questions</span>
          </h2>

        </div>
        <FAQ data={faqData} />
      </section>
      <section id='CTA' className="CTA scroll-mt-10 w-full pb-20 pt-10 md:px-15 px-6">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center">Need a 
          <span className="text-[var(--primary)]"> CRM  </span>built for your   <span className="text-[var(--primary)]">Mumbai  </span>business?
          </h2>

        </div>
         <MobileAppCTA />
      </section>
     

    </>
  )
}

export default page