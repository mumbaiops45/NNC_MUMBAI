import Navbar from "@/components/custom-web-development-mumbai/Navbar";
import Footer from "@/components/Website Development Company in Mumbai/Footer";
export const metadata = {
  title: "React Native App Development Company in Mumbai | NNC",
  description: "Expert React Native app development in Mumbai. Single codebase for Android and iOS. Faster delivery, lower cost. 80+ apps built. Free consultation.",
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