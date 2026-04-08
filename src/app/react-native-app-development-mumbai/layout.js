import Navbar from "@/components/React Native App Development in Mumbai/Navbar";
import Footer from "@/components/Website Development Company in Mumbai/Footer";

export const metadata = {
  title: "React Native App Development Company in Mumbai | NNC",
  description:
    "Expert React Native app development in Mumbai. Single codebase for Android and iOS. Faster delivery, lower cost. 80+ apps built. Free consultation.",
};

export default function Layout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: "NNC Digital",
        url: "https://nncmumbai1.netlify.app/react-native-app-development-mumbai",
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
        name: "React Native App Development in Mumbai",
        provider: {
          "@type": "LocalBusiness",
          name: "NNC Digital",
        },
        areaServed: {
          "@type": "Place",
          name: "Mumbai",
        },
        description:
          "React Native app development in Mumbai using a single codebase for Android and iOS, ensuring faster delivery, lower cost, and high performance.",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "React Native Development Benefits & Services",
          itemListElement: [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Single codebase for Android and iOS apps" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Near-native performance with fast UI rendering" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Faster time to market" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Easy maintenance with shared codebase" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Component-based scalable architecture" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "App Store and Play Store deployment" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Post-launch maintenance and updates" } }
          ]
        }
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            "name": "Is React Native good for enterprise apps?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Companies like Facebook, Instagram, and Walmart use React Native in production. It is fully capable for enterprise-grade apps."
            }
          },
          {
            "@type": "Question",
            "name": "Can React Native access device features like camera and GPS?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. React Native supports all native device APIs including camera, GPS, push notifications, biometrics, and more."
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