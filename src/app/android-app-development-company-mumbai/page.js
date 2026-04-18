import React from 'react'
import Hero from '@/components/Hero'
import FAQ from '@/components/FAQ';
import MobileAppCTA from '@/components/android-app-development-company-mumbai/CTA';
import Process from '@/components/Step';
import CardList from '@/components/CardList';
import Testimonial from '@/components/Testimonial';
import InfiniteLogoCarousel from '@/components/BrandLogo';
import CaseStudyGrid from '@/components/CaseStudy';
import Information from '@/components/information';

const androidSVG = (
  <svg viewBox="0 0 400 300" className="w-full h-auto" fill="none">

    {/* Decorative Rings */}
    <circle cx="44" cy="234" r="22" stroke="#334155" />
    <circle cx="362" cy="68" r="26" stroke="#334155" />

    {/* Dashboard Frame */}
    <rect x="54" y="44" width="292" height="208" rx="13" fill="#0f172a" stroke="#334155"/>
    <rect x="54" y="44" width="292" height="34" rx="13" fill="#1e293b"/>

    {/* Top Dots */}
    <circle cx="76" cy="61" r="5" fill="#ef4444"/>
    <circle cx="94" cy="61" r="5" fill="#f59e0b"/>
    <circle cx="112" cy="61" r="5" fill="#22c55e"/>

    {/* Phone Body (Center) */}
    <rect
      x="160"
      y="70"
      width="80"
      height="160"
      rx="14"
      fill="#1e293b"
      stroke="#475569"
    />

    {/* Screen */}
    <rect
      x="168"
      y="90"
      width="64"
      height="120"
      rx="8"
      fill="#0f172a"
    />

    {/* Android Head (Top of screen) */}
    <rect x="185" y="95" width="30" height="18" rx="6" fill="#22c55e" opacity="0.8"/>
    <line x1="190" y1="92" x2="185" y2="80" stroke="#22c55e" strokeWidth="1.5"/>
    <line x1="210" y1="92" x2="215" y2="80" stroke="#22c55e" strokeWidth="1.5"/>
    <circle cx="195" cy="103" r="1.5" fill="#0f172a"/>
    <circle cx="205" cy="103" r="1.5" fill="#0f172a"/>

    {/* App UI Blocks */}
    <rect x="175" y="125" width="50" height="10" rx="4" fill="#334155"/>
    <rect x="175" y="140" width="45" height="10" rx="4" fill="#334155"/>
    <rect x="175" y="155" width="40" height="10" rx="4" fill="#334155"/>

    {/* CTA Button */}
    <rect
      x="175"
      y="175"
      width="50"
      height="14"
      rx="5"
      fill="#22c55e"
      opacity="0.8"
    />

    {/* Dev Connection Lines */}
    <line x1="120" y1="150" x2="160" y2="150" stroke="#475569" strokeDasharray="4 4"/>
    <line x1="240" y1="150" x2="280" y2="150" stroke="#475569" strokeDasharray="4 4"/>

    {/* Left Code Block */}
    <rect x="100" y="130" width="20" height="40" rx="4" fill="#334155"/>
    <text x="103" y="155" fill="#94a3b8" fontSize="10" fontFamily="monospace">
      {}
    </text>

    {/* Right Settings / Build */}
    <circle cx="300" cy="150" r="12" fill="#1e293b" stroke="#475569"/>
    <circle cx="300" cy="150" r="5" fill="#22c55e" opacity="0.6"/>

    {/* Floating Elements */}
    <circle cx="80" cy="250" r="18" stroke="#334155" />
    <circle cx="330" cy="250" r="20" stroke="#334155" />

  </svg>
);
const cardData = [
  {
    image: "/android-app-development-company-mumbai/Customer-Facing Service Booking Apps.png",
    heading: "Customer-Facing Service Booking Apps",
    paragraph:
      "Build intuitive service booking apps that allow customers to easily schedule appointments, manage bookings, and receive real-time notifications, improving engagement and convenience.",
  },
  {
    image: "/android-app-development-company-mumbai/On-Demand Delivery Apps.png",
    heading: "On-Demand Delivery Apps",
    paragraph:
      "Develop fast and reliable on-demand delivery apps that connect customers with nearby providers, offering features like real-time tracking, secure payments, and instant notifications.",
  },
  {
    image: "/android-app-development-company-mumbai/Healthcare Patient Apps.jpg",
    heading: "Healthcare Patient Apps",
    paragraph:
      "Create healthcare apps for patients to book appointments, access medical records, track health metrics, and communicate with doctors securely, enhancing patient care and convenience.",
  },
  {
    image: "/android-app-development-company-mumbai/Real Estate Property Search Apps.webp",
    heading: "Real Estate Property Search Apps",
    paragraph:
      "Develop apps that allow users to search, filter, and explore properties with ease, offering features like virtual tours, map-based search, and instant property updates.",
  },
  {
    image: "/android-app-development-company-mumbai/Event Management and Ticketing Apps.jpg",
    heading: "Event Management and Ticketing Apps",
    paragraph:
      "Build apps for seamless event planning, ticket booking, and attendee management, ensuring a smooth experience for organizers and participants alike.",
  },
  {
    image: "/android-app-development-company-mumbai/Learning and Ed-Tech Apps.jpg",
    heading: "Learning and Ed-Tech Apps",
    paragraph:
      "Create educational apps for online courses, interactive learning, quizzes, and progress tracking, providing a comprehensive learning experience for students and educators.",
  },
  {
    image: "/android-app-development-company-mumbai/Field Force and Logistics Apps.png",
    heading: "Field Force and Logistics Apps",
    paragraph:
      "Develop apps to manage field teams, track deliveries, optimize routes, and provide real-time updates, improving operational efficiency and productivity.",
  },
  {
    image: "android-app-development-company-mumbai/Loyalty and Rewards Apps.jpg",
    heading: "Loyalty and Rewards Apps",
    paragraph:
      "Build apps that engage users with loyalty programs, reward points, and referral benefits, boosting customer retention and brand loyalty effectively.",
  },
];

const processSteps = [
  {
    title: "Requirement Scoping and Feature List Sign-Off",
    description:
      "We gather detailed requirements and create a comprehensive feature list for your app, ensuring all stakeholders agree on the project scope before development begins.",
  },
  {
    title: "UI/UX Design and Prototype",
    description:
      "Our design team crafts intuitive user interfaces and interactive prototypes, allowing you to visualize the app experience and approve designs before development.",
  },
  {
    title: "Sprint-Based Android Development",
    description:
      "We develop your app using agile sprints, delivering incremental features, incorporating feedback, and ensuring timely progress toward project milestones.",
  },
  {
    title: "QA Testing on Multiple Android Devices",
    description:
      "Our QA team performs thorough testing across a variety of Android devices to ensure your app is responsive, stable, and delivers a flawless user experience.",
  },
  {
    title: "Play Store Account Setup and Submission",
    description:
      "We assist with creating or configuring your Play Store account, prepare all required assets, and handle the submission process for a smooth launch.",
  },
  {
    title: "Launch Support and Post-Live Monitoring",
    description:
      "After launch, we provide monitoring, performance analysis, bug fixes, and updates to ensure your app runs optimally and meets user expectations.",
  },
];
const faqData = [
  {
    question: "Do you handle Play Store submission for Mumbai clients?",
    answer:
      "Yes. We handle the full submission process including developer account setup, listing content, screenshots, and review handling.",
  },
  {
    question: "What is the cost of Android app development in Mumbai?",
    answer:
      "Simple Android apps start from Rs. 80,000. Feature-rich apps range from Rs. 2,00,000 to Rs. 10,00,000+ depending on the project scope and complexity.",
  },
];
const page = () => {
  return (
    <>
       {/* <Hero
      title="Android App Development Company in "
      highlight="Mumbai"
      
      subtext="Delivering custom, high-performance Android apps that drive growth, engagement, and innovation for businesses in Mumbai and beyond."
      description="India has 750 million Android users. If your business doesn't have an Android app, you're invisible to most of the market. NNC is a trusted Android app development company in Mumbai with 80+ apps built and live on the Play Store. From simple utility apps to complex enterprise solutions, we build Android apps that users actually stick to."
      image="/React Native App Development in Mumbai/React Native App Development in Mumbai.jpg"
      buttonText="Get Quote"
      buttonLink="#contact"
    /> */}
      <Hero
  title="Android App Development Company in "
  highlight="Mumbai"
  subtext="High-performance Android apps built for speed, scalability, and real user engagement across Mumbai’s fast-growing digital market."
  description="India has 750 million Android users. If your business doesn't have an Android app, you're invisible to most of the market. NNC is a trusted Android app development company in Mumbai with 80+ apps built and live on the Play Store, serving businesses across Andheri, Mumbai, BKC, Mumbai, and Thane, Mumbai. From simple utility apps to complex enterprise solutions, we build Android apps that users actually stick to."
  svg={androidSVG}
/>
     <section id='what-we-build' className="what-we-build  w-full py-20 md:px-15 px-6">
             <div className="max-w-6xl mx-auto  flex items-center justify-center">
     
               <h2 className="mb-10 text-center text-gray-900">
                  <span className="text-[var(--primary)]"> Android Apps  </span> We Build for     <span className="text-[var(--primary)]">Mumbai    </span>Clients
               </h2>
     
             </div>
             <CardList cards={cardData} />
           </section>

      <section id='process' className="process  w-full py-20 px-6 bg-[var(--sectioncolor)] ">
        <div className="max-w-6xl mx-auto flex items-center justify-center">

          <h2 className="mb-10 text-center text-white">Our 
            <span className="text-[var(--primary)]"> Android App  </span>Launch   <span className="text-[var(--primary)]">  Process </span>in <span className="text-[var(--primary)]"> Mumbai  </span> 

          </h2>

        </div>
        <Process processSteps={processSteps} />
      </section>
      <CaseStudyGrid />
      <Information
  backgroundImage="/android-app-development-company-mumbai/Android-App-Development.webp"
  backgroundImageAltName="Android App Development Company in Mumbai for Scalable & High-Performance Apps"
  title="Android App Development Company in Mumbai for Scalable & High-Performance Apps"
  highlightText="Mumbai"
  description="Want to reach millions of mobile users? NNC is a trusted Android app development company in Mumbai, building powerful and scalable apps for businesses of all sizes. With 80+ apps delivered across Andheri, BKC, and Thane, we create solutions ranging from simple utility apps to advanced enterprise platforms that users love and engage with."
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
         <FAQ data={faqData} qColor="bg-gradient-to-r from-[#041027] to-[var(--primary)]" qTextColor="text-white"/>
      </section>
      <section id='CTA' className="CTA  w-full pb-20 pt-10 md:px-15 px-6 bg-gradient-to-r from-[#041027] to-[#0c245a]">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center text-white">Need an 
 <span className="text-[var(--primary)]"> Android app   </span>built in    <span className="text-[var(--primary)]">Mumbai </span>?
          </h2>

        </div>
        <MobileAppCTA />
      </section>
     

    </>
  )
}

export default page