const SelectedWorks = ({ id }) => (
  <section
    id={id}
    className="max-w-7xl mx-auto px-4 md:px-12 py-16 md:py-20 border-t border-[#c1c6d7]/10 bg-white/70"
    aria-labelledby="selected-works-title"
  >
    <div className="mb-12">
      <span className="text-[#5f5e5e] text-xs font-medium tracking-[2px] uppercase">
        Karya
      </span>
      <h2
        id="selected-works-title"
        className="font-['Playfair_Display'] text-4xl sm:text-5xl font-normal tracking-tight text-[#1b1b1e] mt-2"
      >
        Karya Terpilih
      </h2>
    </div>

    <div
      role="status"
      className="rounded-2xl border border-[#c1c6d7]/30 bg-[#f0eef2]/60 px-6 py-12 text-center"
    >
      <p className="font-['Playfair_Display'] text-2xl text-[#1b1b1e]">
        Belum ada karya yang ditampilkan
      </p>
      <p className="mt-2 text-sm leading-relaxed text-[#5f5e5e]">
        Karya pilihan akan ditampilkan di sini.
      </p>
    </div>
  </section>
);

export default SelectedWorks;
