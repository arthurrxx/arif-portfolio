// src/components/About.jsx
import { useEffect, useRef } from "react";
import { useScrollReveal } from "scroll-magic-lite/react";
import aboutPhoto from "../assets/profile2.webp";

const About = ({ id }) => {
  const sectionRef = useRef(null);

  const titleRef = useScrollReveal({
    animation: "fadeUp",
    duration: 800,
    delay: 100,
    once: true,
  });

  const imageRef = useScrollReveal({
    animation: "fadeUp",
    duration: 800,
    delay: 200,
    once: true,
  });

  const descRef = useScrollReveal({
    animation: "fadeUp",
    duration: 800,
    delay: 300,
    once: true,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".animate-on-scroll")
              .forEach((el, i) => {
                setTimeout(() => {
                  el.classList.add("opacity-100", "translate-y-0");
                  el.classList.remove("opacity-0", "translate-y-10");
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
      id={id}
      ref={sectionRef}
      className="max-w-7xl mx-auto px-4 md:px-12 py-16 md:py-20 border-t border-[#c1c6d7]/20 bg-[#f0eef2]"
      aria-labelledby="about-heading"
    >
      <div className="grid md:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
        {/* Bagian Kiri - Judul */}
        <div className="md:col-span-5 lg:col-span-4">
          <div
            ref={titleRef}
            className="sticky top-24 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          >
            <span className="text-[#5f5e5e] text-xs font-medium tracking-[2px] uppercase inline-block">
              Tentang Saya
            </span>
            <h2
              id="about-heading"
              className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-normal tracking-tight leading-[1.1] text-[#1b1b1e] mt-4"
            >
              Lulusan SMK
              <br />
              jurusan RPL
              <br />
              dari Sukabumi.
            </h2>

            <div className="w-12 h-0.5 bg-[#1b1b1e] mt-6 md:mt-8 transition-all duration-1000 delay-500" />
          </div>
        </div>

        {/* Bagian Kanan - Foto & Deskripsi */}
        <div className="md:col-span-7 lg:col-span-8">
          {/* Foto Profile */}
          <div
            ref={imageRef}
            className="relative mb-8 md:mb-10 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-[#1b1b1e]/5 via-[#c1c6d7]/5 to-transparent rounded-3xl blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl bg-[#f5f3f6] border border-[#c1c6d7]/20">
              <img
                src={aboutPhoto}
                alt="Arif Faturahman - Junior Developer"
                className="w-full h-auto max-h-[400px] md:max-h-[500px] object-cover aspect-[4/3] md:aspect-[16/10]"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-[#1b1b1e]/90 to-transparent">
                <p className="text-white/90 text-xs md:text-sm font-medium tracking-wider">
                  ARIF FATURAHMAN ALHAKIM JAENUDIN
                </p>
              </div>
            </div>
          </div>

          {/* Deskripsi */}
          <div ref={descRef} className="space-y-4 md:space-y-6">
            <p className="text-[#414755] text-base md:text-lg lg:text-xl leading-relaxed tracking-tight">
              Saya adalah Arif Faturahman Alhakim Jaenudin, fresh graduate dari
              SMK Mardi Yuana Cikembar jurusan RPL. Saya tertarik membangun
              karya digital yang rapi, jelas, dan mudah dipahami.
            </p>
            <p className="text-[#414755] text-base md:text-lg lg:text-xl leading-relaxed tracking-tight">
              Saya berdomisili di Sukabumi dan berkomitmen terus belajar untuk
              menghadirkan pengalaman web yang bersih, modern, dan siap untuk
              kebutuhan masa depan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
