import Navbar from "@/components/crm-development-company-mumbai/Navbar";
import Footer from "@/components/crm-development-company-mumbai/Footer";

export const metadata = {
title: "Custom CRM Development Company in Mumbai | मुंबईतील कस्टम CRM डेव्हलपमेंट कंपनी | Nakshatra Namaha Creations",
description:
  "Custom CRM development in Mumbai. Lead management, sales pipelines, task automation, reporting dashboards. Built on React + Node.js. Free demo available. मुंबईमध्ये कस्टम CRM डेव्हलपमेंट सेवा. लीड मॅनेजमेंट, सेल्स पाइपलाइन, टास्क ऑटोमेशन आणि रिपोर्टिंग डॅशबोर्ड्स. React + Node.js वर आधारित. फ्री डेमो उपलब्ध.",
icons: {
  icon: "/logo.avif",
  shortcut: "/logo.avif",
  apple: "/logo.avif",
},
  keywords: [
    "CRM Development Company in Mumbai",
    "Custom CRM Development Mumbai",
    "CRM Software Development Mumbai",
    "CRM Developers in Mumbai",

    "CRM Development in Andheri",
    "CRM Development in BKC",
    "CRM Development in Bandra",
    "CRM Development in Lower Parel",
    "CRM Development in Navi Mumbai",

    "Sales CRM Development Mumbai",
    "Lead Management CRM Mumbai",
    "Enterprise CRM Software Mumbai",

    "Real Estate CRM Mumbai",
    "Healthcare CRM Mumbai",
    "Logistics CRM Software Mumbai",
    "Custom Business CRM Mumbai",

    "React CRM Development Mumbai",
    "Node.js CRM Development Mumbai"
  ]
};

export default function Layout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: "Nakshatra Namaha Creations",
        url: "https://nncmumbai1.netlify.app/crm-development-company-mumbai",
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
        name: "CRM Development Company in Mumbai",
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
          "Custom CRM development in Mumbai including lead management systems, sales pipeline automation, reporting dashboards, WhatsApp and email integration, and industry-specific CRM solutions for real estate, healthcare, logistics, FMCG, and enterprises.",

        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "CRM Modules & Solutions",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lead capture and pipeline management" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Contact and company database systems" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Task and follow-up automation" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sales forecasting and reporting dashboards" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Invoice and payment tracking systems" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "WhatsApp and email CRM integration" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Role-based access control systems" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom analytics dashboards" } }
          ]
        }
      },

      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How is a custom CRM better than Salesforce or Zoho?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A custom CRM is built around your exact workflows, has no per-seat monthly fees, and is fully owned by your business with complete flexibility."
            }
          },
          {
            "@type": "Question",
            name: "What is the cost of building a custom CRM in Mumbai?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Basic CRM systems start from Rs. 75,000. Enterprise CRM solutions with advanced integrations are priced based on modules and complexity."
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