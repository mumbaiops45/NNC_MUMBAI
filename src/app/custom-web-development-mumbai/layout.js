import Navbar from "@/components/custom-web-development-mumbai/Navbar";
import Footer from "@/components/custom-web-development-mumbai/Footer";

export const metadata = {
  title: "Custom Web Development Company in Mumbai | मुंबईतील कस्टम वेब डेव्हलपमेंट कंपनी | Nakshatra Namaha Creations",
description:
  "Custom web development in Mumbai. Bespoke portals, CRMs, marketplaces, booking engines. React, Node.js, MongoDB stack. 10+ years experience. Get a quote. मुंबईमध्ये कस्टम वेब डेव्हलपमेंट सेवा. कस्टम पोर्टल्स, CRM, मार्केटप्लेस, बुकिंग इंजिन्स. React, Node.js, MongoDB तंत्रज्ञान. 10+ वर्षांचा अनुभव. कोट मिळवा.",
icons: {
  icon: "/logo.avif",
  shortcut: "/logo.avif",
  apple: "/logo.avif",
},
  keywords: [
    "Custom Web Development Company in Mumbai",
    "Custom Web Development Company in Andheri",
    "Custom Web Development Company in BKC",
    "Custom Web Development Company in Bandra",
    "Custom Web Development Company in Lower Parel",
    "Custom Web Development Company in Navi Mumbai",

    "Custom web development Mumbai",
    "Web application development Mumbai",
    "CRM development Mumbai",
    "SaaS development Mumbai",
    "Marketplace development Mumbai",
    "Booking system development Mumbai",
    "Portal development Mumbai",

    "React Node.js development Mumbai",
    "Enterprise web applications Mumbai",
    "API integration services Mumbai",
    "Admin dashboard development Mumbai"
  ]
};

export default function Layout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: "Nakshatra Namaha Creations",
        url: "https://nncmumbai1.netlify.app/custom-web-development-mumbai",
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
        name: "Custom Web Development in Mumbai",
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
          "Custom web development services in Mumbai including CRM systems, SaaS platforms, real estate portals, healthcare systems, booking engines, multi-vendor marketplaces, admin dashboards, and API integrations built using React, Node.js, MongoDB, and modern cloud infrastructure.",

        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Custom Web Development Solutions",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "CRM and lead management systems" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Real estate property portals" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Healthcare patient portals" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Booking and appointment platforms" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Multi-vendor marketplace applications" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Admin dashboards and reporting tools" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "SaaS web applications" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "API integrations with third-party tools" } }
          ]
        }
      },

      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How is custom development different from template-based websites?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Custom development is built from scratch to match your exact business logic, workflows, and design. No template restrictions."
            }
          },
          {
            "@type": "Question",
            name: "Do you sign NDAs for custom projects?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We sign NDAs before any detailed scope discussion."
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