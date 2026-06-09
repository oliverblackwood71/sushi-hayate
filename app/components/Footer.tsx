const footerLinks = [
  { href: "#menu", label: "メニュー" },
  { href: "#gallery", label: "ギャラリー" },
  { href: "#access", label: "アクセス" },
  { href: "#reservation", label: "ご予約" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0c0b09] border-t border-[#c9a84c]/10 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-[#f0ebe0] font-serif font-light text-xl tracking-widest mb-1">
              鮨&nbsp;颯
            </p>
            <p className="text-[#8a7f6e] text-xs">
              〒690-0001 島根県松江市殿町123
            </p>
          </div>

          <nav className="flex gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#8a7f6e] text-xs tracking-widest hover:text-[#c9a84c] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-[#c9a84c]/10 mt-8 pt-8 text-center">
          <p className="text-[#8a7f6e] text-xs">
            © 2024 鮨 颯 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
