// src/components/About.jsx
import { useEffect, useRef } from "react";
import aboutPhoto from "../assets/profile2.webp";

const About = ({ id }) => {
  const sectionRef = useRef(null);

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
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
            <span className="text-[#5f5e5e] text-xs font-medium tracking-[2px] uppercase">
              Tentang Saya
            </span>
            <h2
              id="about-heading"
              className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.1] text-[#1b1b1e] mt-4"
            >
              Lulusan SMK
              <br />
              jurusan RPL
              <br />
              dari Sukabumi.
            </h2>
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100 ease-[cubic-bezier(0.22,1,0.36,1)]">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#1b1b1e]/5 via-[#c1c6d7]/5 to-transparent rounded-3xl blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl bg-[#f5f3f6] border border-[#c1c6d7]/20">
                <img
                  src={aboutPhoto}
                  alt="Arif Faturahman - Junior Developer"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#1b1b1e]/90 to-transparent">
                  <p className="text-white/90 text-xs font-medium tracking-wider">
                    ARIF FATURAHMAN ALHAKIM JAENUDIN
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-10 gap-12 mt-20 pt-12 border-t border-[#c1c6d7]/20">
        <div className="md:col-span-3">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200 ease-[cubic-bezier(0.22,1,0.36,1)]">
            <span className="text-[#5f5e5e] text-xs font-medium tracking-[2px] uppercase">
              Filosofi
            </span>
          </div>
        </div>
        <div className="md:col-span-7 space-y-6">
          <p className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300 ease-[cubic-bezier(0.22,1,0.36,1)] text-[#414755] text-lg leading-relaxed tracking-tight">
            Saya adalah Arif Faturahman Alhakim Jaenudin, fresh graduate dari
            SMK Mardi Yuana Cikembar jurusan RPL. Saya tertarik membangun karya
            digital yang rapi, jelas, dan mudah dipahami.
          </p>
          <p className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-400 ease-[cubic-bezier(0.22,1,0.36,1)] text-[#414755] text-lg leading-relaxed tracking-tight">
            Saya berdomisili di Sukabumi dan berkomitmen terus belajar untuk
            menghadirkan pengalaman web yang bersih, modern, dan siap untuk
            kebutuhan masa depan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
