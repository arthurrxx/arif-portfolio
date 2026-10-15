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
    <footer className="border-t border-[#e5e7eb] bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Kiri - Logo */}
        <button
          onClick={scrollToTop}
          className="font-['Manrope'] text-xl md:text-2xl font-bold text-[#20242c] hover:text-[#667085] transition-colors"
          aria-label="Kembali ke atas"
        >
          PORTFOLIO
        </button>

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
              className="text-[#667085] text-[10px] md:text-xs font-medium tracking-wider hover:text-[#20242c] transition-colors"
              aria-label={`Kunjungi ${name}`}
            >
              {name}
            </a>
          ))}
        </nav>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto px-4 md:px-12 py-3 md:py-4 flex justify-center">
          <p className="text-[#667085] text-[8px] md:text-[10px] font-medium tracking-wider">
            © 2026 PORTFOLIO ARIF.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
