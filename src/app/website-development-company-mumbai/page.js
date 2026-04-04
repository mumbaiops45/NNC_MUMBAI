import React from 'react'
import Hero from '@/components/Hero'
import CardList from '@/components/CardList'
import CardCarouselLeftRight from '@/components/CardCarousel';
import TackStack from '@/components/TechStack';
import FAQ from '@/components/FAQ';
import CTA from '@/components/Website Development Company in Mumbai/CTA';
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
       <Hero
      title="Website Development Company in"
      highlight="Mumbai"
      subtext="Custom websites built for Mumbai businesses. React.js, Next.js, WordPress. Delivered on time. Priced fairly."
      description="Looking for a reliable website development company in Mumbai? Nakshatra Namaha Creations (NNC) has been building high-performance websites for Mumbai businesses since 2015. From startups in Andheri to enterprises in BKC, we deliver websites that load fast, rank on Google, and convert visitors into paying customers."
      image="/Website Development Company in Mumbai/hero1.jpg"
      buttonText="Get Quote"
      buttonLink="#contact"
    />
      <section id='Why_Us' className="Why_Us scroll-mt-10 w-full py-20 px-15">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center text-gray-900">
            Why <span className="text-[var(--primary)]">Mumbai </span>  Businesses Trust  <span className="text-[var(--primary)]">NNC </span>for Their Website
          </h2>

        </div>
        <CardList cards={cardData} />
      </section>
      <section id='Services' className="Services scroll-mt-10 w-full py-20 px-6 bg-gradient-to-b from-[var(--primary)]/10 to-transparent">
        <div className="max-w-6xl mx-auto flex items-center justify-center">

          <h2 className="mb-10 text-center text-gray-900">
            <span className="text-[var(--primary)]">Our</span> Website Development  <span className="text-[var(--primary)]">Services</span> in Mumbai

          </h2>

        </div>
        <CardCarouselLeftRight cards={leftSlideService} direction="left" />
        <CardCarouselLeftRight className='mt-10' cards={rightSlideService} direction="right" />
      </section>
      <section id='Tech_Stack' className="Tech_Stack scroll-mt-10 w-full py-20 px-15">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center">
            <span className="text-[var(--primary)]">Tech </span> Stack
          </h2>

        </div>
        <TackStack items={techStackData} />
      </section>
      <section id='FAQ' className="FAQ scroll-mt-10 w-full py-20 px-15 bg-gradient-to-b from-[var(--secondary)]/5 to-transparent">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center">
            Frequently Asked  <span className="text-[var(--primary)]">Questions</span>
          </h2>

        </div>
        <FAQ data={faqData} />
      </section>
      <section id='CTA' className="CTA scroll-mt-10 w-full pb-20 pt-10 px-15">
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