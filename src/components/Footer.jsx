// src/components/Footer.jsx
import RealTimeClockFooter from "./RealtimeClock";

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/arif-faturahman-4825a53b3/",
    },
    { name: "Instagram", href: "https://www.instagram.com/ryf.ftrhmn/" },
    { name: "GitHub", href: "https://github.com/arthurrxx" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#a8a5b0]/30 bg-[#d5d2da]">
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Kiri - Logo */}
        <button
          onClick={scrollToTop}
          className="font-['Playfair_Display'] text-xl md:text-2xl font-normal text-[#1b1b1e] hover:opacity-50 transition-opacity"
          aria-label="Kembali ke atas"
        >
          PORTFOLIO
        </button>

        {/* Tengah - RealTimeClock */}
        <div className="flex items-center">
          <RealTimeClockFooter />
        </div>

        {/* Kanan - Social Links */}
        <nav
          className="flex items-center gap-4 md:gap-6"
          aria-label="Media sosial"
        >
          {socialLinks.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-[#4a4a55] text-[10px] md:text-xs font-medium tracking-wider hover:text-[#1b1b1e] transition-colors"
              aria-label={`Kunjungi ${name}`}
            >
              {name}
            </a>
          ))}
        </nav>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#a8a5b0]/30">
        <div className="max-w-7xl mx-auto px-4 md:px-12 py-3 md:py-4 flex justify-center">
          <p className="text-[#4a4a55] text-[8px] md:text-[10px] font-medium tracking-wider">
            © 2026 PORTFOLIO ARIF.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
