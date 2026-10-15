// src/components/Expertise.jsx
import { useEffect, useRef } from "react";

const expertiseData = [
  {
    icon: (
      <svg
        aria-hidden="true"
        className="h-6 w-6"
        viewBox="0 0 30 30"
        fill="none"
      >
        <rect
          x="2"
          y="2"
          width="26"
          height="26"
          rx="4"
          stroke="#20242c"
          strokeWidth="1.5"
        />
        <path
          d="M2.75 9h24.5M8 9v17.5m7-17.5v17.5m7-17.5v17.5"
          stroke="#20242c"
          strokeWidth="1.5"
        />
      </svg>
    ),
    title: "Desain UI/UX",
    description: "Mendesain antarmuka yang intuitif dan mudah digunakan.",
  },
  {
    icon: (
      <svg
        aria-hidden="true"
        className="h-6 w-6"
        viewBox="0 0 30 30"
        fill="none"
      >
        <path
          d="m10 8-7 7 7 7m10-14 7 7-7 7m-3-18-4 24"
          stroke="#20242c"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Scripting & Kode",
    description: "Membangun fitur web dengan kode yang rapi dan efisien.",
  },
  {
    icon: (
      <svg
        aria-hidden="true"
        className="h-6 w-6"
        viewBox="0 0 30 30"
        fill="none"
      >
        <path
          d="M15 2.5v5m0 15v5m12.5-12.5h-5m-15 0h-5m21.34-8.84-3.54 3.54m-10.6 10.6-3.54 3.54m17.68 0-3.54-3.54m-10.6-10.6-3.54-3.54"
          stroke="#20242c"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="15" cy="15" r="5.5" stroke="#20242c" strokeWidth="1.5" />
        <path
          d="M15 12.5v5m-2.5-2.5h5"
          stroke="#20242c"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Desain Gerak",
    description: "Menambahkan animasi halus dan interaksi mikro.",
  },
];

const Expertise = () => {
  const sectionRef = useRef(null);

  const handleCardPointerMove = (event) => {
    if (event.pointerType !== "mouse") return;

    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    card.style.setProperty("--pointer-x", `${x * 100}%`);
    card.style.setProperty("--pointer-y", `${y * 100}%`);
    card.style.setProperty("--tilt-x", `${(x - 0.5) * 4}deg`);
    card.style.setProperty("--tilt-y", `${(0.5 - y) * 4}deg`);
  };

  const resetCardPointer = (event) => {
    const card = event.currentTarget;
    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
  };

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".expertise-card");
    if (!cards) return undefined;

    if (!("IntersectionObserver" in window)) {
      cards.forEach((card) => card.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 md:py-20 border-t border-[#e5e7eb] bg-[#f5f5f5]"
      aria-labelledby="expertise-heading"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-12">
            <div className="mb-8 flex flex-col gap-4 sm:mb-10 md:mb-12 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="text-[10px] font-medium uppercase tracking-[2px] text-[#667085] md:text-xs">
                  Yang Saya Lakukan
                </span>
                <h2
                  id="expertise-heading"
                  className="mt-2 font-['Manrope'] text-3xl font-bold tracking-tight text-[#20242c] sm:text-4xl md:text-5xl"
                >
                  Keahlian
                </h2>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3 md:gap-5 lg:gap-6">
              {expertiseData.map((item, index) => (
                <article
                  key={item.title}
                  className="expertise-card group flex h-full flex-col rounded-2xl border border-[#e5e7eb] bg-white p-5 sm:p-6 md:min-h-[300px] md:p-6 lg:p-8"
                  style={{ "--card-index": index }}
                  onPointerMove={handleCardPointerMove}
                  onPointerLeave={resetCardPointer}
                >
                  <span className="expertise-spotlight" aria-hidden="true" />
                  <div className="mb-7 flex items-center justify-between sm:mb-9">
                    <div className="expertise-icon flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5f5f5] text-[#20242c]">
                      {item.icon}
                    </div>
                    <span
                      className="font-['Manrope'] text-xs font-semibold tracking-[0.16em] text-[#9ca3af]"
                      aria-hidden="true"
                    >
                      0{index + 1}
                    </span>
                  </div>

                  <div className="mb-4 h-px w-full bg-[#e5e7eb]" />
                  <h3 className="mb-2 font-['Manrope'] text-xl font-semibold tracking-tight text-[#20242c] sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#667085] md:text-[0.95rem]">
                    {item.description}
                  </p>
                  <div
                    className="expertise-card-mark mt-auto ml-auto h-1 w-8 rounded-full bg-[#20242c]"
                    aria-hidden="true"
                  />
                </article>
              ))}
            </div>
      </div>
    </section>
  );
};

export default Expertise;
