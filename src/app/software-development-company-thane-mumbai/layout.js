import Navbar from "@/components/software-development-company-thane-mumbai/Navbar";
import Footer from "@/components/Website Development Company in Mumbai/Footer";
export const metadata = {
  title: "Software Development Company in Thane Mumbai | NNC Digital",
  description: "Software development company in Thane, Mumbai. Web apps, mobile apps, CRM, custom software. Local office in Thane West. 10+ years experience. Free consultation.",
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