// src/components/SelectedWorks.jsx
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    id: 1,
    description:
      "Desain landing page yang responsif dan modern dengan animasi halus.",
    gradient: "from-[#1a1a2e] to-[#16213e]",
    accent: "from-blue-400/30 to-indigo-400/20",
  },
  {
    id: 2,
    description: "Membangun sistem desain yang konsisten untuk produk digital.",
    gradient: "from-[#2d1b0e] to-[#1a0f08]",
    accent: "from-amber-400/30 to-orange-400/20",
  },
  {
    id: 3,
    description: "Website portfolio dengan pengalaman pengguna yang immersive.",
    gradient: "from-[#0d1f1a] to-[#061210]",
    accent: "from-emerald-400/30 to-teal-400/20",
  },
  {
    id: 4,
    description:
      "Aplikasi mobile dengan antarmuka yang intuitif dan user-friendly.",
    gradient: "from-[#1e0d1a] to-[#120a10]",
    accent: "from-rose-400/30 to-pink-400/20",
  },
];

const SelectedWorks = ({ id }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className="max-w-7xl mx-auto px-4 md:px-12 py-16 md:py-20 border-t border-[#c1c6d7]/10 bg-white/70"
      aria-labelledby="selected-works-title"
    >
      {/* Header */}
      <div className="mb-12">
        <span className="text-[#5f5e5e] text-xs font-medium tracking-[2px] uppercase">
          Portofolio
        </span>
        <h2
          id="selected-works-title"
          className="font-['Playfair_Display'] text-4xl sm:text-5xl font-normal tracking-tight text-[#1b1b1e] mt-2"
        >
          Karya Terpilih
        </h2>
      </div>

      {/* Grid - 4 kotak */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {projects.map((project, index) => {
          const delay = index * 0.1;

          return (
            <div
              key={project.id}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] h-[280px] md:h-[340px] lg:h-[420px] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${delay}s`,
              }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-700 group-hover:scale-105`}
              />
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.accent}`}
              />

              {/* Pattern Overlay */}
              <div className="absolute inset-0 opacity-[0.05] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzR2LTRoNHY0aC00em0wIDB2LTRoLTR2NGg0eiIvPjwvZz48L2c+PC9zdmc+')] bg-repeat" />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Caption */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  hoveredId === project.id
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-full"
                }`}
              >
                <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 mt-3 md:mt-4">
                  <span className="text-white/60 text-[10px] md:text-xs font-medium tracking-wider uppercase">
                    Lihat Proyek
                  </span>
                  <svg
                    className="w-3 h-2 md:w-4 md:h-3 text-white/60 group-hover:translate-x-1 transition-transform"
                    viewBox="0 0 16 12"
                    fill="none"
                  >
                    <path
                      d="M1 6H15M15 6L10 1M15 6L10 11"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Border Glow */}
              <div
                className={`absolute inset-0 rounded-2xl border transition-all duration-500 ${
                  hoveredId === project.id
                    ? "border-white/20 shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)]"
                    : "border-white/0"
                }`}
              />
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <button
          className="group inline-flex items-center gap-3 px-8 py-3 bg-[#1b1b1e] rounded-full hover:bg-[#333] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          onClick={() => {
            alert("Semua karya akan ditampilkan di sini!");
          }}
        >
          <span className="text-[#faf8fa] text-xs font-medium tracking-wider">
            Lihat Semua Karya
          </span>
          <svg
            className="w-4 h-3 text-[#faf8fa] group-hover:translate-x-1 transition-transform"
            viewBox="0 0 16 12"
            fill="none"
          >
            <path
              d="M1 6H15M15 6L10 1M15 6L10 11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default SelectedWorks;
