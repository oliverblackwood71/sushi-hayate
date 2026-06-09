const menuItems = [
  {
    id: "omakase",
    name: "おまかせコース",
    description:
      "旬の握り10貫＋一品料理。大将おすすめの構成でお楽しみください。",
    price: "¥15,000〜",
    image:
      "https://images.unsplash.com/photo-1562802378-063ec186a863?w=800&q=80",
  },
  {
    id: "nigiri",
    name: "旬の握り（お好み）",
    description:
      "その日入荷した魚介からお好みで。大トロ・のどぐろ・いくらなど。",
    price: "¥500〜/貫",
    image:
      "https://images.unsplash.com/photo-1563612116625-3012372fccce?w=800&q=80",
  },
  {
    id: "moriwase",
    name: "特選盛り合わせ",
    description:
      "刺身と握りを組み合わせた贅沢な盛り合わせ。2名様より。",
    price: "¥8,000〜/人",
    image:
      "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=800&q=80",
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-28 bg-[#161411]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase mb-4">
            Menu
          </p>
          <h2 className="text-[#f0ebe0] font-serif font-light text-3xl md:text-4xl">
            お品書き
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <article
              key={item.id}
              className="border border-[#c9a84c]/15 overflow-hidden group"
            >
              {/* Image */}
              <div
                className="h-52 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              {/* Content */}
              <div className="p-6 bg-[#161411]">
                <p
                  className="text-sm tracking-widest mb-3 font-light"
                  style={{ color: "#c9a84c" }}
                >
                  {item.price}
                </p>
                <h3 className="text-[#f0ebe0] font-serif text-lg mb-3">
                  {item.name}
                </h3>
                <p className="text-[#8a7f6e] text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center text-[#8a7f6e] text-xs tracking-wider mt-10">
          ※ 価格は税込みです。季節により内容が変わります。
        </p>
      </div>
    </section>
  );
}
