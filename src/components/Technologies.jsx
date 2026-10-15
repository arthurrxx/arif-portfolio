const technologies = [
  {
    name: "Next.js",
    key: "next",
    color: "#20242c",
    hoverColor: "#050505",
  },
  {
    name: "React",
    key: "react",
    color: "#087ea4",
    hoverColor: "#00a6d6",
  },
  {
    name: "Vite",
    key: "vite",
    color: "#7357ff",
    hoverColor: "#9b83ff",
  },
  {
    name: "HTML",
    key: "html",
    color: "#d45126",
    hoverColor: "#f06529",
  },
  {
    name: "CSS",
    key: "css",
    color: "#1572b6",
    hoverColor: "#2998e3",
  },
  {
    name: "JavaScript",
    key: "javascript",
    color: "#a88700",
    hoverColor: "#d4ad00",
  },
  {
    name: "Node.js",
    key: "node",
    color: "#477a3c",
    hoverColor: "#68a653",
  },
];

const TechMark = ({ type }) => {
  if (type === "next") {
    return (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <circle cx="20" cy="20" r="17" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path
          d="M13 27V13l14 15M22 13v8"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
        />
      </svg>
    );
  }

  if (type === "react") {
    return (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="1.8">
          <ellipse cx="20" cy="20" rx="17" ry="6.7" />
          <ellipse cx="20" cy="20" rx="17" ry="6.7" transform="rotate(60 20 20)" />
          <ellipse cx="20" cy="20" rx="17" ry="6.7" transform="rotate(120 20 20)" />
        </g>
        <circle cx="20" cy="20" r="2.6" fill="currentColor" />
      </svg>
    );
  }

  if (type === "vite") {
    return (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path
          d="M3 9.5 19 36c.4.7 1.4.7 1.8 0L37 9.5c.5-.8-.2-1.8-1.1-1.7L20 10.7 4.1 7.8C3.2 7.7 2.5 8.7 3 9.5Z"
          fill="currentColor"
        />
        <path
          d="m24.5 3-11 17.5c-.4.6.1 1.4.8 1.3l6.1-1.2-1.1 8.2c-.1.8.9 1.1 1.3.4l11-17.5c.4-.6-.1-1.4-.8-1.3l-6.1 1.2L25.8 3.4c.1-.8-.9-1.1-1.3-.4Z"
          fill="#fff"
        />
      </svg>
    );
  }

  if (type === "html" || type === "css" || type === "javascript") {
    return (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path
          d="M7 3h26l-2.4 29L20 37 9.4 32 7 3Z"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2.5"
        />
        {type === "javascript" ? (
          <path
            d="M23 13v12c0 2.5-1.5 3.8-4 3.8-1.6 0-2.8-.6-3.7-1.5m10.8-.2c1 1.1 2.1 1.7 3.7 1.7 2 0 3.2-1 3.2-2.5 0-1.7-1.3-2.2-3.4-3l-.8-.3c-2.4-.9-4-2-4-4.4 0-2.2 1.7-3.9 4.5-3.9 1.9 0 3.3.6 4.3 2.1"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
          />
        ) : (
          <path
            d={
              type === "html"
                ? "M13 12h16l-.5 4.5h-11l.5 4h10l-.8 7-7.2 2.3-6-2-.4-3.5h4.5l.2 1 1.7.5 2.1-.7.3-2h-9.2L13 12Z"
                : "M12 12h17l-.5 4.5H15.8l.5 4h9.8l-.8 7-7.2 2.3-6-2-.4-3.5h4.5l.2 1 1.7.5 2.1-.7.3-2h-9.2L12 12Z"
            }
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        )}
      </svg>
    );
  }

  if (type === "node") {
    return (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path
          d="m20 3 14 8v17l-14 8-14-8V11l14-8Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M16 26V15l9 12V16"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  return null;
};

const TechnologyItems = ({ direction, includeLogos = false }) => (
  <div className={`tech-track ${direction}`}>
    {[0, 1].map((copy) => (
      <div
        key={copy}
        className="tech-track-group"
        aria-hidden={copy === 1 ? "true" : undefined}
      >
        {technologies.map((technology) => (
          <span
            key={`${technology.key}-${copy}`}
            className={`tech-item ${includeLogos ? "tech-logo-item" : "tech-name-item"}`}
            style={{
              "--tech-color": technology.color,
              "--tech-hover-color": technology.hoverColor,
            }}
            title={technology.name}
          >
            {includeLogos ? (
              <>
                <TechMark type={technology.key} />
                <span className="sr-only">{technology.name}</span>
              </>
            ) : (
              technology.name
            )}
          </span>
        ))}
      </div>
    ))}
  </div>
);

const Technologies = () => (
  <section
    className="w-full overflow-hidden bg-white py-16 md:py-24"
    aria-labelledby="clients-heading"
  >
    <div className="mx-auto mb-9 max-w-7xl px-4 text-center sm:mb-12 sm:px-6 md:px-12">
        <span className="text-[10px] font-semibold uppercase tracking-[2px] text-[#667085] md:text-xs">
          STACK SAYA
        </span>
        <h2
          id="clients-heading"
          className="mt-2 font-['Manrope'] text-3xl font-bold tracking-tight text-[#20242c] sm:text-4xl md:text-5xl"
        >
          Teknologi
        </h2>
    </div>

    <div className="tech-stack-panel">
      <div className="tech-marquee tech-name-marquee py-6 sm:py-8">
        <div className="sr-only">
          Next.js, React, Vite, HTML, CSS, JavaScript, dan Node.js
        </div>
        <TechnologyItems direction="tech-track-left" />
      </div>

      <div className="tech-marquee tech-logo-marquee border-t border-[#e1e3e6] py-5 sm:py-6">
        <TechnologyItems direction="tech-track-right" includeLogos />
      </div>
    </div>
  </section>
);

export default Technologies;
