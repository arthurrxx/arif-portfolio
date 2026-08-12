// src/components/Loader.jsx
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader-container">
        <div className="loader">
          <span>
            <span />
            <span />
            <span />
            <span />
          </span>
          <div className="base">
            <span />
            <div className="face" />
          </div>
        </div>
        <div className="longfazers">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .loader-container {
    position: relative;
    width: 120px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loader {
    position: absolute;
    top: 50%;
    margin-left: -35px;
    left: 50%;
    animation: speeder 0.4s linear infinite;
    transform: scale(0.7);
  }
  .loader > span {
    height: 4px;
    width: 25px;
    background: #1b1b1e;
    position: absolute;
    top: -15px;
    left: 42px;
    border-radius: 2px 8px 1px 0;
  }
  .base span {
    position: absolute;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-right: 70px solid #1b1b1e;
    border-bottom: 5px solid transparent;
  }
  .base span:before {
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: #1b1b1e;
    position: absolute;
    right: -78px;
    top: -11px;
  }
  .base span:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-top: 0 solid transparent;
    border-right: 40px solid #1b1b1e;
    border-bottom: 12px solid transparent;
    top: -11px;
    right: -70px;
  }
  .face {
    position: absolute;
    height: 9px;
    width: 14px;
    background: #1b1b1e;
    border-radius: 20px 20px 0 0;
    transform: rotate(-40deg);
    right: -88px;
    top: -11px;
  }
  .face:after {
    content: "";
    height: 9px;
    width: 9px;
    background: #1b1b1e;
    right: 3px;
    top: 5px;
    position: absolute;
    transform: rotate(40deg);
    transform-origin: 50% 50%;
    border-radius: 0 0 0 2px;
  }
  .loader > span > span:nth-child(1),
  .loader > span > span:nth-child(2),
  .loader > span > span:nth-child(3),
  .loader > span > span:nth-child(4) {
    width: 22px;
    height: 1px;
    background: #1b1b1e;
    position: absolute;
    animation: fazer1 0.2s linear infinite;
  }
  .loader > span > span:nth-child(2) {
    top: 2px;
    animation: fazer2 0.4s linear infinite;
  }
  .loader > span > span:nth-child(3) {
    top: 1px;
    animation: fazer3 0.4s linear infinite;
    animation-delay: -1s;
  }
  .loader > span > span:nth-child(4) {
    top: 3px;
    animation: fazer4 1s linear infinite;
    animation-delay: -1s;
  }
  @keyframes fazer1 {
    0% {
      left: 0;
    }
    100% {
      left: -60px;
      opacity: 0;
    }
  }
  @keyframes fazer2 {
    0% {
      left: 0;
    }
    100% {
      left: -75px;
      opacity: 0;
    }
  }
  @keyframes fazer3 {
    0% {
      left: 0;
    }
    100% {
      left: -40px;
      opacity: 0;
    }
  }
  @keyframes fazer4 {
    0% {
      left: 0;
    }
    100% {
      left: -110px;
      opacity: 0;
    }
  }
  @keyframes speeder {
    0% {
      transform: translate(2px, 1px) rotate(0deg) scale(0.7);
    }
    10% {
      transform: translate(-1px, -3px) rotate(-1deg) scale(0.7);
    }
    20% {
      transform: translate(-2px, 0px) rotate(1deg) scale(0.7);
    }
    30% {
      transform: translate(1px, 2px) rotate(0deg) scale(0.7);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg) scale(0.7);
    }
    50% {
      transform: translate(-1px, 3px) rotate(-1deg) scale(0.7);
    }
    60% {
      transform: translate(-1px, 1px) rotate(0deg) scale(0.7);
    }
    70% {
      transform: translate(3px, 1px) rotate(-1deg) scale(0.7);
    }
    80% {
      transform: translate(-2px, -1px) rotate(1deg) scale(0.7);
    }
    90% {
      transform: translate(2px, 1px) rotate(0deg) scale(0.7);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg) scale(0.7);
    }
  }
  .longfazers {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .longfazers span {
    position: absolute;
    height: 1.5px;
    width: 15%;
    background: #1b1b1e;
    border-radius: 2px;
  }
  .longfazers span:nth-child(1) {
    top: 20%;
    animation: lf 0.6s linear infinite;
    animation-delay: -5s;
  }
  .longfazers span:nth-child(2) {
    top: 40%;
    animation: lf2 0.8s linear infinite;
    animation-delay: -1s;
  }
  .longfazers span:nth-child(3) {
    top: 60%;
    animation: lf3 0.6s linear infinite;
  }
  .longfazers span:nth-child(4) {
    top: 80%;
    animation: lf4 0.5s linear infinite;
    animation-delay: -3s;
  }
  @keyframes lf {
    0% {
      left: 200%;
    }
    100% {
      left: -200%;
      opacity: 0;
    }
  }
  @keyframes lf2 {
    0% {
      left: 200%;
    }
    100% {
      left: -200%;
      opacity: 0;
    }
  }
  @keyframes lf3 {
    0% {
      left: 200%;
    }
    100% {
      left: -100%;
      opacity: 0;
    }
  }
  @keyframes lf4 {
    0% {
      left: 200%;
    }
    100% {
      left: -100%;
      opacity: 0;
    }
  }

  @media (max-width: 640px) {
    .loader-container {
      width: 80px;
      height: 80px;
    }
    .loader {
      transform: scale(0.5);
      margin-left: -25px;
    }
    .longfazers span {
      height: 1px;
      width: 20%;
    }
  }

  @media (min-width: 641px) and (max-width: 1024px) {
    .loader-container {
      width: 100px;
      height: 100px;
    }
    .loader {
      transform: scale(0.6);
    }
  }
`;

export default Loader;
