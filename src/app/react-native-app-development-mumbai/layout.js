import Navbar from "@/components/React Native App Development in Mumbai/Navbar";
import Footer from "@/components/React Native App Development in Mumbai/Footer";

export const metadata = {
  title: "React Native App Development Company in Mumbai | Nakshatra Namaha Creations",
  description:
    "Expert React Native app development in Mumbai. Single codebase for Android and iOS. Faster delivery, lower cost. 80+ apps built. Free consultation.",
icons: {
  icon: "/logo.avif",
  shortcut: "/logo.avif",
  apple: "/logo.avif",
},
  keywords: [
    "React Native App Development in Mumbai",
    "React Native App Development Company in Mumbai",
    "React Native Developers in Mumbai",
    "Mobile App Development Company in Mumbai",
    "App Development Company in Andheri",
    "App Development Company in BKC",
    "App Development Company in Bandra",
    "App Development Company in Navi Mumbai",
    "App Development Company in Lower Parel",

    "Cross platform app development Mumbai",
    "Hybrid app development Mumbai",
    "Android iOS app development Mumbai",
    "React Native app developers Mumbai",

    "Enterprise mobile apps Mumbai",
    "Startup mobile app development Mumbai"
  ]
};

export default function Layout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: "Nakshatra Namaha Creations",
        url: "https://nncmumbai1.netlify.app/react-native-app-development-mumbai",
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
        name: "React Native App Development in Mumbai",
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
          "React Native app development in Mumbai using a single codebase for Android and iOS. We build scalable, high-performance mobile applications for startups and enterprises with full lifecycle support including design, development, testing, and deployment.",

        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "React Native Development Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Single codebase Android and iOS apps" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Near-native performance mobile apps" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Faster time to market app development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Easy maintenance with shared codebase" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Component-based scalable architecture" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "App Store and Play Store deployment" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Post-launch maintenance and updates" } }
          ]
        }
      },

      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Is React Native good for enterprise apps?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Companies like Facebook, Instagram, and Walmart use React Native in production. It is fully capable for enterprise-grade apps."
            }
          },
          {
            "@type": "Question",
            name: "Can React Native access device features like camera and GPS?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. React Native supports all native device APIs including camera, GPS, push notifications, biometrics, and more."
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