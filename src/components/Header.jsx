// src/components/Header.jsx
import { useState, useEffect, useRef } from "react";

const Header = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      if (currentScrollY <= 20) {
        setIsHeaderHidden(false);
      } else if (Math.abs(currentScrollY - lastScrollYRef.current) > 8) {
        setIsHeaderHidden(
          currentScrollY > lastScrollYRef.current && currentScrollY > 100,
        );
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    { id: "work", label: "Karya" },
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
      className={`site-header fixed top-0 left-0 z-50 w-full ${
        isScrolled ? "site-header-scrolled" : ""
      } ${isHeaderHidden && !isMenuOpen ? "site-header-hidden" : ""}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-14 md:h-16 px-4 md:px-8">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("hero")}
          className="portfolio-brand flex items-center gap-2 md:gap-3 text-[#20242c] flex-shrink-0"
          aria-label="Beranda"
        >
          <img
            src="logo.svg"
            alt="Logo"
            className="w-8 h-8 md:w-10 md:h-10 object-contain"
          />
          <span className="portfolio-wordmark font-['Manrope'] font-bold text-base md:text-xl tracking-tight">
            PORTFOLIO
          </span>
        </button>

        {/* Navigasi Desktop dengan Animasi Underline */}
        <nav
          className="nav-links hidden md:flex items-center gap-7 relative"
          aria-label="Primary navigation"
        >
          <span
            aria-hidden="true"
            className="nav-indicator absolute -bottom-2 h-[3px] rounded-full"
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
              className={`relative py-1 text-sm font-medium tracking-wider transition-colors duration-300 ${
                activeSection === item.id
                  ? "text-[#20242c]"
                    : "text-[#667085] hover:text-[#20242c]"
              }`}
              aria-current={activeSection === item.id ? "page" : undefined}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Tombol Hubungi Saya */}
        <button
          onClick={() => scrollToSection("contact")}
          className="nav-cta-button hidden md:inline-flex"
          aria-label="Hubungi saya"
        >
          <span className="nav-cta-shadow" aria-hidden="true" />
          <span className="nav-cta-edge" aria-hidden="true" />
          <span className="nav-cta-front">
            Diskusi proyek
          </span>
        </button>

        {/* Tombol Menu Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 hover:opacity-60 transition-opacity flex-shrink-0 group"
          aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span
            className={`menu-line w-5 h-0.5 bg-[#20242c] rounded-full transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            } group-hover:w-6`}
          />
          <span
            className={`menu-line w-5 h-0.5 bg-[#20242c] rounded-full transition-all duration-300 ${
              isMenuOpen ? "scale-x-0 opacity-0" : ""
            } group-hover:w-4`}
          />
          <span
            className={`menu-line w-5 h-0.5 bg-[#20242c] rounded-full transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            } group-hover:w-6`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-navigation"
        inert={!isMenuOpen}
        className={`mobile-menu md:hidden overflow-hidden ${
          isMenuOpen ? "mobile-menu-open" : ""
        }`}
      >
        <div className="px-4 pb-6 pt-2 border-t border-[#e5e7eb] bg-white/95 backdrop-blur-xl">
          <nav className="flex flex-col gap-3" aria-label="Mobile navigation">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`mobile-nav-link text-left text-base font-medium tracking-wider transition-colors duration-300 py-2 ${
                  activeSection === item.id
                    ? "text-[#20242c]"
                      : "text-[#667085] hover:text-[#20242c]"
                }`}
                style={{
                  "--menu-item-index": index,
                }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="nav-cta-button nav-mobile-cta mt-2"
            >
              <span className="nav-cta-shadow" aria-hidden="true" />
              <span className="nav-cta-edge" aria-hidden="true" />
              <span className="nav-cta-front">
                Diskusi proyek
              </span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
