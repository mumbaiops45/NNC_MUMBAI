import Navbar from "@/components/Mobile App Development Company in Mumbai/Navbar";
import Footer from "@/components/Mobile App Development Company in Mumbai/Footer";

export const metadata = {
  title: "Mobile App Development Company in Mumbai | Nakshatra Namaha Creations",
  description:
    "Custom Android & iOS mobile app development in Mumbai. React Native, cross-platform builds. 80+ apps delivered. Free consultation. Call NNC today.",
icons: {
  icon: "/logo.avif",
  shortcut: "/logo.avif",
  apple: "/logo.avif",
},
  keywords: [
    "Mobile App Development Company in Mumbai",
    "Mobile App Development Company in Andheri",
    "Mobile App Development Company in BKC",
    "Mobile App Development Company in Bandra",
    "Mobile App Development Company in Navi Mumbai",
    "Mobile App Development Company in Lower Parel",

    "Android app development Mumbai",
    "iOS app development Mumbai",
    "React Native app development Mumbai",
    "Cross platform app development Mumbai",
    "Mobile app developers Mumbai",

    "Healthcare mobile apps Mumbai",
    "E-commerce mobile apps Mumbai",
    "CRM mobile apps Mumbai",
    "Booking app development Mumbai",
    "Admin dashboard apps Mumbai"
  ]
};

export default function Layout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: "Nakshatra Namaha Creations",
        url: "https://nncmumbai1.netlify.app/mobile-app-development-company-mumbai",
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
        name: "Mobile App Development Company in Mumbai",
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
          "Custom Android & iOS mobile app development in Mumbai using React Native and cross-platform technologies. We build healthcare apps, e-commerce apps, CRM apps, booking apps, and admin dashboards with full Play Store and App Store support.",

        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Mobile App Development Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Android app development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "iOS app development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "React Native cross-platform apps" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Healthcare mobile apps" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-commerce mobile apps" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "CRM mobile apps" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Booking and scheduling apps" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Admin dashboard apps" } }
          ]
        }
      },

      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much does mobile app development cost in Mumbai?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A standard app starts from Rs. 1,00,000. Complex multi-feature apps range from Rs. 3,00,000 to Rs. 15,00,000+."
            }
          },
          {
            "@type": "Question",
            name: "Do you handle Play Store and App Store submission?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We handle the full submission process including screenshots, descriptions, and compliance checks."
            }
          },
          {
            "@type": "Question",
            name: "What is your app development timeline in Mumbai?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Phase 1 of most apps is delivered within 45 to 60 days."
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