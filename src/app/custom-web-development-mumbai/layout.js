import Navbar from "@/components/custom-web-development-mumbai/Navbar";
import Footer from "@/components/custom-web-development-mumbai/Footer";

export const metadata = {
  title: "Custom Web Development Company in Mumbai | NNC Digital",
  description:
    "Custom web development in Mumbai. Bespoke portals, CRMs, marketplaces, booking engines. React, Node.js, MongoDB stack. 10+ years experience. Get a quote.",
};

export default function Layout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: "NNC Digital",
        url: "https://nncmumbai1.netlify.app/custom-web-development-mumbai",
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
        name: "Custom Web Development in Mumbai",
        provider: {
          "@type": "LocalBusiness",
          name: "NNC Digital",
        },
        areaServed: {
          "@type": "Place",
          name: "Mumbai",
        },
        description:
          "Custom web development services in Mumbai including CRMs, marketplaces, SaaS platforms, and scalable web applications built using modern technologies.",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Custom Web Development Solutions",
          itemListElement: [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CRM and lead management systems" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Real estate property portals" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Healthcare patient portals" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Booking and appointment platforms" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Multi-vendor marketplace applications" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Admin dashboards and reporting tools" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SaaS web applications" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "API integrations with third-party tools" } }
          ]
        }
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            "name": "How is custom development different from template-based websites?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Custom development is built from scratch to match your exact business logic, workflows, and design. No template restrictions."
            }
          },
          {
            "@type": "Question",
            "name": "Do you sign NDAs for custom projects?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We sign NDAs before any detailed scope discussion."
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