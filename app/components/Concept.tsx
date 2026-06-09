export default function Concept() {
  return (
    <section id="concept" className="py-28 bg-[#0c0b09]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div
            className="relative aspect-[4/3] overflow-hidden"
            style={{
              backgroundImage: "url('/images/concept.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Text */}
          <div>
            <p className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase mb-6">
              Our Concept
            </p>
            <h2 className="text-[#f0ebe0] font-serif font-light text-3xl md:text-4xl leading-relaxed mb-8">
              一期一会の
              <br />
              味と時間を。
            </h2>
            <div className="w-8 h-px bg-[#c9a84c] mb-8" />
            <p className="text-[#8a7f6e] text-sm leading-loose">
              その日の海が決める、その日だけの味。
              <br />
              島根の漁師が水揚げした旬の魚介を、
              <br />
              大将が目の前でていねいに握る。
            </p>
            <p className="text-[#8a7f6e] text-sm leading-loose mt-6">
              予約制・カウンター8席のみ。
              <br />
              静かな時間の中で、本物の鮨と向き合ってください。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
