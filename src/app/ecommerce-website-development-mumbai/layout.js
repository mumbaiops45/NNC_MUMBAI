import Navbar from "@/components/ecommerce-website-development-mumbai/Navbar";
import Footer from "@/components/Website Development Company in Mumbai/Footer";
export const metadata = {
  title: "Mobile App Development Company in Mumbai | NNC Digital",
  description: "Custom Android & iOS mobile app development in Mumbai. React Native, cross-platform builds. 80+ apps delivered. Free consultation. Call NNC today.",
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