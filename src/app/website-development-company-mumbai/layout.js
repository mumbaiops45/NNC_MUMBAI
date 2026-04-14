import Navbar from "@/components/Website Development Company in Mumbai/Navbar";
import Footer from "@/components/Website Development Company in Mumbai/Footer";

export const metadata = {
 title: "Best Website Development Company in Mumbai | मुंबईतील सर्वोत्तम वेबसाइट डेव्हलपमेंट कंपनी | Nakshatra Namaha Creations",
description:
  "Top-rated website development company in Mumbai. Custom websites, React & Next.js builds, SEO-ready. 565+ projects delivered. Get a free quote today. मुंबईमध्ये टॉप-रेटेड वेबसाइट डेव्हलपमेंट सेवा. कस्टम वेबसाइट्स, React आणि Next.js वर आधारित. SEO-रेडी. 565+ प्रोजेक्ट्स डिलिव्हर केले. आजच फ्री कोट मिळवा.",
icons: {
  icon: "/logo.avif",
  shortcut: "/logo.avif",
  apple: "/logo.avif",
},
  keywords: [
    "Website Development Company in Mumbai",
    "Website Development Company in BKC",
    "Website Development Company in Andheri",
    "Website Development Company in Bandra",
    "Website Development Company in Navi Mumbai",
    "Website Development Company in Lower Parel",

    "Web Development Mumbai",
    "Website Design Mumbai",
    "React Developer Mumbai",
    "Next.js Development Mumbai",

    "Corporate websites Mumbai",
    "E-commerce development Mumbai",
    "Real estate portals Mumbai",
    "Healthcare websites Mumbai",
    "Landing page design Mumbai",
    "WordPress & CMS development Mumbai",
    "Custom web applications Mumbai",
    "Website redesign Mumbai"
  ]
};

export default function Layout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: "Nakshatra Namaha Creations",
        url: "https://nncmumbai1.netlify.app/website-development-company-mumbai",
        telephone: "+91 99005 66466",
        email: "info@nakshatranamahacreations.com",

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
        name: "Website Development Company in Mumbai",
        provider: {
          "@type": "LocalBusiness",
          name: "Nakshatra Namaha Creations"
        },

        areaServed: [
          { "@type": "Place", name: "Mumbai" },
          { "@type": "Place", name: "Andheri" },
          { "@type": "Place", name: "BKC" },
          { "@type": "Place", name: "Lower Parel" },
          { "@type": "Place", name: "Bandra" },
          { "@type": "Place", name: "Navi Mumbai" }
        ],

        description:
          "Custom website development services in Mumbai including corporate websites, e-commerce platforms, real estate portals, healthcare websites, landing pages, WordPress & CMS development, custom web applications, and website redesign services using React.js, Next.js, Node.js, and modern technologies.",

        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Website Development Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate websites" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-commerce development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Real estate portals" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Healthcare websites" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Landing page design" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "WordPress & CMS development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom web applications" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website redesign" } }
          ]
        }
      },

      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How long does it take to build a website in Mumbai?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A standard business website takes 3 to 4 weeks. E-commerce and custom portals take 6 to 12 weeks depending on scope."
            }
          },
          {
            "@type": "Question",
            name: "What is the cost of website development in Mumbai?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Basic websites start from Rs. 24,999. Custom applications and portals are quoted based on scope."
            }
          },
          {
            "@type": "Question",
            name: "Do you provide website maintenance after launch?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We offer annual maintenance contracts covering security, updates, speed, and backups."
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

      <main className="pt-23">{children}</main>

      <Footer />
    </>
  );
}