// src/components/Hero.jsx
import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useScrollReveal } from "scroll-magic-lite/react";
import profilePhoto from "../assets/profile1.webp";

const Hero = ({ id }) => {
  const heroRef = useRef(null);

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

  return (
    <section
      id={id}
      ref={heroRef}
      className="min-h-screen flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-16 sm:pt-20 md:pt-24 pb-12 md:pb-16 opacity-0 translate-y-10 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden bg-white/70"
      aria-labelledby="hero-title"
    >
      <div className="w-full">
        <div className="grid items-center gap-6 md:gap-8 lg:gap-12 lg:grid-cols-[1fr_0.9fr] xl:gap-16">
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
                      fontFamily="Playfair Display, serif"
                      fontSize="95"
                      fontWeight="500"
                      fill="#1b1b1e"
                      letterSpacing="-2.5"
                    >
                      Junior
                    </text>
                    <text
                      x="80"
                      y="185"
                      textAnchor="start"
                      dominantBaseline="middle"
                      fontFamily="Playfair Display, serif"
                      fontSize="100"
                      fontWeight="500"
                      fill="#1b1b1e"
                      letterSpacing="-2.5"
                    >
                      Developer
                    </text>
                    <text
                      x="80"
                      y="235"
                      textAnchor="start"
                      dominantBaseline="middle"
                      fontFamily="Playfair Display, serif"
                      fontSize="48"
                      fontWeight="400"
                      fill="#5f5e5e"
                      letterSpacing="-1.5"
                    >
                      Portfolio
                    </text>

                    <g id="box">
                      <path
                        strokeWidth={2}
                        stroke="#2563EB"
                        fillOpacity="0.05"
                        fill="#2563EB"
                        d="M587 20H28V306H587V20Z"
                        id="figny9-box"
                      />
                      <path
                        strokeWidth={2}
                        stroke="#2563EB"
                        fill="white"
                        d="M33 15H23V25H33V15Z"
                        id="figny9-adjust-1"
                      />
                      <path
                        strokeWidth={2}
                        stroke="#2563EB"
                        fill="white"
                        d="M33 301H23V311H33V301Z"
                        id="figny9-adjust-3"
                      />
                      <path
                        strokeWidth={2}
                        stroke="#2563EB"
                        fill="white"
                        d="M592 301H582V311H592V301Z"
                        id="figny9-adjust-4"
                      />
                      <path
                        strokeWidth={2}
                        stroke="#2563EB"
                        fill="white"
                        d="M592 15H582V25H592V15Z"
                        id="figny9-adjust-2"
                      />
                    </g>

                    <g id="cursor">
                      <path
                        strokeWidth={2}
                        stroke="white"
                        fill="#2563EB"
                        d="M453.383 343L448 317L471 331L459.745 333.5L453.383 343Z"
                        id="Vector 273"
                      />
                      <path
                        fill="#2563EB"
                        d="M535 343H469.932V376H535V343Z"
                        id="Rectangle 786"
                      />
                      <text
                        x="503"
                        y="359.5"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontFamily="Inter, sans-serif"
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
                <button>
                  <span className="shadow" />
                  <span className="edge" />
                  <span className="front text">My CV</span>
                </button>
              </StyledButton3D>

              {/* Social Icons */}
              <SocialWrapper>
                <ul className="wrapper">
                  <li className="icon instagram">
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
                  </li>
                  <li className="icon github">
                    <span className="tooltip">GitHub</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1.2em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </li>
                </ul>
              </SocialWrapper>
            </div>
          </div>

          {/* ===== PROFILE CARD - MAC OS STYLE (FULL FOTO) ===== */}
          <div className="relative w-full">
            <StyledProfileCard>
              <div className="card">
                <div className="tools">
                  <div className="circle">
                    <span className="red box" />
                  </div>
                  <div className="circle">
                    <span className="yellow box" />
                  </div>
                  <div className="circle">
                    <span className="green box" />
                  </div>
                </div>
                <div className="card__content">
                  <img
                    src={profilePhoto}
                    alt="Profile"
                    className="profile-image"
                  />
                  <div className="badge">Junior Developer</div>
                </div>
              </div>
            </StyledProfileCard>
          </div>
        </div>
      </div>
    </section>
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

// ===== STYLED PROFILE CARD - MAC OS STYLE (FULL FOTO) =====
const StyledProfileCard = styled.div`
  width: 100%;
  max-width: 380px;
  margin: 0 auto;

  .card {
    width: min(100%, 380px);
    height: 480px;
    margin: 0 auto;
    background: #f5f7fa;
    border-radius: 14px;
    z-index: 1;
    overflow: hidden;
    box-shadow: 0 20px 60px -15px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  .tools {
    display: flex;
    align-items: center;
    padding: 14px 18px;
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    gap: 8px;
    position: relative;
    z-index: 2;
  }

  .circle {
    padding: 0 2px;
    display: flex;
    align-items: center;
  }

  .box {
    display: inline-block;
    width: 13px;
    height: 13px;
    border-radius: 50%;
  }

  .red {
    background: #ff5f57;
  }

  .yellow {
    background: #ffbd2e;
  }

  .green {
    background: #28c840;
  }

  .card__content {
    position: relative;
    width: 100%;
    height: calc(100% - 48px);
    overflow: hidden;
    background: #f0f2f5;
  }

  .profile-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    display: block;
  }

  .badge {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(8px);
    padding: 8px 20px;
    border-radius: 50px;
    color: white;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    white-space: nowrap;
    font-family: "Plus Jakarta Sans", "Inter", sans-serif;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 640px) {
    .card {
      height: 400px;
      border-radius: 12px;
    }
    .tools {
      padding: 10px 14px;
    }
    .box {
      width: 11px;
      height: 11px;
    }
    .badge {
      font-size: 8px;
      padding: 6px 14px;
      bottom: 16px;
      letter-spacing: 1.5px;
    }
  }

  @media (min-width: 641px) and (max-width: 1024px) {
    .card {
      height: 440px;
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
    background: #1b1b1e;
    will-change: transform;
    transform: translateY(-4px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
    font-family: "Plus Jakarta Sans", "Inter", sans-serif;
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
    color: #4f4f4f;
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
    font-family: "Plus Jakarta Sans", "Inter", sans-serif;
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
