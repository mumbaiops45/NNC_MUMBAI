"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "HOME", path: "/website-development-company-mumbai" },
    { name: "Why NNC", path: "#Why_Us" },
    { name: "Services", path: "#Services" },
    { name: "Tech Stack", path: "#Tech_Stack" },
    { name: "FAQ", path: "#FAQ" },
    
  ];

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/website-development-company-mumbai">
  <Image
    src="/logo.avif"
    alt="Logo"
    width={60}
    height={25}
    className="object-contain ml-8 cursor-pointer"
  />
</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          {/* Links */}
          {menuItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.name}
                href={item.path}
                className={`transition ${
                  isActive
                    ? "text-[var(--primery)] font-semibold"
                    : "text-black hover:text-[var(--primery)]"
                }`}
              >
                {item.name}
              </Link>
            );
          })}

          {/* 🔥 Request Quote Button */}
          <Link href="#CTA">
            <button className="primary-btn px-5 py-2 rounded-lg transition hover:opacity-90">
              Request a Quote
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4">
          <div className="flex flex-col gap-4">

            {menuItems.map((item) => {
              const isActive = pathname === item.path;

              return (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`transition ${
                    isActive
                      ? "text-[var(--primery)] font-semibold"
                      : "text-black hover:text-[var(--primery)]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* Mobile Button */}
            <Link href="#CTA">
              <button className="primary-btn px-5 py-2 rounded-lg mt-2">
                Request a Quote
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}