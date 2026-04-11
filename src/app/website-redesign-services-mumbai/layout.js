import Navbar from "@/components/website-redesign-services-mumbai/Navbar";
import Footer from "@/components/website-redesign-services-mumbai/Footer";

export const metadata = {
  title: "Professional Website Redesign Services in Mumbai | NNC",
  description:
    "Website redesign services in Mumbai. Old websites transformed into fast, modern, mobile-first experiences. Preserve SEO rankings. Get a free website audit.",
};

export default function Layout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: "NNC Digital",
        url: "https://nncmumbai1.netlify.app/website-redesign-services-mumbai",
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
        name: "Website Redesign Services in Mumbai",
        provider: {
          "@type": "LocalBusiness",
          name: "NNC Digital",
        },
        areaServed: {
          "@type": "Place",
          name: "Mumbai",
        },
        description:
          "Professional website redesign services in Mumbai. We transform outdated websites into fast, mobile-first, SEO-optimized platforms while preserving existing rankings and improving conversions.",
        
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Website Redesign Fixes & Improvements",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Page speed optimisation to under 2 seconds",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Mobile-first responsive redesign",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "SEO structure preservation during migration",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Modern UI with updated brand elements",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Lead capture forms and conversion optimization",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Google Analytics and Search Console setup",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Clear navigation and user flow improvements",
              },
            }
          ],
        },

        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Signs You Need Website Redesign",
            value:
              "Website takes more than 3 seconds to load, looks broken on mobile, no clear CTA, outdated design, low conversions, not ranking on Google",
          }
        ]
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Will a redesign affect my current Google rankings?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We follow SEO-safe migration protocols including 301 redirects, canonical tags, and sitemap resubmission to protect your rankings.",
            },
          },
          {
            "@type": "Question",
            name: "How long does a website redesign take in Mumbai?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A full redesign of a 10 to 15 page website typically takes 4 to 6 weeks.",
            },
          },
          {
            "@type": "Question",
            name: "Do you provide a free website audit?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, NNC Digital offers a free website audit to identify design issues, performance gaps, and SEO problems before redesign.",
            },
          }
        ],
      },
    ],
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