// src/components/Contact.jsx
import { useState, useEffect, useRef } from "react";

const Contact = ({ id }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    details: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll(".contact-animate")
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.projectType ||
      !formData.details
    ) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", projectType: "", details: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const isFieldActive = (field) => {
    return (
      focusedField === field || (formData[field] && formData[field].length > 0)
    );
  };

  const getProjectTypeLabel = (value) => {
    const labels = {
      branding: "Branding & Identitas",
      "digital-design": "Desain Digital",
      "creative-direction": "Arahan Kreatif",
      "web-development": "Pengembangan Web",
      other: "Lainnya",
    };
    return labels[value] || "";
  };

  return (
    <section
      id={id}
      ref={sectionRef}
      className="max-w-7xl mx-auto px-4 md:px-12 py-16 md:py-20 border-t border-[#c1c6d7]/10 bg-[#f0eef2]"
      aria-labelledby="contact-heading"
    >
      <div className="grid md:grid-cols-12 gap-16 lg:gap-24">
        {/* Bagian Kiri - Info */}
        <div className="md:col-span-5">
          <div className="contact-animate opacity-0 translate-y-10 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
            <span className="inline-flex items-center gap-2 text-[#5f5e5e] text-xs font-medium tracking-[3px] uppercase">
              <span className="w-8 h-px bg-[#5f5e5e]" />
              Hubungi Saya
            </span>
            <h1
              id="contact-heading"
              className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.1] text-[#1b1b1e] mt-4"
            >
              Mari
              <br />
              berkolaborasi.
            </h1>
            <p className="text-[#5f5e5e] text-sm sm:text-base md:text-lg leading-relaxed tracking-tight mt-6 max-w-sm">
              Saya adalah Arif Faturahman Alhakim Jaenudin, lulusan SMK Mardi
              Yuana Cikembar jurusan RPL yang berdomisili di Sukabumi. Saya siap
              membantu mewujudkan website dan produk digital yang modern.
            </p>

            <div className="mt-10 space-y-8">
              <div className="group">
                <span className="text-[#717786] text-[10px] font-medium tracking-[2px] uppercase">
                  Email
                </span>
                <a
                  href="mailto:hello@curatorstudio.com"
                  className="block text-[#1b1b1e] text-base md:text-lg hover:text-[#0058bc] transition-colors mt-1.5 group-hover:translate-x-1 transition-transform"
                >
                  hello@curatorstudio.com
                </a>
              </div>

              <div className="group">
                <span className="text-[#717786] text-[10px] font-medium tracking-[2px] uppercase">
                  Domisili
                </span>
                <p className="text-[#1b1b1e] text-base md:text-lg leading-relaxed mt-1.5">
                  Sukabumi,
                  <br />
                  Jawa Barat
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bagian Kanan - Form */}
        <div className="md:col-span-7">
          <div className="contact-animate opacity-0 translate-y-10 transition-all duration-700 delay-100 ease-[cubic-bezier(0.22,1,0.36,1)]">
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-[#0058bc]/5 via-[#c1c6d7]/5 to-[#efb15b]/5 rounded-3xl blur-2xl" />

              <div className="relative bg-white rounded-2xl shadow-[0_8px_50px_-12px_rgba(0,0,0,0.08)] border border-[#c1c6d7]/10 p-6 md:p-8 lg:p-10 overflow-hidden">
                {/* Success Overlay */}
                {isSuccess && (
                  <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center animate-fadeIn">
                    <div className="success-animation">
                      <div className="checkmark-circle">
                        <div className="checkmark-stem" />
                        <div className="checkmark-kick" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-['Playfair_Display'] text-[#1b1b1e] mt-4">
                      Pesan Terkirim!
                    </h3>
                    <p className="text-[#5f5e5e] text-sm mt-2 text-center px-4">
                      Terima kasih telah menghubungi saya. Saya akan membalas
                      dalam waktu 24 jam.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="mt-6 px-6 py-2 bg-[#1b1b1e] text-white text-xs font-medium tracking-wider rounded-full hover:bg-[#333] transition-colors"
                    >
                      Kirim Pesan Lain
                    </button>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  <div className="space-y-6 md:space-y-8">
                    <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => handleFocus("name")}
                          onBlur={handleBlur}
                          className={`w-full pt-6 pb-2.5 px-0 bg-transparent text-[#1b1b1e] text-sm md:text-base focus:outline-none transition-all duration-300 placeholder:text-transparent
                            border-b-2 ${isFieldActive("name") ? "border-[#1b1b1e]" : "border-[#c1c6d7]/30"}`}
                          placeholder=" "
                          required
                        />
                        <label
                          htmlFor="name"
                          className={`absolute left-0 transition-all duration-300 cursor-text ${
                            isFieldActive("name")
                              ? "-top-1 text-[10px] tracking-wider text-[#717786]"
                              : "top-4 text-sm md:text-base text-[#717786]"
                          }`}
                        >
                          Nama Anda
                        </label>
                      </div>

                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => handleFocus("email")}
                          onBlur={handleBlur}
                          className={`w-full pt-6 pb-2.5 px-0 bg-transparent text-[#1b1b1e] text-sm md:text-base focus:outline-none transition-all duration-300 placeholder:text-transparent
                            border-b-2 ${isFieldActive("email") ? "border-[#1b1b1e]" : "border-[#c1c6d7]/30"}`}
                          placeholder=" "
                          required
                        />
                        <label
                          htmlFor="email"
                          className={`absolute left-0 transition-all duration-300 cursor-text ${
                            isFieldActive("email")
                              ? "-top-1 text-[10px] tracking-wider text-[#717786]"
                              : "top-4 text-sm md:text-base text-[#717786]"
                          }`}
                        >
                          Alamat Email
                        </label>
                      </div>
                    </div>

                    {/* Select Project Type */}
                    <div className="relative">
                      <div className="relative">
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          onFocus={() => handleFocus("projectType")}
                          onBlur={handleBlur}
                          className={`w-full pt-6 pb-2.5 px-0 bg-transparent text-[#1b1b1e] text-sm md:text-base appearance-none focus:outline-none transition-all duration-300 cursor-pointer
                            border-b-2 ${isFieldActive("projectType") ? "border-[#1b1b1e]" : "border-[#c1c6d7]/30"}
                            ${formData.projectType ? "text-[#1b1b1e]" : "text-[#717786]"}
                            relative z-10`}
                          required
                          style={{
                            WebkitAppearance: "none",
                            MozAppearance: "none",
                          }}
                        >
                          <option value="" disabled hidden></option>
                          <option value="branding" className="text-[#1b1b1e]">
                            Branding &amp; Identitas
                          </option>
                          <option
                            value="digital-design"
                            className="text-[#1b1b1e]"
                          >
                            Desain Digital
                          </option>
                          <option
                            value="creative-direction"
                            className="text-[#1b1b1e]"
                          >
                            Arahan Kreatif
                          </option>
                          <option
                            value="web-development"
                            className="text-[#1b1b1e]"
                          >
                            Pengembangan Web
                          </option>
                          <option value="other" className="text-[#1b1b1e]">
                            Lainnya
                          </option>
                        </select>

                        <label
                          htmlFor="projectType"
                          className={`absolute left-0 transition-all duration-300 cursor-pointer pointer-events-none ${
                            isFieldActive("projectType")
                              ? "-top-1 text-[10px] tracking-wider text-[#717786]"
                              : "top-4 text-sm md:text-base text-[#717786]"
                          }`}
                        >
                          Jenis Proyek
                        </label>

                        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg
                            className={`w-4 h-4 text-[#717786] transition-all duration-300 ${
                              isFieldActive("projectType") ? "rotate-180" : ""
                            }`}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </div>

                        <div
                          className={`absolute bottom-0 left-0 h-[2px] bg-[#1b1b1e] transition-all duration-500 ${
                            isFieldActive("projectType") ? "w-full" : "w-0"
                          }`}
                        />
                      </div>

                      {formData.projectType && (
                        <div className="mt-2 text-[10px] text-[#717786] tracking-wider uppercase flex items-center gap-2">
                          <span className="w-4 h-px bg-[#717786]" />
                          {getProjectTypeLabel(formData.projectType)}
                        </div>
                      )}
                    </div>

                    <div className="relative">
                      <textarea
                        id="details"
                        name="details"
                        value={formData.details}
                        onChange={handleChange}
                        onFocus={() => handleFocus("details")}
                        onBlur={handleBlur}
                        rows="4"
                        className={`w-full pt-6 pb-2.5 px-0 bg-transparent text-[#1b1b1e] text-sm md:text-base resize-y focus:outline-none transition-all duration-300 placeholder:text-transparent
                          border-b-2 ${isFieldActive("details") ? "border-[#1b1b1e]" : "border-[#c1c6d7]/30"} min-h-[80px] md:min-h-[100px]`}
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="details"
                        className={`absolute left-0 transition-all duration-300 cursor-text ${
                          isFieldActive("details")
                            ? "-top-1 text-[10px] tracking-wider text-[#717786]"
                            : "top-4 text-sm md:text-base text-[#717786]"
                        }`}
                      >
                        Detail Proyek
                      </label>
                    </div>

                    <div className="flex justify-end pt-2 md:pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-[#1b1b1e] rounded-full overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span className="relative z-10 text-[#fbf9fc] text-[10px] md:text-xs font-medium tracking-wider">
                          {isSubmitting ? (
                            <span className="flex items-center gap-2">
                              <svg
                                className="animate-spin h-4 w-4"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                  fill="none"
                                />
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                />
                              </svg>
                              Mengirim...
                            </span>
                          ) : (
                            "Kirim Pesan"
                          )}
                        </span>
                        {!isSubmitting && (
                          <span className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-1">
                            <svg
                              className="w-4 h-3"
                              viewBox="0 0 16 12"
                              fill="none"
                            >
                              <path
                                d="M1 6H15M15 6L10 1M15 6L10 11"
                                stroke="#fbf9fc"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                            </svg>
                          </span>
                        )}
                        <span className="absolute inset-0 bg-gradient-to-r from-[#0058bc] to-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
