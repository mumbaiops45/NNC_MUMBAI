import React from 'react'
import Hero from '@/components/Hero'
import CardCarouselLeftRight from '@/components/CardCarousel';
import FAQ from '@/components/FAQ';
import MobileAppCTA from '@/components/ecommerce-website-development-mumbai/CTA_ecommmerce';
import Process from '@/components/Step';
import CardList from '@/components/CardList';
import ServicesLayout from '@/components/ClickCard';
import Testimonial from '@/components/Testimonial';

const ecommerceSVG = (
  <svg viewBox="0 0 400 300" className="w-full h-auto" fill="none">

    <defs>
      <clipPath id="cart-clip">
        <path d="M95 108 H285 L262 195 H122 Z"/>
      </clipPath>
    </defs>

    {/* Floating decorative circles */}
    <circle cx="52" cy="240" r="22" stroke="#334155" strokeWidth="1.2"/>
    <circle cx="52" cy="240" r="14" stroke="#334155" strokeWidth="0.6" strokeDasharray="3 3"/>
    <circle cx="355" cy="58" r="26" stroke="#334155" strokeWidth="1.2"/>
    <circle cx="355" cy="58" r="17" stroke="#334155" strokeWidth="0.6" strokeDasharray="3 3"/>

    {/* Dot accents */}
    <circle cx="80" cy="80" r="3" fill="#334155"/>
    <circle cx="320" cy="240" r="3" fill="#334155"/>
    <circle cx="340" cy="220" r="2" fill="#475569"/>
    <circle cx="60" cy="140" r="2" fill="#475569"/>

    {/* Cart handle */}
    <path d="M82 88 Q90 78 108 78 L118 78 L130 108" stroke="#64748b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="82" y1="88" x2="82" y2="108" stroke="#475569" strokeWidth="1.5" strokeLinecap="round"/>

    {/* Cart body */}
    <path d="M95 108 H285 L262 195 H122 Z" fill="#1e293b" stroke="#475569" strokeWidth="1.8" strokeLinejoin="round"/>
    <line x1="95" y1="108" x2="285" y2="108" stroke="#64748b" strokeWidth="1.5"/>

    {/* Dividers */}
    <line x1="160" y1="112" x2="148" y2="190" stroke="#2d3f55" strokeWidth="1"/>
    <line x1="215" y1="112" x2="203" y2="190" stroke="#2d3f55" strokeWidth="1"/>

    {/* Product box 1 */}
    <rect x="104" y="120" width="50" height="46" rx="5" fill="#293d52" stroke="#3d5473" strokeWidth="1"/>
    <rect x="110" y="126" width="38" height="6" rx="2" fill="#3d5473"/>
    <rect x="110" y="136" width="30" height="5" rx="2" fill="#3d5473" opacity="0.6"/>
    <rect x="110" y="148" width="34" height="5" rx="2" fill="#3d5473" opacity="0.4"/>

    {/* Product box 2 */}
    <rect x="167" y="120" width="50" height="46" rx="5" fill="#293d52" stroke="#3d5473" strokeWidth="1"/>
    <rect x="173" y="126" width="38" height="6" rx="2" fill="#3d5473"/>
    <rect x="173" y="136" width="26" height="5" rx="2" fill="#3d5473" opacity="0.6"/>
    <rect x="173" y="148" width="32" height="5" rx="2" fill="#3d5473" opacity="0.4"/>

    {/* Product box 3 */}
    <rect x="227" y="120" width="50" height="46" rx="5" fill="#293d52" stroke="#3d5473" strokeWidth="1"/>
    <rect x="233" y="126" width="38" height="6" rx="2" fill="#3d5473"/>
    <rect x="233" y="136" width="28" height="5" rx="2" fill="#3d5473" opacity="0.6"/>
    <rect x="233" y="148" width="36" height="5" rx="2" fill="#3d5473" opacity="0.4"/>

    {/* Bottom row items */}
    <rect x="130" y="172" width="36" height="16" rx="4" fill="#364e66" stroke="#475569" strokeWidth="0.8"/>
    <rect x="175" y="172" width="36" height="16" rx="4" fill="#364e66" stroke="#475569" strokeWidth="0.8"/>
    <rect x="220" y="172" width="36" height="16" rx="4" fill="#364e66" stroke="#475569" strokeWidth="0.8"/>

    {/* Left wheel */}
    <circle cx="148" cy="215" r="16" fill="#1a2a3a" stroke="#64748b" strokeWidth="1.8"/>
    <circle cx="148" cy="215" r="9" fill="#1e293b" stroke="#475569" strokeWidth="1"/>
    <circle cx="148" cy="215" r="4" fill="#22c55e" opacity="0.7"/>
    <line x1="148" y1="206" x2="148" y2="199" stroke="#475569" strokeWidth="1"/>
    <line x1="157" y1="215" x2="164" y2="215" stroke="#475569" strokeWidth="1"/>
    <line x1="148" y1="224" x2="148" y2="231" stroke="#475569" strokeWidth="1"/>
    <line x1="139" y1="215" x2="132" y2="215" stroke="#475569" strokeWidth="1"/>

    {/* Right wheel */}
    <circle cx="245" cy="215" r="16" fill="#1a2a3a" stroke="#64748b" strokeWidth="1.8"/>
    <circle cx="245" cy="215" r="9" fill="#1e293b" stroke="#475569" strokeWidth="1"/>
    <circle cx="245" cy="215" r="4" fill="#22c55e" opacity="0.7"/>
    <line x1="245" y1="206" x2="245" y2="199" stroke="#475569" strokeWidth="1"/>
    <line x1="254" y1="215" x2="261" y2="215" stroke="#475569" strokeWidth="1"/>
    <line x1="245" y1="224" x2="245" y2="231" stroke="#475569" strokeWidth="1"/>
    <line x1="236" y1="215" x2="229" y2="215" stroke="#475569" strokeWidth="1"/>

    {/* Price badge */}
    <rect x="274" y="88" width="68" height="28" rx="8" fill="#22c55e" fillOpacity="0.15" stroke="#22c55e" strokeWidth="1.2"/>
    <text x="308" y="106" textAnchor="middle" fontSize="12" fill="#22c55e" fontFamily="sans-serif" fontWeight="600">₹ 4,999</text>
    <line x1="285" y1="108" x2="290" y2="116" stroke="#22c55e" strokeWidth="0.8" opacity="0.5" strokeDasharray="3 2"/>

    {/* Mumbai location pin */}
    <circle cx="308" cy="175" r="10" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="1.2"/>
    <circle cx="308" cy="173" r="4" fill="#3b82f6"/>
    <path d="M308 177 L308 185" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round"/>
    <text x="320" y="180" fontSize="10" fill="#3b82f6" fontFamily="sans-serif" fontWeight="500">Mumbai</text>

    {/* Wi-fi signal arcs */}
    <path d="M52 98 Q68 80 84 98" stroke="#475569" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M58 104 Q68 94 78 104" stroke="#475569" strokeWidth="1" strokeLinecap="round"/>
    <circle cx="68" cy="108" r="2.5" fill="#64748b"/>

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
    image: "/E-commerce Website Development in Mumbai/E-commerce Website Development in Mumbai.jpg",
    heading: "Mobile-First Responsive Design",
    paragraph:
      "We build fully responsive e-commerce websites that deliver a seamless shopping experience across mobile, tablet, and desktop devices, ensuring maximum reach and engagement.",
  },
  {
    image: "/E-commerce Website Development in Mumbai/Product Catalogue with Filter and Search.jpg",
    heading: "Product Catalogue with Filter and Search",
    paragraph:
      "Our solutions include advanced product catalogues with smart filters and search functionality, helping customers easily find what they’re looking for and improving conversion rates.",
  },
  {
    image: "/E-commerce Website Development in Mumbai/Razorpay, PayU, and UPI Payment Integration.png",
    heading: "Razorpay, PayU, and UPI Payment Integration",
    paragraph:
      "We integrate secure and reliable payment gateways like Razorpay, PayU, and UPI to enable smooth, fast, and safe transactions for your customers.",
  },
  {
    image: "/E-commerce Website Development in Mumbai/Inventory and Order Management Panel.webp",
    heading: "Inventory and Order Management Panel",
    paragraph:
      "Manage your products, stock levels, and orders efficiently with a powerful backend dashboard designed for easy tracking and real-time updates.",
  },
  {
    image: "/E-commerce Website Development in Mumbai/costom login.png",
    heading: "Customer Login and Order Tracking",
    paragraph:
      "We enable user accounts with order history and real-time tracking, enhancing transparency and improving the overall customer experience.",
  },
  {
    image: "/E-commerce Website Development in Mumbai/GST-Compliant Invoicing.png",
    heading: "GST-Compliant Invoicing",
    paragraph:
      "Our e-commerce systems generate GST-compliant invoices automatically, ensuring your business stays aligned with Indian tax regulations.",
  },
  {
    image: "/E-commerce Website Development in Mumbai/WhatsApp Enquiry Integration.jpg",
    heading: "WhatsApp Enquiry Integration",
    paragraph:
      "Boost customer engagement with direct WhatsApp integration, allowing users to make quick enquiries and connect with your team instantly.",
  },
  {
    image: "/E-commerce Website Development in Mumbai/SEO-Optimised Product Pages.png",
    heading: "SEO-Optimised Product Pages",
    paragraph:
      "We create search engine-friendly product pages with optimized content, meta tags, and structure to improve visibility and drive organic traffic.",
  },
];


const faqData = [
  {
    question: "How long does it take to launch an e-commerce website in Mumbai?",
    answer:
      "A standard e-commerce store can go live in 21 to 30 days depending on the number of products and integrations.",
  },
  {
    question: "Do you set up payment gateways for Mumbai businesses?",
    answer:
      "Yes. We integrate Razorpay, CCAvenue, PayU, and UPI payment options with full GST compliance.",
  },
];
const page = () => {
  return (
    <>
      {/* <Hero
        title="E-commerce Website Development in  "
        highlight="Mumbai"

        subtext="We create scalable e-commerce platforms that help Mumbai businesses sell smarter, reach wider audiences, and grow revenue with ease."
        description="Mumbai is one of India's largest retail markets. If your products aren't online yet, you're leaving serious money on the table. NNC builds e-commerce websites in Mumbai that are fast, mobile-first, and optimised for conversions. From catalogue sites to full marketplace platforms, we handle it all."
        image="/E-commerce Website Development in Mumbai/e-commerce.jpg"
        buttonText="Get Quote"
        buttonLink="#contact"
      /> */}
      <Hero
  title="E-commerce Website Development in "
  highlight="Mumbai"
  subtext="We create scalable e-commerce platforms that help Mumbai businesses sell smarter, reach wider audiences, and grow revenue with ease."
  description="Mumbai is one of India's largest retail markets. If your products aren't online yet, you're leaving serious money on the table. NNC builds e-commerce websites in Mumbai that are fast, mobile-first, and optimised for conversions. From catalogue sites to full marketplace platforms, we handle it all."
  svg={ecommerceSVG}
/>

      <section id='what-we-deliver' className="What We Deliver  w-full py-20 md:px-15 px-6">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center text-gray-900">What Your
            <span className="text-[var(--primary)]"> Mumbai E-commerce   </span> Site Will Include
          </h2>

        </div>
        <CardList cards={cardData} />
      </section>
      <section id='Platforms' className='bg-gradient-to-r from-[#041027] to-[#0c245a] pt-15'>
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center text-white">
            <span className="text-[var(--primary)]"> E-commerce   </span> Platforms We <span className="text-[var(--primary)]"> Work  </span>  With
          </h2>

        </div>
        <ServicesLayout servicesData={servicesData} reverse={true} color="bg-[var(--primary)]" TextColor="white"/>
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



      <section id='FAQ' className="FAQ scroll-mt-10 w-full py-20 px-6 md:px-15  ">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center">
            Frequently Asked  <span className="text-[var(--primary)]">Questions</span>
          </h2>

        </div>
      <FAQ data={faqData} qColor="bg-gradient-to-r from-[#041027] to-[var(--primary)]" qTextColor="text-white"/>
      </section>
      <section id='CTA' className="CTA scroll-mt-10 w-full pb-20 pt-10 px-6 md:px-15 bg-gradient-to-r from-[#041027] to-[#0c245a]">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center text-white">Ready to sell 
            <span className="text-[var(--primary)]"> online    </span> from   <span className="text-[var(--primary)]">Mumbai? </span>?
          </h2>

        </div>
        <MobileAppCTA />
      </section>


    </>
  )
}

export default page