"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube ,Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const pathname = usePathname();

  // ✅ Navbar Links
 const menuItems = [
    { name: "HOME", path: "/website-development-company-mumbai" },
   
    
  ];

  // ✅ Services (SEO Optimized Names + Slugs)
  const services = [
    {
      name: "Website Development Company in Mumbai",
      path: "/website-development-company-mumbai",
    },
    {
      name: "Mobile App Development Company in Mumbai",
      path: "/mobile-app-development-company-mumbai",
    },
    {
      name: "Web Design Company in Mumbai",
      path: "/web-design-company-mumbai",
    },
    {
      name: "Custom Web Development Mumbai",
      path: "/custom-web-development-mumbai",
    },
    {
      name: "React Native App Development Mumbai",
      path: "/react-native-app-development-mumbai",
    },
    {
      name: "E-commerce Website Development Mumbai",
      path: "/ecommerce-website-development-mumbai",
    },
    {
      name: "CRM Development Company Mumbai",
      path: "/crm-development-company-mumbai",
    },
    {
      name: "Website Redesign Services Mumbai",
      path: "/website-redesign-services-mumbai",
    },
    {
      name: "Android App Development Company Mumbai",
      path: "/android-app-development-company-mumbai",
    },
    {
      name: "Software Development Company in Thane Mumbai",
      path: "/software-development-company-thane-mumbai",
    },
  ];

  return (
    <footer className="bg-[var(--footer)] text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

        {/* Logo + About */}
        <div>
          <Image
            src="/logo.avif"
            alt="Logo"
            width={60}
            height={25}
            className="object-contain"
          />
          <p className="text-sm leading-7 pt-5 text-white/80">
            NNC is a leading website development company in Mumbai offering
            custom, scalable and SEO-friendly digital solutions for businesses.
          </p>
        </div>

        {/* Quick Links */}
        {/* <div>
          <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-3">
            { menuItems.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className={`transition text-white hover:text-[var(--primary)] `}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div> */}

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Services</h3>
          <ul className="space-y-3">
            {services.map((service, index) => (
              <li key={index}>
                <Link
                  href={service.path}
                  title={service.name}
                  className="text-white/80 hover:text-[var(--primary)] transition"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Contact</h3>

          <ul className="space-y-4 text-white/80">
            <li className="flex gap-2">
              <MapPin className="text-[var(--primary)] shrink-0" />
              Lodha Signet, 302, Kolshet Rd, Kolshet Industrial Area, Thane West, Thane, Maharashtra 400607
            </li>

            <li className="flex gap-2">
              <Phone className="text-[var(--primary)] shrink-0" />
              +91 99005 66466


            </li>

            <li className="flex gap-2">
              <Mail className="text-[var(--primary)] shrink-0" />
              info@nakshatranamahacreations.com
            </li>
          </ul>

          {/* Social Icons */}
         <div className="mt-8 flex gap-3">
  <a
    href="https://www.facebook.com/Nakshatranamahacreations/"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 border border-white rounded-full hover:bg-[var(--primary)] transition"
  >
    <Facebook size={18} />
  </a>

  <a
    href="https://www.instagram.com/nnc.digitalbengaluru/"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 border border-white rounded-full hover:bg-[var(--primary)] transition"
  >
    <Instagram size={18} />
  </a>

  <a
    href="https://www.youtube.com/c/NakshatraNamahaCreations"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 border border-white rounded-full hover:bg-[var(--primary)] transition"
  >
    <Youtube size={18} />
  </a>

  <a
    href="https://www.linkedin.com/company/nakshatra-namaha-creation/"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 border border-white rounded-full hover:bg-[var(--primary)] transition"
  >
    <Linkedin size={18} />
  </a>
</div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-8 py-5 flex flex-col sm:flex-row justify-between items-center text-sm text-white/70">

          <div>
            © {new Date().getFullYear()} NNC. All Rights Reserved.
          </div>

          <Link
            href="/terms"
            className="hover:text-[var(--primary)] transition"
          >
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}