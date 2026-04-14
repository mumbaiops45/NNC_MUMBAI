import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsappChat from "@/components/WhatsappChat";
import ScrollToTop from "@/components/ScrollToTop";
import CallButton from "@/components/CallButton";


export const metadata = {
  title: "Nakshatra Namaha Creations",
  description: "Nakshatra Namaha Creations - Professional Web Design and Development Services",
  icons: {
  icon: "/logo.avif",
  shortcut: "/logo.avif",
  apple: "/logo.avif",
},
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">
        {children}
        <CallButton />
            <ScrollToTop/>
        <WhatsappChat/>
        </body>
    </html>
  );
}
