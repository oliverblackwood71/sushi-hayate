const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?w=800&q=80",
    alt: "職人の手元",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    alt: "店内カウンター",
  },
  {
    src: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80",
    alt: "旬の握り",
  },
  {
    src: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&q=80",
    alt: "にぎり盛り合わせ",
  },
  {
    src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80",
    alt: "一品料理",
  },
  {
    src: "https://images.unsplash.com/photo-1563612116625-3012372fccce?w=800&q=80",
    alt: "季節の味",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-28 bg-[#0c0b09]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase mb-4">
            Gallery
          </p>
          <h2 className="text-[#f0ebe0] font-serif font-light text-3xl md:text-4xl">
            ギャラリー
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] overflow-hidden group"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                style={{ backgroundImage: `url('${img.src}')` }}
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500" />
              <span className="sr-only">{img.alt}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
