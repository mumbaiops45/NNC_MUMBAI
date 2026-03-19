"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const pathname = usePathname();

  // ✅ Navbar Links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Why NNC", path: "/why-nnc" },
    { name: "Services", path: "/services" },
    { name: "FAQ", path: "/faq" },
  ];

  // ✅ Services List
  const services = [
    "Corporate websites",
    "E-commerce development",
    "Real estate portals",
    "Healthcare websites",
    "Landing page design",
    "WordPress & CMS development",
    "Custom web applications",
    "Website redesign",
  ];

  return (
    <footer className="bg-[#002a3a] text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

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
        <div>
          <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className={`transition ${
                    pathname === link.path
                      ? "text-[var(--primery)]"
                      : "hover:text-[var(--primery)]"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Services</h3>
          <ul className="space-y-3">
            {services.map((service, index) => (
              <li
                key={index}
                className="text-white/80 hover:text-[var(--primery)] transition cursor-pointer"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Contact</h3>

          <ul className="space-y-4 text-white/80">
            <li className="flex gap-2">
              <MapPin className="text-[var(--primery)]" />
              Thane West, Mumbai, Maharashtra, India
            </li>

            <li className="flex gap-2">
              <Phone className="text-[var(--primery)]" />
              +91 98765 43210
            </li>

            <li className="flex gap-2">
              <Mail className="text-[var(--primery)]" />
              info@nnc.com
            </li>
          </ul>

          {/* Social Icons */}
          <div className="mt-8 flex gap-3">
            <a className="p-3 border border-white rounded-full hover:bg-[var(--primery)] transition">
              <Facebook size={18} />
            </a>
            <a className="p-3 border border-white rounded-full hover:bg-[var(--primery)] transition">
              <Instagram size={18} />
            </a>
            <a className="p-3 border border-white rounded-full hover:bg-[var(--primery)] transition">
              <Youtube size={18} />
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
            href="/terms-and-conditions"
            className="hover:text-[var(--primery)] transition"
          >
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}