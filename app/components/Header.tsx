"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { href: "#menu", label: "メニュー" },
  { href: "#gallery", label: "ギャラリー" },
  { href: "#access", label: "アクセス" },
  { href: "#reservation", label: "ご予約" },
];

const memberLink = { href: "/mypage", label: "会員証" };

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0c0b09]/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a
          href="#hero"
          className="text-[#f0ebe0] font-serif font-light text-xl tracking-widest"
        >
          鮨&nbsp;颯
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#a09880] text-xs tracking-widest hover:text-[#c9a84c] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href={memberLink.href}
            className="border border-[#c9a84c]/40 text-[#c9a84c] text-xs tracking-widest px-4 py-1.5 hover:bg-[#c9a84c] hover:text-[#0c0b09] transition-all duration-300"
          >
            {memberLink.label}
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1 text-[#f0ebe0]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニューを開く"
        >
          <span
            className={`block w-6 h-px bg-current transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-current transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-current transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-[#0c0b09]/98 border-t border-[#c9a84c]/10 overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-6 py-4 text-[#a09880] text-sm tracking-widest hover:text-[#c9a84c] border-b border-[#c9a84c]/5 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={memberLink.href}
            className="px-6 py-4 text-[#c9a84c] text-sm tracking-widest border-b border-[#c9a84c]/5 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            {memberLink.label}
          </a>
        </nav>
      </div>
    </header>
  );
}
