"use client";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  return (
    <button
      onClick={() =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
       className="fixed bottom-12 right-6 z-60
w-12 h-12
bg-[linear-gradient(135deg,_rgb(37,99,235),_rgb(14,165,233))]
hover:scale-105
p-4 rounded-2xl shadow-lg 
transition duration-300 
flex items-center justify-center"
>
      <ArrowUp size={24} strokeWidth={2} />
    </button>
  );
}