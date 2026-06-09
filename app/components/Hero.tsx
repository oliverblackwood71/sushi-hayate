export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1920&q=80')",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <p className="text-[#c9a84c] tracking-[0.4em] text-xs uppercase mb-10">
          Shimane&nbsp;/&nbsp;Japan
        </p>
        <h1 className="text-[#f0ebe0] font-serif font-light text-5xl md:text-7xl leading-tight mb-6">
          島根の海が、
          <br />
          器に宿る。
        </h1>
        <p className="text-[#a09880] text-sm md:text-base mb-14 tracking-wider">
          地元の旬を、職人の手で。
        </p>
        <div className="flex gap-6 justify-center flex-wrap">
          <a
            href="#reservation"
            className="border border-[#c9a84c] text-[#c9a84c] px-8 py-3 text-xs tracking-widest hover:bg-[#c9a84c] hover:text-[#0c0b09] transition-all duration-300"
          >
            ご予約はこちら
          </a>
          <a
            href="#menu"
            className="flex items-center gap-2 text-[#f0ebe0] text-xs tracking-widest hover:text-[#c9a84c] transition-colors duration-300"
          >
            メニューを見る
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-[#c9a84c] text-[10px] tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-[#c9a84c] animate-pulse" />
      </div>
    </section>
  );
}
