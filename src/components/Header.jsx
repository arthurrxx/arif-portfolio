// src/components/Header.jsx
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const Header = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          ? "bg-[#faf8fa]/75 backdrop-blur-xl shadow-[0_6px_20px_-10px_rgba(0,0,0,0.12)] border-b border-[#c1c6d7]/20"
          : "bg-[#faf8fa]/70 backdrop-blur-xl border-b border-[#c1c6d7]/20"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 md:h-20 px-6 md:px-12">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-3 text-[#1b1b1e] hover:opacity-60 transition-opacity"
          aria-label="Beranda"
        >
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 md:w-12 md:h-12 object-contain"
          />
          <span className="font-['Playfair_Display'] text-xl md:text-2xl tracking-tight">
            PORTFOLIO
          </span>
        </button>

        {/* Navigasi Desktop */}
        <nav
          className="hidden md:flex items-center gap-10"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative py-1 text-sm font-medium tracking-wider transition-all duration-300 ${
                activeSection === item.id
                  ? "text-[#1b1b1e]"
                  : "text-[#5f5e5e] hover:text-[#1b1b1e]"
              }`}
              aria-current={activeSection === item.id ? "page" : undefined}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#1b1b1e] rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Tombol Hubungi Saya */}
        <button
          onClick={() => scrollToSection("contact")}
          className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-[#1b1b1e] rounded-full hover:bg-[#333] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          aria-label="Hubungi saya"
        >
          <span className="text-[#faf8fa] text-xs font-medium tracking-wider">
            Hubungi Saya
          </span>
        </button>

        {/* Tombol Menu Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 hover:opacity-60 transition-opacity"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span
            className={`w-6 h-0.5 bg-[#1b1b1e] transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-[#1b1b1e] transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-[#1b1b1e] transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-2 border-t border-[#c1c6d7]/10 bg-[#faf8fa]/95 backdrop-blur-xl">
          <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left text-lg font-medium tracking-wider transition-colors ${
                  activeSection === item.id
                    ? "text-[#1b1b1e]"
                    : "text-[#5f5e5e] hover:text-[#1b1b1e]"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="mt-2 w-full text-center px-6 py-3 bg-[#1b1b1e] rounded-full text-[#faf8fa] text-sm font-medium tracking-wider hover:bg-[#333] transition-colors"
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
