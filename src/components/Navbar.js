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
    
  ];

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Image
          src="/logo.avif"
          alt="Logo"
          width={60}
          height={25}
          className="object-contain ml-8"
        />

        {/* Desktop Menu */}
        <div className=" flex items-center gap-8">

          {/* Links */}
         

          {/* 🔥 Request Quote Button */}
          
            <button onClick={() => window.history.back()} className="primary-btn px-5 py-2 rounded-lg transition hover:opacity-90">
              Back
            </button>
         
        </div>

        
      </div>

    
    </nav>
  );
}