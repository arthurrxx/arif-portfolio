// src/components/Clients.jsx
import { useEffect, useRef } from "react";

const clients = ["VOGUE", "AESOP", "LEICA", "KINFORK", "HERMÈS", "RIMOWA"];

const Clients = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId;
    let scrollPosition = 0;
    const speed = 0.8;

    const animate = () => {
      scrollPosition += speed;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
      animationId = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate();
          } else {
            cancelAnimationFrame(animationId);
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(containerRef.current);

    return () => {
      cancelAnimationFrame(animationId);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full max-w-full overflow-hidden border-t border-[#c1c6d7]/20 bg-white/70 py-16 md:py-20"
      aria-labelledby="clients-heading"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-12 mb-8 md:mb-12">
        <span className="text-[#5f5e5e] text-[10px] md:text-xs font-medium tracking-[2px] uppercase">
          Dipercaya Oleh
        </span>
        <h2
          id="clients-heading"
          className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#1b1b1e] mt-2"
        >
          Klien
        </h2>
      </div>

      {/* Container scrolling - FULL tanpa padding */}
      <div className="relative overflow-hidden border-y border-[#c1c6d7]/10 bg-[#f5f3f6]/50 py-8 md:py-10 w-full">
        <div
          ref={scrollRef}
          className="flex items-center gap-12 md:gap-16 lg:gap-20 whitespace-nowrap will-change-transform"
          style={{
            width: "fit-content",
            paddingLeft: "0",
            paddingRight: "0",
          }}
        >
          {/* Duplikat 6 kali agar lebih panjang dan full */}
          {[
            ...clients,
            ...clients,
            ...clients,
            ...clients,
            ...clients,
            ...clients,
          ].map((client, index) => (
            <span
              key={index}
              className="font-['Playfair_Display'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#414755] opacity-40 hover:opacity-70 transition-opacity duration-300 whitespace-nowrap"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
