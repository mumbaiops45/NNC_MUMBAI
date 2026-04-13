import React from 'react'
import Hero from '@/components/Hero'
import CardCarouselLeftRight from '@/components/CardCarousel';
import FAQ from '@/components/FAQ';
import MobileAppCTA from '@/components/software-development-company-thane-mumbai/CTA';
import Process from '@/components/Step';
import CardList from '@/components/CardList';
import ServicesLayout from '@/components/ClickCard';
import Testimonial from '@/components/Testimonial';
import InfiniteLogoCarousel from '@/components/BrandLogo';
import CaseStudyGrid from '@/components/CaseStudy';
import Information from '@/components/information';

const softwareDevSVG = (
  <svg viewBox="0 0 400 300" className="w-full h-auto" fill="none">

    {/* Decorative Rings */}
    <circle cx="44" cy="234" r="22" stroke="#334155" />
    <circle cx="362" cy="68" r="26" stroke="#334155" />

    {/* Main Dashboard */}
    <rect x="54" y="44" width="292" height="208" rx="13" fill="#0f172a" stroke="#334155" />
    <rect x="54" y="44" width="292" height="34" rx="13" fill="#1e293b" />

    {/* Top Dots */}
    <circle cx="76" cy="61" r="5" fill="#ef4444" />
    <circle cx="94" cy="61" r="5" fill="#f59e0b" />
    <circle cx="112" cy="61" r="5" fill="#22c55e" />

    {/* Code Area (Left) */}
    <rect x="70" y="90" width="120" height="120" rx="10" fill="#1e293b" stroke="#334155" />

    <text x="85" y="130" fill="#94a3b8" fontSize="18" fontFamily="monospace">
      {"<code>"}
    </text>
    <text x="85" y="155" fill="#64748b" fontSize="12" fontFamily="monospace">
      {"function() {"}
    </text>
    <text x="85" y="175" fill="#64748b" fontSize="12" fontFamily="monospace">
      {"  return app"}
    </text>
    <text x="85" y="195" fill="#64748b" fontSize="12" fontFamily="monospace">
      {"}"}
    </text>

    {/* UI Panel (Right - Frontend) */}
    <rect x="210" y="90" width="110" height="120" rx="10" fill="#1e293b" stroke="#334155" />

    <rect x="225" y="110" width="80" height="20" rx="5" fill="#334155" />
    <rect x="225" y="140" width="70" height="15" rx="4" fill="#475569" />
    <rect x="225" y="160" width="60" height="15" rx="4" fill="#475569" />

    {/* CTA Button */}
    <rect x="225" y="185" width="65" height="16" rx="5" fill="#38bdf8" opacity="0.7" />

    {/* Database (Bottom Center) */}
    <ellipse cx="200" cy="215" rx="30" ry="10" fill="#1e293b" stroke="#475569" />
    <path d="M170 215 V235 C170 240 230 240 230 235 V215" stroke="#475569" />
    <ellipse cx="200" cy="235" rx="30" ry="10" fill="#1e293b" stroke="#475569" />

    {/* Connections */}
    <line x1="130" y1="210" x2="180" y2="215" stroke="#475569" strokeDasharray="4 4" />
    <line x1="260" y1="210" x2="220" y2="215" stroke="#475569" strokeDasharray="4 4" />

    {/* API / System Node */}
    <circle cx="200" cy="150" r="10" fill="#22c55e" opacity="0.7" />
    <line x1="200" y1="160" x2="200" y2="205" stroke="#22c55e" strokeOpacity="0.5" />

    {/* Floating System Elements */}
    <circle cx="90" cy="250" r="18" stroke="#334155" />
    <circle cx="320" cy="250" r="20" stroke="#334155" />

  </svg>
);
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
        img: "/software-development-company-thane-mumbai/Available for onsite visits for enterprise clients.png",
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
        img: "/software-development-company-thane-mumbai/Local invoice and GST billing from Mumbai branch.png",
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
      {/* <Hero
        title="Software Development Company in "
        highlight="Thane, Mumbai"

        subtext="Building scalable, secure, and high-performance software solutions tailored for businesses in Thane and across Mumbai."
        description="NNC's Mumbai branch is based in Thane West, making us one of the most accessible software development companies in the Thane and Greater Mumbai area. Whether you need a web application, mobile app, CRM, or custom business software, our Thane team is available for face-to-face meetings, discovery sessions, and ongoing project reviews."
        image="/E-commerce Website Development in Mumbai/e-commerce.jpg"
        buttonText="Get Quote"
        buttonLink="#contact"
      /> */}
      <Hero
        title="Software Development Company in "
        highlight="Thane, Mumbai"
        subtext="Building scalable, secure, and high-performance software solutions tailored for businesses in Thane and across Mumbai."
        description="NNC's Mumbai branch is based in Thane West, Mumbai, making us one of the most accessible software development companies serving Thane, Mumbai, Andheri, Mumbai, and BKC, Mumbai. Whether you need a web application, mobile app, CRM, or custom business software, our Thane team is available for face-to-face meetings, discovery sessions, and ongoing project reviews."
        svg={softwareDevSVG}
      />

      <section id='Services' className="Services  w-full py-20 md:px-15 px-6">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center text-gray-900">
            <span className="text-[var(--primary)]"> Software Development   </span>  Services from Our <span className="text-[var(--primary)]"> Thane, Mumbai   </span>Office
          </h2>

        </div>
        <CardList cards={cardData} />
      </section>
      <section id='why-local-matters' className='bg-gradient-to-r from-[#041027] to-[#0c245a]'>
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="pt-15 text-center text-white md:px-15 px-6">Why Choosing a
            <span className="text-[var(--primary)]"> Local   </span>Thane  <span className="text-[var(--primary)]"> Software Company  </span>  Matters
          </h2>

        </div>
        <ServicesLayout servicesData={LocalBenefits} color="bg-[var(--primary)]" TextColor="white" />
      </section>
      <CaseStudyGrid />
      <Information
  backgroundImage="/software-development-company-thane-mumbai/software-devlopment.jpg"
  backgroundImageAltName="Software Development Company in Thane, Mumbai for Scalable Digital Solutions"
  title="Software Development Company in Thane, Mumbai for Scalable Digital Solutions"
  highlightText="Thane, Mumbai"
  description="Looking for a reliable software development company in Thane, Mumbai? NNC operates from Thane West, offering easy accessibility for businesses across Thane, Andheri, and BKC. From web applications and mobile apps to CRM systems and custom software, our team delivers tailored solutions with the added advantage of in-person meetings and ongoing collaboration."
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
      <section id='FAQ' className="FAQ scroll-mt-10 w-full py-15 md:px-15 px-6 ">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center">
            Frequently Asked  <span className="text-[var(--primary)]">Questions</span>
          </h2>

        </div>
        <FAQ data={faqData} qColor="bg-gradient-to-r from-[#041027] to-[var(--primary)]" qTextColor="text-white" />
      </section>
      <section id='CTA' className="CTA scroll-mt-10 w-full pb-20 pt-10 px-6 md:px-15 bg-gradient-to-r from-[#041027] to-[#0c245a]
">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center text-white">Let's
            <span className="text-[var(--primary)]"> build   </span>something great for your    <span className="text-[var(--primary)]">Mumbai  </span>business.
          </h2>

        </div>
        <MobileAppCTA />
      </section>


    </>
  )
}

export default page