import Navbar from "@/components/custom-web-development-mumbai/Navbar";
import Footer from "@/components/Website Development Company in Mumbai/Footer";
export const metadata = {
  title: "Custom Web Development Company in Mumbai | NNC Digital",
  description: "Custom web development in Mumbai. Bespoke portals, CRMs, marketplaces, booking engines. React, Node.js, MongoDB stack. 10+ years experience. Get a quote.",
};

export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      <main className="pt-23">
        {children}
      </main>
      <Footer />
    </>
  );
}