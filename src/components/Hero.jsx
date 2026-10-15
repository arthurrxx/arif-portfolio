import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useScrollReveal } from "scroll-magic-lite/react";
import NotFoundPage from "./NotFoundPage";

const HACK_SEQUENCE = [
  "[*] Initializing session...",
  "[+] Session established",
  "[*] Enumerating portfolio routes...",
  "[+] 07 routes mapped",
  "[*] Resolving asset manifest...",
  "[+] 24 assets indexed",
  "[*] Parsing interface modules...",
  "[+] 03 modules loaded",
  "[*] Running local diagnostics...",
  "[+] Diagnostics complete",
  "arif@portfolio:~$ _",
];

const Hero = ({ id }) => {
  const heroRef = useRef(null);
  const hackTimerRef = useRef(null);
  const hackSequenceRef = useRef(null);
  const [isCVUnavailable, setIsCVUnavailable] = useState(false);
  const [terminalCommand, setTerminalCommand] = useState("");
  const [isHackSimulationActive, setIsHackSimulationActive] = useState(false);
  const [hackSimulationRun, setHackSimulationRun] = useState(0);
  const [hackSequenceStep, setHackSequenceStep] = useState(0);

  const titleRef = useScrollReveal({
    animation: "fadeUp",
    duration: 800,
    delay: 200,
    once: true,
  });

  const buttonRef = useScrollReveal({
    animation: "fadeUp",
    duration: 800,
    delay: 400,
    once: true,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 },
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(
    () => () => {
      window.clearTimeout(hackTimerRef.current);
      window.clearInterval(hackSequenceRef.current);
    },
    [],
  );

  const handleTerminalSubmit = (event) => {
    event.preventDefault();
    if (terminalCommand.trim().toLowerCase() !== "hack") return;

    window.clearTimeout(hackTimerRef.current);
    window.clearInterval(hackSequenceRef.current);
    setHackSimulationRun((run) => run + 1);
    setHackSequenceStep(0);
    setIsHackSimulationActive(true);
    setTerminalCommand("");
    hackSequenceRef.current = window.setInterval(() => {
      setHackSequenceStep((step) =>
        Math.min(step + 1, HACK_SEQUENCE.length),
      );
    }, 950);
    hackTimerRef.current = window.setTimeout(() => {
      window.clearInterval(hackSequenceRef.current);
      setIsHackSimulationActive(false);
    }, 12500);
  };

  return (
    <>
    <section
      id={id}
      ref={heroRef}
      className="min-h-screen flex items-center justify-center w-full pt-16 sm:pt-20 md:pt-24 pb-12 md:pb-16 opacity-0 translate-y-10 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden bg-white/70"
      aria-labelledby="hero-title"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid items-center gap-6 md:gap-8 min-[900px]:grid-cols-[1fr_0.9fr] lg:gap-12 xl:gap-16">
          <div className="max-w-4xl w-full" ref={titleRef}>
            {/* Figma Card */}
            <StyledCardWrapper className="max-w-full md:max-w-[614px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 614 390"
                className="w-full h-auto"
                preserveAspectRatio="xMidYMid meet"
              >
                <g id="Frame">
                  <g id="box-figma">
                    <text
                      x="80"
                      y="105"
                      textAnchor="start"
                      dominantBaseline="middle"
                      fontFamily="Manrope, sans-serif"
                      fontSize="82"
                      fontWeight="700"
                      fill="#20242C"
                      letterSpacing="-2.5"
                    >
                      Junior
                    </text>
                    <text
                      x="80"
                      y="185"
                      textAnchor="start"
                      dominantBaseline="middle"
                      fontFamily="Manrope, sans-serif"
                      fontSize="86"
                      fontWeight="700"
                      fill="#20242C"
                      letterSpacing="-2.5"
                    >
                      Developer
                    </text>
                    <text
                      x="80"
                      y="235"
                      textAnchor="start"
                      dominantBaseline="middle"
                      fontFamily="Manrope, sans-serif"
                      fontSize="40"
                      fontWeight="400"
                      fill="#667085"
                      letterSpacing="-1.5"
                    >
                      Portfolio
                    </text>

                    <g id="box">
                      <path
                        strokeWidth={2}
                        stroke="#20242C"
                        fillOpacity="0.05"
                        fill="#20242C"
                        d="M587 20H28V306H587V20Z"
                        id="figny9-box"
                      />
                      <path
                        strokeWidth={2}
                        stroke="#20242C"
                        fill="white"
                        d="M33 15H23V25H33V15Z"
                        id="figny9-adjust-1"
                      />
                      <path
                        strokeWidth={2}
                        stroke="#20242C"
                        fill="white"
                        d="M33 301H23V311H33V301Z"
                        id="figny9-adjust-3"
                      />
                      <path
                        strokeWidth={2}
                        stroke="#20242C"
                        fill="white"
                        d="M592 301H582V311H592V301Z"
                        id="figny9-adjust-4"
                      />
                      <path
                        strokeWidth={2}
                        stroke="#20242C"
                        fill="white"
                        d="M592 15H582V25H592V15Z"
                        id="figny9-adjust-2"
                      />
                    </g>

                    <g id="cursor">
                      <path
                        strokeWidth={2}
                        stroke="white"
                        fill="#20242C"
                        d="M453.383 343L448 317L471 331L459.745 333.5L453.383 343Z"
                        id="Vector 273"
                      />
                      <path
                        fill="#20242C"
                        d="M535 343H469.932V376H535V343Z"
                        id="Rectangle 786"
                      />
                      <text
                        x="503"
                        y="359.5"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontFamily="Manrope, sans-serif"
                        fontSize="10"
                        fontWeight="700"
                        fill="white"
                        letterSpacing="1.2"
                      >
                        ARIF
                      </text>
                    </g>
                  </g>
                </g>
              </svg>
            </StyledCardWrapper>

            {/* Tombol My CV & Social Media */}
            <div
              ref={buttonRef}
              className="flex flex-wrap items-center gap-4 md:gap-6 -mt-8 md:-mt-12 ml-2 md:ml-4"
            >
              {/* Tombol My CV */}
              <StyledButton3D>
                <button
                  type="button"
                  onClick={() => setIsCVUnavailable(true)}
                >
                  <span className="shadow" />
                  <span className="edge" />
                  <span className="front text">My CV</span>
                </button>
              </StyledButton3D>

              {/* Social Icons */}
              <SocialWrapper>
                <div className="wrapper">
                  <a
                    className="icon instagram"
                    href="https://www.instagram.com/ryf.ftrhmn/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                  >
                    <span className="tooltip">Instagram</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1.2em"
                      fill="currentColor"
                      className="bi bi-instagram"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </a>
                  <a
                    className="icon github"
                    href="https://github.com/arthurrxx"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                  >
                    <span className="tooltip">GitHub</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1.2em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </a>
                  <a
                    className="icon linkedin"
                    href="https://www.linkedin.com/in/arif-faturahman-4825a53b3/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <span className="tooltip">LinkedIn</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1.2em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zM3.743 5.183c.837 0 1.358-.554 1.358-1.248-.015-.709-.521-1.248-1.342-1.248-.822 0-1.358.539-1.358 1.248 0 .694.521 1.248 1.327 1.248h.015zm4.82 8.211V9.359c0-.216.016-.432.08-.586.173-.432.568-.879 1.232-.879.869 0 1.216.663 1.216 1.635v3.865h2.401V9.25c0-2.218-1.184-3.25-2.764-3.25-1.274 0-1.84.7-2.165 1.19v.025h-.016a5.5 5.5 0 0 1 .016-.025V6.169H6.162c.03.678 0 7.225 0 7.225h2.401z" />
                    </svg>
                  </a>
                </div>
              </SocialWrapper>
            </div>
          </div>

          {/* Terminal profile card */}
          <div className="relative w-full">
            <StyledTerminalCard>
              <div
                className={`terminal ${isHackSimulationActive ? "terminal-hack-mode" : ""}`}
              >
                <div className="terminal-toolbar">
                  <div className="terminal-controls" aria-hidden="true">
                    <span className="terminal-control close" />
                    <span className="terminal-control minimize" />
                    <span className="terminal-control maximize" />
                  </div>
                  <p className="terminal-title">arif@portfolio: ~</p>
                  <span className="terminal-tab" aria-hidden="true">
                    +
                  </span>
                </div>
                <div className="terminal-body">
                  <div className="terminal-line">
                    <span className="terminal-user">arif@portfolio</span>
                    <span className="terminal-path">:~</span>
                    <span className="terminal-prompt">$</span>
                    <span className="terminal-command">whoami</span>
                  </div>
                  <p className="terminal-output">
                    Arif Faturahman Alhakim Jaenudin
                  </p>

                  <div className="terminal-line">
                    <span className="terminal-user">arif@portfolio</span>
                    <span className="terminal-path">:~</span>
                    <span className="terminal-prompt">$</span>
                    <span className="terminal-command">location</span>
                  </div>
                  <p className="terminal-output">Sukabumi, Jawa Barat</p>

                  <form
                    className="terminal-line terminal-ready terminal-command-form"
                    onSubmit={handleTerminalSubmit}
                  >
                    <span className="terminal-user">arif@portfolio</span>
                    <span className="terminal-path">:~</span>
                    <span className="terminal-prompt">$</span>
                    <input
                      className="terminal-input"
                      type="text"
                      value={terminalCommand}
                      onChange={(event) => setTerminalCommand(event.target.value)}
                      aria-label="Terminal command"
                      autoComplete="off"
                      autoCapitalize="none"
                      spellCheck="false"
                    />
                  </form>
                </div>
                {isHackSimulationActive && (
                  <div
                    key={hackSimulationRun}
                    className="terminal-hack-overlay"
                  >
                    <div
                      className="hack-code"
                      role="log"
                      aria-label="Terminal output"
                      aria-live="polite"
                      aria-relevant="additions text"
                    >
                      <span className="hack-command">
                        <span>arif@portfolio</span>:~$ hack
                      </span>
                      {HACK_SEQUENCE.slice(0, hackSequenceStep).map(
                        (line, index) => (
                          <span
                            className={
                              index === HACK_SEQUENCE.length - 1
                                ? "hack-final-line"
                                : undefined
                            }
                            key={`${hackSimulationRun}-${line}`}
                          >
                            {line}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                )}
              </div>
            </StyledTerminalCard>
          </div>
        </div>
      </div>
    </section>
    {isCVUnavailable && (
      <NotFoundPage
        onBack={() => setIsCVUnavailable(false)}
      />
    )}
    </>
  );
};

// ===== STYLED UNTUK FIGMA CARD =====
const StyledCardWrapper = styled.div`
  width: 100%;
  max-width: 614px;
  margin: 0 auto;

  #cursor,
  #box,
  #text {
    cursor: pointer;
  }
  #cursor {
    overflow: visible;
    transform: translate3d(300px, 0, 0) scale(1);
    transform-origin: center center;
    transform-box: fill-box;
    animation: cursor 5s ease infinite alternate;
  }
  @keyframes cursor {
    0% {
      opacity: 0;
      transform: translate3d(300px, 0, 0) scale(1);
    }
    30% {
      opacity: 1;
      transform: translate3d(0, 0, 0) scale(1);
    }
    60% {
      opacity: 1;
      transform: translate3d(-200px, -200px, 0) scale(1);
    }
    65% {
      opacity: 1;
      transform: translate3d(-200px, -200px, 0) scale(0.95);
    }
    70% {
      opacity: 1;
      transform: translate3d(-200px, -200px, 0) scale(1);
    }
    100% {
      opacity: 1;
      transform: translate3d(-300px, -50px, 0) scale(1);
    }
  }

  #box {
    opacity: 0;
    animation: box 5s ease infinite alternate;
  }
  @keyframes box {
    0%,
    60% {
      opacity: 0;
    }
    65%,
    100% {
      opacity: 1;
    }
  }
`;

const StyledTerminalCard = styled.div`
  width: 100%;
  max-width: 520px;
  margin: 0 auto;

  .terminal {
    position: relative;
    width: 100%;
    min-height: 400px;
    overflow: hidden;
    border: 1px solid #34383f;
    border-radius: 16px;
    background: #20242c;
    box-shadow: 0 24px 60px -28px rgba(32, 36, 44, 0.45);
  }

  .terminal-toolbar {
    display: flex;
    height: 52px;
    align-items: center;
    justify-content: space-between;
    padding: 0 18px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    background: #292d35;
  }

  .terminal-controls {
    display: flex;
    align-items: center;
    gap: 7px;
  }

  .terminal-control {
    width: 11px;
    height: 11px;
    border-radius: 50%;
  }

  .close {
    background: #ff5f56;
  }

  .minimize {
    background: #ffbd2e;
  }

  .maximize {
    background: #27c93f;
  }

  .terminal-title {
    color: #d1d5db;
    font-family: "Manrope", sans-serif;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.02em;
  }

  .terminal-tab {
    display: flex;
    width: 24px;
    height: 24px;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background: #373c45;
    color: #d1d5db;
    font-family: "Manrope", sans-serif;
    font-size: 17px;
    line-height: 1;
  }

  .terminal-body {
    min-height: 347px;
    padding: 28px 30px 30px;
    color: #e5e7eb;
    font-family: "Consolas", "Courier New", monospace;
    font-size: 13px;
    line-height: 1.6;
  }

  .terminal-line {
    display: flex;
    min-width: 0;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 0 6px;
    margin-bottom: 3px;
  }

  .terminal-user {
    color: #7dd3a7;
  }

  .terminal-path {
    color: #cbd5e1;
  }

  .terminal-prompt {
    color: #f3c969;
  }

  .terminal-command {
    color: #f3f4f6;
  }

  .terminal-output {
    margin: 0 0 17px 18px;
    color: #cbd5e1;
    overflow-wrap: anywhere;
  }

  .terminal-value {
    color: #93c5fd;
  }

  .terminal-ready {
    margin-top: 20px;
  }

  .terminal-command-form {
    width: 100%;
  }

  .terminal-input {
    min-width: 0;
    flex: 1;
    border: 0;
    outline: 0;
    background: transparent;
    color: #f3f4f6;
    font: inherit;
    caret-color: #7dd3a7;
  }

  .terminal-input::placeholder {
    color: #7b8491;
    opacity: 1;
  }

  .terminal-hack-overlay {
    position: absolute;
    z-index: 3;
    inset: 52px 0 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 28px 30px;
    overflow: hidden;
    border-radius: 0 0 15px 15px;
    background:
      repeating-linear-gradient(
        to bottom,
        rgba(125, 211, 167, 0.025) 0,
        rgba(125, 211, 167, 0.025) 1px,
        transparent 1px,
        transparent 5px
      ),
      #171b1f;
    color: #cbd5e1;
    animation: hackOverlayIn 280ms ease-out both;
  }

  .hack-code {
    display: grid;
    gap: 9px;
    color: #a9cdb7;
    font-family: "Consolas", "Courier New", monospace;
    font-size: 12px;
    line-height: 1.5;
  }

  .hack-code span {
    overflow: hidden;
    white-space: nowrap;
    animation: hackLineIn 350ms steps(35, end) both;
  }

  .hack-command {
    color: #f3f4f6;
  }

  .hack-command span {
    color: #7dd3a7;
  }

  .hack-final-line {
    color: #f3f4f6;
    animation: terminalBlink 1s step-end infinite;
  }

  .terminal-cursor {
    display: inline-block;
    width: 8px;
    height: 16px;
    background: #e5e7eb;
    animation: terminalBlink 1s step-end infinite;
    vertical-align: text-bottom;
  }

  @keyframes terminalBlink {
    50% {
      opacity: 0;
    }
  }

  @keyframes hackOverlayIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes hackLineIn {
    from {
      max-width: 0;
      opacity: 0.4;
    }
    to {
      max-width: 100%;
      opacity: 1;
    }
  }

  @media (max-width: 640px) {
    .terminal {
      min-height: 360px;
      border-radius: 12px;
    }

    .terminal-toolbar {
      height: 46px;
      padding: 0 14px;
    }

    .terminal-body {
      min-height: 313px;
      padding: 22px 17px 24px;
      font-size: 11px;
    }

    .terminal-title {
      font-size: 10px;
    }

    .terminal-control {
      width: 9px;
      height: 9px;
    }

    .terminal-output {
      margin-left: 12px;
    }

    .terminal-hack-overlay {
      inset: 46px 0 0;
      padding: 22px 17px;
      border-radius: 0 0 11px 11px;
    }

    .hack-code {
      gap: 8px;
      font-size: 10px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .terminal-cursor {
      animation: none;
    }

    .terminal-hack-overlay,
    .hack-code span,
    .hack-final-line {
      animation: none;
      opacity: 1;
      max-width: 100%;
      transform: none;
    }
  }
`;

// ===== STYLED BUTTON 3D =====
const StyledButton3D = styled.div`
  button {
    position: relative;
    border: none;
    background: transparent;
    padding: 0;
    cursor: pointer;
    outline-offset: 4px;
    transition: filter 250ms;
    user-select: none;
    touch-action: manipulation;
  }

  .shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: hsl(0deg 0% 0% / 0.25);
    will-change: transform;
    transform: translateY(2px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  }

  .edge {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: linear-gradient(
      to left,
      hsl(0deg 0% 10%) 0%,
      hsl(0deg 0% 20%) 8%,
      hsl(0deg 0% 20%) 92%,
      hsl(0deg 0% 10%) 100%
    );
  }

  .front {
    display: block;
    position: relative;
    padding: 12px 27px;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 500;
    color: white;
    background: #2563eb;
    will-change: transform;
    transform: translateY(-4px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
    font-family: "Manrope", sans-serif;
    letter-spacing: 0.5px;
  }

  button:hover {
    filter: brightness(110%);
  }

  button:hover .front {
    transform: translateY(-6px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  button:active .front {
    transform: translateY(-2px);
    transition: transform 34ms;
  }

  button:hover .shadow {
    transform: translateY(4px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  button:active .shadow {
    transform: translateY(1px);
    transition: transform 34ms;
  }

  button:focus:not(:focus-visible) {
    outline: none;
  }

  @media (max-width: 640px) {
    .front {
      padding: 10px 20px;
      font-size: 0.85rem;
    }
    .shadow,
    .edge {
      border-radius: 10px;
    }
    .front {
      border-radius: 10px;
    }
  }
`;

// ===== STYLED SOCIAL ICONS =====
const SocialWrapper = styled.div`
  .wrapper {
    display: inline-flex;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 6px;
    align-items: center;
  }

  .wrapper .icon {
    position: relative;
    background: #fff;
    border-radius: 50%;
    width: 44px;
    height: 44px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.06);
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    border: 1px solid #e8e6ea;
    color: #475467;
    text-decoration: none;
  }

  .wrapper .icon:focus-visible {
    outline: 3px solid #20242c;
    outline-offset: 3px;
  }

  .wrapper .tooltip {
    position: absolute;
    top: 0;
    font-size: 12px;
    background: #fff;
    color: #fff;
    padding: 4px 10px;
    border-radius: 5px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    font-family: "Manrope", sans-serif;
    font-weight: 500;
  }

  .wrapper .tooltip::before {
    position: absolute;
    content: "";
    height: 8px;
    width: 8px;
    background: #fff;
    bottom: -3px;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .wrapper .icon:hover .tooltip {
    top: -40px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .wrapper .icon:hover {
    transform: translateY(-4px);
  }

  .wrapper .icon:hover svg {
    color: #fff;
  }

  .wrapper .instagram:hover,
  .wrapper .instagram:hover .tooltip,
  .wrapper .instagram:hover .tooltip::before {
    background: #e4405f;
    color: #fff;
    border-color: #e4405f;
  }

  .wrapper .github:hover,
  .wrapper .github:hover .tooltip,
  .wrapper .github:hover .tooltip::before {
    background: #1b1b1e;
    color: #fff;
    border-color: #1b1b1e;
  }

  .wrapper .linkedin:hover,
  .wrapper .linkedin:hover .tooltip,
  .wrapper .linkedin:hover .tooltip::before {
    background: #0a66c2;
    color: #fff;
    border-color: #0a66c2;
  }

  @media (max-width: 640px) {
    .wrapper .icon {
      width: 38px;
      height: 38px;
      font-size: 15px;
    }
    .wrapper .tooltip {
      font-size: 10px;
      padding: 3px 8px;
    }
    .wrapper .icon:hover .tooltip {
      top: -35px;
    }
  }
`;

export default Hero;
