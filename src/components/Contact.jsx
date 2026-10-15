// src/components/Contact.jsx
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

const Contact = ({ id }) => {
  const {
    register,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      projectType: "",
      details: "",
    },
  });

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

  return (
    <section
      id={id}
      ref={sectionRef}
      className="w-full py-16 md:py-20 border-t border-[#e5e7eb] bg-[#f5f5f5]"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid md:grid-cols-12 gap-16 lg:gap-24">
        {/* Bagian Kiri - Info */}
        <div className="md:col-span-5">
          <div className="contact-animate opacity-0 translate-y-10 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
            <span className="inline-flex items-center gap-2 text-[#667085] text-xs font-medium tracking-[3px] uppercase">
              <span className="w-8 h-px bg-[#667085]" />
              Kontak
            </span>
            <h1
              id="contact-heading"
              className="font-['Manrope'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-[#20242c] mt-4"
            >
              Hubungi saya.
            </h1>

            <div className="mt-8 space-y-6">
              <div className="group">
                <span className="text-[#667085] text-[10px] font-medium tracking-[2px] uppercase">
                  Email
                </span>
                <a
                  href="mailto:arifpaturahman19@gmail.com"
                  className="block text-[#20242c] text-base md:text-lg hover:text-[#667085] transition-colors mt-1.5 group-hover:translate-x-1 transition-transform"
                >
                  arifpaturahman19@gmail.com
                </a>
              </div>

              <div className="group">
                <span className="text-[#667085] text-[10px] font-medium tracking-[2px] uppercase">
                  Domisili
                </span>
                <p className="text-[#20242c] text-base md:text-lg leading-relaxed mt-1.5">
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
              <div className="absolute -inset-8 bg-gradient-to-br from-[#20242c]/[0.03] via-[#e5e7eb]/40 to-transparent rounded-3xl blur-2xl" />

              <div className="relative bg-white rounded-2xl shadow-[0_8px_50px_-12px_rgba(32,36,44,0.08)] border border-[#e5e7eb] p-6 md:p-8 lg:p-10 overflow-hidden">
                <form onSubmit={(event) => event.preventDefault()} noValidate>
                  <div className="space-y-6 md:space-y-8">
                    <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                      {/* Nama */}
                      <div className="contact-field relative">
                        <label
                          htmlFor="name"
                          className="contact-field-label mb-2 block text-xs font-medium text-[#667085]"
                        >
                          Nama Anda
                        </label>
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
                          className={`contact-field-control w-full rounded-xl border bg-[#f8f9fa] px-4 py-3 text-sm text-[#20242c] md:py-3.5 md:text-base ${errors.name ? "border-red-400" : "border-[#e5e7eb]"}`}
                          placeholder="Nama lengkap"
                        />
                        {errors.name && (
                          <p className="mt-1.5 text-xs text-red-500">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div className="contact-field relative">
                        <label
                          htmlFor="email"
                          className="contact-field-label mb-2 block text-xs font-medium text-[#667085]"
                        >
                          Alamat Email
                        </label>
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
                          className={`contact-field-control w-full rounded-xl border bg-[#f8f9fa] px-4 py-3 text-sm text-[#20242c] md:py-3.5 md:text-base ${errors.email ? "border-red-400" : "border-[#e5e7eb]"}`}
                          placeholder="nama@email.com"
                        />
                        {errors.email && (
                          <p className="mt-1.5 text-xs text-red-500">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Project Type */}
                    <div className="contact-field relative">
                      <label
                        htmlFor="projectType"
                        className="contact-field-label mb-2 block text-xs font-medium text-[#667085]"
                      >
                        Jenis Proyek
                      </label>
                      <div className="contact-select-wrap relative">
                        <select
                          id="projectType"
                          {...register("projectType", {
                            required: "Jenis proyek wajib dipilih",
                          })}
                          className={`contact-field-control w-full appearance-none rounded-xl border bg-[#f8f9fa] px-4 py-3 pr-11 text-sm text-[#20242c] md:py-3.5 md:text-base ${errors.projectType ? "border-red-400" : "border-[#e5e7eb]"}`}
                          style={{
                            WebkitAppearance: "none",
                            MozAppearance: "none",
                          }}
                        >
                          <option value="" disabled>
                            Pilih jenis proyek
                          </option>
                          <option value="branding" className="text-[#20242c]">
                            Branding &amp; Identitas
                          </option>
                          <option
                            value="digital-design"
                            className="text-[#20242c]"
                          >
                            Desain Digital
                          </option>
                          <option
                            value="creative-direction"
                            className="text-[#20242c]"
                          >
                            Arahan Kreatif
                          </option>
                          <option
                            value="web-development"
                            className="text-[#20242c]"
                          >
                            Pengembangan Web
                          </option>
                          <option value="other" className="text-[#20242c]">
                            Lainnya
                          </option>
                        </select>

                        <div className="contact-select-icon absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg
                            className="h-4 w-4 text-[#667085]"
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

                      </div>

                      {errors.projectType && (
                        <p className="mt-1.5 text-xs text-red-500">
                          {errors.projectType.message}
                        </p>
                      )}
                    </div>

                    {/* Details */}
                    <div className="contact-field relative">
                      <label
                        htmlFor="details"
                        className="contact-field-label mb-2 block text-xs font-medium text-[#667085]"
                      >
                        Detail Proyek
                      </label>
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
                        className={`contact-field-control min-h-[112px] w-full resize-y rounded-xl border bg-[#f8f9fa] px-4 py-3 text-sm leading-relaxed text-[#20242c] md:min-h-[128px] md:text-base ${errors.details ? "border-red-400" : "border-[#e5e7eb]"}`}
                        placeholder="Ceritakan singkat tentang proyek Anda"
                      />
                      {errors.details && (
                        <p className="mt-1.5 text-xs text-red-500">
                          {errors.details.message}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col items-end gap-4 pt-2 md:pt-4">
                      <p
                        role="note"
                        className="w-full rounded-lg bg-[#f5f5f5] px-4 py-3 text-sm leading-relaxed text-[#475467]"
                      >
                        Fitur ini belum dapat digunakan. Silakan hubungi saya
                        melalui email{" "}
                        <a
                          href="mailto:arifpaturahman19@gmail.com"
                          className="font-medium text-[#20242c] underline underline-offset-2 hover:text-[#667085]"
                        >
                          arifpaturahman19@gmail.com
                        </a>
                        .
                      </p>
                      <button
                        type="submit"
                        disabled
                        className="inline-flex cursor-not-allowed items-center rounded-full bg-[#20242c]/50 px-6 py-3 opacity-60 md:px-8 md:py-4"
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
      </div>
    </section>
  );
};

export default Contact;
