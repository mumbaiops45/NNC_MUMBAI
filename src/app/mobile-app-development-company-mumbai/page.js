import React from 'react'
import Hero from '@/components/Hero'
import CardList from '@/components/CardList'
import CardCarouselLeftRight from '@/components/CardCarousel';
import FAQ from '@/components/FAQ';
import MobileAppCTA from '@/components/Mobile App Development Company in Mumbai/CTA';
import Testimonial from '@/components/Testimonial';
import InfiniteLogoCarousel from '@/components/BrandLogo';
import CaseStudyGrid from '@/components/CaseStudy';
const mobileAppSVG = (
  <svg viewBox="0 0 400 300" className="w-full h-auto" fill="none">

    {/* Decorative rings */}
    <circle cx="62" cy="88" r="28" stroke="#334155" strokeWidth="1.2"/>
    <circle cx="62" cy="88" r="18" stroke="#334155" strokeWidth="0.6" strokeDasharray="3 3"/>
    <circle cx="338" cy="212" r="32" stroke="#334155" strokeWidth="1.2"/>
    <circle cx="338" cy="212" r="21" stroke="#334155" strokeWidth="0.6" strokeDasharray="3 3"/>

    {/* Dot accents */}
    <circle cx="355" cy="68" r="3" fill="#334155"/>
    <circle cx="44" cy="240" r="3" fill="#334155"/>
    <circle cx="370" cy="140" r="2" fill="#475569"/>
    <circle cx="32" cy="170" r="2" fill="#475569"/>

    {/* Phone shell */}
    <rect x="138" y="28" width="124" height="244" rx="22" fill="#0f1e2e" stroke="#475569" strokeWidth="1.8"/>
    <rect x="144" y="34" width="112" height="232" rx="18" fill="#0a1628" stroke="#1e3a5a" strokeWidth="0.8"/>

    {/* Dynamic island */}
    <rect x="178" y="42" width="44" height="12" rx="6" fill="#060e1a"/>
    <circle cx="186" cy="48" r="3" fill="#1a2a3a"/>
    <circle cx="214" cy="48" r="2" fill="#1e3a5a" opacity="0.6"/>

    {/* Status bar */}
    <rect x="152" y="58" width="16" height="4" rx="1.5" fill="#334155"/>
    <rect x="170" y="58" width="10" height="4" rx="1.5" fill="#334155" opacity="0.5"/>
    <rect x="224" y="57" width="18" height="6" rx="2" fill="none" stroke="#475569" strokeWidth="0.8"/>
    <rect x="242" y="59" width="2" height="2" rx="1" fill="#475569"/>
    <rect x="225" y="58" width="12" height="4" rx="1.5" fill="#22c55e" opacity="0.7"/>
    <circle cx="218" cy="60" r="1.5" fill="#475569"/>
    <circle cx="213" cy="60" r="1.5" fill="#475569" opacity="0.6"/>
    <circle cx="208" cy="60" r="1.5" fill="#475569" opacity="0.3"/>

    {/* Screen */}
    <rect x="152" y="66" width="96" height="178" rx="8" fill="#0d1d30"/>

    {/* Grid lines */}
    <line x1="152" y1="90" x2="248" y2="90" stroke="#0f2040" strokeWidth="0.6"/>
    <line x1="152" y1="120" x2="248" y2="120" stroke="#0f2040" strokeWidth="0.6"/>
    <line x1="152" y1="150" x2="248" y2="150" stroke="#0f2040" strokeWidth="0.6"/>
    <line x1="152" y1="180" x2="248" y2="180" stroke="#0f2040" strokeWidth="0.6"/>
    <line x1="184" y1="66" x2="184" y2="244" stroke="#0f2040" strokeWidth="0.6"/>
    <line x1="216" y1="66" x2="216" y2="244" stroke="#0f2040" strokeWidth="0.6"/>

    {/* App icons row 1 */}
    <rect x="158" y="74" width="24" height="24" rx="6" fill="#1e40af" fillOpacity="0.8" stroke="#3b82f6" strokeWidth="0.6"/>
    <rect x="163" y="81" width="14" height="3" rx="1.5" fill="#60a5fa" opacity="0.8"/>
    <rect x="163" y="87" width="10" height="3" rx="1.5" fill="#60a5fa" opacity="0.5"/>
    <rect x="190" y="74" width="24" height="24" rx="6" fill="#065f46" fillOpacity="0.8" stroke="#34d399" strokeWidth="0.6"/>
    <rect x="195" y="81" width="14" height="3" rx="1.5" fill="#34d399" opacity="0.8"/>
    <rect x="195" y="87" width="10" height="3" rx="1.5" fill="#34d399" opacity="0.5"/>
    <rect x="222" y="74" width="24" height="24" rx="6" fill="#7c3aed" fillOpacity="0.8" stroke="#a78bfa" strokeWidth="0.6"/>
    <rect x="227" y="81" width="14" height="3" rx="1.5" fill="#a78bfa" opacity="0.8"/>
    <rect x="227" y="87" width="10" height="3" rx="1.5" fill="#a78bfa" opacity="0.5"/>

    {/* App icons row 2 */}
    <rect x="158" y="104" width="24" height="24" rx="6" fill="#92400e" fillOpacity="0.8" stroke="#fbbf24" strokeWidth="0.6"/>
    <rect x="163" y="111" width="14" height="3" rx="1.5" fill="#fbbf24" opacity="0.8"/>
    <rect x="163" y="117" width="10" height="3" rx="1.5" fill="#fbbf24" opacity="0.5"/>
    <rect x="190" y="104" width="24" height="24" rx="6" fill="#991b1b" fillOpacity="0.8" stroke="#f87171" strokeWidth="0.6"/>
    <rect x="195" y="111" width="14" height="3" rx="1.5" fill="#f87171" opacity="0.8"/>
    <rect x="195" y="117" width="10" height="3" rx="1.5" fill="#f87171" opacity="0.5"/>
    <rect x="222" y="104" width="24" height="24" rx="6" fill="#0e4a6e" fillOpacity="0.8" stroke="#38bdf8" strokeWidth="0.6"/>
    <rect x="227" y="111" width="14" height="3" rx="1.5" fill="#38bdf8" opacity="0.8"/>
    <rect x="227" y="117" width="10" height="3" rx="1.5" fill="#38bdf8" opacity="0.5"/>

    {/* Widget card */}
    <rect x="158" y="134" width="88" height="40" rx="7" fill="#142135" stroke="#2d4a6a" strokeWidth="0.8"/>
    <rect x="164" y="142" width="50" height="5" rx="2" fill="#38bdf8" opacity="0.4"/>
    <rect x="164" y="151" width="36" height="4" rx="2" fill="#334155"/>
    <rect x="218" y="140" width="22" height="14" rx="4" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="0.6"/>
    <rect x="221" y="144" width="16" height="3" rx="1.5" fill="#22c55e" opacity="0.6"/>
    <rect x="221" y="149" width="10" height="3" rx="1.5" fill="#22c55e" opacity="0.4"/>

    {/* Content row */}
    <rect x="158" y="180" width="88" height="32" rx="6" fill="#0f2540" stroke="#1e4a7a" strokeWidth="0.8"/>
    <rect x="164" y="187" width="60" height="5" rx="2" fill="#1e4a7a"/>
    <rect x="164" y="196" width="44" height="4" rx="2" fill="#1e4a7a" opacity="0.6"/>
    <rect x="164" y="203" width="52" height="4" rx="2" fill="#1e4a7a" opacity="0.4"/>

    {/* Bottom nav */}
    <rect x="152" y="218" width="96" height="26" fill="#0a1628"/>
    <rect x="152" y="218" width="96" height="1" fill="#1e3a5a"/>
    <circle cx="170" cy="231" r="4" fill="#38bdf8" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="0.7"/>
    <circle cx="170" cy="231" r="2" fill="#38bdf8" opacity="0.7"/>
    <rect x="194" y="227" width="12" height="8" rx="2" fill="#334155"/>
    <rect x="218" y="228" width="12" height="3" rx="1.5" fill="#334155"/>
    <rect x="218" y="233" width="8" height="3" rx="1.5" fill="#334155" opacity="0.5"/>
    <circle cx="238" cy="231" r="4" fill="#334155" opacity="0.6"/>

    {/* Home indicator */}
    <rect x="184" y="248" width="32" height="4" rx="2" fill="#334155"/>

    {/* Signal arcs */}
    <path d="M306 56 Q320 42 334 56" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
    <path d="M300 48 Q320 28 340 48" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" opacity="0.35"/>
    <path d="M294 40 Q320 14 346 40" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" opacity="0.2"/>
    <circle cx="320" cy="62" r="2.5" fill="#94a3b8" opacity="0.5"/>

    {/* Mumbai badge */}
    <rect x="145" y="278" width="90" height="24" rx="8" fill="#3b82f6" fillOpacity="0.12" stroke="#3b82f6" strokeWidth="1.1"/>
    <circle cx="161" cy="290" r="5" fill="#3b82f6" fillOpacity="0.25" stroke="#3b82f6" strokeWidth="1"/>
    <circle cx="161" cy="289" r="2.5" fill="#3b82f6"/>
    <line x1="161" y1="291" x2="161" y2="296" stroke="#3b82f6" strokeWidth="1.2" strokeLinecap="round"/>
    <text x="203" y="294" textAnchor="middle" fontSize="10" fill="#3b82f6" fontFamily="sans-serif" fontWeight="500">Mumbai</text>

  </svg>
);
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
    image: "/Mobile App Development Company in Mumbai/Android App Development.png",
    heading: "Android App Development",
    paragraph:
      "Build high-performance Android applications tailored to your business needs, ensuring smooth functionality, scalability, and a seamless user experience across all Android devices.",
  },
  {
    image: "/Mobile App Development Company in Mumbai/iOS App.svg",
    heading: "iOS App Development",
    paragraph:
      "Develop premium iOS applications with intuitive design, robust performance, and seamless integration, delivering an exceptional user experience for iPhone and iPad users.",
  },
  {
    image: "/Mobile App Development Company in Mumbai/React Native Cross-Platform Apps.svg",
    heading: "React Native Cross-Platform Apps",
    paragraph:
      "Create cross-platform mobile applications using React Native, enabling faster development, cost efficiency, and consistent performance across both Android and iOS platforms.",
  },
  {
    image: "/Mobile App Development Company in Mumbai/Healthcare Mobile Apps.webp",
    heading: "Healthcare Mobile Apps",
    paragraph:
      "Design and develop secure, user-friendly healthcare mobile applications with features like appointment booking, telemedicine, and patient management systems for improved care delivery.",
  },
];
const rightSlideService = [
  {
    image: "/Mobile App Development Company in Mumbai/E-commerce Mobile Apps.png",
    heading: "E-commerce Mobile Apps",
    paragraph:
      "Develop feature-rich e-commerce mobile applications with seamless product browsing, secure payment gateways, and user-friendly interfaces to enhance customer engagement and drive online sales.",
  },
  {
    image: "/Mobile App Development Company in Mumbai/CRM Mobile Apps.webp",
    heading: "CRM Mobile Apps",
    paragraph:
      "Build powerful CRM mobile applications that help businesses manage customer relationships, track interactions, and streamline sales processes for improved productivity and growth.",
  },
  {
    image: "/Mobile App Development Company in Mumbai/Booking and Scheduling Apps.webp",
    heading: "Booking and Scheduling Apps",
    paragraph:
      "Create intuitive booking and scheduling mobile apps with real-time availability, automated reminders, and easy appointment management for businesses and service providers.",
  },
  {
    image: "/Mobile App Development Company in Mumbai/Admin Dashboard Apps.webp",
    heading: "Admin Dashboard Apps",
    paragraph:
      "Design and develop robust admin dashboard applications that provide complete control over data, analytics, user management, and operations through a clean and efficient interface.",
  },
];

const faqData = [
  {
    question: "How much does mobile app development cost in Mumbai?",
    answer: "A standard app starts from Rs. 1,00,000. Complex multi-feature apps range from Rs. 3,00,000 to Rs. 15,00,000+.",
  },
  {
    question: "Do you handle Play Store and App Store submission?",
    answer: "Yes. We handle the full submission process including screenshots, descriptions, and compliance checks.",
  },
  {
    question: "What is your app development timeline in Mumbai?",
    answer: "Phase 1 of most apps is delivered within 45 to 60 days.",
  },
];
const page = () => {
  return (
    <>
      {/* <Hero
      title="Mobile App Development Company in"
      highlight="Mumbai"
      description="NNC is a trusted mobile app development company in Mumbai with a proven track record of building Android and iOS apps for startups, SMEs, and large enterprises. We develop apps using React Native for cross-platform delivery, keeping your timeline short and your budget in check."
      subtext="Android apps. iOS apps. Cross-platform builds. Built by a Mumbai team that has delivered 80+ apps."
      image="/Mobile App Development Company in Mumbai/hero.webp"
      buttonText="Get Quote"
      buttonLink="#contact"
    /> */}
      <Hero
        title="Mobile App Development Company in "
        highlight="Mumbai"
        subtext="Android apps. iOS apps. Cross-platform builds. Built by a Mumbai team that has delivered 80+ apps."
        description="NNC is a trusted mobile app development company in Mumbai with a proven track record of building Android and iOS apps for startups, SMEs, and large enterprises across Andheri, Mumbai, BKC, Mumbai, and Thane, Mumbai. We develop apps using React Native for cross-platform delivery, keeping your timeline short and your budget in check."
        svg={mobileAppSVG}
      />
      <section id='Why_Us' className="Why_Us scroll-mt-10 w-full py-20 md:px-15 px-6">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center text-gray-900">
            Why Choose  <span className="text-[var(--primary)]">NNC  </span>for Mobile App Development in   <span className="text-[var(--primary)]">Mumbai   </span>Businesses Trust
          </h2>

        </div>
        <CardList cards={cardData} />
      </section>
      <section id='Services' className="Services scroll-mt-10 w-full py-20 px-6 bg-[var(--sectioncolor)]">
        <div className="max-w-6xl mx-auto flex items-center justify-center">

          <h2 className="mb-10 text-center text-white">
            <span className="text-[var(--primary)]">Mobile App </span>  Development <span className="text-[var(--primary)]">Services  </span> We Offer

          </h2>

        </div>
        <CardCarouselLeftRight cards={leftSlideService} direction="left" />
        <CardCarouselLeftRight className='mt-10' cards={rightSlideService} direction="right" />
      </section>
      <CaseStudyGrid />
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
      <section id='CTA' className="CTA s w-full pb-20 pt-10 md:px-15 px-6 bg-gradient-to-r from-[#041027] to-[#0c245a]">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center text-white">
            Want a   <span className="text-[var(--primary)]">mobile app  </span>built in   <span className="text-[var(--primary)]">Mumbai? </span>?
          </h2>

        </div>
        <MobileAppCTA />
      </section>


    </>
  )
}

export default page