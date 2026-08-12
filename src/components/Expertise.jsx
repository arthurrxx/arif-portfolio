// src/components/Expertise.jsx
import { useEffect, useRef } from "react";

const expertiseData = [
  {
    icon: (
      <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 30 30" fill="none">
        <rect
          x="2"
          y="2"
          width="26"
          height="26"
          rx="6"
          stroke="#1b1b1e"
          strokeWidth="1.5"
        />
        <path d="M9 9L21 21M9 21L21 9" stroke="#1b1b1e" strokeWidth="1.5" />
      </svg>
    ),
    title: "Desain UI/UX",
    description:
      "Membuat antarmuka yang intuitif, rapi, dan mudah digunakan dengan pengalaman yang bersih.",
  },
  {
    icon: (
      <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 30 27" fill="none">
        <path
          d="M15 1L18.5 10H28L20.5 16L24 25L15 19L6 25L9.5 16L2 10H11.5L15 1Z"
          stroke="#1b1b1e"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Identitas Brand",
    description:
      "Menyusun sistem visual yang konsisten agar brand tampil lebih premium dan terpercaya.",
  },
  {
    icon: (
      <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 30 30" fill="none">
        <circle cx="15" cy="15" r="12" stroke="#1b1b1e" strokeWidth="1.5" />
        <path
          d="M15 5V9M15 21V25M9 15H5M25 15H21"
          stroke="#1b1b1e"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="15" cy="15" r="3" stroke="#1b1b1e" strokeWidth="1.5" />
      </svg>
    ),
    title: "Desain Gerak",
    description:
      "Menghadirkan animasi halus dan mikro-interaksi yang membuat pengalaman digital terasa lebih hidup.",
  },
];

const Expertise = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".expertise-card")
              .forEach((card, i) => {
                setTimeout(() => {
                  card.classList.add("opacity-100", "translate-y-0");
                  card.classList.remove("opacity-0", "translate-y-10");
                }, i * 120);
              });
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
      ref={sectionRef}
      className="max-w-7xl mx-auto px-4 md:px-12 py-16 md:py-20 border-t border-[#c1c6d7]/20 bg-[#f0eef2]"
      aria-labelledby="expertise-heading"
    >
      <div className="mb-8 md:mb-12">
        <span className="text-[#5f5e5e] text-[10px] md:text-xs font-medium tracking-[2px] uppercase">
          Yang Saya Lakukan
        </span>
        <h2
          id="expertise-heading"
          className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#1b1b1e] mt-2"
        >
          Keahlian
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-4 md:gap-6">
        {expertiseData.map((item, index) => (
          <div
            key={index}
            className="expertise-card opacity-0 translate-y-10 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] rounded-2xl border border-[#c1c6d7]/10 bg-white/80 backdrop-blur-sm p-5 md:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-400 group"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="mb-3 md:mb-5 text-[#1b1b1e] group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <h3 className="font-['Playfair_Display'] text-xl md:text-3xl font-normal text-[#1b1b1e] mb-2 md:mb-3">
              {item.title}
            </h3>
            <p className="text-[#414755] text-sm md:text-base leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
