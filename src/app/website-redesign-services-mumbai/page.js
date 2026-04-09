import React from 'react'
import Hero from '@/components/Hero'
import CardCarouselLeftRight from '@/components/CardCarousel';
import FAQ from '@/components/FAQ';
import CTA from '@/components/website-redesign-services-mumbai/CTA';
import Process from '@/components/Step';
import CardList from '@/components/CardList';
import ServicesLayout from '@/components/ClickCard';

const redesignSVG = (
  <svg viewBox="0 0 400 300" className="w-full h-auto" fill="none">

    {/* Old Website (left - faded) */}
    <rect x="40" y="70" width="120" height="160" rx="10" stroke="white" strokeOpacity="0.15" />
    <rect x="40" y="70" width="120" height="30" rx="10" fill="white" fillOpacity="0.03" />
    <rect x="55" y="110" width="90" height="10" fill="white" fillOpacity="0.05" />
    <rect x="55" y="130" width="70" height="10" fill="white" fillOpacity="0.05" />
    <rect x="55" y="150" width="80" height="10" fill="white" fillOpacity="0.05" />

    {/* Arrow (Transformation) */}
    <polyline
      points="180,150 220,150 205,135 220,150 205,165"
      stroke="white"
      strokeOpacity="0.3"
      strokeWidth="2"
      fill="none"
    />

    {/* New Website (right - clean & modern) */}
    <rect x="240" y="60" width="120" height="180" rx="12" stroke="white" strokeOpacity="0.4" />
    <rect x="240" y="60" width="120" height="35" rx="12" fill="white" fillOpacity="0.06" />

    {/* Clean UI blocks */}
    <rect x="255" y="110" width="90" height="20" rx="4" fill="white" fillOpacity="0.1" />
    <rect x="255" y="140" width="90" height="20" rx="4" fill="white" fillOpacity="0.1" />
    <rect x="255" y="170" width="60" height="20" rx="4" fill="white" fillOpacity="0.1" />

    {/* Spark (improvement highlight) */}
    <g transform="translate(300,40)">
      <line x1="0" y1="8" x2="16" y2="8" stroke="white" strokeOpacity="0.4" />
      <line x1="8" y1="0" x2="8" y2="16" stroke="white" strokeOpacity="0.4" />
    </g>

    {/* Floating circles */}
    <circle cx="80" cy="250" r="20" stroke="white" strokeOpacity="0.1" />
    <circle cx="330" cy="260" r="25" stroke="white" strokeOpacity="0.1" />

  </svg>
);

const servicesData = [
  {
    id: "01",
    title: "Custom React.js + Node.js stores for full flexibility",
    items: [
      { name: "Custom React.js + Node.js stores for full flexibility", img: "/E-commerce Website Development in Mumbai/Custom React.js + Node.js stores for full flexibility.png", heading: "Custom React.js + Node.js stores for full flexibility", discription: "Our React.js and Node.js development approach delivers fast, scalable, and fully customized e-commerce solutions tailored to your business requirements and future expansion needs." },

    ],
  },
  {
    id: "02",
    title: "WooCommerce for WordPress-based businesses",
    items: [
      { name: "WooCommerce for WordPress-based businesses", img: "/E-commerce Website Development in Mumbai/WooCommerce for WordPress-based businesses.svg", heading: "WooCommerce for WordPress-based businesses", discription: "Our WooCommerce development approach for WordPress-based businesses delivers flexible, scalable, and easy-to-manage e-commerce solutions tailored to your products and growth goals." },

    ],
  },
  {
    id: "03",
    title: "Shopify for faster launch timelines ",
    items: [
      { name: "Shopify for faster launch timelines ", img: "/E-commerce Website Development in Mumbai/shopify.svg", heading: "Shopify for faster launch timelines ", discription: "Our Shopify development approach enables faster launch timelines with ready-to-scale e-commerce solutions, helping you go live quickly without compromising on performance or flexibility." },

    ],
  },
  {
    id: "04",
    title: "OpenCart for small and mid-size catalogues",
    items: [
      { name: "OpenCart for small and mid-size catalogues", img: "/E-commerce Website Development in Mumbai/openCart.svg", heading: "OpenCart for small and mid-size catalogues", discription: "Our OpenCart development approach is ideal for small and mid-size catalogues, delivering cost-effective, scalable, and easy-to-manage e-commerce solutions tailored to your business needs." },

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
  description="An outdated website kills trust and kills leads. If your website looks like it was built in 2015, it is silently turning away customers every day. NNC's website redesign service in Mumbai gives your existing site a full transformation, improving speed, design, mobile experience, and SEO in one go."
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
      <section id='what-we-improve' className='bg-gradient-to-b from-[var(--secondary)]/5 to-transparent pt-15'>
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center text-gray-900">
            <span className="text-[var(--primary)]"> E-commerce   </span> Platforms We <span className="text-[var(--primary)]"> Work  </span>  With
          </h2>

        </div>
        <ServicesLayout servicesData={servicesData} reverse={true} color="bg-[var(--secondary)]" TextColor="[var(--secondary)]"/>
      </section>






      <section id='FAQ' className="FAQ scroll-mt-10 w-full py-20 px-6 md:px-15 ">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center">
            Frequently Asked  <span className="text-[var(--primary)]">Questions</span>
          </h2>

        </div>
        <FAQ data={faqData} />
      </section>
      <section id='CTA' className="CTA scroll-mt-10 w-full pb-20 pt-10 px-6 md:px-15">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center">Tired of your 
            <span className="text-[var(--primary)]"> old website    </span> embarrassing your  <span className="text-[var(--primary)]">brand  </span>?
          </h2>

        </div>
        <CTA />
      </section>


    </>
  )
}

export default page