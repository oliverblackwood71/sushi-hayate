const galleryImages = [
  { src: "/images/gallery-01.png", alt: "職人の手元" },
  { src: "/images/gallery-02.png", alt: "にぎり盛り合わせ" },
  { src: "/images/gallery-03.png", alt: "まぐろの握り" },
  { src: "/images/gallery-04.png", alt: "茶碗蒸し" },
  { src: "/images/gallery-05.png", alt: "島根の漁港" },
  { src: "/images/menu-omakase.png", alt: "おまかせにぎり" },
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
