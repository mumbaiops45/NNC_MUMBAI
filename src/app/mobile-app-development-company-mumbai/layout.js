import Navbar from "@/components/Mobile App Development Company in Mumbai/Navbar";
import Footer from "@/components/Mobile App Development Company in Mumbai/Footer";

export const metadata = {
  title: "Mobile App Development Company in Mumbai | NNC Digital",
  description:
    "Custom Android & iOS mobile app development in Mumbai. React Native, cross-platform builds. 80+ apps delivered. Free consultation. Call NNC today.",
};

export default function Layout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: "NNC Digital",
        url: "https://nncmumbai1.netlify.app/mobile-app-development-company-mumbai",
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
        name: "Mobile App Development Company in Mumbai",
        provider: {
          "@type": "LocalBusiness",
          name: "NNC Digital",
        },
        areaServed: {
          "@type": "Place",
          name: "Mumbai",
        },
        description:
          "Custom Android & iOS mobile app development in Mumbai using React Native and cross-platform technologies.",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Mobile App Development Services",
          itemListElement: [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Android app development" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "iOS app development" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "React Native cross-platform apps" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Healthcare mobile apps" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-commerce mobile apps" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CRM mobile apps" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Booking and scheduling apps" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Admin dashboard apps" } }
          ]
        }
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            "name": "How much does mobile app development cost in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A standard app starts from Rs. 1,00,000. Complex multi-feature apps range from Rs. 3,00,000 to Rs. 15,00,000+."
            }
          },
          {
            "@type": "Question",
            "name": "Do you handle Play Store and App Store submission?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We handle the full submission process including screenshots, descriptions, and compliance checks."
            }
          },
          {
            "@type": "Question",
            "name": "What is your app development timeline in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Phase 1 of most apps is delivered within 45 to 60 days."
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