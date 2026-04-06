import Navbar from "@/components/ecommerce-website-development-mumbai/Navbar";
import Footer from "@/components/Website Development Company in Mumbai/Footer";
export const metadata = {
  title: "E-commerce Website Development Company in Mumbai | NNC",
  description: "Custom e-commerce development in Mumbai. WooCommerce, Shopify, React-based stores. Mobile-first, fast-loading, SEO-ready. Get your online store live in 21 days.",
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