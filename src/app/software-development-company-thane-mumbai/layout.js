import Navbar from "@/components/software-development-company-thane-mumbai/Navbar";
import Footer from "@/components/software-development-company-thane-mumbai/Footer";

export const metadata = {
  title: "Software Development Company in Thane Mumbai | Nakshatra Namaha Creations",
  description:
    "Software development company in Thane, Mumbai. Web apps, mobile apps, CRM, custom software. Local office in Thane West. 10+ years experience. Free consultation.",
icons: {
  icon: "/logo.avif",
  shortcut: "/logo.avif",
  apple: "/logo.avif",
},
  keywords: [
    "Software Development Company in Mumbai",
    "Software Development Company in Thane",
    "Software Development Company in Navi Mumbai",
    "Software Development Company in Andheri",
    "Software Development Company in BKC",
    "Software Development Company in Lower Parel",
    "Software Development Company in Bandra",
    "Custom Software Development Mumbai",
    "Web App Development Mumbai",
    "CRM Development Mumbai"
  ],
};

export default function Layout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: "Nakshatra Namaha Creations",
        url: "https://nncmumbai1.netlify.app/software-development-company-thane-mumbai",
        telephone: "+91 99005 66466",
        email: "info@nakshatranamahacreations.com",

        address: {
          "@type": "PostalAddress",
          streetAddress: "Thane West Office",
          addressLocality: "Thane West",
          addressRegion: "Maharashtra",
          postalCode: "400601",
          addressCountry: "India",
        },

        openingHours: "Mo-Sa 09:30-18:30",

        sameAs: [
          "https://www.facebook.com/Nakshatranamahacreations/",
          "https://www.instagram.com/nnc.digitalbengaluru/",
          "https://www.youtube.com/c/NakshatraNamahaCreations"
        ],

        areaServed: [
          { "@type": "Place", name: "Thane" },
          { "@type": "Place", name: "Mumbai" },
          { "@type": "Place", name: "Navi Mumbai" },
          { "@type": "Place", name: "BKC" },
          { "@type": "Place", name: "Andheri" },
          { "@type": "Place", name: "Bandra" },
          { "@type": "Place", name: "Lower Parel" }
        ]
      },

      {
        "@type": "Service",
        name: "Software Development Company in Thane, Mumbai",
        provider: {
          "@type": "LocalBusiness",
          name: "Nakshatra Namaha Creations",
        },
        areaServed: {
          "@type": "Place",
          name: "Mumbai Metropolitan Region",
        },
        description:
          "Custom software development services in Thane, Mumbai including web apps, mobile apps, CRM systems, SaaS platforms, and business automation solutions.",

        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Software Development Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom web application development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile app development (Android & iOS)" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "CRM & ERP software development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "SaaS product development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "API development and integrations" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business automation systems" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Admin dashboards & analytics tools" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-commerce platform development" } }
          ]
        },

        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Local SEO Advantage",
            value:
              "Onsite meetings in Thane West, Mumbai-focused delivery, fast communication for MMR clients, local business understanding",
          }
        ]
      },

      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Where is your Mumbai office located?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Our Mumbai office is in Thane West and serves clients across Mumbai, Navi Mumbai, BKC, Andheri, Bandra, and Lower Parel.",
            },
          },
          {
            "@type": "Question",
            name: "Can I visit your Thane office?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Yes, we welcome in-person meetings at our Thane West office for project discussions and onboarding.",
            },
          },
          {
            "@type": "Question",
            name: "Do you provide onsite software development consultation?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Yes, we provide onsite consultations across Mumbai and MMR for enterprise clients.",
            },
          }
        ],
      },
    ],
  };

  return (
    <>
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