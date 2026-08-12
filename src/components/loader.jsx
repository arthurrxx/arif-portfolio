// src/components/Loader.jsx
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <svg
          className="container"
          width={100}
          height={100}
          viewBox="0 0 64 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x={2}
            y={2}
            width={60}
            height={36}
            rx={4}
            ry={4}
            pathLength={100}
            className="track"
          />
          <rect
            x={2}
            y={2}
            width={60}
            height={36}
            rx={4}
            ry={4}
            pathLength={100}
            className="car"
          />
          <g className="keys">
            <rect x={8} y={8} width={6} height={5} rx={1} />
            <rect x={16} y={8} width={6} height={5} rx={1} />
            <rect x={24} y={8} width={6} height={5} rx={1} />
            <rect x={32} y={8} width={6} height={5} rx={1} />
            <rect x={40} y={8} width={6} height={5} rx={1} />
            <rect x={48} y={8} width={8} height={5} rx={1} />
            <rect x={8} y={16} width={6} height={5} rx={1} />
            <rect x={16} y={16} width={6} height={5} rx={1} />
            <rect x={24} y={16} width={6} height={5} rx={1} />
            <rect x={32} y={16} width={6} height={5} rx={1} />
            <rect x={40} y={16} width={6} height={5} rx={1} />
            <rect x={48} y={16} width={8} height={5} rx={1} />
            <rect x={8} y={24} width={8} height={5} rx={1} />
            <rect x={18} y={24} width={6} height={5} rx={1} />
            <rect x={26} y={24} width={18} height={5} rx={1} />
            <rect x={46} y={24} width={10} height={5} rx={1} />
          </g>
        </svg>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  .container {
    overflow: visible;
    width: 80px;
    height: 80px;
  }

  .track,
  .car {
    fill: none;
    stroke-width: 2.5;
  }

  .track {
    stroke: #d0d0d0;
  }

  .car {
    stroke: #1b1b1e;
    stroke-linecap: round;
    stroke-dasharray: 25 75;
    animation: borderMove 2s linear infinite;
  }

  .keys rect {
    fill: #1b1b1e;
    animation: typing 1.2s infinite;
  }

  .keys rect:nth-child(2n) {
    animation-delay: 0.15s;
  }

  .keys rect:nth-child(3n) {
    animation-delay: 0.3s;
  }

  .keys rect:nth-child(4n) {
    animation-delay: 0.45s;
  }

  @keyframes borderMove {
    from {
      stroke-dashoffset: 100;
    }
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes typing {
    0%,
    100% {
      opacity: 0.35;
    }
    50% {
      opacity: 1;
    }
  }

  /* Responsive */
  @media (max-width: 640px) {
    .container {
      width: 60px;
      height: 60px;
    }
    .track,
    .car {
      stroke-width: 2;
    }
    .keys rect {
      rx: 0.5;
    }
  }

  @media (min-width: 641px) and (max-width: 1024px) {
    .container {
      width: 80px;
      height: 80px;
    }
  }

  @media (min-width: 1025px) {
    .container {
      width: 100px;
      height: 100px;
    }
  }
`;

export default Loader;
