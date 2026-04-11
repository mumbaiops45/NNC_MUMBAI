import React from 'react'
import Hero from '@/components/Hero'
import CardCarouselLeftRight from '@/components/CardCarousel';
import FAQ from '@/components/FAQ';
import CTA from '@/components/website-redesign-services-mumbai/CTA';
import Process from '@/components/Step';
import CardList from '@/components/CardList';
import ServicesLayout from '@/components/ClickCard';
import Testimonial from '@/components/Testimonial';
import InfiniteLogoCarousel from '@/components/BrandLogo';
import CaseStudyGrid from '@/components/CaseStudy';
const redesignSVG = (
  <svg viewBox="0 0 400 300" className="w-full h-auto" fill="none">

    {/* Decorative rings */}
    <circle cx="44" cy="234" r="22" stroke="#334155" strokeWidth="1.2"/>
    <circle cx="362" cy="68" r="26" stroke="#334155" strokeWidth="1.2"/>

    {/* Dashboard Frame */}
    <rect x="54" y="44" width="292" height="208" rx="13" fill="#0f172a" stroke="#334155"/>
    <rect x="54" y="44" width="292" height="34" rx="13" fill="#1e293b"/>

    {/* Top Dots */}
    <circle cx="76" cy="61" r="5" fill="#ef4444"/>
    <circle cx="94" cy="61" r="5" fill="#f59e0b"/>
    <circle cx="112" cy="61" r="5" fill="#22c55e"/>

    {/* OLD UI (Left Side - faded) */}
    <rect x="70" y="90" width="100" height="130" rx="10" fill="#1e293b" stroke="#334155"/>
    <rect x="80" y="105" width="80" height="8" rx="3" fill="#475569"/>
    <rect x="80" y="120" width="60" height="8" rx="3" fill="#475569"/>
    <rect x="80" y="135" width="70" height="8" rx="3" fill="#475569"/>

    {/* Broken / messy indicator */}
    <line x1="80" y1="160" x2="150" y2="180" stroke="#ef4444" strokeDasharray="4 4"/>
    <line x1="80" y1="180" x2="150" y2="160" stroke="#ef4444" strokeDasharray="4 4"/>

    {/* Transformation Arrow */}
    <line x1="180" y1="150" x2="230" y2="150" stroke="#64748b" strokeWidth="2"/>
    <polyline points="220,140 230,150 220,160" stroke="#64748b" strokeWidth="2" fill="none"/>

    {/* NEW UI (Right Side - clean) */}
    <rect x="240" y="80" width="90" height="140" rx="12" fill="#1e293b" stroke="#475569"/>

    {/* Clean Layout */}
    <rect x="255" y="100" width="60" height="30" rx="6" fill="#334155"/>
    <rect x="255" y="140" width="70" height="10" rx="4" fill="#475569"/>
    <rect x="255" y="160" width="50" height="10" rx="4" fill="#475569"/>

    {/* Improvement Highlight */}
    <circle cx="310" cy="90" r="10" fill="#22c55e" opacity="0.7"/>
    <polyline points="305,90 309,94 316,86" stroke="#0f172a" strokeWidth="2" fill="none"/>

    {/* Subtle Glow Line */}
    <polyline
      points="240,200 260,185 280,190 300,170"
      stroke="#38bdf8"
      strokeOpacity="0.4"
      strokeWidth="2"
      fill="none"
    />

    {/* Floating Elements */}
    <circle cx="80" cy="250" r="18" stroke="#334155" />
    <circle cx="330" cy="250" r="20" stroke="#334155" />

  </svg>
);

const servicesData = [
  {
    id: "01",
    title: "Page speed optimisation to under 2 seconds",
    items: [
      {
        name: "Page speed optimisation to under 2 seconds",
        img: "/website-redesign-services-mumbai/Page speed optimisation to under 2 seconds.png",
        heading: "Page speed optimisation to under 2 seconds",
        discription:
          "We optimize your website performance to achieve loading times under 2 seconds, improving user experience, reducing bounce rates, and boosting search engine rankings.",
      },
    ],
  },
  {
    id: "02",
    title: "Mobile-first responsive redesign",
    items: [
      {
        name: "Mobile-first responsive redesign",
        img: "/website-redesign-services-mumbai/Mobile-first responsive redesign.png",
        heading: "Mobile-first responsive redesign",
        discription:
          "We redesign your website with a mobile-first approach, ensuring seamless performance and a consistent experience across all devices including smartphones, tablets, and desktops.",
      },
    ],
  },
  {
    id: "03",
    title: "SEO structure preservation during migration",
    items: [
      {
        name: "SEO structure preservation during migration",
        img: "/website-redesign-services-mumbai/SEO structure preservation during migration.png",
        heading: "SEO structure preservation during migration",
        discription:
          "We ensure your existing SEO rankings are protected during website migration by maintaining URL structures, metadata, and implementing proper redirects.",
      },
    ],
  },
  {
    id: "04",
    title: "Modern UI with updated brand elements",
    items: [
      {
        name: "Modern UI with updated brand elements",
        img: "/website-redesign-services-mumbai/Modern UI with updated brand elements.png",
        heading: "Modern UI with updated brand elements",
        discription:
          "We create visually appealing and modern user interfaces aligned with your brand identity to enhance engagement and build trust with your audience.",
      },
    ],
  },
  {
    id: "05",
    title: "Proper contact forms and lead capture",
    items: [
      {
        name: "Proper contact forms and lead capture",
        img: "/website-redesign-services-mumbai/Proper contact forms and lead capture.png",
        heading: "Proper contact forms and lead capture",
        discription:
          "We implement optimized contact forms and lead capture systems to convert visitors into potential customers efficiently.",
      },
    ],
  },
  {
    id: "06",
    title: "Google Analytics and Search Console setup",
    items: [
      {
        name: "Google Analytics and Search Console setup",
        img: "/website-redesign-services-mumbai/Google Analytics and Search Console setup.png",
        heading: "Google Analytics and Search Console setup",
        discription:
          "We integrate Google Analytics and Search Console to track performance, monitor traffic, and gain actionable insights for business growth.",
      },
    ],
  },
  {
    id: "07",
    title: "Clear navigation and user flow",
    items: [
      {
        name: "Clear navigation and user flow",
        img: "/website-redesign-services-mumbai/clear_navigation_user_flow.png",
        heading: "Clear navigation and user flow",
        discription:
          "We design intuitive navigation and user flow to help visitors easily find information and complete desired actions, improving overall usability.",
      },
    ],
  },
];

const cardData = [
  {
    image: "/website-redesign-services-mumbai/loding.webp",
    heading: "Website takes more than 3 seconds to load",
    paragraph:
      "A slow website frustrates users and increases bounce rates. We optimize performance, compress images, and streamline code to ensure your site loads in under 3 seconds.",
  },
  {
    image: "/website-redesign-services-mumbai/Looks broken or cluttered on mobile screens.jpg",
    heading: "Looks broken or cluttered on mobile screens",
    paragraph:
      "Mobile users expect a smooth, responsive experience. We redesign websites to adapt seamlessly across devices, providing a clean, easy-to-navigate interface for every screen size.",
  },
  {
    image: "/website-redesign-services-mumbai/No clear call-to-action on any page.png",
    heading: "No clear call-to-action on any page",
    paragraph:
      "Without visible and compelling CTAs, visitors may leave without taking action. We craft strategic CTAs that guide users to contact, purchase, or engage, boosting conversions effectively.",
  },
  {
    image: "/E-commerce Website Development in Mumbai/outdated-design.jpg",
    heading: "Design hasn't been updated in the last 3 years",
    paragraph:
      "An outdated design can harm credibility. We refresh your website with modern layouts, typography, and visuals that align with current trends and enhance brand perception.",
  },
  {
    image: "/E-commerce Website Development in Mumbai/low-conversion.jpg",
    heading: "Low conversion rate despite decent traffic",
    paragraph:
      "High traffic is wasted if visitors don’t convert. We analyze user behavior, optimize navigation, and improve product/service presentation to turn visitors into loyal customers.",
  },
  {
    image: "/E-commerce Website Development in Mumbai/seo-issues.jpg",
    heading: "Not ranking on Google for core keywords",
    paragraph:
      "If your website isn’t visible on search engines, potential customers can’t find you. We implement SEO best practices, keyword optimization, and structured content to improve rankings and organic traffic.",
  },
];


const faqData = [
  {
    question: "Will a redesign affect my current Google rankings?",
    answer:
      "We follow SEO-safe migration protocols including 301 redirects, canonical tags, and sitemap resubmission to protect your rankings.",
  },
  {
    question: "How long does a website redesign take in Mumbai?",
    answer:
      "A full redesign of a 10 to 15 page website typically takes 4 to 6 weeks.",
  },
];
const page = () => {
  return (
    <>
      {/* <Hero
        title="Website Redesign Services in "
        highlight="Mumbai"

        subtext="Transform your online presence with modern, responsive, and user-friendly website designs that engage visitors and drive results."
        description="An outdated website kills trust and kills leads. If your website looks like it was built in 2015, it is silently turning away customers every day. NNC's website redesign service in Mumbai gives your existing site a full transformation, improving speed, design, mobile experience, and SEO in one go."
        image="/website-redesign-services-mumbai/website-redesign-services-mumbai.jpg"
        buttonText="Get Quote"
        buttonLink="#contact"
      /> */}
      <Hero
  title="Website Redesign Services in "
  highlight="Mumbai"
  subtext="Transform your online presence with modern, responsive, and user-friendly website designs that engage visitors and drive results."
  description="An outdated website kills trust and kills leads. If your website looks like it was built in 2015, it is silently turning away customers every day. NNC's website redesign service in Mumbai gives your existing site a full transformation across Andheri, Mumbai, BKC, Mumbai, and Thane, Mumbai, improving speed, design, mobile experience, and SEO in one go."
  svg={redesignSVG}
/>

      <section id='signs-you-need' className="What We Deliver  w-full py-20 md:px-15 px-6">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center text-gray-900">What Your
            <span className="text-[var(--primary)]"> Mumbai E-commerce   </span> Site Will Include
          </h2>

        </div>
        <CardList cards={cardData} />
      </section>
      <section id='what-we-improve' className='bg-[var(--sectioncolor)] pt-15'>
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center text-gray-900 text-white">
            <span className="text-[var(--primary)]"> E-commerce   </span> Platforms We <span className="text-[var(--primary)]"> Work  </span>  With
          </h2>

        </div>
        <ServicesLayout servicesData={servicesData} reverse={true} color="bg-[var(--primary)]" TextColor="white"/>
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

      <section id='FAQ' className="FAQ scroll-mt-10 w-full py-20 px-6 md:px-15 ">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center">
            Frequently Asked  <span className="text-[var(--primary)]">Questions</span>
          </h2>

        </div>
        <FAQ data={faqData} qColor="bg-gradient-to-r from-[#041027] to-[var(--primary)]" qTextColor="text-white"  />
      </section>
      <section id='CTA' className="CTA scroll-mt-10 w-full pb-20 pt-10 px-6 md:px-15 bg-gradient-to-r from-[#041027] to-[#0c245a]">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center text-white">Tired of your 
            <span className="text-[var(--primary)]"> old website    </span> embarrassing your  <span className="text-[var(--primary)]">brand  </span>?
          </h2>

        </div>
        <CTA />
      </section>


    </>
  )
}

export default page