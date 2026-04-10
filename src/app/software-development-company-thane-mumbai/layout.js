import Navbar from "@/components/software-development-company-thane-mumbai/Navbar";
import Footer from "@/components/Website Development Company in Mumbai/Footer";

export const metadata = {
  title: "Software Development Company in Thane Mumbai | NNC Digital",
  description:
    "Software development company in Thane, Mumbai. Web apps, mobile apps, CRM, custom software. Local office in Thane West. 10+ years experience. Free consultation.",
};

export default function Layout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: "NNC Digital",
        url: "https://nncmumbai1.netlify.app/software-development-company-thane-mumbai",
        telephone: "+91 99005 66466",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Thane West",
          addressRegion: "Mumbai",
          addressCountry: "India",
        },

        areaServed: [
          { "@type": "Place", name: "Thane" },
          { "@type": "Place", name: "Mumbai" },
          { "@type": "Place", name: "Navi Mumbai" },
          { "@type": "Place", name: "BKC" },
          { "@type": "Place", name: "Andheri" },
          { "@type": "Place", name: "South Mumbai" }
        ]
      },

      {
        "@type": "Service",
        name: "Software Development Company in Thane, Mumbai",
        provider: {
          "@type": "LocalBusiness",
          name: "NNC Digital",
        },
        areaServed: {
          "@type": "Place",
          name: "Mumbai Metropolitan Region",
        },
        description:
          "Custom software development services in Thane, Mumbai including web applications, mobile apps, CRM systems, SaaS platforms, and business automation solutions.",

        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Software Development Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom web application development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Android and iOS mobile app development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "CRM and ERP software development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "SaaS product development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "API development and integrations" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business automation software" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Admin dashboards and reporting tools" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-commerce platform development" } }
          ]
        },

        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Why Choose Local Thane Software Company",
            value:
              "Face-to-face meetings, faster response time, no timezone delays, understanding of Mumbai market, onsite availability, local GST billing",
          }
        ]
      },

      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Where is NNC's Mumbai office located?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our Mumbai branch is located in Thane West and serves clients across Thane, Navi Mumbai, BKC, Andheri, and South Mumbai.",
            },
          },
          {
            "@type": "Question",
            name: "Can I visit your Thane office before starting a project?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely. We encourage an in-person discovery meeting before any project kickoff. Call us to schedule.",
            },
          },
          {
            "@type": "Question",
            name: "Do you provide onsite software development support in Mumbai?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we are available for onsite meetings and enterprise project discussions across Mumbai and nearby areas.",
            },
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