import Navbar from "@/components/android-app-development-company-mumbai/Navbar";
import Footer from "@/components/Website Development Company in Mumbai/Footer";
export const metadata = {
  title: "Android App Development Company in Mumbai | NNC Digital",
  description: "Professional Android app development in Mumbai. React Native and native builds. 80+ apps on Play Store. Free consultation. Get your Android app built by NNC.",
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