// src/components/Contact.jsx
import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

const Contact = ({ id }) => {
  const {
    register,
    formState: { errors },
    watch,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      projectType: "",
      details: "",
    },
  });

  const [focusedField, setFocusedField] = useState(null);
  const sectionRef = useRef(null);

  const projectTypeValue = watch("projectType");

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

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const isFieldActive = (field) => {
    const value = watch(field);
    return focusedField === field || (value && value.length > 0);
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
              Kontak
            </span>
            <h1
              id="contact-heading"
              className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.1] text-[#1b1b1e] mt-4"
            >
              Hubungi saya.
            </h1>

            <div className="mt-8 space-y-6">
              <div className="group">
                <span className="text-[#717786] text-[10px] font-medium tracking-[2px] uppercase">
                  Email
                </span>
                <a
                  href="mailto:arifpaturahman19@gmail.com"
                  className="block text-[#1b1b1e] text-base md:text-lg hover:text-[#0058bc] transition-colors mt-1.5 group-hover:translate-x-1 transition-transform"
                >
                  arifpaturahman19@gmail.com
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
                <form onSubmit={(event) => event.preventDefault()} noValidate>
                  <div className="space-y-6 md:space-y-8">
                    <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                      {/* Nama */}
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          {...register("name", {
                            required: "Nama wajib diisi",
                            minLength: {
                              value: 2,
                              message: "Minimal 2 karakter",
                            },
                          })}
                          onFocus={() => handleFocus("name")}
                          onBlur={handleBlur}
                          className={`w-full pt-6 pb-2.5 px-0 bg-transparent text-[#1b1b1e] text-sm md:text-base focus:outline-none transition-all duration-300 placeholder:text-transparent
                            border-b-2 ${isFieldActive("name") ? "border-[#1b1b1e]" : "border-[#c1c6d7]/30"}
                            ${errors.name ? "border-red-500" : ""}`}
                          placeholder=" "
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
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          {...register("email", {
                            required: "Email wajib diisi",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Email tidak valid",
                            },
                          })}
                          onFocus={() => handleFocus("email")}
                          onBlur={handleBlur}
                          className={`w-full pt-6 pb-2.5 px-0 bg-transparent text-[#1b1b1e] text-sm md:text-base focus:outline-none transition-all duration-300 placeholder:text-transparent
                            border-b-2 ${isFieldActive("email") ? "border-[#1b1b1e]" : "border-[#c1c6d7]/30"}
                            ${errors.email ? "border-red-500" : ""}`}
                          placeholder=" "
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
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Project Type */}
                    <div className="relative">
                      <div className="relative">
                        <select
                          id="projectType"
                          {...register("projectType", {
                            required: "Jenis proyek wajib dipilih",
                          })}
                          onFocus={() => handleFocus("projectType")}
                          onBlur={handleBlur}
                          className={`w-full pt-6 pb-2.5 px-0 bg-transparent text-[#1b1b1e] text-sm md:text-base appearance-none focus:outline-none transition-all duration-300 cursor-pointer
                            border-b-2 ${isFieldActive("projectType") ? "border-[#1b1b1e]" : "border-[#c1c6d7]/30"}
                            ${projectTypeValue ? "text-[#1b1b1e]" : "text-[#717786]"}
                            ${errors.projectType ? "border-red-500" : ""}
                            relative z-10`}
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

                      {errors.projectType && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.projectType.message}
                        </p>
                      )}

                      {projectTypeValue && !errors.projectType && (
                        <div className="mt-2 text-[10px] text-[#717786] tracking-wider uppercase flex items-center gap-2">
                          <span className="w-4 h-px bg-[#717786]" />
                          {getProjectTypeLabel(projectTypeValue)}
                        </div>
                      )}
                    </div>

                    {/* Details */}
                    <div className="relative">
                      <textarea
                        id="details"
                        rows="4"
                        {...register("details", {
                          required: "Detail proyek wajib diisi",
                          minLength: {
                            value: 10,
                            message: "Minimal 10 karakter",
                          },
                        })}
                        onFocus={() => handleFocus("details")}
                        onBlur={handleBlur}
                        className={`w-full pt-6 pb-2.5 px-0 bg-transparent text-[#1b1b1e] text-sm md:text-base resize-y focus:outline-none transition-all duration-300 placeholder:text-transparent
                          border-b-2 ${isFieldActive("details") ? "border-[#1b1b1e]" : "border-[#c1c6d7]/30"}
                          ${errors.details ? "border-red-500" : ""} min-h-[80px] md:min-h-[100px]`}
                        placeholder=" "
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
                      {errors.details && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.details.message}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col items-end gap-4 pt-2 md:pt-4">
                      <p
                        role="note"
                        className="w-full rounded-lg bg-[#f0eef2] px-4 py-3 text-sm leading-relaxed text-[#5f5e5e]"
                      >
                        Fitur ini belum dapat digunakan. Silakan hubungi saya
                        melalui email{" "}
                        <a
                          href="mailto:arifpaturahman19@gmail.com"
                          className="font-medium text-[#0058bc] underline underline-offset-2 hover:text-[#1b1b1e]"
                        >
                          arifpaturahman19@gmail.com
                        </a>
                        .
                      </p>
                      <button
                        type="submit"
                        disabled
                        className="inline-flex cursor-not-allowed items-center rounded-full bg-[#1b1b1e]/50 px-6 py-3 opacity-60 md:px-8 md:py-4"
                      >
                        <span className="relative z-10 text-[#fbf9fc] text-[10px] md:text-xs font-medium tracking-wider">
                          Pengiriman Belum Tersedia
                        </span>
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
