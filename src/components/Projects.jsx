const Projects = ({ id }) => (
  <section
    id={id}
    className="w-full py-16 md:py-20 border-t border-[#e5e7eb] bg-white"
    aria-labelledby="selected-works-title"
  >
    <div className="max-w-7xl mx-auto px-4 md:px-12">
      <div className="mb-12">
        <span className="text-[#667085] text-xs font-medium tracking-[2px] uppercase">
          Karya
        </span>
        <h2
          id="selected-works-title"
          className="font-['Manrope'] text-4xl sm:text-5xl font-bold tracking-tight text-[#20242c] mt-2"
        >
          Karya Terpilih
        </h2>
      </div>

      <div
        role="status"
        className="rounded-2xl border border-[#e5e7eb] bg-[#f5f5f5] px-6 py-12 text-center"
      >
        <p className="font-['Manrope'] text-2xl font-semibold text-[#20242c]">
          Belum ada karya yang ditampilkan
        </p>
        <p className="mt-2 text-sm leading-relaxed text-[#667085]">
          Karya pilihan akan ditampilkan di sini.
        </p>
      </div>
    </div>
  </section>
);

export default Projects;
