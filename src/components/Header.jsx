// src/components/Header.jsx
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const Header = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update indicator position when activeSection changes
  useEffect(() => {
    const updateIndicator = () => {
      const activeItem = document.querySelector(
        `[data-nav="${activeSection}"]`,
      );
      if (activeItem) {
        const rect = activeItem.getBoundingClientRect();
        const parentRect = activeItem.closest("nav").getBoundingClientRect();
        setIndicatorStyle({
          left: rect.left - parentRect.left,
          width: rect.width,
        });
      }
    };

    // Update after a small delay to ensure DOM is ready
    const timer = setTimeout(updateIndicator, 50);
    window.addEventListener("resize", updateIndicator);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateIndicator);
    };
  }, [activeSection]);

  const navItems = [
    { id: "hero", label: "Beranda" },
    { id: "about", label: "Tentang" },
    { id: "work", label: "Portofolio" },
    { id: "contact", label: "Kontak" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full flex justify-center px-4 pt-4 md:pt-6">
      {/* Dynamic Island Container - Glass Effect & Soft Border */}
      <div
        className={`relative w-full max-w-[900px] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isScrolled
            ? "bg-white/40 backdrop-blur-2xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)]"
            : "bg-white/30 backdrop-blur-2xl"
        } rounded-full px-5 md:px-8 h-[56px] md:h-[72px] flex items-center justify-between border border-white/20`}
      >
        {/* Glass Highlight - Efek kaca di atas */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/40 to-transparent opacity-60 pointer-events-none" />

        {/* Glass Highlight - Efek kaca di bawah */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />

        {/* Logo dengan animasi */}
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-2 md:gap-3 text-[#1b1b1e] group transition-all duration-300 hover:opacity-70 relative z-10"
          aria-label="Beranda"
        >
          <img
            src={logo}
            alt="Logo"
            className="w-8 h-8 md:w-12 md:h-12 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-5deg]"
          />
          <span className="font-['Playfair_Display'] text-sm md:text-xl tracking-tight transition-all duration-300 group-hover:tracking-wider">
            PORTFOLIO
          </span>
        </button>

        {/* Navigasi Desktop dengan Animasi Underline */}
        <nav
          className="hidden md:flex items-center gap-8 lg:gap-10 relative z-10"
          aria-label="Primary navigation"
        >
          {/* Animated Underline Indicator */}
          <span
            className="absolute -bottom-1 h-[2px] bg-[#1b1b1e] rounded-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`,
            }}
          />

          {navItems.map((item) => (
            <button
              key={item.id}
              data-nav={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative py-1 text-sm font-medium tracking-wider transition-all duration-300 ${
                activeSection === item.id
                  ? "text-[#1b1b1e]"
                  : "text-[#5f5e5e] hover:text-[#1b1b1e]"
              }`}
              aria-current={activeSection === item.id ? "page" : undefined}
            >
              <span className="relative inline-block transition-all duration-300 hover:translate-y-[-2px]">
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        {/* Tombol Hubungi Saya */}
        <button
          onClick={() => scrollToSection("contact")}
          className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-[#1b1b1e]/90 backdrop-blur-sm rounded-full hover:bg-[#1b1b1e] transition-all duration-300 hover:scale-[1.05] active:scale-[0.95] group relative overflow-hidden"
          aria-label="Hubungi saya"
        >
          <span className="relative z-10 text-[#faf8fa] text-sm font-medium tracking-wider transition-all duration-300 group-hover:tracking-[0.15em]">
            Hubungi Saya
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-[#0058bc] to-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </button>

        {/* Tombol Menu Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1 hover:opacity-60 transition-opacity group relative z-10"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span
            className={`w-5 h-0.5 bg-[#1b1b1e] rounded-full transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            } group-hover:w-6`}
          />
          <span
            className={`w-5 h-0.5 bg-[#1b1b1e] rounded-full transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            } group-hover:w-4`}
          />
          <span
            className={`w-5 h-0.5 bg-[#1b1b1e] rounded-full transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            } group-hover:w-6`}
          />
        </button>
      </div>

      {/* Mobile Menu Dropdown - Glass Effect */}
      <div
        className={`absolute top-[72px] md:hidden w-full max-w-[900px] px-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-white/40 backdrop-blur-2xl rounded-2xl border border-white/20 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.1)] p-4 overflow-hidden relative">
          {/* Glass Highlight */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/30 to-transparent opacity-50 pointer-events-none" />

          <nav
            className="flex flex-col gap-2 relative z-10"
            aria-label="Mobile navigation"
          >
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left px-4 py-3 text-sm font-medium tracking-wider rounded-xl transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-[#1b1b1e] bg-white/50"
                    : "text-[#5f5e5e] hover:text-[#1b1b1e] hover:bg-white/30 hover:translate-x-1"
                }`}
                style={{
                  transitionDelay: `${index * 40}ms`,
                }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="mt-2 w-full text-center px-4 py-3 bg-[#1b1b1e]/90 backdrop-blur-sm rounded-xl text-[#faf8fa] text-sm font-medium tracking-wider hover:bg-[#1b1b1e] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Hubungi Saya
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
