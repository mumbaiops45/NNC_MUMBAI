import Navbar from "@/components/ecommerce-website-development-mumbai/Navbar";
import Footer from "@/components/ecommerce-website-development-mumbai/Footer";

export const metadata = {
  title: "E-commerce Website Development Company in Mumbai | Nakshatra Namaha Creations",
  description:
    "Custom e-commerce development in Mumbai. WooCommerce, Shopify, React-based stores. Mobile-first, fast-loading, SEO-ready. Get your online store live in 21 days.",

  keywords: [
    "E-commerce Website Development in Mumbai",
    "E-commerce Website Development Company in Mumbai",
    "Ecommerce Developers in Mumbai",
    "Shopify Development Company in Mumbai",
    "WooCommerce Development Mumbai",
    "Online Store Development Mumbai",

    "E-commerce Website in Andheri",
    "E-commerce Website in BKC",
    "E-commerce Website in Bandra",
    "E-commerce Website in Navi Mumbai",
    "E-commerce Website in Lower Parel",

    "Custom E-commerce Development Mumbai",
    "React E-commerce Development Mumbai",
    "Node.js E-commerce Platform Mumbai",

    "Payment Gateway Integration Mumbai",
    "GST Billing E-commerce Website Mumbai"
  ]
};

export default function Layout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: "Nakshatra Namaha Creations",
        url: "https://nncmumbai1.netlify.app/ecommerce-website-development-mumbai",
        telephone: "+91 99005 66466",

        address: {
          "@type": "PostalAddress",
          addressLocality: "Thane West",
          addressRegion: "Mumbai",
          addressCountry: "India"
        },

        openingHours: "Mo-Sa 09:30-18:30",

        sameAs: [
          "https://www.facebook.com/Nakshatranamahacreations/",
          "https://www.instagram.com/nnc.digitalbengaluru/",
          "https://www.youtube.com/c/NakshatraNamahaCreations"
        ]
      },

      {
        "@type": "Service",
        name: "E-commerce Website Development in Mumbai",
        provider: {
          "@type": "LocalBusiness",
          name: "Nakshatra Namaha Creations"
        },

        areaServed: [
          { "@type": "Place", name: "Mumbai" },
          { "@type": "Place", name: "Andheri" },
          { "@type": "Place", name: "BKC" },
          { "@type": "Place", name: "Bandra" },
          { "@type": "Place", name: "Lower Parel" },
          { "@type": "Place", name: "Navi Mumbai" }
        ],

        description:
          "E-commerce website development in Mumbai with mobile-first design, secure payment gateway integration, GST billing, inventory management, SEO-optimized product pages, and scalable online store solutions using Shopify, WooCommerce, React, and Node.js.",
icons: {
  icon: "/logo.avif",
  shortcut: "/logo.avif",
  apple: "/logo.avif",
},
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "E-commerce Development Features",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile-first responsive e-commerce design" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Product catalogue with search and filters" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Payment gateway integration (Razorpay, PayU, UPI)" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Inventory and order management system" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Customer login and order tracking" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "GST-compliant invoicing system" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "WhatsApp enquiry integration" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO-optimized product pages" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom React.js and Node.js e-commerce stores" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "WooCommerce development for WordPress" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shopify store setup and customization" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "OpenCart development for small businesses" } }
          ]
        }
      },

      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How long does it take to launch an e-commerce website in Mumbai?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A standard e-commerce store can go live in 21 to 30 days depending on the number of products and integrations."
            }
          },
          {
            "@type": "Question",
            name: "Do you set up payment gateways for Mumbai businesses?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We integrate Razorpay, CCAvenue, PayU, and UPI payment options with full GST compliance."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      {/* SCHEMA MARKUP */}
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