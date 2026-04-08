import Navbar from "@/components/Website Development Company in Mumbai/Navbar";
import Footer from "@/components/Website Development Company in Mumbai/Footer";

export const metadata = {
  title: "Best Website Development Company in Mumbai | NNC Digital",
  description:
    "Top-rated website development company in Mumbai. Custom websites, React & Next.js builds, SEO-ready. 565+ projects delivered. Get a free quote today.",
};

export default function Layout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: "NNC Digital",
        url: "https://nncmumbai1.netlify.app/website-development-company-mumbai",
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
        name: "Website Development Company in Mumbai",
        provider: {
          "@type": "LocalBusiness",
          name: "NNC Digital",
        },
        areaServed: {
          "@type": "Place",
          name: "Mumbai",
        },
        description:
          "Custom websites built for Mumbai businesses using React.js, Next.js, and WordPress. Fast, scalable, and SEO-ready.",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How long does it take to build a website in Mumbai?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A standard business website takes 3 to 4 weeks. E-commerce and custom portals take 6 to 12 weeks depending on scope.",
            },
          },
          {
            "@type": "Question",
            name: "What is the cost of website development in Mumbai?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Basic websites start from Rs. 24,999. Custom applications and portals are quoted based on scope.",
            },
          },
          {
            "@type": "Question",
            name: "Do you provide website maintenance after launch?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We offer annual maintenance contracts covering security, updates, speed, and backups.",
            },
          },
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

      <main className="pt-23">{children}</main>

      <Footer />
    </>
  );
}