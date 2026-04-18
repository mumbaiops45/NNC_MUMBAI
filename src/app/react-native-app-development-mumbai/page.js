import React from 'react';
import Hero from '@/components/Hero';
import FAQ from '@/components/FAQ';
import Process from '@/components/Step';
import CardList from '@/components/CardList';
import MobileAppCTA_React_Native from '@/components/React Native App Development in Mumbai/CTA';
import Testimonial from '@/components/Testimonial';
import InfiniteLogoCarousel from '@/components/BrandLogo';
import CaseStudyGrid from '@/components/CaseStudy';
import Information from '@/components/information';
const reactNativeSVG = (
  <svg viewBox="0 0 400 300" className="w-full h-auto" fill="none">

    {/* Decorative rings */}
    <circle cx="72" cy="48" r="22" stroke="#334155" strokeWidth="1.2"/>
    <circle cx="72" cy="48" r="14" stroke="#334155" strokeWidth="0.6" strokeDasharray="3 3"/>
    <circle cx="328" cy="255" r="24" stroke="#334155" strokeWidth="1.2"/>
    <circle cx="328" cy="255" r="15" stroke="#334155" strokeWidth="0.6" strokeDasharray="3 3"/>

    {/* Dot accents */}
    <circle cx="355" cy="80" r="3" fill="#334155"/>
    <circle cx="45" cy="230" r="3" fill="#334155"/>
    <circle cx="370" cy="200" r="2" fill="#475569"/>
    <circle cx="30" cy="130" r="2" fill="#475569"/>

    {/* React atom orbits */}
    <ellipse cx="200" cy="148" rx="72" ry="26" stroke="#38bdf8" strokeWidth="1.2" opacity="0.5"/>
    <ellipse cx="200" cy="148" rx="72" ry="26" transform="rotate(60 200 148)" stroke="#38bdf8" strokeWidth="1.2" opacity="0.5"/>
    <ellipse cx="200" cy="148" rx="72" ry="26" transform="rotate(-60 200 148)" stroke="#38bdf8" strokeWidth="1.2" opacity="0.5"/>

    {/* Electron dots */}
    <circle cx="272" cy="148" r="4" fill="#38bdf8" opacity="0.8"/>
    <circle cx="164" cy="123" r="4" fill="#38bdf8" opacity="0.8"/>
    <circle cx="164" cy="173" r="4" fill="#38bdf8" opacity="0.8"/>

    {/* Core nucleus */}
    <circle cx="200" cy="148" r="13" fill="#0ea5e9" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="1.2"/>
    <circle cx="200" cy="148" r="7" fill="#38bdf8" opacity="0.7"/>

    {/* Left phone — Android */}
    <rect x="44" y="80" width="58" height="115" rx="12" fill="#1e293b" stroke="#475569" strokeWidth="1.5"/>
    <rect x="63" y="85" width="20" height="5" rx="2.5" fill="#2d3f52"/>
    <rect x="54" y="96" width="38" height="68" rx="5" fill="#0f1e2e" stroke="#2d3f52" strokeWidth="0.8"/>
    <rect x="59" y="103" width="28" height="5" rx="2" fill="#1e3a5a"/>
    <rect x="59" y="113" width="20" height="4" rx="2" fill="#1e3a5a" opacity="0.7"/>
    <rect x="59" y="121" width="24" height="4" rx="2" fill="#1e3a5a" opacity="0.5"/>
    <rect x="59" y="132" width="28" height="18" rx="3" fill="#1e3a5a"/>
    <rect x="59" y="154" width="14" height="5" rx="2" fill="#22c55e" opacity="0.6"/>
    <rect x="65" y="170" width="22" height="4" rx="2" fill="#334155"/>
    <circle cx="73" cy="186" r="5" fill="#22c55e" opacity="0.8"/>

    {/* Left dashed connector */}
    <line x1="102" y1="140" x2="130" y2="142" stroke="#475569" strokeWidth="1" strokeDasharray="4 3"/>

    {/* Right phone — iOS */}
    <rect x="298" y="80" width="58" height="115" rx="12" fill="#1e293b" stroke="#475569" strokeWidth="1.5"/>
    <rect x="312" y="85" width="22" height="6" rx="3" fill="#0f1e2e"/>
    <rect x="308" y="96" width="38" height="68" rx="5" fill="#0f1e2e" stroke="#2d3f52" strokeWidth="0.8"/>
    <rect x="313" y="103" width="28" height="5" rx="2" fill="#1e3a5a"/>
    <rect x="313" y="113" width="20" height="4" rx="2" fill="#1e3a5a" opacity="0.7"/>
    <rect x="313" y="121" width="24" height="4" rx="2" fill="#1e3a5a" opacity="0.5"/>
    <rect x="313" y="132" width="28" height="18" rx="3" fill="#1e3a5a"/>
    <rect x="313" y="154" width="14" height="5" rx="2" fill="#60a5fa" opacity="0.6"/>
    <rect x="319" y="170" width="22" height="4" rx="2" fill="#334155"/>
    <circle cx="327" cy="186" r="5" fill="#60a5fa" opacity="0.8"/>

    {/* Right dashed connector */}
    <line x1="298" y1="140" x2="270" y2="142" stroke="#475569" strokeWidth="1" strokeDasharray="4 3"/>

    {/* Mumbai location badge */}
    <rect x="158" y="228" width="84" height="26" rx="8" fill="#3b82f6" fillOpacity="0.12" stroke="#3b82f6" strokeWidth="1.1"/>
    <circle cx="172" cy="241" r="5" fill="#3b82f6" fillOpacity="0.25" stroke="#3b82f6" strokeWidth="1"/>
    <circle cx="172" cy="240" r="2.5" fill="#3b82f6"/>
    <line x1="172" y1="242" x2="172" y2="247" stroke="#3b82f6" strokeWidth="1.2" strokeLinecap="round"/>
    <text x="210" y="245" textAnchor="middle" fontSize="10" fill="#3b82f6" fontFamily="sans-serif" fontWeight="500">Mumbai</text>

    {/* Code tag */}
    <rect x="152" y="60" width="96" height="22" rx="5" fill="#1e293b" stroke="#475569" strokeWidth="0.8"/>
    <text x="200" y="75" textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="monospace">&lt;ReactNative /&gt;</text>

  </svg>
);
const cardData = [
  {
    image: "/React Native App Development in Mumbai/Development Cost.png",
    heading: "Single Codebase for Android and iOS Saves 30% to 40% in Development Cost",
    paragraph:
      "React Native allows us to use a single codebase for both Android and iOS platforms, significantly reducing development time and saving up to 30–40% in overall project cost.",
  },
  {
    image: "/React Native App Development in Mumbai/Faster Time to Market Compared to Separate Native Builds.png",
    heading: "Near-Native Performance with Fast UI Rendering",
    paragraph:
      "Our React Native apps deliver near-native performance with smooth animations and fast UI rendering, ensuring a seamless and responsive user experience.",
  },
  {
    image: "/React Native App Development in Mumbai/Time to Market Compared to Separate Native Builds.png",
    heading: "Faster Time to Market Compared to Separate Native Builds",
    paragraph:
      "By developing both platforms simultaneously, we accelerate your app launch timeline, helping you reach the market faster than traditional native development approaches.",
  },
  {
    image: "/React Native App Development in Mumbai/Easier maintenance with one shared codebase.png",
    heading: "Easier Maintenance with One Shared Codebase",
    paragraph:
      "With a unified codebase, updates, bug fixes, and feature enhancements can be implemented quickly across both platforms, reducing maintenance efforts and costs.",
  },
  {
    image: "/React Native App Development in Mumbai/Large Component Ecosystem Speeds Up Development.png",
    heading: "Large Component Ecosystem Speeds Up Development",
    paragraph:
      "React Native offers a vast ecosystem of reusable components and libraries, enabling faster development and reducing the need to build features from scratch.",
  },
  {
    image: "/React Native App Development in Mumbai/Backed by Meta's Open-Source Framework.png",
    heading: "Backed by Meta's Open-Source Framework",
    paragraph:
      "React Native is maintained by Meta and supported by a strong global developer community, ensuring long-term stability, continuous updates, and reliable performance.",
  },
];

const processSteps = [
  {
    title: "Requirement scoping and architecture design",
    description:
      "We analyze your app idea, business goals, and user requirements to define a clear project scope and design a scalable, future-ready architecture.",
  },
  {
    title: "UI/UX wireframes and design approval",
    description:
      "Our team creates intuitive wireframes and visually engaging UI designs, ensuring a seamless user experience before moving into development.",
  },
  {
    title: "Sprint-based development with regular demos",
    description:
      "We follow an agile development process, delivering features in sprints with regular demos so you can track progress and provide feedback in real-time.",
  },
  {
    title: "QA testing on real Android and iOS devices",
    description:
      "We perform rigorous testing on actual devices to ensure your app is bug-free, responsive, and performs flawlessly across platforms.",
  },
  {
    title: "App Store and Play Store submission",
    description:
      "Our team handles the complete deployment process, including preparing assets and successfully submitting your app to both the App Store and Google Play Store.",
  },
  {
    title: "Post-launch maintenance and updates",
    description:
      "We provide ongoing support, performance monitoring, and regular updates to keep your app secure, optimized, and up to date.",
  },
];
const faqData = [
  {
    question: "Is React Native good for enterprise apps?",
    answer:
      "Yes. Companies like Facebook, Instagram, and Walmart use React Native in production. It is fully capable of building scalable, secure, and enterprise-grade mobile applications.",
  },
  {
    question: "Can React Native access device features like camera and GPS?",
    answer:
      "Yes. React Native provides access to native device features such as camera, GPS, push notifications, biometrics, and more, ensuring full functionality similar to native apps.",
  },
];
const page = () => {
  return (
    <>
       {/* <Hero
      title="React Native App Development in "
      highlight="Mumbai"
      
      subtext="Empower your business with fast, cost-effective React Native app development in Mumbai , designed for performance, scalability, and user engagement."
      description="React Native lets you ship one codebase to both Android and iOS, cutting your development time and cost by up to 40%. NNC's React Native team in Mumbai has built 80+ apps across healthcare, logistics, real estate, and e-commerce verticals. One build. Two platforms. Full native performance."
      image="/React Native App Development in Mumbai/React Native App Development in Mumbai.jpg"
      buttonText="Get Quote"
      buttonLink="#contact"
    /> */}
    <Hero
  title="React Native App Development in "
  highlight="Mumbai"
  subtext="Empower your business with fast, cost-effective React Native app development in Mumbai, designed for performance, scalability, and user engagement."
  description="React Native lets you ship one codebase to both Android and iOS, cutting your development time and cost by up to 40%. NNC's React Native team in Mumbai has built 80+ apps across healthcare, logistics, real estate, and e-commerce verticals in Andheri, Mumbai, BKC, Mumbai, and Thane, Mumbai. One build. Two platforms. Full native performance."
  svg={reactNativeSVG}
/>
      
     <section id='why-react-native' className="Why_Us scroll-mt-10 w-full py-20 md:px-15 px-6">
             <div className="max-w-6xl mx-auto  flex items-center justify-center">
     
               <h2 className="mb-10 text-center text-gray-900">Why Choose 
                  <span className="text-[var(--primary)]"> React Native   </span> for Your    <span className="text-[var(--primary)]">Mumbai    </span>App Project
               </h2>
     
             </div>
             <CardList cards={cardData} />
           </section>

      <section id='Process' className="Services scroll-mt-10 w-full py-20 px-6 bg-[var(--sectioncolor)] ">
        <div className="max-w-6xl mx-auto flex items-center justify-center">

          <h2 className="mb-10 text-center text-white">How We Deliver 
            <span className="text-[var(--primary)]">  React Native </span>Apps in <span className="text-[var(--primary)]">  Mumbai </span>

          </h2>

        </div>
        <Process processSteps={processSteps} />
      </section>
      <CaseStudyGrid />
      <Information
  backgroundImage="/React Native App Development in Mumbai/React Native App Development in Mumbai.jpg"
  backgroundImageAltName="React Native app development workspace building fast and cost-effective mobile applications for businesses in Mumbai"
  title="React Native App Development in Mumbai for Faster & Cost-Effective Apps"
  highlightText="Mumbai"
  description="Looking for React Native app development in Mumbai? NNC builds high-performance Android and iOS apps using a single codebase, helping you reduce development time and cost. With experience across healthcare, logistics, real estate, and e-commerce in Andheri, BKC, and Thane, we deliver scalable apps with true native performance."
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
        <FAQ data={faqData} qColor="bg-gradient-to-r from-[#041027] to-[var(--primary)]" qTextColor="text-white"/>
      </section>
      <section id='CTA' className="CTA scroll-mt-10 w-full pb-20 pt-10 md:px-15 px-6 bg-gradient-to-r from-[#041027] to-[#0c245a]">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center text-white">Planning a 
 <span className="text-[var(--primary)]"> React Native app  </span>in     <span className="text-[var(--primary)]">Mumbai </span>?
          </h2>

        </div>
        <MobileAppCTA_React_Native />
      </section>
     

    </>
  )
}

export default page