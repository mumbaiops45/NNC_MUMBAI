import Navbar from "@/components/ecommerce-website-development-mumbai/Navbar";
import Footer from "@/components/Website Development Company in Mumbai/Footer";

export const metadata = {
  title: "E-commerce Website Development Company in Mumbai | NNC",
  description:
    "Custom e-commerce development in Mumbai. WooCommerce, Shopify, React-based stores. Mobile-first, fast-loading, SEO-ready. Get your online store live in 21 days.",
};

export default function Layout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: "NNC Digital",
        url: "https://nncmumbai1.netlify.app/ecommerce-website-development-mumbai",
        telephone: "+91 99005 66466",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Thane West",
          addressRegion: "Mumbai",
          addressCountry: "India",
        },
      },
      {
        "@type": "Service",
        name: "E-commerce Website Development in Mumbai",
        provider: {
          "@type": "LocalBusiness",
          name: "NNC Digital",
        },
        areaServed: {
          "@type": "Place",
          name: "Mumbai",
        },
        description:
          "E-commerce website development in Mumbai with mobile-first design, secure payment integration, and scalable online store solutions.",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "E-commerce Development Features & Platforms",
          itemListElement: [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile-first responsive e-commerce design" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Product catalogue with search and filters" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Payment gateway integration (Razorpay, PayU, UPI)" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Inventory and order management system" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Customer login and order tracking" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "GST-compliant invoicing system" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "WhatsApp enquiry integration" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO-optimized product pages" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom React.js and Node.js e-commerce stores" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "WooCommerce development for WordPress" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Shopify store setup and customization" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "OpenCart development for small and mid-size businesses" } }
          ]
        }
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            "name": "How long does it take to launch an e-commerce website in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A standard e-commerce store can go live in 21 to 30 days depending on the number of products and integrations."
            }
          },
          {
            "@type": "Question",
            "name": "Do you set up payment gateways for Mumbai businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We integrate Razorpay, CCAvenue, PayU, and UPI payment options with full GST compliance."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      {/* ✅ SCHEMA MARKUP */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <Navbar />

      <main className="pt-23">
        {children}
      </main>

      <Footer />
    </>
  );
}