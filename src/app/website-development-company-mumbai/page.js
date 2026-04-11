import React from 'react'
import Hero from '@/components/Hero'
import CardList from '@/components/CardList'
import CardCarouselLeftRight from '@/components/CardCarousel';
import TackStack from '@/components/TechStack';
import FAQ from '@/components/FAQ';
import CTA from '@/components/Website Development Company in Mumbai/CTA';
import Testimonial from '@/components/Testimonial';
import InfiniteLogoCarousel from '@/components/BrandLogo';
import CaseStudyGrid from '@/components/CaseStudy';

const websiteDevSVG = (
  <svg viewBox="0 0 400 300" className="w-full h-auto" fill="none">

    {/* Decorative rings */}
    <circle cx="36" cy="234" r="20" stroke="#cbd5e1" strokeWidth="1.2" />
    <circle cx="36" cy="234" r="12" stroke="#cbd5e1" strokeWidth="0.6" strokeDasharray="3 3" />
    <circle cx="366" cy="38" r="24" stroke="#cbd5e1" strokeWidth="1.2" />
    <circle cx="366" cy="38" r="15" stroke="#cbd5e1" strokeWidth="0.6" strokeDasharray="3 3" />

    {/* Dot accents */}
    <circle cx="362" cy="240" r="3" fill="#cbd5e1" />
    <circle cx="40" cy="70" r="2" fill="#e2e8f0" />
    <circle cx="374" cy="180" r="2" fill="#e2e8f0" />

    {/* Browser frame */}
    <rect x="46" y="52" width="308" height="196" rx="13" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.2" />
    <rect x="46" y="52" width="308" height="32" rx="13" fill="#f1f5f9" />
    <rect x="46" y="70" width="308" height="14" fill="#f1f5f9" />

    {/* Traffic lights */}
    <circle cx="70" cy="68" r="5" fill="#ef4444" />
    <circle cx="88" cy="68" r="5" fill="#f59e0b" />
    <circle cx="106" cy="68" r="5" fill="#22c55e" />

    {/* URL bar */}
    <rect x="120" y="59" width="176" height="18" rx="5" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="0.7" />
    <rect x="128" y="65" width="80" height="4" rx="2" fill="#94a3b8" />
    <rect x="214" y="65" width="28" height="4" rx="2" fill="#94a3b8" opacity="0.4" />
    <circle cx="288" cy="68" r="4" fill="#cbd5e1" />

    {/* Sidebar */}
    <rect x="56" y="86" width="64" height="148" rx="7" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="0.8" />
    <rect x="64" y="94" width="48" height="16" rx="4" fill="#e2e8f0" />
    <circle cx="73" cy="102" r="4" fill="#38bdf8" opacity="0.7" />
    <rect x="81" y="99" width="24" height="4" rx="2" fill="#94a3b8" />
    <rect x="81" y="105" width="16" height="3" rx="1.5" fill="#94a3b8" opacity="0.5" />

    {/* Nav items */}
    <rect x="64" y="118" width="48" height="8" rx="3" fill="#38bdf8" fillOpacity="0.15" stroke="#38bdf8" strokeWidth="0.6" />
    <rect x="68" y="121" width="28" height="3" rx="1.5" fill="#0ea5e9" />
    <rect x="64" y="132" width="48" height="8" rx="3" fill="#f1f5f9" />
    <rect x="68" y="135" width="22" height="3" rx="1.5" fill="#94a3b8" />
    <rect x="64" y="146" width="48" height="8" rx="3" fill="#f1f5f9" />
    <rect x="68" y="149" width="30" height="3" rx="1.5" fill="#94a3b8" />
    <rect x="64" y="160" width="48" height="8" rx="3" fill="#f1f5f9" />
    <rect x="68" y="163" width="18" height="3" rx="1.5" fill="#94a3b8" />
    <rect x="64" y="174" width="48" height="8" rx="3" fill="#f1f5f9" />
    <rect x="68" y="177" width="26" height="3" rx="1.5" fill="#94a3b8" />

    {/* Sidebar avatar */}
    <circle cx="80" cy="218" r="10" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="0.8" />
    <circle cx="80" cy="215" r="4" fill="#94a3b8" />
    <path d="M71 224 Q80 220 89 224" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" fill="none" />

    {/* Main header */}
    <rect x="130" y="86" width="214" height="20" rx="5" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="0.7" />
    <rect x="138" y="93" width="60" height="5" rx="2" fill="#38bdf8" opacity="0.6" />
    <rect x="300" y="89" width="36" height="14" rx="4" fill="#22c55e" fillOpacity="0.15" stroke="#22c55e" strokeWidth="0.7" />
    <rect x="306" y="93" width="24" height="4" rx="2" fill="#22c55e" opacity="0.7" />

    {/* Hero banner */}
    <rect x="130" y="112" width="214" height="56" rx="8" fill="#f0f9ff" stroke="#bae6fd" strokeWidth="0.8" />
    <circle cx="164" cy="140" r="20" fill="#e0f2fe" stroke="#7dd3fc" strokeWidth="0.7" />
    <circle cx="164" cy="140" r="11" fill="#bae6fd" />
    <circle cx="164" cy="140" r="5" fill="#38bdf8" opacity="0.8" />
    <rect x="194" y="120" width="96" height="7" rx="3" fill="#bae6fd" />
    <rect x="194" y="132" width="72" height="5" rx="2" fill="#bae6fd" opacity="0.7" />
    <rect x="194" y="142" width="54" height="5" rx="2" fill="#bae6fd" opacity="0.5" />
    <rect x="194" y="153" width="42" height="10" rx="4" fill="#38bdf8" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="0.7" />
    <rect x="199" y="156" width="26" height="4" rx="2" fill="#0ea5e9" opacity="0.7" />

    {/* Three content cards */}
    <rect x="130" y="174" width="64" height="48" rx="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="0.8" />
    <rect x="138" y="182" width="48" height="16" rx="4" fill="#e2e8f0" />
    <rect x="138" y="202" width="38" height="4" rx="2" fill="#94a3b8" />
    <rect x="138" y="209" width="28" height="4" rx="2" fill="#94a3b8" opacity="0.5" />

    <rect x="203" y="174" width="64" height="48" rx="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="0.8" />
    <rect x="211" y="182" width="48" height="16" rx="4" fill="#e2e8f0" />
    <rect x="211" y="202" width="38" height="4" rx="2" fill="#94a3b8" />
    <rect x="211" y="209" width="28" height="4" rx="2" fill="#94a3b8" opacity="0.5" />

    <rect x="276" y="174" width="64" height="48" rx="6" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="0.8" />
    <rect x="284" y="182" width="48" height="16" rx="4" fill="#e2e8f0" />
    <rect x="284" y="202" width="38" height="4" rx="2" fill="#94a3b8" />
    <rect x="284" y="209" width="28" height="4" rx="2" fill="#94a3b8" opacity="0.5" />

    {/* Design cursor */}
    <path d="M254 124 L250 152 L259 146 L265 162 L271 158 L265 142 L276 142 Z"
      stroke="#475569" strokeWidth="1.3" strokeLinejoin="round"
      fill="#ffffff" fillOpacity="0.7" />

    {/* Mumbai badge */}
    <rect x="140" y="264" width="90" height="24" rx="8" fill="#3b82f6" fillOpacity="0.1" stroke="#3b82f6" strokeWidth="1.1" />
    <circle cx="156" cy="276" r="5" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="1" />
    <circle cx="156" cy="275" r="2.5" fill="#3b82f6" />
    <line x1="156" y1="277" x2="156" y2="282" stroke="#3b82f6" strokeWidth="1.2" strokeLinecap="round" />
    <text x="198" y="280" textAnchor="middle" fontSize="10" fill="#3b82f6" fontFamily="sans-serif" fontWeight="500">Mumbai</text>

  </svg>
);
const cardData = [
  {
    image: "/Website Development Company in Mumbai/10+ years.webp",
    heading: "10+ Years of Proven Web Development Experience",
    paragraph:
      "With over a decade of hands-on experience, we have successfully built high-performing, scalable, and visually engaging websites tailored to diverse industries and business needs.",
  },
  {
    image: "/Website Development Company in Mumbai/websites delivered.png",
    heading: "565+ Websites Delivered Across India",
    paragraph:
      "From startups to established enterprises, we have delivered 565+ custom websites across India, ensuring quality, performance, and client satisfaction in every project.",
  },
  {
    image: "/Website Development Company in Mumbai/In-house team of 35+ developers and designers.png",
    heading: "In-House Team of 35+ Expert Developers & Designers",
    paragraph:
      "Our skilled in-house team collaborates closely to design, develop, and optimize websites that are modern, responsive, and aligned with your business goals.",
  },
  {
    image: "/Website Development Company in Mumbai/local client meetings.png",
    heading: "Mumbai Office in Thane West for Easy Client Meetings",
    paragraph:
      "We offer the advantage of local presence in Thane West, Mumbai, enabling smooth communication, face-to-face meetings, and better project collaboration.",
  },
  {
    image: "/Website Development Company in Mumbai/frontend, backend.webp",
    heading: "Complete Full-Stack Development Solutions",
    paragraph:
      "From frontend UI/UX design to backend development, database management, and secure hosting — we provide end-to-end web solutions under one roof.",
  },
  {
    image: "/Website Development Company in Mumbai/Post-launch support.png",
    heading: "Reliable Post-Launch Support & Maintenance",
    paragraph:
      "Our support doesn’t end at launch. We provide ongoing maintenance, updates, security monitoring, and technical assistance to keep your website running flawlessly.",
  },
];
const leftSlideService = [
  {
    image: "/Website Development Company in Mumbai/Corporate Websites.png",
    heading: "Corporate Websites",
    paragraph:
      "Professional corporate websites designed to build credibility, showcase your brand identity, and communicate your business values effectively to clients and stakeholders.",
  },
  {
    image: "/Website Development Company in Mumbai/E-commerce Development.png",
    heading: "E-commerce Development",
    paragraph:
      "Scalable and secure e-commerce websites with seamless user experience, payment gateway integration, and optimized performance to boost your online sales.",
  },
  {
    image: "/Website Development Company in Mumbai/Real Estate Portals.png",
    heading: "Real Estate Portals",
    paragraph:
      "Feature-rich real estate websites with advanced property listings, search filters, and lead generation tools tailored for builders, brokers, and agencies.",
  },
  {
    image: "/Website Development Company in Mumbai/Healthcare Websites.png",
    heading: "Healthcare Websites",
    paragraph:
      "Modern healthcare websites with appointment booking, patient-friendly UI, and secure data handling, designed for hospitals, clinics, and medical professionals.",
  },
];
const rightSlideService = [
  {
    image: "/Website Development Company in Mumbai/Landing Page Design.png",
    heading: "Landing Page Design",
    paragraph:
      "High-converting landing pages designed to capture leads, drive actions, and maximize ROI through clear messaging, strong visuals, and optimized user experience.",
  },
  {
    image: "/Website Development Company in Mumbai/WordPress.png",
    heading: "WordPress & CMS Development",
    paragraph:
      "Flexible and easy-to-manage websites built on WordPress and other CMS platforms, allowing you to update content effortlessly without technical expertise.",
  },
  {
    image: "/Website Development Company in Mumbai/Custom Web Applications.png",
    heading: "Custom Web Applications",
    paragraph:
      "Tailor-made web applications built to solve complex business challenges, improve workflows, and deliver scalable digital solutions for your business growth.",
  },
  {
    image: "/Website Development Company in Mumbai/Website Redesign.png",
    heading: "Website Redesign",
    paragraph:
      "Transform your outdated website into a modern, fast, and user-friendly platform that enhances brand perception and improves engagement and conversions.",
  },
];
const techStackData = [
  {
    image: "/Website Development Company in Mumbai/React.svg",
    heading: "React.js",
  },
  {
    image: "/Website Development Company in Mumbai/Next.png",
    heading: "Next.js",
  },
  {
    image: "/Website Development Company in Mumbai/Node.svg",
    heading: "Node.js",
  },
  {
    image: "/Website Development Company in Mumbai/MongoDB.svg",
    heading: "MongoDB",
  },
  {
    image: "/Website Development Company in Mumbai/AWS.png",
    heading: "AWS",
  },
  {
    image: "/Website Development Company in Mumbai/Cloudflare.svg",
    heading: "Cloudflare",
  },
  {
    image: "/Website Development Company in Mumbai/WordPress1.png",
    heading: "WordPress",
  },
];
const faqData = [
  {
    question: "How long does it take to build a website in Mumbai?",
    answer:
      "A standard business website takes 3 to 4 weeks. E-commerce and custom portals take 6 to 12 weeks depending on scope.",
  },
  {
    question: "What is the cost of website development in Mumbai?",
    answer:
      "Basic websites start from Rs. 24,999. Custom applications and portals are quoted based on scope.",
  },
  {
    question: "Do you provide website maintenance after launch?",
    answer:
      "Yes. We offer annual maintenance contracts covering security, updates, speed, and backups.",
  },
];

const page = () => {
  return (
    <>
      {/* <Hero
      title="Website Development Company in"
      highlight="Mumbai"
      subtext="Custom websites built for Mumbai businesses. React.js, Next.js, WordPress. Delivered on time. Priced fairly."
      description="Looking for a reliable website development company in Mumbai? Nakshatra Namaha Creations (NNC) has been building high-performance websites for Mumbai businesses since 2015. From startups in Andheri to enterprises in BKC, we deliver websites that load fast, rank on Google, and convert visitors into paying customers."
      image="/Website Development Company in Mumbai/hero1.jpg"
      buttonText="Get Quote"
      buttonLink="#contact"
    /> */}
      <Hero
        title="Website Development Company in "
        highlight="Mumbai"
        subtext="Custom websites built for Mumbai businesses. React.js, Next.js, WordPress. Delivered on time. Priced fairly."
        description="Looking for a reliable website development company in Mumbai? Nakshatra Namaha Creations (NNC) has been building high-performance websites for Mumbai businesses since 2015. From startups in Andheri, Mumbai to enterprises in BKC, Mumbai and growing businesses in Thane, Mumbai, we deliver websites that load fast, rank on Google, and convert visitors into paying customers."
        svg={websiteDevSVG}
      />
      <section id='Why_Us' className="Why_Us  w-full py-20 md:px-15 px-6">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center text-gray-900">
            Why <span className="text-[var(--primary)]">Mumbai </span>  Businesses Trust  <span className="text-[var(--primary)]">NNC </span>for Their Website
          </h2>

        </div>
        <CardList cards={cardData} />
      </section>
      <section id='Services' className="Services  w-full py-20 px-6 bg-[var(--sectioncolor)]">
        <div className="max-w-6xl mx-auto flex items-center justify-center">

          <h2 className="mb-10 text-center text-white">
            <span className="text-[var(--primary)]">Our</span> Website Development  <span className="text-[var(--primary)]">Services</span> in Mumbai

          </h2>

        </div>
        <CardCarouselLeftRight cards={leftSlideService} direction="left" />
        <CardCarouselLeftRight className='mt-10' cards={rightSlideService} direction="right" />
      </section>
      <CaseStudyGrid />
      <section id='Tech_Stack' className="Tech_Stack  w-full py-20 md:px-15 px-6">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center">
            <span className="text-[var(--primary)]">Tech </span> Stack
          </h2>

        </div>
        <TackStack items={techStackData} />
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
  <InfiniteLogoCarousel />
      <section id='FAQ' className="FAQ  w-full py-20 md:px-15 px-6 bg-gradient-to-r from-[#041027] to-[#0c245a]">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center text-white">
            Frequently Asked  <span className="text-[var(--primary)]">Questions</span>
          </h2>

        </div>
        <FAQ data={faqData} qColor="bg-white/85" />
      </section>
      <section id='CTA' className="CTA  w-full pb-20 pt-10 md:px-15 px-6">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center">
            Ready to  <span className="text-[var(--primary)]">launch  </span>your new website in <span className="text-[var(--primary)]"> Mumbai </span>?
          </h2>

        </div>
        <CTA />
      </section>


    </>
  )
}

export default page