import React from 'react'
import Hero from '@/components/Hero'
import CardCarouselLeftRight from '@/components/CardCarousel';
import FAQ from '@/components/FAQ';
import MobileAppCTA from '@/components/ecommerce-website-development-mumbai/CTA_ecommmerce';
import Process from '@/components/Step';
import CardList from '@/components/CardList';
import ServicesLayout from '@/components/ClickCard';

const ecommerceSVG = (
  <svg viewBox="0 0 400 300" className="w-full h-auto" fill="none">

    {/* Shopping Bag */}
    <rect x="140" y="100" width="120" height="110" rx="12" stroke="white" strokeOpacity="0.3" />
    
    {/* Handle */}
    <path
      d="M170 100 C170 70 230 70 230 100"
      stroke="white"
      strokeOpacity="0.3"
      strokeWidth="2"
      fill="none"
    />

    {/* Cart Icon */}
    <circle cx="180" cy="200" r="6" fill="white" fillOpacity="0.3" />
    <circle cx="220" cy="200" r="6" fill="white" fillOpacity="0.3" />
    <line x1="170" y1="180" x2="230" y2="180" stroke="white" strokeOpacity="0.3" />
    <line x1="170" y1="180" x2="175" y2="160" stroke="white" strokeOpacity="0.3" />
    <line x1="175" y1="160" x2="230" y2="160" stroke="white" strokeOpacity="0.3" />

    {/* Browser Window */}
    <rect x="40" y="40" width="100" height="70" rx="8" stroke="white" strokeOpacity="0.2" />
    <rect x="40" y="40" width="100" height="20" rx="8" fill="white" fillOpacity="0.05" />

    {/* Product Blocks */}
    <rect x="50" y="70" width="20" height="20" rx="4" fill="white" fillOpacity="0.1" />
    <rect x="75" y="70" width="20" height="20" rx="4" fill="white" fillOpacity="0.1" />
    <rect x="100" y="70" width="20" height="20" rx="4" fill="white" fillOpacity="0.1" />

    {/* Growth Arrow */}
    <polyline
      points="260,80 290,60 320,90 350,50"
      stroke="white"
      strokeOpacity="0.3"
      strokeWidth="2"
      fill="none"
    />

    {/* Floating Circles */}
    <circle cx="80" cy="230" r="20" stroke="white" strokeOpacity="0.1" />
    <circle cx="330" cy="220" r="25" stroke="white" strokeOpacity="0.1" />

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
      <section id='Platforms' className='bg-gradient-to-b from-[var(--secondary)]/5 to-transparent pt-15'>
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center text-gray-900">
            <span className="text-[var(--primary)]"> E-commerce   </span> Platforms We <span className="text-[var(--primary)]"> Work  </span>  With
          </h2>

        </div>
        <ServicesLayout servicesData={servicesData} color="bg-[var(--primary)]" />
      </section>






      <section id='FAQ' className="FAQ scroll-mt-10 w-full py-20 px-6 md:px-15 bg-gradient-to-r from-[#041027] to-[#0c245a] ">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center text-white">
            Frequently Asked  <span className="text-[var(--primary)]">Questions</span>
          </h2>

        </div>
       <FAQ data={faqData} qColor="bg-white/85"/>
      </section>
      <section id='CTA' className="CTA scroll-mt-10 w-full pb-20 pt-10 px-6 md:px-15">
        <div className="max-w-6xl mx-auto  flex items-center justify-center">

          <h2 className="mb-10 text-center">Ready to sell 
            <span className="text-[var(--primary)]"> online    </span> from   <span className="text-[var(--primary)]">Mumbai? </span>?
          </h2>

        </div>
        <MobileAppCTA />
      </section>


    </>
  )
}

export default page