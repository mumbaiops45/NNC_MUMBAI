import Navbar from "@/components/crm-development-company-mumbai/Navbar";
import Footer from "@/components/Website Development Company in Mumbai/Footer";

export const metadata = {
  title: "Custom CRM Development Company in Mumbai | NNC Digital",
  description:
    "Custom CRM development in Mumbai. Lead management, sales pipelines, task automation, reporting dashboards. Built on React + Node.js. Free demo available.",
};

export default function Layout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: "NNC Digital",
        url: "https://nncmumbai1.netlify.app/crm-development-company-mumbai",
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
        name: "CRM Development Company in Mumbai",
        provider: {
          "@type": "LocalBusiness",
          name: "NNC Digital",
        },
        areaServed: {
          "@type": "Place",
          name: "Mumbai",
        },
        description:
          "Custom CRM development in Mumbai including lead management, sales pipelines, automation workflows, and reporting dashboards built with modern technologies.",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "CRM Development Modules & Industry Solutions",
          itemListElement: [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lead capture and pipeline management" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Contact and company database systems" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Task and follow-up automation" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sales forecasting and reporting dashboards" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Invoice and payment tracking systems" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "WhatsApp and email integration in CRM" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Role-based access control for teams" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom dashboards and analytics" } },

            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CRM for real estate agencies and brokers" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CRM for healthcare clinics and hospitals" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CRM for legal firms and consultants" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CRM for FMCG and distribution companies" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CRM for event management companies" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CRM for logistics and freight companies" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CRM for e-commerce and retail businesses" } }
          ]
        }
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            "name": "How is a custom CRM better than Salesforce or Zoho?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A custom CRM is built around your exact workflows, has no per-seat monthly fees, and is fully owned by you. No compromise on features."
            }
          },
          {
            "@type": "Question",
            "name": "What is the cost of building a custom CRM in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Basic CRM systems start from Rs. 75,000. Enterprise-grade CRMs with full integrations are quoted based on module count."
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