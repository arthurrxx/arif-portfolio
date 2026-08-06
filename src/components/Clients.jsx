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
      className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-[#c1c6d7]/20"
      aria-labelledby="clients-heading"
    >
      <div className="mb-12">
        <span className="text-[#5f5e5e] text-xs font-medium tracking-[2px] uppercase">
          Dipercaya Oleh
        </span>
        <h2
          id="clients-heading"
          className="font-['Playfair_Display'] text-4xl sm:text-5xl font-normal tracking-tight text-[#1b1b1e] mt-2"
        >
          Klien
        </h2>
      </div>

      <div className="relative overflow-hidden border-y border-[#c1c6d7]/10 bg-[#f5f3f6]/50 py-8">
        <div
          ref={scrollRef}
          className="flex items-center gap-16 md:gap-20 whitespace-nowrap will-change-transform"
          style={{ width: "fit-content" }}
        >
          {/* Duplikat 4 kali agar lebih panjang */}
          {[...clients, ...clients, ...clients, ...clients].map(
            (client, index) => (
              <span
                key={index}
                className="font-['Playfair_Display'] text-2xl sm:text-3xl md:text-4xl font-normal text-[#414755] opacity-40 hover:opacity-70 transition-opacity duration-300"
              >
                {client}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Clients;
