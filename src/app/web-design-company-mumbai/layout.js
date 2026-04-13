import Navbar from "@/components/Web Design Company in Mumbai/Navbar";
import Footer from "@/components/Web Design Company in Mumbai/Footer";

export const metadata = {
  title: "Best Web Design Company in Mumbai | Nakshatra Namaha Creations",
  description:
    "Award-worthy web design company in Mumbai. UI/UX design, responsive layouts, brand-consistent pages. 565+ projects. Get a free design mockup today.",
icons: {
  icon: "/logo.avif",
  shortcut: "/logo.avif",
  apple: "/logo.avif",
},
  keywords: [
    "Web Design Company in Mumbai",
    "Web Design Company in Andheri",
    "Web Design Company in BKC",
    "Web Design Company in Bandra",
    "Web Design Company in Lower Parel",
    "Web Design Company in Navi Mumbai",

    "Website UI UX Design Mumbai",
    "Responsive Web Design Mumbai",
    "Landing Page Design Mumbai",
    "E-commerce Web Design Mumbai",
    "Website Redesign Mumbai",
    "Brand Identity Web Design Mumbai",

    "UI UX Design Services Mumbai",
    "Wireframe and Prototype Design Mumbai",
    "Mobile First Web Design Mumbai"
  ]
};

export default function Layout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: "Nakshatra Namaha Creations",
        url: "https://nncmumbai1.netlify.app/web-design-company-mumbai",
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
        name: "Web Design Company in Mumbai",
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
          "Professional web design services in Mumbai including UI/UX design, responsive mobile-first layouts, landing page design, e-commerce product page design, brand identity integration, wireframing, prototyping, and website redesign services for modern businesses.",

        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Web Design Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "UI/UX design for websites and apps" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Responsive mobile-first design" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Landing page design for lead generation" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-commerce product page design" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brand identity integration" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wireframing and prototype design" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website redesign and revamp" } }
          ]
        }
      },

      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the cost of web design in Mumbai?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Design-only projects start from Rs. 15,000. Full design and development packages start from Rs. 24,999."
            }
          },
          {
            "@type": "Question",
            name: "How long does web design take?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For a 5 to 8 page website, design is completed within 7 to 10 working days after content approval."
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