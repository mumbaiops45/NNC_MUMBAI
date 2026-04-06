import Navbar from "@/components/custom-web-development-mumbai/Navbar";
import Footer from "@/components/Website Development Company in Mumbai/Footer";
export const metadata = {
  title: "Custom CRM Development Company in Mumbai | NNC Digital",
  description: "Custom CRM development in Mumbai. Lead management, sales pipelines, task automation, reporting dashboards. Built on React + Node.js. Free demo available.",
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