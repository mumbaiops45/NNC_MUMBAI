import Navbar from "@/components/android-app-development-company-mumbai/Navbar";
import Footer from "@/components/android-app-development-company-mumbai/Footer";

export const metadata = {
 title: "Android App Development Company in Mumbai | मुंबईतील अँड्रॉइड अॅप डेव्हलपमेंट कंपनी | Nakshatra Namaha Creations",
description:
  "Professional Android app development in Mumbai. React Native and native builds. 80+ apps on Play Store. Free consultation. Get your Android app built by NNC. मुंबईमध्ये व्यावसायिक अँड्रॉइड अॅप डेव्हलपमेंट सेवा. React Native आणि native अॅप्स तयार करतो. Play Store वर 80+ अॅप्स. फ्री कन्सल्टेशन. तुमचे अँड्रॉइड अॅप NNC कडून तयार करून घ्या.",
icons: {
  icon: "/logo.avif",
  shortcut: "/logo.avif",
  apple: "/logo.avif",
},
  keywords: [
    "Android App Development Company in Mumbai",
    "Android App Developers in Mumbai",
    "Android App Development Mumbai",

    "Android App Development in Andheri",
    "Android App Development in BKC",
    "Android App Development in Bandra",
    "Android App Development in Lower Parel",
    "Android App Development in Navi Mumbai",

    "Play Store App Development Mumbai",
    "Native Android App Development Mumbai",
    "Custom Android App Development Mumbai",

    "On demand Android apps Mumbai",
    "Delivery app development Mumbai",
    "Healthcare Android app Mumbai",
    "Logistics Android app development Mumbai",
    "E-learning Android apps Mumbai",

    "Business Android app development Mumbai"
  ]
};

export default function Layout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: "Nakshatra Namaha Creations",
        url: "https://nncmumbai1.netlify.app/android-app-development-company-mumbai",
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
        name: "Android App Development Company in Mumbai",
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
          "Professional Android app development in Mumbai including native Android apps and React Native solutions for startups and enterprises. We build scalable apps for delivery, healthcare, logistics, e-learning, and business automation with full Play Store deployment support.",

        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Android Apps We Build",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Customer-facing service booking apps" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "On-demand delivery applications" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Healthcare and patient management apps" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Real estate property search apps" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Event management and ticketing apps" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-learning and ed-tech apps" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Logistics and field tracking apps" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Loyalty and rewards systems" } }
          ]
        },

        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Android App Development Process",
            value:
              "Requirement analysis, UI/UX design, agile sprint development, QA testing, Play Store submission, launch support and maintenance"
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
              text: "Yes. We handle complete Play Store submission including developer account setup, app listing, screenshots, and compliance review."
            }
          },
          {
            "@type": "Question",
            name: "What is the cost of Android app development in Mumbai?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Basic Android apps start from Rs. 80,000. Advanced feature-rich apps range from Rs. 2,00,000 to Rs. 10,00,000+ depending on complexity."
            }
          },
          {
            "@type": "Question",
            name: "Do you provide post-launch support?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We provide bug fixes, updates, performance optimization, and monitoring after your app goes live on the Play Store."
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