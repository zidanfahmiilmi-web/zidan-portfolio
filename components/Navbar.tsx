"use client";

import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        bg-white/10 border-b border-white/20
        backdrop-blur-md shadow-md
      "
    >
      <div
        className="
          max-w-6xl mx-auto px-4 md:px-6 py-4
          flex justify-between items-center
        "
      >
        {/* LOGO */}
        <h1 className="text-lg md:text-xl font-bold text-white">
          Zidan Fahmi I
        </h1>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-8 text-slate-200">
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#experience" className="hover:text-blue-400 transition">Experience</a>
          <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          <LanguageSwitcher />
        </div>

        {/* MENU MOBILE BUTTON */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* MENU MOBILE DROPDOWN */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/90 backdrop-blur-md px-6 py-4 space-y-4 text-slate-200">
          <a href="#about" className="block hover:text-blue-400 transition">About</a>
          <a href="#experience" className="block hover:text-blue-400 transition">Experience</a>
          <a href="#skills" className="block hover:text-blue-400 transition">Skills</a>
          <a href="#contact" className="block hover:text-blue-400 transition">Contact</a>
          <LanguageSwitcher />
        </div>
      )}
    </nav>
  );
}
