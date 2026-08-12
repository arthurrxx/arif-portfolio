// src/components/Header.jsx
import { useState, useEffect } from "react";
import logo from "../assets/logo.svg";

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
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "bg-[#faf8fa]/95 backdrop-blur-xl shadow-[0_6px_20px_-10px_rgba(0,0,0,0.12)] border-b border-[#c1c6d7]/20"
          : "bg-[#faf8fa]/90 backdrop-blur-xl border-b border-[#c1c6d7]/20"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-14 md:h-20 px-4 md:px-12">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-2 md:gap-3 text-[#1b1b1e] hover:opacity-60 transition-opacity flex-shrink-0 group"
          aria-label="Beranda"
        >
          <img
            src={logo}
            alt="Logo"
            className="w-8 h-8 md:w-12 md:h-12 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-5deg]"
          />
          <span className="font-['Playfair_Display'] text-base md:text-2xl tracking-tight transition-all duration-300 group-hover:tracking-wider">
            PORTFOLIO
          </span>
        </button>

        {/* Navigasi Desktop dengan Animasi Underline */}
        <nav
          className="hidden md:flex items-center gap-10 relative"
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
          className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-[#1b1b1e] rounded-full hover:bg-[#333] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex-shrink-0 group relative overflow-hidden"
          aria-label="Hubungi saya"
        >
          <span className="relative z-10 text-[#faf8fa] text-xs font-medium tracking-wider transition-all duration-300 group-hover:tracking-[0.15em]">
            Hubungi Saya
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-[#0058bc] to-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </button>

        {/* Tombol Menu Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 hover:opacity-60 transition-opacity flex-shrink-0 group"
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

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-6 pt-2 border-t border-[#c1c6d7]/10 bg-[#faf8fa]/95 backdrop-blur-xl">
          <nav className="flex flex-col gap-3" aria-label="Mobile navigation">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left text-base font-medium tracking-wider transition-all duration-300 py-2 ${
                  activeSection === item.id
                    ? "text-[#1b1b1e]"
                    : "text-[#5f5e5e] hover:text-[#1b1b1e] hover:translate-x-2"
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
              className="mt-2 w-full text-center px-6 py-3 bg-[#1b1b1e] rounded-full text-[#faf8fa] text-sm font-medium tracking-wider hover:bg-[#333] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
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
