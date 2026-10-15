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
      className="w-full border-t border-[#e5e7eb] bg-[#f5f5f5] py-14 sm:py-16 lg:py-24"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid items-start gap-8 md:grid-cols-2 md:gap-10 lg:gap-16">
          <div className="md:pt-8 lg:pt-12">
            <div
              ref={titleRef}
              className="transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            >
              <span className="inline-block text-xs font-medium uppercase tracking-[2px] text-[#667085]">
                Tentang Saya
              </span>
              <h2
                id="about-heading"
                className="mt-3 font-['Manrope'] text-4xl font-bold leading-[1.08] tracking-tight text-[#20242c] sm:text-5xl md:text-[2.75rem] lg:mt-4 lg:text-6xl"
              >
                Lulusan SMK
                <br />
                jurusan RPL
                <br />
                dari Sukabumi.
              </h2>
              <div className="mt-5 h-0.5 w-12 bg-[#20242c] transition-all duration-1000 delay-500 md:mt-7" />
            </div>
          </div>

          <div>
            <div
              ref={imageRef}
              className="relative mb-6 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:mb-8 lg:mb-9"
            >
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#20242c]/[0.03] via-[#e5e7eb]/40 to-transparent blur-2xl sm:-inset-4" />
              <div className="relative overflow-hidden rounded-xl border border-[#e5e7eb] bg-white sm:rounded-2xl">
                <img
                  src={aboutPhoto.src}
                  alt="Arif Faturahman - Junior Developer"
                  className="aspect-[4/3] max-h-[400px] w-full object-cover md:aspect-[16/10] md:max-h-[430px]"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#20242c]/90 to-transparent p-3 sm:p-5">
                  <p className="text-[10px] font-medium tracking-wider text-white/90 sm:text-xs md:text-sm">
                    ARIF FATURAHMAN ALHAKIM JAENUDIN
                  </p>
                </div>
              </div>
            </div>

            <div
              ref={descRef}
              className="max-w-2xl space-y-4 md:space-y-5"
            >
              <p className="text-base leading-relaxed tracking-tight text-[#475467] md:text-[0.95rem] lg:text-lg">
                Saya Arif Faturahman Alhakim Jaenudin, lulusan Rekayasa
                Perangkat Lunak dari SMK Mardi Yuana Cikembar. Saya berfokus
                pada web development dan tertarik membangun situs yang
                fungsional, terstruktur, serta mudah digunakan.
              </p>
              <p className="text-base leading-relaxed tracking-tight text-[#475467] md:text-[0.95rem] lg:text-lg">
                Saya juga mempelajari dasar-dasar cybersecurity untuk memahami
                cara menjaga keamanan aplikasi web. Saya terus mengembangkan
                keterampilan agar dapat menghadirkan pengalaman digital yang
                modern dan aman.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
