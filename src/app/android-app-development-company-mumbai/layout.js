import Navbar from "@/components/android-app-development-company-mumbai/Navbar";
import Footer from "@/components/android-app-development-company-mumbai/Footer";

export const metadata = {
  title: "Android App Development Company in Mumbai | NNC Digital",
  description:
    "Professional Android app development in Mumbai. React Native and native builds. 80+ apps on Play Store. Free consultation. Get your Android app built by NNC.",
};

export default function Layout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: "NNC Digital",
        url: "https://nncmumbai1.netlify.app/android-app-development-company-mumbai",
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
        name: "Android App Development Company in Mumbai",
        provider: {
          "@type": "LocalBusiness",
          name: "NNC Digital",
        },
        areaServed: {
          "@type": "Place",
          name: "Mumbai",
        },
        description:
          "Android app development services in Mumbai including customer apps, delivery apps, healthcare apps, and scalable mobile solutions with Play Store deployment.",

        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Android Apps We Build",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Customer-facing service booking apps" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "On-demand delivery applications" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Healthcare and patient management apps" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Real estate property search applications" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Event management and ticketing apps" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-learning and ed-tech applications" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Logistics and field force tracking apps" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Loyalty and rewards applications" } }
          ]
        },

        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Android App Development Process",
            value:
              "Requirement scoping, UI/UX design, sprint-based development, QA testing, Play Store submission, launch support and monitoring",
          }
        ]
      },

      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Do you handle Play Store submission for Mumbai clients?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We handle the full submission process including developer account setup, listing content, screenshots, and review handling.",
            },
          },
          {
            "@type": "Question",
            name: "What is the cost of Android app development in Mumbai?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Simple Android apps start from Rs. 80,000. Feature-rich apps range from Rs. 2,00,000 to Rs. 10,00,000+ depending on scope.",
            },
          },
          {
            "@type": "Question",
            name: "Do you provide post-launch support for Android apps?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we provide post-launch monitoring, updates, bug fixes, and performance optimization after your app goes live on the Play Store.",
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