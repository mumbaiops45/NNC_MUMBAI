import React from 'react'
import Hero from '@/components/Hero'
import CardCarouselLeftRight from '@/components/CardCarousel';
import FAQ from '@/components/FAQ';
import MobileAppCTA from '@/components/software-development-company-thane-mumbai/CTA';
import Process from '@/components/Step';
import CardList from '@/components/CardList';
import ServicesLayout from '@/components/ClickCard';

const LocalBenefits = [
  {
    id: "01",
    title: "Face-to-face meetings at our Thane West office",
    items: [
      {
        name: "Face-to-face meetings at our Thane West office",
        img: "/software-development-company-thane-mumbai/Face-to-face meetings1.png",
        heading: "Face-to-face meetings at our Thane West office",
        discription:
          "We offer in-person consultations at our Thane West office, allowing better communication, clear project understanding, and stronger collaboration for your business needs.",
      },
    ],
  },
  {
    id: "02",
    title: "Faster response times for Mumbai and MMR clients",
    items: [
      {
        name: "Faster response times for Mumbai and MMR clients",
        img: "/software-development-company-thane-mumbai/Faster response times for Mumbai and MMR clients.png",
        heading: "Faster response times for Mumbai and MMR clients",
        discription:
          "Being locally available enables us to provide quick support, faster turnaround times, and real-time communication for clients across Mumbai and the MMR region.",
      },
    ],
  },
  {
    id: "03",
    title: "No timezone delays or offshore communication gaps",
    items: [
      {
        name: "No timezone delays or offshore communication gaps",
        img: "/software-development-company-thane-mumbai/No timezone delays or offshore communication gaps.png",
        heading: "No timezone delays or offshore communication gaps",
        discription:
          "Work with a local team that operates in your timezone, ensuring smooth communication, faster approvals, and zero delays caused by offshore coordination issues.",
      },
    ],
  },
  {
    id: "04",
    title: "We understand Mumbai's business environment",
    items: [
      {
        name: "We understand Mumbai's business environment",
        img: "/software-development-company-thane-mumbai/We understand Mumbai's business environment.png",
        heading: "We understand Mumbai's business environment",
        discription:
          "Our team has deep knowledge of Mumbai’s competitive market, helping us build solutions that align with local customer behavior, trends, and business requirements.",
      },
    ],
  },
  {
    id: "05",
    title: "Available for onsite visits for enterprise clients",
    items: [
      {
        name: "Available for onsite visits for enterprise clients",
        img: "/E-commerce Website Development in Mumbai/Inventory and Order Management Panel.webp",
        heading: "Available for onsite visits for enterprise clients",
        discription:
          "For enterprise-level projects, we provide onsite visits to understand workflows, integrate systems efficiently, and ensure seamless implementation.",
      },
    ],
  },
  {
    id: "06",
    title: "Local invoice and GST billing from Mumbai branch",
    items: [
      {
        name: "Local invoice and GST billing from Mumbai branch",
        img: "/E-commerce Website Development in Mumbai/GST-Compliant Invoicing.png",
        heading: "Local invoice and GST billing from Mumbai branch",
        discription:
          "We provide proper GST-compliant invoicing from our Mumbai branch, ensuring transparency, easy accounting, and compliance with Indian tax regulations.",
      },
    ],
  },
];

const cardData = [
  {
    image: "/software-development-company-thane-mumbai/software-development-company-thane-mumbai.png",
    heading: "Custom web application development",
    paragraph:
      "We build fully responsive e-commerce websites that deliver a seamless shopping experience across mobile, tablet, and desktop devices, ensuring maximum reach and engagement.",
  },
  {
    image: "/software-development-company-thane-mumbai/Android and iOS mobile apps.png",
    heading: "Android and iOS mobile apps",
    paragraph:
      "Our solutions include advanced product catalogues with smart filters and search functionality, helping customers easily find what they’re looking for and improving conversion rates.",
  },
  {
    image: "/software-development-company-thane-mumbai/CRM and ERP software.png",
    heading: "CRM and ERP software",
    paragraph:
      "We integrate secure and reliable payment gateways like Razorpay, PayU, and UPI to enable smooth, fast, and safe transactions for your customers.",
  },
  {
    image: "/software-development-company-thane-mumbai/SaaS product development.png",
    heading: "SaaS product development",
    paragraph:
      "Manage your products, stock levels, and orders efficiently with a powerful backend dashboard designed for easy tracking and real-time updates.",
  },
  {
    image: "/software-development-company-thane-mumbai/API development and integrations.png",
    heading: "API development and integrations",
    paragraph:
      "We enable user accounts with order history and real-time tracking, enhancing transparency and improving the overall customer experience.",
  },
  {
    image: "/software-development-company-thane-mumbai/Business automation software.png",
    heading: "Business automation software",
    paragraph:
      "Our e-commerce systems generate GST-compliant invoices automatically, ensuring your business stays aligned with Indian tax regulations.",
  },
  {
    image: "/software-development-company-thane-mumbai/Admin dashboards and reporting tools.png",
    heading: "Admin dashboards and reporting tools",
    paragraph:
      "Boost customer engagement with direct WhatsApp integration, allowing users to make quick enquiries and connect with your team instantly.",
  },
  {
    image: "/software-development-company-thane-mumbai/E-commerce platform development1.png",
    heading: "E-commerce platform development",
    paragraph:
      "We create search engine-friendly product pages with optimized content, meta tags, and structure to improve visibility and drive organic traffic.",
  },
];


const faqData = [
  {
    question: "Where is NNC's Mumbai office?",
    answer:
      "Our Mumbai branch is located in Thane West and serves clients across Thane, Navi Mumbai, BKC, Andheri, and South Mumbai.",
  },
  {
    question: "Can I visit your Thane office before starting a project?",
    answer:
      "Absolutely. We encourage an in-person discovery meeting before any project kickoff. Call us to schedule.",
  },
];
const page = () => {
  return (
    <>
      <Hero
        title="Software Development Company in "
        highlight="Thane, Mumbai"

        subtext="Building scalable, secure, and high-performance software solutions tailored for businesses in Thane and across Mumbai."
        description="NNC's Mumbai branch is based in Thane West, making us one of the most accessible software development companies in the Thane and Greater Mumbai area. Whether you need a web application, mobile app, CRM, or custom business software, our Thane team is available for face-to-face meetings, discovery sessions, and ongoing project reviews."
        image="/E-commerce Website Development in Mumbai/e-commerce.jpg"
        buttonText="Get Quote"
        buttonLink="#contact"
      />

      <section id='Services' className="Services  w-full py-20 md:px-15 px-6">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center text-gray-900">
            <span className="text-[var(--primary)]"> Software Development   </span>  Services from Our <span className="text-[var(--primary)]"> Thane, Mumbai   </span>Office 
          </h2>

        </div>
        <CardList cards={cardData} />
      </section>
      <section id='why-local-matters' className='bg-gradient-to-b from-[var(--secondary)]/5 to-transparent pt-15 '>
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center text-gray-900 md:px-15 px-6">Why Choosing a 
            <span className="text-[var(--primary)]"> Local   </span>Thane  <span className="text-[var(--primary)]"> Software Company  </span>  Matters
          </h2>

        </div>
        <ServicesLayout servicesData={LocalBenefits} color="bg-[var(--primary)]" TextColor="black"/>
      </section>






      <section id='FAQ' className="FAQ scroll-mt-10 w-full py-15 md:px-15 px-6 ">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center">
            Frequently Asked  <span className="text-[var(--primary)]">Questions</span>
          </h2>

        </div>
        <FAQ data={faqData} />
      </section>
      <section id='CTA' className="CTA scroll-mt-10 w-full pb-20 pt-10 px-6 md:px-15">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center">Let's 
            <span className="text-[var(--primary)]"> build   </span>something great for your    <span className="text-[var(--primary)]">Mumbai  </span>business.
          </h2>

        </div>
        <MobileAppCTA />
      </section>


    </>
  )
}

export default page