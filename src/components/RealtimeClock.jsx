// src/components/RealTimeClockFooter.jsx
import { useState, useEffect } from "react";
import styled from "styled-components";

const RealTimeClockFooter = () => {
  const [time, setTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");

      setTime({ hours, minutes, seconds });
    };

    const interval = setInterval(updateClock, 1000);
    updateClock();

    return () => clearInterval(interval);
  }, []);

  return (
    <StyledWrapper>
      <div className="clock-container">
        <div className="clock-icon">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        </div>
        <div className="clock-display">
          <span className="hours">{time.hours}</span>
          <span className="separator">:</span>
          <span className="minutes">{time.minutes}</span>
          <span className="separator">:</span>
          <span className="seconds">{time.seconds}</span>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .clock-container {
    display: flex;
    align-items: center;
    gap: 10px;
    background: rgba(27, 27, 30, 0.05);
    padding: 8px 16px 8px 14px;
    border-radius: 50px;
    border: 1px solid rgba(27, 27, 30, 0.08);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
  }

  .clock-container:hover {
    background: rgba(27, 27, 30, 0.08);
    border-color: rgba(27, 27, 30, 0.15);
    transform: scale(1.02);
  }

  .clock-icon {
    color: #5f5e5e;
    display: flex;
    align-items: center;
    opacity: 0.6;
  }

  .clock-display {
    display: flex;
    align-items: center;
    gap: 2px;
    font-family:
      "Inter",
      -apple-system,
      BlinkMacSystemFont,
      sans-serif;
    font-size: 13px;
    font-weight: 500;
    color: #1b1b1e;
    letter-spacing: 0.5px;
  }

  .hours,
  .minutes,
  .seconds {
    display: inline-block;
    min-width: 18px;
    text-align: center;
    font-variant-numeric: tabular-nums;
  }

  .seconds {
    color: #5f5e5e;
    font-weight: 400;
    min-width: 18px;
  }

  .separator {
    display: inline-block;
    width: 4px;
    text-align: center;
    color: #5f5e5e;
    animation: blink 1s step-end infinite;
    font-weight: 300;
  }

  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }

  /* Responsive */
  @media (max-width: 640px) {
    .clock-container {
      padding: 6px 12px 6px 10px;
    }
    .clock-display {
      font-size: 11px;
    }
    .hours,
    .minutes,
    .seconds {
      min-width: 14px;
    }
    .clock-icon svg {
      width: 14px;
      height: 14px;
    }
  }
`;

export default RealTimeClockFooter;
