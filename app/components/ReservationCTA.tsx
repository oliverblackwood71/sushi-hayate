export default function ReservationCTA() {
  return (
    <section
      id="reservation"
      className="relative py-36 flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/reservation-bg.png')",
        }}
      />
      <div className="absolute inset-0 bg-[#0c0b09]/82" />

      <div className="relative z-10 text-center px-6">
        <p className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase mb-10">
          Reservation
        </p>
        <h2 className="text-[#f0ebe0] font-serif font-light text-3xl md:text-5xl leading-relaxed mb-3">
          特別な一夜のために、
        </h2>
        <h2 className="text-[#f0ebe0] font-serif font-light text-3xl md:text-5xl leading-relaxed mb-14">
          ご予約をお待ちしております。
        </h2>

        <a
          href="tel:0852000000"
          className="inline-block border border-[#c9a84c] text-[#c9a84c] px-12 py-4 text-xs tracking-[0.2em] hover:bg-[#c9a84c] hover:text-[#0c0b09] transition-all duration-300"
        >
          お電話でご予約
        </a>

        <p className="text-[#c9a84c] text-xl tracking-widest mt-8">
          0852-00-0000
        </p>
        <p className="text-[#8a7f6e] text-xs tracking-wider mt-2">
          営業時間内にお電話ください
        </p>
      </div>
    </section>
  );
}
