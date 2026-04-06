import Navbar from "@/components/website-redesign-services-mumbai/Navbar";
import Footer from "@/components/Website Development Company in Mumbai/Footer";
export const metadata = {
  title: "Best Website Development Company in Mumbai | NNC Digital",
  description: "Top-rated website development company in Mumbai. Custom websites, React & Next.js builds, SEO-ready. 565+ projects delivered. Get a free quote today.",
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