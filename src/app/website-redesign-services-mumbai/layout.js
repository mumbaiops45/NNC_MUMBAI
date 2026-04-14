import Navbar from "@/components/website-redesign-services-mumbai/Navbar";
import Footer from "@/components/website-redesign-services-mumbai/Footer";

export const metadata = {
title: "Professional Website Redesign Services in Mumbai | मुंबईतील प्रोफेशनल वेबसाइट रीडिझाईन सेवा | Nakshatra Namaha Creations",
description:
  "Website redesign services in Mumbai. Old websites transformed into fast, modern, mobile-first experiences. Preserve SEO rankings. Get a free website audit. मुंबईमध्ये वेबसाइट रीडिझाईन सेवा. जुन्या वेबसाइट्सना जलद, आधुनिक आणि मोबाइल-फर्स्ट अनुभवात बदलतो. SEO रँकिंग जतन करा. आजच फ्री वेबसाइट ऑडिट मिळवा.",
icons: {
  icon: "/logo.avif",
  shortcut: "/logo.avif",
  apple: "/logo.avif",
},
  keywords: [
    "Website Redesign Services in Mumbai",
    "Website Redesign Company in Mumbai",
    "Website Revamp Services Mumbai",
    "Website Design Upgrade Mumbai",

    "Website Redesign in Andheri",
    "Website Redesign in BKC",
    "Website Redesign in Bandra",
    "Website Redesign in Lower Parel",
    "Website Redesign in Navi Mumbai",

    "Website Modernization Mumbai",
    "Website Performance Optimization Mumbai",
    "SEO Website Migration Mumbai",
    "Mobile Friendly Website Redesign Mumbai",

    "Corporate Website Redesign Mumbai",
    "Business Website Upgrade Mumbai"
  ]
};

export default function Layout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: "Nakshatra Namaha Creations",
        url: "https://nncmumbai1.netlify.app/website-redesign-services-mumbai",
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
        name: "Website Redesign Services in Mumbai",
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
          "Professional website redesign services in Mumbai focused on improving speed, mobile responsiveness, UI/UX, SEO structure, and conversion optimization while preserving existing Google rankings through safe migration techniques.",

        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Website Redesign Improvements",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Page speed optimisation under 2 seconds" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile-first responsive redesign" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO-safe migration with 301 redirects" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Modern UI/UX redesign with branding upgrade" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lead generation and conversion optimization" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Analytics and Search Console setup" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Navigation and UX flow improvement" } }
          ]
        },

        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Website Redesign Indicators",
            value:
              "Slow loading website, outdated UI, poor mobile experience, low conversions, broken layout, no SEO structure, high bounce rate"
          }
        ]
      },

      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Will a website redesign affect my Google rankings?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. We use SEO-safe migration techniques like 301 redirects, canonical tags, and sitemap updates to preserve rankings."
            }
          },
          {
            "@type": "Question",
            name: "How long does a website redesign take in Mumbai?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A full redesign of a business website typically takes 4 to 6 weeks depending on complexity."
            }
          },
          {
            "@type": "Question",
            name: "Do you provide a website audit before redesign?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We provide a free website audit to identify design, UX, and SEO issues before starting the redesign."
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