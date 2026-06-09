export default function Access() {
  return (
    <section id="access" className="py-28 bg-[#161411]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase mb-4">
            Access
          </p>
          <h2 className="text-[#f0ebe0] font-serif font-light text-3xl md:text-4xl">
            アクセス
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <p className="text-[#c9a84c] text-xs tracking-widest uppercase mb-3">
                Address
              </p>
              <p className="text-[#f0ebe0] text-sm leading-loose">
                〒690-0001
                <br />
                島根県松江市殿町123
              </p>
            </div>

            <div className="w-full h-px bg-[#c9a84c]/10" />

            <div>
              <p className="text-[#c9a84c] text-xs tracking-widest uppercase mb-3">
                Hours
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-[#f0ebe0]">
                  ランチ&emsp;12:00 – 14:00
                  <span className="text-[#8a7f6e] text-xs ml-2">（要予約）</span>
                </p>
                <p className="text-[#f0ebe0]">
                  ディナー&emsp;18:00 – 22:00
                  <span className="text-[#8a7f6e] text-xs ml-2">（L.O. 21:30）</span>
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-[#c9a84c]/10" />

            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-[#c9a84c] text-xs tracking-widest uppercase mb-3">
                  Closed
                </p>
                <p className="text-[#f0ebe0] text-sm">月曜日・不定休</p>
              </div>
              <div>
                <p className="text-[#c9a84c] text-xs tracking-widest uppercase mb-3">
                  Seats
                </p>
                <p className="text-[#f0ebe0] text-sm">
                  カウンター 8席
                  <br />
                  <span className="text-[#8a7f6e] text-xs">完全予約制</span>
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-[#c9a84c]/10" />

            <div>
              <p className="text-[#c9a84c] text-xs tracking-widest uppercase mb-3">
                Tel
              </p>
              <a
                href="tel:0852000000"
                className="text-[#f0ebe0] text-lg tracking-wider hover:text-[#c9a84c] transition-colors duration-300"
              >
                0852-00-0000
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="aspect-[4/3] overflow-hidden border border-[#c9a84c]/10">
            <iframe
              src="https://maps.google.com/maps?q=島根県松江市殿町&z=16&output=embed&hl=ja"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(0.8)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="鮨 颯 アクセスマップ"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
