(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,29615,e=>{"use strict";var t=e.i(43476),a=e.i(71645);let r=({activeSection:e})=>{let[r,i]=(0,a.useState)(!1),[s,n]=(0,a.useState)(!1),[l,o]=(0,a.useState)(!1),[d,c]=(0,a.useState)({left:0,width:0}),m=(0,a.useRef)(0);(0,a.useEffect)(()=>{let e=()=>{let e=window.scrollY;i(e>20),e<=20?n(!1):Math.abs(e-m.current)>8&&n(e>m.current&&e>100),m.current=e};return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)},[]),(0,a.useEffect)(()=>{let t=()=>{let t=document.querySelector(`[data-nav="${e}"]`);if(t){let e=t.getBoundingClientRect(),a=t.closest("nav").getBoundingClientRect();c({left:e.left-a.left,width:e.width})}},a=setTimeout(t,50);return window.addEventListener("resize",t),()=>{clearTimeout(a),window.removeEventListener("resize",t)}},[e]);let f=[{id:"hero",label:"Beranda"},{id:"about",label:"Tentang"},{id:"work",label:"Karya"},{id:"contact",label:"Kontak"}],u=e=>{let t=document.getElementById(e);t&&(t.scrollIntoView({behavior:"smooth"}),o(!1))};return(0,t.jsxs)("header",{className:`site-header fixed top-0 left-0 z-50 w-full ${r?"site-header-scrolled":""} ${s&&!l?"site-header-hidden":""}`,children:[(0,t.jsxs)("div",{className:"max-w-7xl mx-auto flex items-center justify-between h-14 md:h-16 px-4 md:px-8",children:[(0,t.jsxs)("button",{onClick:()=>u("hero"),className:"portfolio-brand flex items-center gap-2 md:gap-3 text-[#20242c] flex-shrink-0","aria-label":"Beranda",children:[(0,t.jsx)("img",{src:"logo.svg",alt:"Logo",className:"w-8 h-8 md:w-10 md:h-10 object-contain"}),(0,t.jsx)("span",{className:"portfolio-wordmark font-['Manrope'] font-bold text-base md:text-xl tracking-tight",children:"PORTFOLIO"})]}),(0,t.jsxs)("nav",{className:"nav-links hidden md:flex items-center gap-7 relative","aria-label":"Primary navigation",children:[(0,t.jsx)("span",{"aria-hidden":"true",className:"nav-indicator absolute -bottom-2 h-[3px] rounded-full",style:{left:`${d.left}px`,width:`${d.width}px`}}),f.map(a=>(0,t.jsx)("button",{"data-nav":a.id,onClick:()=>u(a.id),className:`relative py-1 text-sm font-medium tracking-wider transition-colors duration-300 ${e===a.id?"text-[#20242c]":"text-[#667085] hover:text-[#20242c]"}`,"aria-current":e===a.id?"page":void 0,children:a.label},a.id))]}),(0,t.jsxs)("button",{onClick:()=>u("contact"),className:"nav-cta-button hidden md:inline-flex","aria-label":"Hubungi saya",children:[(0,t.jsx)("span",{className:"nav-cta-shadow","aria-hidden":"true"}),(0,t.jsx)("span",{className:"nav-cta-edge","aria-hidden":"true"}),(0,t.jsx)("span",{className:"nav-cta-front",children:"Diskusi proyek"})]}),(0,t.jsxs)("button",{onClick:()=>o(!l),className:"md:hidden flex flex-col gap-1.5 p-2 hover:opacity-60 transition-opacity flex-shrink-0 group","aria-label":l?"Tutup menu":"Buka menu","aria-expanded":l,"aria-controls":"mobile-navigation",children:[(0,t.jsx)("span",{className:`menu-line w-5 h-0.5 bg-[#20242c] rounded-full transition-all duration-300 ${l?"rotate-45 translate-y-2":""} group-hover:w-6`}),(0,t.jsx)("span",{className:`menu-line w-5 h-0.5 bg-[#20242c] rounded-full transition-all duration-300 ${l?"scale-x-0 opacity-0":""} group-hover:w-4`}),(0,t.jsx)("span",{className:`menu-line w-5 h-0.5 bg-[#20242c] rounded-full transition-all duration-300 ${l?"-rotate-45 -translate-y-2":""} group-hover:w-6`})]})]}),(0,t.jsx)("div",{id:"mobile-navigation",inert:!l,className:`mobile-menu md:hidden overflow-hidden ${l?"mobile-menu-open":""}`,children:(0,t.jsx)("div",{className:"px-4 pb-6 pt-2 border-t border-[#e5e7eb] bg-white/95 backdrop-blur-xl",children:(0,t.jsxs)("nav",{className:"flex flex-col gap-3","aria-label":"Mobile navigation",children:[f.map((a,r)=>(0,t.jsx)("button",{onClick:()=>u(a.id),className:`mobile-nav-link text-left text-base font-medium tracking-wider transition-colors duration-300 py-2 ${e===a.id?"text-[#20242c]":"text-[#667085] hover:text-[#20242c]"}`,style:{"--menu-item-index":r},children:a.label},a.id)),(0,t.jsxs)("button",{onClick:()=>u("contact"),className:"nav-cta-button nav-mobile-cta mt-2",children:[(0,t.jsx)("span",{className:"nav-cta-shadow","aria-hidden":"true"}),(0,t.jsx)("span",{className:"nav-cta-edge","aria-hidden":"true"}),(0,t.jsx)("span",{className:"nav-cta-front",children:"Diskusi proyek"})]})]})})})]})};var i=e.i(97053),s=Object.defineProperty,n=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&d(e,a,t[a]);if(n)for(var a of n(t))o.call(t,a)&&d(e,a,t[a]);return e};function m(e,t){for(let a in t)"string"==typeof t[a]&&(e.style[a]=t[a])}var f=new Map,u={animation:"fadeUp",duration:600,delay:0,easing:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",threshold:.1,once:!0,rootMargin:"0px",distance:40};function p(e){return c(c({},u),e)}function x(e={}){let t=(0,a.useRef)(null),r=(0,a.useRef)(p(e));return(0,a.useEffect)(()=>{r.current=p(e)}),(0,a.useEffect)(()=>{let e=t.current;if(!e)return;let a=r.current,{hidden:i,visible:s}=function(e,t=40){switch(e){case"fadeIn":return{hidden:{opacity:"0"},visible:{opacity:"1",transform:"none"}};case"fadeUp":return{hidden:{opacity:"0",transform:`translateY(${t}px)`},visible:{opacity:"1",transform:"translateY(0)"}};case"fadeDown":return{hidden:{opacity:"0",transform:`translateY(-${t}px)`},visible:{opacity:"1",transform:"translateY(0)"}};case"fadeLeft":return{hidden:{opacity:"0",transform:`translateX(${t}px)`},visible:{opacity:"1",transform:"translateX(0)"}};case"fadeRight":return{hidden:{opacity:"0",transform:`translateX(-${t}px)`},visible:{opacity:"1",transform:"translateX(0)"}};case"zoomIn":return{hidden:{opacity:"0",transform:"scale(0.85)"},visible:{opacity:"1",transform:"scale(1)"}};case"zoomOut":return{hidden:{opacity:"0",transform:"scale(1.15)"},visible:{opacity:"1",transform:"scale(1)"}};case"slideUp":return{hidden:{transform:`translateY(${t}px)`},visible:{transform:"translateY(0)"}};case"slideDown":return{hidden:{transform:`translateY(-${t}px)`},visible:{transform:"translateY(0)"}};case"flipX":return{hidden:{opacity:"0",transform:"rotateX(90deg)"},visible:{opacity:"1",transform:"rotateX(0deg)"}};case"flipY":return{hidden:{opacity:"0",transform:"rotateY(90deg)"},visible:{opacity:"1",transform:"rotateY(0deg)"}};default:return{hidden:{opacity:"0"},visible:{opacity:"1"}}}}(a.animation,a.distance);m(e,i),e.style.transition=`opacity ${a.duration}ms ${a.easing} ${a.delay}ms, transform ${a.duration}ms ${a.easing} ${a.delay}ms`,e.style.willChange="transform, opacity";let n=function(e,t,a,r){let i=`${a}|${r}`;if(!f.has(i)){let e=new Map,t=new IntersectionObserver(t=>{var a;for(let r of t)null==(a=e.get(r.target))||a(r)},{threshold:a,rootMargin:r});f.set(i,{observer:t,callbacks:e})}let s=f.get(i);return s.callbacks.set(e,t),s.observer.observe(e),()=>{s.observer.unobserve(e),s.callbacks.delete(e),0===s.callbacks.size&&(s.observer.disconnect(),f.delete(i))}}(e,t=>{t.isIntersecting?(m(e,s),setTimeout(()=>{e.style.willChange="auto"},a.duration+a.delay),a.once&&n()):a.once||m(e,i)},a.threshold,a.rootMargin);return n},[]),t}let h=i.U.div.withConfig({displayName:"NotFoundPage__StyledWrapper",componentId:"sc-5201791f-0"})`
  /* Design Inspired by one of Stefan Devai's Design on Dribble */

  .not-found-page {
    position: fixed;
    inset: 0;
    z-index: 50;
    display: flex;
    min-height: 100vh;
    min-height: 100dvh;
    flex-direction: column;
    overflow-y: auto;
    background: #fbf9fc;
    padding: 24px clamp(16px, 5vw, 64px);
  }

  .back-button {
    display: flex;
    width: 42px;
    height: 42px;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(193, 198, 215, 0.6);
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.8);
    color: #1b1b1e;
    cursor: pointer;
    font: inherit;
    font-size: 1.75rem;
    line-height: 1;
    transition:
      background-color 180ms ease,
      color 180ms ease,
      transform 180ms ease,
      border-color 180ms ease;
  }

  .back-button:hover {
    transform: rotate(90deg);
    border-color: #1b1b1e;
    background: #1b1b1e;
    color: white;
  }

  .back-button:focus-visible {
    outline: 3px solid #0058bc;
    outline-offset: 3px;
  }

  .not-found-content {
    display: flex;
    width: min(100%, 1100px);
    flex: 1;
    align-items: center;
    justify-content: center;
    gap: clamp(8px, 4vw, 64px);
    align-self: center;
  }

  .not-found-message {
    max-width: 390px;
    color: #5f5e5e;
  }

  .not-found-message .eyebrow {
    color: #717786;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }

  .not-found-message h1 {
    margin-top: 12px;
    color: #1b1b1e;
    font-family: "Playfair Display", serif;
    font-size: clamp(2rem, 4vw, 3.25rem);
    font-weight: 400;
    line-height: 1.1;
  }

  .not-found-message a {
    display: inline-flex;
    margin-top: 22px;
    border-radius: 9999px;
    background: #0058bc;
    padding: 13px 22px;
    color: white;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-decoration: none;
    transition: background-color 180ms ease;
  }

  .not-found-message a:hover {
    background: #1b1b1e;
  }

  .main_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30em;
    height: 30em;
  }

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 5em;
  }

  .antenna {
    width: 5em;
    height: 5em;
    border-radius: 50%;
    border: 2px solid black;
    background-color: #f27405;
    margin-bottom: -6em;
    margin-left: 0em;
    z-index: -1;
  }
  .antenna_shadow {
    position: absolute;
    background-color: transparent;
    width: 50px;
    height: 56px;
    margin-left: 1.68em;
    border-radius: 45%;
    transform: rotate(140deg);
    border: 4px solid transparent;
    box-shadow:
      inset 0px 16px #a85103,
      inset 0px 16px 1px 1px #a85103;
    -moz-box-shadow:
      inset 0px 16px #a85103,
      inset 0px 16px 1px 1px #a85103;
  }
  .antenna::after {
    content: "";
    position: absolute;
    margin-top: -9.4em;
    margin-left: 0.4em;
    transform: rotate(-25deg);
    width: 1em;
    height: 0.5em;
    border-radius: 50%;
    background-color: #f69e50;
  }
  .antenna::before {
    content: "";
    position: absolute;
    margin-top: 0.2em;
    margin-left: 1.25em;
    transform: rotate(-20deg);
    width: 1.5em;
    height: 0.8em;
    border-radius: 50%;
    background-color: #f69e50;
  }
  .a1 {
    position: relative;
    top: -102%;
    left: -130%;
    width: 12em;
    height: 5.5em;
    border-radius: 50px;
    background-image: linear-gradient(
      #171717,
      #171717,
      #353535,
      #353535,
      #171717
    );
    transform: rotate(-29deg);
    clip-path: polygon(50% 0%, 49% 100%, 52% 100%);
  }
  .a1d {
    position: relative;
    top: -211%;
    left: -35%;
    transform: rotate(45deg);
    width: 0.5em;
    height: 0.5em;
    border-radius: 50%;
    border: 2px solid black;
    background-color: #979797;
    z-index: 99;
  }
  .a2 {
    position: relative;
    top: -210%;
    left: -10%;
    width: 12em;
    height: 4em;
    border-radius: 50px;
    background-color: #171717;
    background-image: linear-gradient(
      #171717,
      #171717,
      #353535,
      #353535,
      #171717
    );
    margin-right: 5em;
    clip-path: polygon(
      47% 0,
      47% 0,
      34% 34%,
      54% 25%,
      32% 100%,
      29% 96%,
      49% 32%,
      30% 38%
    );
    transform: rotate(-8deg);
  }
  .a2d {
    position: relative;
    top: -294%;
    left: 94%;
    width: 0.5em;
    height: 0.5em;
    border-radius: 50%;
    border: 2px solid black;
    background-color: #979797;
    z-index: 99;
  }

  .notfound_text {
    background-color: black;
    padding-left: 0.3em;
    padding-right: 0.3em;
    font-size: 0.75em;
    color: white;
    letter-spacing: 0;
    border-radius: 5px;
    z-index: 10;
  }
  .tv {
    width: 17em;
    height: 9em;
    margin-top: 3em;
    border-radius: 15px;
    background-color: #d36604;
    display: flex;
    justify-content: center;
    border: 2px solid #1d0e01;
    box-shadow: inset 0.2em 0.2em #e69635;
  }
  .tv::after {
    content: "";
    position: absolute;
    width: 17em;
    height: 9em;
    border-radius: 15px;
    background:
      repeating-radial-gradient(#d36604 0 0.0001%, #00000070 0 0.0002%) 50%
        0/2500px 2500px,
      repeating-conic-gradient(#d36604 0 0.0001%, #00000070 0 0.0002%) 60%
        60%/2500px 2500px;
    background-blend-mode: difference;
    opacity: 0.09;
  }
  .curve_svg {
    position: absolute;
    margin-top: 0.25em;
    margin-left: -0.25em;
    height: 12px;
    width: 12px;
  }
  .display_div {
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    border-radius: 15px;
    box-shadow: 3.5px 3.5px 0px #e69635;
  }
  .screen_out {
    width: auto;
    height: auto;

    border-radius: 10px;
  }
  .screen_out1 {
    width: 11em;
    height: 7.75em;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
  }
  .screen {
    width: 13em;
    height: 7.85em;
    font-family: Montserrat;
    border: 2px solid #1d0e01;
    background:
      repeating-radial-gradient(#000 0 0.0001%, #ffffff 0 0.0002%) 50% 0/2500px
        2500px,
      repeating-conic-gradient(#000 0 0.0001%, #ffffff 0 0.0002%) 60% 60%/2500px
        2500px;
    background-blend-mode: difference;
    animation: b 0.2s infinite alternate;
    border-radius: 10px;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #252525;
    letter-spacing: 0.15em;
    text-align: center;
  }

  .screenM {
    width: 13em;
    height: 7.85em;
    position: relative;
    font-family: Montserrat;
    background: linear-gradient(
      to right,
      #002fc6 0%,
      #002bb2 14.2857142857%,
      #3a3a3a 14.2857142857%,
      #303030 28.5714285714%,
      #ff0afe 28.5714285714%,
      #f500f4 42.8571428571%,
      #6c6c6c 42.8571428571%,
      #626262 57.1428571429%,
      #0affd9 57.1428571429%,
      #00f5ce 71.4285714286%,
      #3a3a3a 71.4285714286%,
      #303030 85.7142857143%,
      white 85.7142857143%,
      #fafafa 100%
    );
    border-radius: 10px;
    border: 2px solid black;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #252525;
    letter-spacing: 0.15em;
    text-align: center;
    overflow: hidden;
  }
  .screenM:before,
  .screenM:after {
    content: "";
    position: absolute;
    left: 0;
    z-index: 1;
    width: 100%;
  }
  .screenM:before {
    top: 0;
    height: 68.4782608696%;
    background: linear-gradient(
      to right,
      white 0%,
      #fafafa 14.2857142857%,
      #ffe60a 14.2857142857%,
      #f5dc00 28.5714285714%,
      #0affd9 28.5714285714%,
      #00f5ce 42.8571428571%,
      #10ea00 42.8571428571%,
      #0ed600 57.1428571429%,
      #ff0afe 57.1428571429%,
      #f500f4 71.4285714286%,
      #ed0014 71.4285714286%,
      #d90012 85.7142857143%,
      #002fc6 85.7142857143%,
      #002bb2 100%
    );
  }
  .screenM:after {
    bottom: 0;
    height: 21.7391304348%;
    background: linear-gradient(
      to right,
      #006c6b 0%,
      #005857 16.6666666667%,
      white 16.6666666667%,
      #fafafa 33.3333333333%,
      #001b75 33.3333333333%,
      #001761 50%,
      #6c6c6c 50%,
      #626262 66.6666666667%,
      #929292 66.6666666667%,
      #888888 83.3333333333%,
      #3a3a3a 83.3333333333%,
      #303030 100%
    );
  }

  @keyframes b {
    100% {
      background-position:
        50% 0,
        60% 50%;
    }
  }

  /* Another Error Screen to Use 

  .screen {
    width: 13em;
    height: 7.85em;
    position: relative;
    background: linear-gradient(to right, #002fc6 0%, #002bb2 14.2857142857%, #3a3a3a 14.2857142857%, #303030 28.5714285714%, #ff0afe 28.5714285714%, #f500f4 42.8571428571%, #6c6c6c 42.8571428571%, #626262 57.1428571429%, #0affd9 57.1428571429%, #00f5ce 71.4285714286%, #3a3a3a 71.4285714286%, #303030 85.7142857143%, white 85.7142857143%, #fafafa 100%);
    border-radius: 10px;
    border: 2px solid black;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #252525;
    letter-spacing: 0.15em;
    text-align: center;
    overflow: hidden;
  }
  .screen:before, .screen:after {
    content: "";
    position: absolute;
    left: 0;
    z-index: 1;
    width: 100%;
  }
  .screen:before {
    top: 0;
    height: 68.4782608696%;
    background: linear-gradient(to right, white 0%, #fafafa 14.2857142857%, #ffe60a 14.2857142857%, #f5dc00 28.5714285714%, #0affd9 28.5714285714%, #00f5ce 42.8571428571%, #10ea00 42.8571428571%, #0ed600 57.1428571429%, #ff0afe 57.1428571429%, #f500f4 71.4285714286%, #ed0014 71.4285714286%, #d90012 85.7142857143%, #002fc6 85.7142857143%, #002bb2 100%);
  }
  .screen:after {
    bottom: 0;
    height: 21.7391304348%;
    background: linear-gradient(to right, #006c6b 0%, #005857 16.6666666667%, white 16.6666666667%, #fafafa 33.3333333333%, #001b75 33.3333333333%, #001761 50%, #6c6c6c 50%, #626262 66.6666666667%, #929292 66.6666666667%, #888888 83.3333333333%, #3a3a3a 83.3333333333%, #303030 100%);
  }

    */

  .lines {
    display: flex;
    column-gap: 0.1em;
    align-self: flex-end;
  }
  .line1,
  .line3 {
    width: 2px;
    height: 0.5em;
    background-color: black;
    border-radius: 25px 25px 0px 0px;
    margin-top: 0.5em;
  }
  .line2 {
    flex-grow: 1;
    width: 2px;
    height: 1em;
    background-color: black;
    border-radius: 25px 25px 0px 0px;
  }

  .buttons_div {
    width: 4.25em;
    align-self: center;
    height: 8em;
    background-color: #e69635;
    border: 2px solid #1d0e01;
    padding: 0.6em;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    row-gap: 0.75em;
    box-shadow: 3px 3px 0px #e69635;
  }
  .b1 {
    width: 1.65em;
    height: 1.65em;
    border-radius: 50%;
    background-color: #7f5934;
    border: 2px solid black;
    box-shadow:
      inset 2px 2px 1px #b49577,
      -2px 0px #513721,
      -2px 0px 0px 1px black;
  }
  .b1::before {
    content: "";
    position: absolute;
    margin-top: 1em;
    margin-left: 0.5em;
    transform: rotate(47deg);
    border-radius: 5px;
    width: 0.1em;
    height: 0.4em;
    background-color: #000000;
  }
  .b1::after {
    content: "";
    position: absolute;
    margin-top: 0.9em;
    margin-left: 0.8em;
    transform: rotate(47deg);
    border-radius: 5px;
    width: 0.1em;
    height: 0.55em;
    background-color: #000000;
  }
  .b1 div {
    content: "";
    position: absolute;
    margin-top: -0.1em;
    margin-left: 0.65em;
    transform: rotate(45deg);
    width: 0.15em;
    height: 1.5em;
    background-color: #000000;
  }
  .b2 {
    width: 1.65em;
    height: 1.65em;
    border-radius: 50%;
    background-color: #7f5934;
    border: 2px solid black;
    box-shadow:
      inset 2px 2px 1px #b49577,
      -2px 0px #513721,
      -2px 0px 0px 1px black;
  }
  .b2::before {
    content: "";
    position: absolute;
    margin-top: 1.05em;
    margin-left: 0.8em;
    transform: rotate(-45deg);
    border-radius: 5px;
    width: 0.15em;
    height: 0.4em;
    background-color: #000000;
  }
  .b2::after {
    content: "";
    position: absolute;
    margin-top: -0.1em;
    margin-left: 0.65em;
    transform: rotate(-45deg);
    width: 0.15em;
    height: 1.5em;
    background-color: #000000;
  }
  .speakers {
    display: flex;
    flex-direction: column;
    row-gap: 0.5em;
  }
  .speakers .g1 {
    display: flex;
    column-gap: 0.25em;
  }
  .speakers .g1 .g11,
  .g12,
  .g13 {
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    background-color: #7f5934;
    border: 2px solid black;
    box-shadow: inset 1.25px 1.25px 1px #b49577;
  }
  .speakers .g {
    width: auto;
    height: 2px;
    background-color: #171717;
  }

  .bottom {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 8.7em;
  }
  .base1 {
    height: 1em;
    width: 2em;
    border: 2px solid #171717;
    background-color: #4d4d4d;
    margin-top: -0.15em;
    z-index: -1;
  }
  .base2 {
    height: 1em;
    width: 2em;
    border: 2px solid #171717;
    background-color: #4d4d4d;
    margin-top: -0.15em;
    z-index: -1;
  }
  .base3 {
    position: absolute;
    height: 0.15em;
    width: 17.5em;
    background-color: #171717;
    margin-top: 0.8em;
  }

  .text_404 {
    position: absolute;
    display: flex;
    flex-direction: row;
    column-gap: 6em;
    z-index: -5;
    margin-bottom: 2em;
    align-items: center;
    justify-content: center;
    opacity: 0.5;
    font-family: Montserrat;
  }
  .text_4041 {
    transform: scaleY(24.5) scaleX(9);
  }
  .text_4042 {
    transform: scaleY(24.5) scaleX(9);
  }
  .text_4043 {
    transform: scaleY(24.5) scaleX(9);
  }

  @media only screen and (max-width: 495px) {
    .text_404 {
      column-gap: 6em;
    }
  }
  @media only screen and (max-width: 395px) {
    .text_404 {
      column-gap: 4em;
    }
    .text_4041 {
      transform: scaleY(25) scaleX(8);
    }
    .text_4042 {
      transform: scaleY(25) scaleX(8);
    }
    .text_4043 {
      transform: scaleY(25) scaleX(8);
    }
  }

  @media (max-width: 275px), (max-height: 520px) {
    .main {
      position: relative;
    }
  }

  @media only screen and (max-width: 767px) {
    .not-found-content {
      flex-direction: column;
      gap: 0;
      padding: 16px 0 32px;
      text-align: center;
    }

    .main_wrapper {
      transform: scale(0.65);
      margin: -5.25em 0;
    }

    .not-found-message {
      margin-top: 8px;
    }
  }

  @media only screen and (max-width: 1024px) {
    .screenM {
      display: flex;
    }
    .screen {
      display: none;
    }
  }
  @media only screen and (min-width: 1025px) {
    .screen {
      display: flex;
    }
    .screenM {
      display: none;
    }
  }
`,g=({onBack:e})=>(0,t.jsx)(h,{children:(0,t.jsxs)("main",{className:"not-found-page",children:[(0,t.jsx)("button",{type:"button",className:"back-button",onClick:e,"aria-label":"Kembali ke My CV",title:"Kembali ke My CV",children:(0,t.jsx)("span",{"aria-hidden":"true",children:"×"})}),(0,t.jsxs)("div",{className:"not-found-content",children:[(0,t.jsxs)("div",{className:"main_wrapper","aria-hidden":"true",children:[(0,t.jsxs)("div",{className:"main",children:[(0,t.jsxs)("div",{className:"antenna",children:[(0,t.jsx)("div",{className:"antenna_shadow"}),(0,t.jsx)("div",{className:"a1"}),(0,t.jsx)("div",{className:"a1d"}),(0,t.jsx)("div",{className:"a2"}),(0,t.jsx)("div",{className:"a2d"}),(0,t.jsx)("div",{className:"a_base"})]}),(0,t.jsxs)("div",{className:"tv",children:[(0,t.jsx)("div",{className:"cruve",children:(0,t.jsx)("svg",{className:"curve_svg",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 189.929 189.929",xmlSpace:"preserve",children:(0,t.jsx)("path",{d:"M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13\r\n\n        C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z"})})}),(0,t.jsx)("div",{className:"display_div",children:(0,t.jsx)("div",{className:"screen_out",children:(0,t.jsxs)("div",{className:"screen_out1",children:[(0,t.jsx)("div",{className:"screen",children:(0,t.jsx)("span",{className:"notfound_text",children:" NOT FOUND"})}),(0,t.jsx)("div",{className:"screenM",children:(0,t.jsx)("span",{className:"notfound_text",children:" NOT FOUND"})})]})})}),(0,t.jsxs)("div",{className:"lines",children:[(0,t.jsx)("div",{className:"line1"}),(0,t.jsx)("div",{className:"line2"}),(0,t.jsx)("div",{className:"line3"})]}),(0,t.jsxs)("div",{className:"buttons_div",children:[(0,t.jsx)("div",{className:"b1",children:(0,t.jsx)("div",{})}),(0,t.jsx)("div",{className:"b2"}),(0,t.jsxs)("div",{className:"speakers",children:[(0,t.jsxs)("div",{className:"g1",children:[(0,t.jsx)("div",{className:"g11"}),(0,t.jsx)("div",{className:"g12"}),(0,t.jsx)("div",{className:"g13"})]}),(0,t.jsx)("div",{className:"g"}),(0,t.jsx)("div",{className:"g"})]})]})]}),(0,t.jsxs)("div",{className:"bottom",children:[(0,t.jsx)("div",{className:"base1"}),(0,t.jsx)("div",{className:"base2"}),(0,t.jsx)("div",{className:"base3"})]})]}),(0,t.jsxs)("div",{className:"text_404",children:[(0,t.jsx)("div",{className:"text_4041",children:"4"}),(0,t.jsx)("div",{className:"text_4042",children:"0"}),(0,t.jsx)("div",{className:"text_4043",children:"4"})]})]}),(0,t.jsxs)("div",{className:"not-found-message",children:[(0,t.jsx)("p",{className:"eyebrow",children:"404 · Not Found"}),(0,t.jsx)("h1",{children:"Halaman ini tidak ditemukan"})]})]})]})}),b=["[*] Initializing session...","[+] Session established","[*] Enumerating portfolio routes...","[+] 07 routes mapped","[*] Resolving asset manifest...","[+] 24 assets indexed","[*] Parsing interface modules...","[+] 03 modules loaded","[*] Running local diagnostics...","[+] Diagnostics complete","arif@portfolio:~$ _"],y=i.U.div.withConfig({displayName:"Hero__StyledCardWrapper",componentId:"sc-168b827-0"})`
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
`,v=i.U.div.withConfig({displayName:"Hero__StyledTerminalCard",componentId:"sc-168b827-1"})`
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
`,w=i.U.div.withConfig({displayName:"Hero__StyledButton3D",componentId:"sc-168b827-2"})`
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
`,j=i.U.div.withConfig({displayName:"Hero__SocialWrapper",componentId:"sc-168b827-3"})`
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
`,k=({id:e})=>{let r=(0,a.useRef)(null),i=(0,a.useRef)(null),s=(0,a.useRef)(null),[n,l]=(0,a.useState)(!1),[o,d]=(0,a.useState)(""),[c,m]=(0,a.useState)(!1),[f,u]=(0,a.useState)(0),[p,h]=(0,a.useState)(0),k=x({animation:"fadeUp",duration:800,delay:200,once:!0}),N=x({animation:"fadeUp",duration:800,delay:400,once:!0});return(0,a.useEffect)(()=>{let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add("opacity-100","translate-y-0"),e.target.classList.remove("opacity-0","translate-y-10"))})},{threshold:.1});return r.current&&e.observe(r.current),()=>e.disconnect()},[]),(0,a.useEffect)(()=>()=>{window.clearTimeout(i.current),window.clearInterval(s.current)},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("section",{id:e,ref:r,className:"min-h-screen flex items-center justify-center w-full pt-16 sm:pt-20 md:pt-24 pb-12 md:pb-16 opacity-0 translate-y-10 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden bg-white/70","aria-labelledby":"hero-title",children:(0,t.jsx)("div",{className:"w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12",children:(0,t.jsxs)("div",{className:"grid items-center gap-6 md:gap-8 min-[900px]:grid-cols-[1fr_0.9fr] lg:gap-12 xl:gap-16",children:[(0,t.jsxs)("div",{className:"max-w-4xl w-full",ref:k,children:[(0,t.jsx)(y,{className:"max-w-full md:max-w-[614px]",children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 614 390",className:"w-full h-auto",preserveAspectRatio:"xMidYMid meet",children:(0,t.jsx)("g",{id:"Frame",children:(0,t.jsxs)("g",{id:"box-figma",children:[(0,t.jsx)("text",{x:"80",y:"105",textAnchor:"start",dominantBaseline:"middle",fontFamily:"Manrope, sans-serif",fontSize:"82",fontWeight:"700",fill:"#20242C",letterSpacing:"-2.5",children:"Junior"}),(0,t.jsx)("text",{x:"80",y:"185",textAnchor:"start",dominantBaseline:"middle",fontFamily:"Manrope, sans-serif",fontSize:"86",fontWeight:"700",fill:"#20242C",letterSpacing:"-2.5",children:"Developer"}),(0,t.jsx)("text",{x:"80",y:"235",textAnchor:"start",dominantBaseline:"middle",fontFamily:"Manrope, sans-serif",fontSize:"40",fontWeight:"400",fill:"#667085",letterSpacing:"-1.5",children:"Portfolio"}),(0,t.jsxs)("g",{id:"box",children:[(0,t.jsx)("path",{strokeWidth:2,stroke:"#20242C",fillOpacity:"0.05",fill:"#20242C",d:"M587 20H28V306H587V20Z",id:"figny9-box"}),(0,t.jsx)("path",{strokeWidth:2,stroke:"#20242C",fill:"white",d:"M33 15H23V25H33V15Z",id:"figny9-adjust-1"}),(0,t.jsx)("path",{strokeWidth:2,stroke:"#20242C",fill:"white",d:"M33 301H23V311H33V301Z",id:"figny9-adjust-3"}),(0,t.jsx)("path",{strokeWidth:2,stroke:"#20242C",fill:"white",d:"M592 301H582V311H592V301Z",id:"figny9-adjust-4"}),(0,t.jsx)("path",{strokeWidth:2,stroke:"#20242C",fill:"white",d:"M592 15H582V25H592V15Z",id:"figny9-adjust-2"})]}),(0,t.jsxs)("g",{id:"cursor",children:[(0,t.jsx)("path",{strokeWidth:2,stroke:"white",fill:"#20242C",d:"M453.383 343L448 317L471 331L459.745 333.5L453.383 343Z",id:"Vector 273"}),(0,t.jsx)("path",{fill:"#20242C",d:"M535 343H469.932V376H535V343Z",id:"Rectangle 786"}),(0,t.jsx)("text",{x:"503",y:"359.5",textAnchor:"middle",dominantBaseline:"middle",fontFamily:"Manrope, sans-serif",fontSize:"10",fontWeight:"700",fill:"white",letterSpacing:"1.2",children:"ARIF"})]})]})})})}),(0,t.jsxs)("div",{ref:N,className:"flex flex-wrap items-center gap-4 md:gap-6 -mt-8 md:-mt-12 ml-2 md:ml-4",children:[(0,t.jsx)(w,{children:(0,t.jsxs)("button",{type:"button",onClick:()=>l(!0),children:[(0,t.jsx)("span",{className:"shadow"}),(0,t.jsx)("span",{className:"edge"}),(0,t.jsx)("span",{className:"front text",children:"My CV"})]})}),(0,t.jsx)(j,{children:(0,t.jsxs)("div",{className:"wrapper",children:[(0,t.jsxs)("a",{className:"icon instagram",href:"https://www.instagram.com/ryf.ftrhmn/",target:"_blank",rel:"noreferrer","aria-label":"Instagram",children:[(0,t.jsx)("span",{className:"tooltip",children:"Instagram"}),(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1.2em",fill:"currentColor",className:"bi bi-instagram",viewBox:"0 0 16 16",children:(0,t.jsx)("path",{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"})})]}),(0,t.jsxs)("a",{className:"icon github",href:"https://github.com/arthurrxx",target:"_blank",rel:"noreferrer","aria-label":"GitHub",children:[(0,t.jsx)("span",{className:"tooltip",children:"GitHub"}),(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1.2em",fill:"currentColor",viewBox:"0 0 16 16",children:(0,t.jsx)("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"})})]}),(0,t.jsxs)("a",{className:"icon linkedin",href:"https://www.linkedin.com/in/arif-faturahman-4825a53b3/",target:"_blank",rel:"noreferrer","aria-label":"LinkedIn",children:[(0,t.jsx)("span",{className:"tooltip",children:"LinkedIn"}),(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1.2em",fill:"currentColor",viewBox:"0 0 16 16","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zM3.743 5.183c.837 0 1.358-.554 1.358-1.248-.015-.709-.521-1.248-1.342-1.248-.822 0-1.358.539-1.358 1.248 0 .694.521 1.248 1.327 1.248h.015zm4.82 8.211V9.359c0-.216.016-.432.08-.586.173-.432.568-.879 1.232-.879.869 0 1.216.663 1.216 1.635v3.865h2.401V9.25c0-2.218-1.184-3.25-2.764-3.25-1.274 0-1.84.7-2.165 1.19v.025h-.016a5.5 5.5 0 0 1 .016-.025V6.169H6.162c.03.678 0 7.225 0 7.225h2.401z"})})]})]})})]})]}),(0,t.jsx)("div",{className:"relative w-full",children:(0,t.jsx)(v,{children:(0,t.jsxs)("div",{className:`terminal ${c?"terminal-hack-mode":""}`,children:[(0,t.jsxs)("div",{className:"terminal-toolbar",children:[(0,t.jsxs)("div",{className:"terminal-controls","aria-hidden":"true",children:[(0,t.jsx)("span",{className:"terminal-control close"}),(0,t.jsx)("span",{className:"terminal-control minimize"}),(0,t.jsx)("span",{className:"terminal-control maximize"})]}),(0,t.jsx)("p",{className:"terminal-title",children:"arif@portfolio: ~"}),(0,t.jsx)("span",{className:"terminal-tab","aria-hidden":"true",children:"+"})]}),(0,t.jsxs)("div",{className:"terminal-body",children:[(0,t.jsxs)("div",{className:"terminal-line",children:[(0,t.jsx)("span",{className:"terminal-user",children:"arif@portfolio"}),(0,t.jsx)("span",{className:"terminal-path",children:":~"}),(0,t.jsx)("span",{className:"terminal-prompt",children:"$"}),(0,t.jsx)("span",{className:"terminal-command",children:"whoami"})]}),(0,t.jsx)("p",{className:"terminal-output",children:"Arif Faturahman Alhakim Jaenudin"}),(0,t.jsxs)("div",{className:"terminal-line",children:[(0,t.jsx)("span",{className:"terminal-user",children:"arif@portfolio"}),(0,t.jsx)("span",{className:"terminal-path",children:":~"}),(0,t.jsx)("span",{className:"terminal-prompt",children:"$"}),(0,t.jsx)("span",{className:"terminal-command",children:"location"})]}),(0,t.jsx)("p",{className:"terminal-output",children:"Sukabumi, Jawa Barat"}),(0,t.jsxs)("form",{className:"terminal-line terminal-ready terminal-command-form",onSubmit:e=>{e.preventDefault(),"hack"===o.trim().toLowerCase()&&(window.clearTimeout(i.current),window.clearInterval(s.current),u(e=>e+1),h(0),m(!0),d(""),s.current=window.setInterval(()=>{h(e=>Math.min(e+1,b.length))},950),i.current=window.setTimeout(()=>{window.clearInterval(s.current),m(!1)},12500))},children:[(0,t.jsx)("span",{className:"terminal-user",children:"arif@portfolio"}),(0,t.jsx)("span",{className:"terminal-path",children:":~"}),(0,t.jsx)("span",{className:"terminal-prompt",children:"$"}),(0,t.jsx)("input",{className:"terminal-input",type:"text",value:o,onChange:e=>d(e.target.value),"aria-label":"Terminal command",autoComplete:"off",autoCapitalize:"none",spellCheck:"false"})]})]}),c&&(0,t.jsx)("div",{className:"terminal-hack-overlay",children:(0,t.jsxs)("div",{className:"hack-code",role:"log","aria-label":"Terminal output","aria-live":"polite","aria-relevant":"additions text",children:[(0,t.jsxs)("span",{className:"hack-command",children:[(0,t.jsx)("span",{children:"arif@portfolio"}),":~$ hack"]}),b.slice(0,p).map((e,a)=>(0,t.jsx)("span",{className:a===b.length-1?"hack-final-line":void 0,children:e},`${f}-${e}`))]})},f)]})})})]})})}),n&&(0,t.jsx)(g,{onBack:()=>l(!1)})]})},N={src:e.i(60050).default,width:800,height:600,blurWidth:8,blurHeight:6,blurDataURL:"data:image/webp;base64,UklGRtQAAABXRUJQVlA4TMcAAAAvB0ABAM1VICICHghACgMAAID++2oxIgADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADABAA0sP3vrwAAAB4IwQkAAADA+d9PIQgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQKDmgZCYAAAAAJz/fUQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAChFtlIZJiFsRWhUDnnr2MOZUliEvvat68Xa8WKaxEBcJ8z7ra0FADOy3w9P+3xQAPGh0K4Mf4AAA=="},A=({id:e})=>{let r=(0,a.useRef)(null),i=x({animation:"fadeUp",duration:800,delay:100,once:!0}),s=x({animation:"fadeUp",duration:800,delay:200,once:!0}),n=x({animation:"fadeUp",duration:800,delay:300,once:!0});return(0,a.useEffect)(()=>{let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.querySelectorAll(".animate-on-scroll").forEach((e,t)=>{setTimeout(()=>{e.classList.add("opacity-100","translate-y-0"),e.classList.remove("opacity-0","translate-y-10")},120*t)})})},{threshold:.1});return r.current&&e.observe(r.current),()=>e.disconnect()},[]),(0,t.jsx)("section",{id:e,ref:r,className:"w-full border-t border-[#e5e7eb] bg-[#f5f5f5] py-14 sm:py-16 lg:py-24","aria-labelledby":"about-heading",children:(0,t.jsx)("div",{className:"max-w-7xl mx-auto px-4 md:px-12",children:(0,t.jsxs)("div",{className:"grid items-start gap-8 md:grid-cols-2 md:gap-10 lg:gap-16",children:[(0,t.jsx)("div",{className:"md:pt-8 lg:pt-12",children:(0,t.jsxs)("div",{ref:i,className:"transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",children:[(0,t.jsx)("span",{className:"inline-block text-xs font-medium uppercase tracking-[2px] text-[#667085]",children:"Tentang Saya"}),(0,t.jsxs)("h2",{id:"about-heading",className:"mt-3 font-['Manrope'] text-4xl font-bold leading-[1.08] tracking-tight text-[#20242c] sm:text-5xl md:text-[2.75rem] lg:mt-4 lg:text-6xl",children:["Lulusan SMK",(0,t.jsx)("br",{}),"jurusan RPL",(0,t.jsx)("br",{}),"dari Sukabumi."]}),(0,t.jsx)("div",{className:"mt-5 h-0.5 w-12 bg-[#20242c] transition-all duration-1000 delay-500 md:mt-7"})]})}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{ref:s,className:"relative mb-6 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:mb-8 lg:mb-9",children:[(0,t.jsx)("div",{className:"absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#20242c]/[0.03] via-[#e5e7eb]/40 to-transparent blur-2xl sm:-inset-4"}),(0,t.jsxs)("div",{className:"relative overflow-hidden rounded-xl border border-[#e5e7eb] bg-white sm:rounded-2xl",children:[(0,t.jsx)("img",{src:N.src,alt:"Arif Faturahman - Junior Developer",className:"aspect-[4/3] max-h-[400px] w-full object-cover md:aspect-[16/10] md:max-h-[430px]"}),(0,t.jsx)("div",{className:"absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#20242c]/90 to-transparent p-3 sm:p-5",children:(0,t.jsx)("p",{className:"text-[10px] font-medium tracking-wider text-white/90 sm:text-xs md:text-sm",children:"ARIF FATURAHMAN ALHAKIM JAENUDIN"})})]})]}),(0,t.jsxs)("div",{ref:n,className:"max-w-2xl space-y-4 md:space-y-5",children:[(0,t.jsx)("p",{className:"text-base leading-relaxed tracking-tight text-[#475467] md:text-[0.95rem] lg:text-lg",children:"Saya Arif Faturahman Alhakim Jaenudin, lulusan Rekayasa Perangkat Lunak dari SMK Mardi Yuana Cikembar. Saya berfokus pada web development dan tertarik membangun situs yang fungsional, terstruktur, serta mudah digunakan."}),(0,t.jsx)("p",{className:"text-base leading-relaxed tracking-tight text-[#475467] md:text-[0.95rem] lg:text-lg",children:"Saya juga mempelajari dasar-dasar cybersecurity untuk memahami cara menjaga keamanan aplikasi web. Saya terus mengembangkan keterampilan agar dapat menghadirkan pengalaman digital yang modern dan aman."})]})]})]})})})},_=({id:e})=>(0,t.jsx)("section",{id:e,className:"w-full py-16 md:py-20 border-t border-[#e5e7eb] bg-white","aria-labelledby":"selected-works-title",children:(0,t.jsxs)("div",{className:"max-w-7xl mx-auto px-4 md:px-12",children:[(0,t.jsxs)("div",{className:"mb-12",children:[(0,t.jsx)("span",{className:"text-[#667085] text-xs font-medium tracking-[2px] uppercase",children:"Karya"}),(0,t.jsx)("h2",{id:"selected-works-title",className:"font-['Manrope'] text-4xl sm:text-5xl font-bold tracking-tight text-[#20242c] mt-2",children:"Karya Terpilih"})]}),(0,t.jsxs)("div",{role:"status",className:"rounded-2xl border border-[#e5e7eb] bg-[#f5f5f5] px-6 py-12 text-center",children:[(0,t.jsx)("p",{className:"font-['Manrope'] text-2xl font-semibold text-[#20242c]",children:"Belum ada karya yang ditampilkan"}),(0,t.jsx)("p",{className:"mt-2 text-sm leading-relaxed text-[#667085]",children:"Karya pilihan akan ditampilkan di sini."})]})]})}),V=[{icon:(0,t.jsxs)("svg",{"aria-hidden":"true",className:"h-6 w-6",viewBox:"0 0 30 30",fill:"none",children:[(0,t.jsx)("rect",{x:"2",y:"2",width:"26",height:"26",rx:"4",stroke:"#20242c",strokeWidth:"1.5"}),(0,t.jsx)("path",{d:"M2.75 9h24.5M8 9v17.5m7-17.5v17.5m7-17.5v17.5",stroke:"#20242c",strokeWidth:"1.5"})]}),title:"Desain UI/UX",description:"Mendesain antarmuka yang intuitif dan mudah digunakan."},{icon:(0,t.jsx)("svg",{"aria-hidden":"true",className:"h-6 w-6",viewBox:"0 0 30 30",fill:"none",children:(0,t.jsx)("path",{d:"m10 8-7 7 7 7m10-14 7 7-7 7m-3-18-4 24",stroke:"#20242c",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})}),title:"Scripting & Kode",description:"Membangun fitur web dengan kode yang rapi dan efisien."},{icon:(0,t.jsxs)("svg",{"aria-hidden":"true",className:"h-6 w-6",viewBox:"0 0 30 30",fill:"none",children:[(0,t.jsx)("path",{d:"M15 2.5v5m0 15v5m12.5-12.5h-5m-15 0h-5m21.34-8.84-3.54 3.54m-10.6 10.6-3.54 3.54m17.68 0-3.54-3.54m-10.6-10.6-3.54-3.54",stroke:"#20242c",strokeWidth:"1.5",strokeLinecap:"round"}),(0,t.jsx)("circle",{cx:"15",cy:"15",r:"5.5",stroke:"#20242c",strokeWidth:"1.5"}),(0,t.jsx)("path",{d:"M15 12.5v5m-2.5-2.5h5",stroke:"#20242c",strokeWidth:"1.5",strokeLinecap:"round"})]}),title:"Desain Gerak",description:"Menambahkan animasi halus dan interaksi mikro."}],C=()=>{let e=(0,a.useRef)(null),r=e=>{if("mouse"!==e.pointerType)return;let t=e.currentTarget,a=t.getBoundingClientRect(),r=(e.clientX-a.left)/a.width,i=(e.clientY-a.top)/a.height;t.style.setProperty("--pointer-x",`${100*r}%`),t.style.setProperty("--pointer-y",`${100*i}%`),t.style.setProperty("--tilt-x",`${(r-.5)*4}deg`),t.style.setProperty("--tilt-y",`${(.5-i)*4}deg`)},i=e=>{let t=e.currentTarget;t.style.setProperty("--tilt-x","0deg"),t.style.setProperty("--tilt-y","0deg")};return(0,a.useEffect)(()=>{let t=e.current?.querySelectorAll(".expertise-card");if(!t)return;if(!("IntersectionObserver"in window))return void t.forEach(e=>e.classList.add("is-visible"));let a=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add("is-visible"),a.unobserve(e.target))})},{threshold:.15});return t.forEach(e=>a.observe(e)),()=>a.disconnect()},[]),(0,t.jsx)("section",{ref:e,className:"w-full py-16 md:py-20 border-t border-[#e5e7eb] bg-[#f5f5f5]","aria-labelledby":"expertise-heading",children:(0,t.jsxs)("div",{className:"max-w-7xl mx-auto px-4 md:px-12",children:[(0,t.jsx)("div",{className:"mb-8 flex flex-col gap-4 sm:mb-10 md:mb-12 md:flex-row md:items-end md:justify-between",children:(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"text-[10px] font-medium uppercase tracking-[2px] text-[#667085] md:text-xs",children:"Yang Saya Lakukan"}),(0,t.jsx)("h2",{id:"expertise-heading",className:"mt-2 font-['Manrope'] text-3xl font-bold tracking-tight text-[#20242c] sm:text-4xl md:text-5xl",children:"Keahlian"})]})}),(0,t.jsx)("div",{className:"grid gap-4 md:grid-cols-3 md:gap-5 lg:gap-6",children:V.map((e,a)=>(0,t.jsxs)("article",{className:"expertise-card group flex h-full flex-col rounded-2xl border border-[#e5e7eb] bg-white p-5 sm:p-6 md:min-h-[300px] md:p-6 lg:p-8",style:{"--card-index":a},onPointerMove:r,onPointerLeave:i,children:[(0,t.jsx)("span",{className:"expertise-spotlight","aria-hidden":"true"}),(0,t.jsxs)("div",{className:"mb-7 flex items-center justify-between sm:mb-9",children:[(0,t.jsx)("div",{className:"expertise-icon flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5f5f5] text-[#20242c]",children:e.icon}),(0,t.jsxs)("span",{className:"font-['Manrope'] text-xs font-semibold tracking-[0.16em] text-[#9ca3af]","aria-hidden":"true",children:["0",a+1]})]}),(0,t.jsx)("div",{className:"mb-4 h-px w-full bg-[#e5e7eb]"}),(0,t.jsx)("h3",{className:"mb-2 font-['Manrope'] text-xl font-semibold tracking-tight text-[#20242c] sm:text-2xl",children:e.title}),(0,t.jsx)("p",{className:"text-sm leading-relaxed text-[#667085] md:text-[0.95rem]",children:e.description}),(0,t.jsx)("div",{className:"expertise-card-mark mt-auto ml-auto h-1 w-8 rounded-full bg-[#20242c]","aria-hidden":"true"})]},e.title))})]})})},S=[{name:"Next.js",key:"next",color:"#20242c",hoverColor:"#050505"},{name:"React",key:"react",color:"#087ea4",hoverColor:"#00a6d6"},{name:"Vite",key:"vite",color:"#7357ff",hoverColor:"#9b83ff"},{name:"HTML",key:"html",color:"#d45126",hoverColor:"#f06529"},{name:"CSS",key:"css",color:"#1572b6",hoverColor:"#2998e3"},{name:"JavaScript",key:"javascript",color:"#a88700",hoverColor:"#d4ad00"},{name:"Node.js",key:"node",color:"#477a3c",hoverColor:"#68a653"}],F=({type:e})=>"next"===e?(0,t.jsxs)("svg",{viewBox:"0 0 40 40","aria-hidden":"true",children:[(0,t.jsx)("circle",{cx:"20",cy:"20",r:"17",fill:"none",stroke:"currentColor",strokeWidth:"2.5"}),(0,t.jsx)("path",{d:"M13 27V13l14 15M22 13v8",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2.5"})]}):"react"===e?(0,t.jsxs)("svg",{viewBox:"0 0 40 40","aria-hidden":"true",children:[(0,t.jsxs)("g",{fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[(0,t.jsx)("ellipse",{cx:"20",cy:"20",rx:"17",ry:"6.7"}),(0,t.jsx)("ellipse",{cx:"20",cy:"20",rx:"17",ry:"6.7",transform:"rotate(60 20 20)"}),(0,t.jsx)("ellipse",{cx:"20",cy:"20",rx:"17",ry:"6.7",transform:"rotate(120 20 20)"})]}),(0,t.jsx)("circle",{cx:"20",cy:"20",r:"2.6",fill:"currentColor"})]}):"vite"===e?(0,t.jsxs)("svg",{viewBox:"0 0 40 40","aria-hidden":"true",children:[(0,t.jsx)("path",{d:"M3 9.5 19 36c.4.7 1.4.7 1.8 0L37 9.5c.5-.8-.2-1.8-1.1-1.7L20 10.7 4.1 7.8C3.2 7.7 2.5 8.7 3 9.5Z",fill:"currentColor"}),(0,t.jsx)("path",{d:"m24.5 3-11 17.5c-.4.6.1 1.4.8 1.3l6.1-1.2-1.1 8.2c-.1.8.9 1.1 1.3.4l11-17.5c.4-.6-.1-1.4-.8-1.3l-6.1 1.2L25.8 3.4c.1-.8-.9-1.1-1.3-.4Z",fill:"#fff"})]}):"html"===e||"css"===e||"javascript"===e?(0,t.jsxs)("svg",{viewBox:"0 0 40 40","aria-hidden":"true",children:[(0,t.jsx)("path",{d:"M7 3h26l-2.4 29L20 37 9.4 32 7 3Z",fill:"none",stroke:"currentColor",strokeLinejoin:"round",strokeWidth:"2.5"}),"javascript"===e?(0,t.jsx)("path",{d:"M23 13v12c0 2.5-1.5 3.8-4 3.8-1.6 0-2.8-.6-3.7-1.5m10.8-.2c1 1.1 2.1 1.7 3.7 1.7 2 0 3.2-1 3.2-2.5 0-1.7-1.3-2.2-3.4-3l-.8-.3c-2.4-.9-4-2-4-4.4 0-2.2 1.7-3.9 4.5-3.9 1.9 0 3.3.6 4.3 2.1",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"2"}):(0,t.jsx)("path",{d:"html"===e?"M13 12h16l-.5 4.5h-11l.5 4h10l-.8 7-7.2 2.3-6-2-.4-3.5h4.5l.2 1 1.7.5 2.1-.7.3-2h-9.2L13 12Z":"M12 12h17l-.5 4.5H15.8l.5 4h9.8l-.8 7-7.2 2.3-6-2-.4-3.5h4.5l.2 1 1.7.5 2.1-.7.3-2h-9.2L12 12Z",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"})]}):"node"===e?(0,t.jsxs)("svg",{viewBox:"0 0 40 40","aria-hidden":"true",children:[(0,t.jsx)("path",{d:"m20 3 14 8v17l-14 8-14-8V11l14-8Z",fill:"none",stroke:"currentColor",strokeWidth:"2"}),(0,t.jsx)("path",{d:"M16 26V15l9 12V16",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"})]}):null,M=({direction:e,includeLogos:a=!1})=>(0,t.jsx)("div",{className:`tech-track ${e}`,children:[0,1].map(e=>(0,t.jsx)("div",{className:"tech-track-group","aria-hidden":1===e?"true":void 0,children:S.map(r=>(0,t.jsx)("span",{className:`tech-item ${a?"tech-logo-item":"tech-name-item"}`,style:{"--tech-color":r.color,"--tech-hover-color":r.hoverColor},title:r.name,children:a?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(F,{type:r.key}),(0,t.jsx)("span",{className:"sr-only",children:r.name})]}):r.name},`${r.key}-${e}`))},e))}),D=()=>(0,t.jsxs)("section",{className:"w-full overflow-hidden bg-white py-16 md:py-24","aria-labelledby":"clients-heading",children:[(0,t.jsxs)("div",{className:"mx-auto mb-9 max-w-7xl px-4 text-center sm:mb-12 sm:px-6 md:px-12",children:[(0,t.jsx)("span",{className:"text-[10px] font-semibold uppercase tracking-[2px] text-[#667085] md:text-xs",children:"STACK SAYA"}),(0,t.jsx)("h2",{id:"clients-heading",className:"mt-2 font-['Manrope'] text-3xl font-bold tracking-tight text-[#20242c] sm:text-4xl md:text-5xl",children:"Teknologi"})]}),(0,t.jsxs)("div",{className:"tech-stack-panel",children:[(0,t.jsxs)("div",{className:"tech-marquee tech-name-marquee py-6 sm:py-8",children:[(0,t.jsx)("div",{className:"sr-only",children:"Next.js, React, Vite, HTML, CSS, JavaScript, dan Node.js"}),(0,t.jsx)(M,{direction:"tech-track-left"})]}),(0,t.jsx)("div",{className:"tech-marquee tech-logo-marquee border-t border-[#e1e3e6] py-5 sm:py-6",children:(0,t.jsx)(M,{direction:"tech-track-right",includeLogos:!0})})]})]});var L=e=>e instanceof Date,z=e=>null==e;let O=e=>"object"==typeof e;var E=e=>!z(e)&&!Array.isArray(e)&&O(e)&&!L(e),T=e=>{let t=e.constructor&&e.constructor.prototype;return E(t)&&t.hasOwnProperty("isPrototypeOf")},I="u">typeof window&&void 0!==window.HTMLElement&&"u">typeof document;function B(e){if(e instanceof Date)return new Date(e);let t="u">typeof FileList&&e instanceof FileList;if(I&&(e instanceof Blob||t))return e;let a=Array.isArray(e);if(!a&&!(E(e)&&T(e)))return e;let r=a?[]:Object.create(Object.getPrototypeOf(e));for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=B(e[t]));return r}let $="trigger",R="onChange",U="onSubmit",P={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},W="root",H=["__proto__","constructor","prototype"],Y=/^\w*$/;var K=e=>void 0===e;let q=/[.[\]'"]/;var Z=e=>e.split(q).filter(Boolean),X=(e,t,a)=>{if(!t||!E(e))return a;let r=Y.test(t)?[t]:Z(t);if(r.some(e=>H.includes(e)))return a;let i=r.reduce((e,t)=>z(e)?void 0:e[t],e);return K(i)||i===e?K(e[t])?a:e[t]:i},J=e=>"function"==typeof e,Q=(e,t,a)=>{let r=-1,i=Y.test(t)?[t]:Z(t),s=i.length,n=s-1;for(;++r<s;){let t=i[r],s=a;if(r!==n){let a=e[t];s=E(a)||Array.isArray(a)?a:isNaN(+i[r+1])?{}:[]}if(H.includes(t))return;e[t]=s,e=e[t]}};a.default.createContext(null).displayName="HookFormControlContext";let G=I?a.default.useLayoutEffect:a.default.useEffect;var ee=e=>z(e)||!O(e);let et=(e,t)=>0===t.length&&!Array.isArray(e)&&!T(e);function ea(e,t,a=new WeakMap){if(e===t)return!0;if(ee(e)||ee(t))return Object.is(e,t);if(L(e)&&L(t))return Object.is(e.getTime(),t.getTime());let r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;if(et(e,r)||et(t,i))return Object.is(e,t);if(!r.length&&Array.isArray(e)!==Array.isArray(t))return!1;let s=a.get(e);if(s&&s.has(t))return!0;if(s)s.add(t);else{let r=new WeakSet;r.add(t),a.set(e,r)}for(let i of r){let r=e[i];if(!(i in t))return!1;if("ref"!==i){let e=t[i];if(L(r)&&L(e)||(E(r)||Array.isArray(r))&&(E(e)||Array.isArray(e))?!ea(r,e,a):!Object.is(r,e))return!1}}return!0}var er=e=>"string"==typeof e,ei=e=>({isOnSubmit:!e||e===U,isOnBlur:"onBlur"===e,isOnChange:e===R,isOnAll:"all"===e,isOnTouch:"onTouched"===e}),es=(e,t,a)=>{if(a)return!1;if(t.watchAll||t.watch.has(e))return!0;for(let a of t.watch)if(e.startsWith(a)&&"."===e.charAt(a.length))return!0;return!1};let en=(e,t,a,r)=>{for(let i of a||Object.keys(e)){if("_f"===i)continue;let s=a?X(e,i):e[i];if(s){let{_f:e}=s;if(e){if(e.refs&&e.refs[0]&&t(e.refs[0],i)&&!r)return!0;else if(e.ref&&t(e.ref,e.name)&&!r)return!0;else if(en(s,t))break}else if((E(s)||Array.isArray(s))&&en(s,t))break}}};var el=(e,t,a)=>{let r=X(e,a),i=Array.isArray(r)?r:[];return Q(i,W,t[a]),Q(e,a,i),e},eo=e=>E(e)&&!Object.keys(e).length,ed=e=>{if(!I)return!1;let t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},ec=(e,t,a,r,i)=>t?{...a[e],types:{...a[e]&&a[e].types?a[e].types:{},[r]:i||!0}}:{};let em={value:!1,isValid:!1},ef={value:!0,isValid:!0};var eu=e=>{if(Array.isArray(e)){if(e.length>1){let t=e.filter(e=>e&&e.checked&&!e.disabled).map(e=>e.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!K(e[0].attributes.value)?K(e[0].value)||""===e[0].value?ef:{value:e[0].value,isValid:!0}:ef:em}return em};let ep={isValid:!1,value:null};var ex=e=>Array.isArray(e)?e.reduce((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e,ep):ep;function eh(e,t,a="validate"){if(er(e)||Array.isArray(e)&&e.every(er)||"boolean"==typeof e&&!e)return{type:a,message:er(e)?e:"",ref:t}}var eg=e=>!E(e)||e instanceof RegExp?{value:e,message:""}:e,eb=async(e,t,a,r,i,s)=>{let{ref:n,refs:l,required:o,maxLength:d,minLength:c,min:m,max:f,pattern:u,validate:p,name:x,valueAsNumber:h,mount:g}=e._f,b=X(a,x);if(!g||t.has(x))return{};let y=l?l[0]:n,v=e=>{if(i&&y.reportValidity){let t="boolean"==typeof e?"":e||"";l?l.forEach(e=>e.setCustomValidity(t)):y.setCustomValidity(t),y.reportValidity()}},w={},j="radio"===n.type,k="checkbox"===n.type,N=(h||"file"===n.type)&&K(n.value)&&K(b)||ed(n)&&""===n.value||""===b||Array.isArray(b)&&!b.length,A=ec.bind(null,x,r,w),_=(e,t,a,r=P.maxLength,i=P.minLength)=>{let s=e?t:a;w[x]={type:e?r:i,message:s,ref:n,...A(e?r:i,s)}};if(s?!Array.isArray(b)||!b.length:o&&(!(j||k)&&(N||z(b))||"boolean"==typeof b&&!b||k&&!eu(l).isValid||j&&!ex(l).isValid)){let{value:e,message:t}=er(o)?{value:!!o,message:o}:eg(o);if(e&&(w[x]={type:P.required,message:t,ref:y,...A(P.required,t)},!r))return v(t),w}if(!N&&(!z(m)||!z(f))){let e,t,a=eg(f),i=eg(m);if(z(b)||L(b)||isNaN(b)){let r=n.valueAsDate||new Date(b),s=e=>new Date(new Date().toDateString()+" "+e),l="time"==n.type,o="week"==n.type;er(a.value)&&b&&(e=l?s(b)>s(a.value):o?b>a.value:r>new Date(a.value)),er(i.value)&&b&&(t=l?s(b)<s(i.value):o?b<i.value:r<new Date(i.value))}else{let r=n.valueAsNumber||(b?+b:b);z(a.value)||(e=r>a.value),z(i.value)||(t=r<i.value)}if((e||t)&&(_(!!e,a.message,i.message,P.max,P.min),!r))return v(w[x].message),w}if((d||c)&&!N&&(er(b)||s&&Array.isArray(b))){let e=eg(d),t=eg(c),a=!z(e.value)&&b.length>+e.value,i=!z(t.value)&&b.length<+t.value;if((a||i)&&(_(a,e.message,t.message),!r))return v(w[x].message),w}if(u&&!N&&er(b)){let{value:e,message:t}=eg(u);if(e instanceof RegExp&&!b.match(e)&&(w[x]={type:P.pattern,message:t,ref:n,...A(P.pattern,t)},!r))return v(t),w}if(p){if(J(p)){let e=eh(await p(b,a),y);if(e&&(w[x]={...e,...A(P.validate,e.message)},!r))return v(e.message),w}else if(E(p)){let e={};for(let t in p){if(!eo(e)&&!r)break;let i=eh(await p[t](b,a),y,t);i&&(e={...i,...A(t,i.message)},v(i.message),r&&(w[x]=e))}if(!eo(e)&&(w[x]={ref:y,...e},!r))return w}}return v(!0),w},ey=e=>Array.isArray(e)?e:[e],ev=e=>Array.isArray(e)?e.filter(Boolean):[];function ew(e,t){if(er(t)&&Object.prototype.hasOwnProperty.call(e,t))return delete e[t],e;let a=Array.isArray(t)?t:Y.test(t)?[t]:Z(t);if(a.some(e=>H.includes(String(e))))return e;let r=1===a.length?e:function(e,t){let a=t.length-1,r=0;for(;r<a;){if(z(e)){e=void 0;break}e=e[t[r]],r++}return e}(e,a),i=a.length-1,s=a[i];return r&&delete r[s],0!==i&&(E(r)&&eo(r)||Array.isArray(r)&&function(e){for(let t in e)if(e.hasOwnProperty(t)&&!K(e[t]))return!1;return!0}(r))&&ew(e,a.slice(0,-1)),e}let ej=e=>{let t={};for(let a of Object.keys(e))if(O(e[a])&&null!==e[a]&&!L(e[a])){let r=ej(e[a]);for(let e of Object.keys(r))t[`${a}.${e}`]=r[e]}else t[a]=e[a];return t};a.default.createContext(null).displayName="HookFormContext";var ek=()=>{let e=[];return{get observers(){return e},next:t=>{for(let a of e)a.next&&a.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter(e=>e!==t)}}),unsubscribe:()=>{e=[]}}},eN=e=>ed(e)&&e.isConnected;function eA(e){return Array.isArray(e)||E(e)}function e_(e){return Array.isArray(e)||E(e)&&!(e=>{for(let t in e)if(J(e[t]))return!0;return!1})(e)}function eV(e){return!!(e&&"_f"in e)}function eC(e){return Array.isArray(e)?!e.some(e=>!K(e)):!Object.keys(e).length}function eS(e,t){Array.isArray(e)?e[t]=void 0:delete e[t]}function eF(e,t={},a){for(let r in e){let i=e[r],s=a&&a[r];!e_(i)||Array.isArray(i)&&eV(s)?K(i)||(t[r]=!0):(t[r]=Array.isArray(i)?[]:{},eF(i,t[r],s),eC(t[r])&&eS(t,r))}return t}function eM(e,t,a,r){for(let i in a||(a=eF(t,{},r)),e){let s=e[i],n=r&&r[i];!e_(s)||Array.isArray(s)&&eV(n)?ea(s,t[i])?eS(a,i):a[i]=!0:(K(t)||ee(a[i])?a[i]=eF(s,Array.isArray(s)?[]:{},n):eM(s,z(t)?{}:t[i],a[i],n),eC(a[i])&&eS(a,i))}return a}var eD=(e,{valueAsNumber:t,valueAsDate:a,setValueAs:r})=>K(e)?e:t?""===e?0/0:e?+e:e:a&&er(e)?new Date(e):r?r(e):e;function eL(e){let t=e.ref;return"file"===t.type?t.files:"radio"===t.type?ex(e.refs).value:"select-multiple"===t.type?[...t.selectedOptions].map(({value:e})=>e):"checkbox"===t.type?eu(e.refs).value:eD(t.value,e)}var ez=e=>K(e)?e:e instanceof RegExp?e.source:E(e)?e.value instanceof RegExp?e.value.source:e.value:e;let eO="AsyncFunction";var eE=e=>{if(!e||!e.validate)return!1;if(J(e.validate))return e.validate.constructor.name===eO;if(E(e.validate)){for(let t in e.validate)if(e.validate[t].constructor.name===eO)return!0}return!1};function eT(e,t,a){let r=X(e,a);if(r||Y.test(a))return{error:r,name:a};let i=a.split(".");for(;i.length;){let r=i.join("."),s=X(t,r),n=X(e,r);if(s&&!Array.isArray(s)&&a!==r)break;if(n&&n.type)return{name:r,error:n};if(n&&n.root&&n.root.type)return{name:`${r}.root`,error:n.root};i.pop()}return{name:a}}let eI={mode:U,reValidateMode:R,shouldFocusError:!0},eB="form",e$={submitCount:0,isDirty:!1,isReady:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{}},eR=({id:e})=>{let{register:r,formState:{errors:i}}=function(e={}){let t,r,i=a.default.useRef(void 0),s=a.default.useRef(void 0),n=a.default.useRef(e.formControl),[l,o]=a.default.useState(()=>({...B(e$),isLoading:J(e.defaultValues),errors:e.errors||{},disabled:e.disabled||!1,defaultValues:J(e.defaultValues)?void 0:e.defaultValues}));if(!i.current||e.formControl&&n.current!==e.formControl)if(n.current=e.formControl,e.formControl)i.current={...e.formControl,formState:l},e.defaultValues&&!J(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{let{formControl:t,...a}=function(e={}){let t={...eI,...e},a={...B(e$),isLoading:J(t.defaultValues),errors:t.errors||{},disabled:t.disabled||!1},r={},i=(E(t.defaultValues)||E(t.values))&&B(t.defaultValues||t.values)||{},s=t.shouldUnregister?{}:B(i),n={action:!1,actionArrayLengths:new Map,mount:!1,watch:!1,keepIsValid:!1},l={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set,registerName:new Set},o={},d={},c=0,m=ei(t.mode),f=ei(t.reValidateMode),u={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},p={...u},x={...p},h={array:ek(),state:ek()},g=0,b="all"===t.criteriaMode,y=(e,t)=>a=>{clearTimeout(d[e]),d[e]=setTimeout(t,a)},v=async e=>{if(!n.keepIsValid&&!t.disabled&&(p.isValid||x.isValid||e)){let e,i=++g;t.resolver?(e=eo((await _()).errors),i===g&&w()):e=await S({fields:r,onlyCheckValid:!0,eventType:"valid"}),i===g&&e!==a.isValid&&h.state.next({isValid:e})}},w=(e,r)=>{!t.disabled&&(p.isValidating||p.validatingFields||x.isValidating||x.validatingFields)&&((e||Array.from(l.mount)).forEach(e=>{e&&(r?Q(a.validatingFields,e,r):ew(a.validatingFields,e))}),h.state.next({validatingFields:a.validatingFields,isValidating:!eo(a.validatingFields)}))},j=()=>{a.dirtyFields=eM(i,s,void 0,r)},k=(e,t)=>{Q(a.errors,e,t),a.errors={...a.errors},h.state.next({errors:a.errors})},N=(t,o,d,c)=>{let m=X(r,t);if(m){if((e=>{let t=Y.test(e)?[e]:Z(e),a=s,r=i;for(let e=0;e<t.length-1;e++){let i=t[e];if(a=z(a)?a:a[i],r=z(r)?r:r[i],null===a&&null!==r)return!0}return!1})(t)||(e=>{if(!n.actionArrayLengths.size)return!1;let t=Y.test(e)?[e]:Z(e),a=s,r="",i=-1,l=0;for(let e=0;e<t.length&&!z(a);e++){let s=t[e];if(r=r?`${r}.${s}`:s,Array.isArray(a)&&+s>=a.length)return -1!==i&&(e!==i||+s<l);n.actionArrayLengths.has(r)&&(i=e+1,l=n.actionArrayLengths.get(r)),a=a[s]}return!1})(t))return;let r=K(X(s,t)),f=X(s,t,K(d)?X(i,t):d);K(f)||c&&c.defaultChecked||o?Q(s,t,o?f:eL(m._f)):D(t,f),n.mount&&!n.action&&(v(),r&&a.isDirty&&(p.isDirty||x.isDirty)&&(F()||(a.isDirty=!1,h.state.next({...a}))),e.shouldUnregister&&r&&!K(X(s,t))&&es(t,l)&&(n.watch=!0))}},A=(e,n,l,o,d)=>{let c=!1,m=!1,f={name:e};if(!t.disabled||!0===o){if(!l||o){let t=ea(X(i,e),n);if((p.isDirty||x.isDirty)&&(m=a.isDirty,a.isDirty=f.isDirty=!t||F(),c=m!==f.isDirty),m=!!X(a.dirtyFields,e),t!==a.isDirty){var u=a.dirtyFields,g=eM(i,s,void 0,r);for(let e in u)e in g||delete u[e];Object.assign(u,g)}else t?ew(a.dirtyFields,e):Q(a.dirtyFields,e,!0);f.dirtyFields=a.dirtyFields,c=c||(p.dirtyFields||x.dirtyFields)&&!t!==m}if(l){let t=X(a.touchedFields,e);t||(Q(a.touchedFields,e,l),f.touchedFields=a.touchedFields,c=c||(p.touchedFields||x.touchedFields)&&t!==l)}c&&d&&h.state.next(f)}return c?f:{}},_=async e=>(w(e,!0),await t.resolver(s,t.context,((e,t,a,r)=>{let i={};for(let a of e){let e=X(t,a);e&&Q(i,a,e._f)}return{criteriaMode:a,names:[...e],fields:i,shouldUseNativeValidation:r}})(e||l.mount,r,t.criteriaMode,t.shouldUseNativeValidation))),V=async e=>{let{errors:t}=await _(e);if(w(e),e){for(let r of e){let e=X(t,r);e?l.array.has(r)&&E(e)&&!Object.keys(e).some(e=>!Number.isNaN(Number(e)))?el(a.errors,{[r]:e},r):Q(a.errors,r,e):ew(a.errors,r)}a.errors={...a.errors}}else a.errors=t;return t},C=async({name:t,eventType:r})=>{if(e.validate){let i=await e.validate({formValues:s,formState:a,name:t,eventType:r});if(E(i))for(let e in i){let t=i[e];t&&et(`${eB}.${e}`,{message:er(t.message)?t.message:"",type:t.type||P.validate})}else er(i)||!i?et(eB,{message:i||"",type:P.validate}):ee(eB);return i}return!0},S=async({fields:r,onlyCheckValid:i,name:n,eventType:o,context:d={valid:!0,runRootValidation:!1}})=>{if(e.validate&&(d.runRootValidation=!0,!await C({name:n,eventType:o}))&&(d.valid=!1,i))return d.valid;for(let n in r){let c=r[n];if(c){let{_f:r,...m}=c;if(r){let n=l.array.has(r.name),o=c._f&&eE(c._f),m=p.validatingFields||p.isValidating||x.validatingFields||x.isValidating;o&&m&&w([r.name],!0);let f=await eb(c,l.disabled,s,b,t.shouldUseNativeValidation&&!i,n);if(o&&m&&w([r.name]),f[r.name]&&(d.valid=!1,i)||(i||(X(f,r.name)?n?el(a.errors,f,r.name):Q(a.errors,r.name,f[r.name]):ew(a.errors,r.name)),e.shouldUseNativeValidation&&f[r.name]))break}eo(m)||await S({context:d,onlyCheckValid:i,fields:m,name:n,eventType:o})}}return d.valid},F=(e,t)=>(e&&t&&Q(s,e,t),!ea(n.mount?s:i,i)),M=(e,t,a)=>{var r,o;return r=l,o={...n.mount?s:K(t)||er(e)?i:t},er(e)?(a&&r.watch.add(e),X(o,e,t)):Array.isArray(e)?e.map(e=>(a&&r.watch.add(e),X(o,e))):(a&&(r.watchAll=!0),o)},D=(e,t,a={},i=!1,n=!1,l=!1)=>{let o=X(r,e),d=t;if(o){let a=o._f;a&&(a.disabled||Q(s,e,eD(t,a)),d=ed(a.ref)&&z(t)?"":t,"select-multiple"===a.ref.type?[...a.ref.options].forEach(e=>e.selected=d.includes(e.value)):a.refs?"checkbox"===a.ref.type?a.refs.forEach(e=>{e.defaultChecked&&e.disabled||(Array.isArray(d)?e.checked=!!d.find(t=>t===e.value):e.checked=d===e.value||!!d)}):a.refs.forEach(e=>e.checked=e.value===d):"file"===a.ref.type?a.ref.value="":(a.ref.value=d,a.ref.type||n||l||h.state.next({name:e,values:i?s:B(s)})))}(a.shouldDirty||a.shouldTouch)&&A(e,d,a.shouldTouch,a.shouldDirty,!n),a.shouldValidate&&q(e,{delayError:a.delayError})},O=(e,t,a,i=!1,n=!1,o=!1)=>{for(let d in l.array.has(e)&&h.array.next({name:e,values:i?s:B(s)}),t){if(!t.hasOwnProperty(d))return;let s=t[d],c=e+"."+d,m=X(r,c);(l.array.has(e)||E(s)||m&&!m._f)&&!L(s)?O(c,s,a,i,n,o):D(c,s,a,i,n,o)}},T=(e,t,i,o,d=!1)=>{let c=X(r,e),m=l.array.has(e),f=o?t:B(t),u=ea(X(s,e),f);if(u||Q(s,e,f),m)h.array.next({name:e,values:o?s:B(s)}),(p.isDirty||p.dirtyFields||x.isDirty||x.dirtyFields)&&i.shouldDirty&&(j(),d||h.state.next({name:e,dirtyFields:a.dirtyFields,isDirty:F(e,f)}));else{let t=Array.isArray(f)&&!f.length||eo(f),a=!u&&!d;!c||c._f||z(f)||t?D(e,f,i,o,d,a):O(e,f,i,o,d,a)}if(!u&&!d){let t=es(e,l),r=o?s:B(s);h.state.next({...t&&a,name:n.mount||t?e:void 0,values:r})}},R=(e,t,a={})=>T(e,t,a,!1),U=async i=>{n.mount=!0;let u=i.target,g=u.name,j=!0,N=X(r,g),V=e=>{j=Number.isNaN(e)||L(e)&&isNaN(e.getTime())||ea(e,X(s,g,e))};if(N){let n,L,R,U,P=u.type?eL(N._f):E(n=i)&&n.target?"checkbox"===n.target.type?n.target.checked:"file"===n.target.type?n.target.files:n.target.value:n,W="blur"===i.type||"focusout"===i.type,H=!((U=N._f).mount&&(U.required||U.min||U.max||U.maxLength||U.minLength||U.pattern||U.validate))&&!e.validate&&!t.resolver&&!X(a.errors,g)&&!N._f.deps,Y=H||(F=W,M=X(a.touchedFields,g),D=a.isSubmitted,z=f,!(O=m).isOnAll&&(!D&&O.isOnTouch?!(M||F):(D?z.isOnBlur:O.isOnBlur)?!F:(D?!z.isOnChange:!O.isOnChange)||F)),K=es(g,l,W);if(Q(s,g,P),W){if(!u||!u.readOnly){N._f.onBlur&&N._f.onBlur(i);let e=o[g];e&&e(0)}}else N._f.onChange&&N._f.onChange(i);let Z=A(g,P,W),J=!eo(Z)||K;if(W||h.state.next({name:g,type:i.type,...c?{values:B(s)}:{}}),Y)return(!H||!a.isValid)&&(p.isValid||x.isValid)&&("onBlur"===t.mode?W&&v():W||v()),J&&h.state.next({name:g,...K?{}:Z});if(!t.resolver&&e.validate&&await C({name:g,eventType:i.type}),!W&&K&&h.state.next({...a}),t.resolver){let{errors:e}=await _([g]);if(w([g]),V(P),!j){eo(Z)||h.state.next(Z);return}let t=eT(a.errors,r,g),i=eT(e,r,t.name||g);L=i.error,g=i.name,R=eo(e)}else w([g],!0),L=(await eb(N,l.disabled,s,b,t.shouldUseNativeValidation))[g],w([g]),V(P),j&&(L?R=!1:(p.isValid||x.isValid)&&(R=await S({fields:r,onlyCheckValid:!0,name:g,eventType:i.type})));if(j){N._f.deps&&(!Array.isArray(N._f.deps)||N._f.deps.length>0)&&q(N._f.deps);var F,M,D,z,O,T=g,I=R,$=L;let e=X(a.errors,T),r=(p.isValid||x.isValid)&&"boolean"==typeof I&&a.isValid!==I;if(t.delayError&&$?(o[T]=y(T,()=>k(T,$)),o[T](t.delayError)):(clearTimeout(d[T]),delete o[T],$?Q(a.errors,T,$):ew(a.errors,T),a.errors={...a.errors}),($?!ea(e,$):e)||!eo(Z)||r){let e={...Z,...r&&"boolean"==typeof I?{isValid:I}:{},errors:a.errors,name:T};a={...a,...e},h.state.next(e)}}}},H=(e,t)=>{if(X(a.errors,t)&&e.focus)return e.focus(),1},q=async(e,i={})=>{let s,n,c=ey(e);if(t.resolver){let t=await V(K(e)?e:c);s=eo(t),n=e?!c.some(e=>X(t,e)):s}else e?((n=(await Promise.all(c.map(async e=>{let t=X(r,e);return await S({fields:t&&t._f?{[e]:t}:t,eventType:$})}))).every(Boolean))||a.isValid)&&v():n=s=await S({fields:r,name:e,eventType:$});if(i.delayError&&t.delayError&&er(e)){let r=X(a.errors,e);r?(ew(a.errors,e),o[e]=y(e,()=>k(e,r)),o[e](t.delayError)):(clearTimeout(d[e]),delete o[e])}return h.state.next({...!er(e)||(p.isValid||x.isValid)&&s!==a.isValid?{}:{name:e},...t.resolver||!e?{isValid:s}:{},errors:a.errors}),i.shouldFocus&&!n&&en(r,H,e?c:l.mount),n},G=(e,t)=>({invalid:!!X((t||a).errors,e),isDirty:!!X((t||a).dirtyFields,e),error:X((t||a).errors,e),isValidating:!!X(a.validatingFields,e),isTouched:!!X((t||a).touchedFields,e)}),ee=e=>{let t=e?ey(e):void 0;null==t||t.forEach(e=>ew(a.errors,e)),t?t.forEach(e=>{h.state.next({name:e,errors:a.errors})}):(a.errors={},h.state.next({errors:a.errors}))},et=(e,t,i)=>{let s=(X(r,e,{_f:{}})._f||{}).ref,{ref:n,message:l,type:o,...d}=X(a.errors,e)||{};Q(a.errors,e,{...d,...t,ref:s}),h.state.next({name:e,errors:a.errors,isValid:!1}),i&&i.shouldFocus&&s&&s.focus&&s.focus()},ec=e=>{var t;let r=!!(null==(t=e.formState)?void 0:t.values);r&&c++;let{unsubscribe:n}=h.state.subscribe({next:t=>{var r,n;let l,o,d,c;if(l=e.name,o=t.name,d=e.exact,(!l||!o||l===o||ey(l).some(e=>e&&(d?e===o||e.startsWith(o+"."):e.startsWith(o)||o.startsWith(e))))&&(r=e.formState||p,n=e.reRenderRoot,e_(t),!(c=Object.keys(t).filter(e=>"name"!==e)).length||n&&c.length>=Object.keys(r).length||c.find(e=>r[e]===(!n||"all")))){let r={...s};e.callback({values:r,...a,...t,defaultValues:i})}}});if(!r)return n;let l=!1;return()=>{l||(l=!0,c--,n())}},em=(e,n={})=>{for(let o of e?ey(e):l.mount)l.mount.delete(o),l.array.delete(o),n.keepValue||(ew(r,o),ew(s,o)),n.keepError||ew(a.errors,o),n.keepDirty||ew(a.dirtyFields,o),n.keepTouched||ew(a.touchedFields,o),n.keepIsValidating||ew(a.validatingFields,o),t.shouldUnregister||n.keepDefaultValue||ew(i,o);h.state.next({values:B(s)}),h.state.next({...a,...!n.keepDirty?{}:{isDirty:F()}}),n.keepIsValid||v()},ef=({disabled:e,name:t})=>{if("boolean"==typeof e&&n.mount||e||l.disabled.has(t)){let a=l.disabled.has(t);e?l.disabled.add(t):l.disabled.delete(t),!!e!==a&&n.mount&&!n.action&&v()}},eu=(e,a={})=>{let s=X(r,e),o="boolean"==typeof a.disabled||"boolean"==typeof t.disabled,d=!l.registerName.has(e)&&s&&s._f&&!s._f.mount;return(Q(r,e,{...s||{},_f:{...s&&s._f?s._f:{ref:{name:e}},name:e,mount:!0,...a}}),l.mount.add(e),s&&!d)?ef({disabled:"boolean"==typeof a.disabled?a.disabled:t.disabled,name:e}):N(e,!0,a.value),{...o?{disabled:a.disabled||t.disabled}:{},...t.progressive?{required:!!a.required,min:ez(a.min),max:ez(a.max),minLength:ez(a.minLength),maxLength:ez(a.maxLength),pattern:ez(a.pattern)}:{},name:e,onChange:U,onBlur:U,ref:o=>{if(o){let t;l.registerName.add(e),eu(e,a),l.registerName.delete(e),s=X(r,e);let n=K(o.value)&&o.querySelectorAll&&o.querySelectorAll("input,select,textarea")[0]||o,d="radio"===(t=n).type||"checkbox"===t.type,c=s._f.refs||[];if(d?c.find(e=>e===n):n===s._f.ref)return;let m={...s._f};d?(m.refs=[...c.filter(eN),n,...Array.isArray(X(i,e))?[{}]:[]],m.ref={type:n.type,name:e}):(m.ref=n,delete m.refs),Q(r,e,{_f:m}),N(e,!1,void 0,n)}else{let i;(s=X(r,e,{}))._f&&(s._f.mount=!1),(t.shouldUnregister||a.shouldUnregister)&&(i=l.array,!e.split(".").some((e,t,a)=>!isNaN(Number(e))&&i.has(a.slice(0,t).join(".")))||!n.action)&&l.unMount.add(e)}}}},ep=()=>t.shouldFocusError&&!t.shouldUseNativeValidation&&en(r,H,l.mount),ex=(e,i)=>async n=>{let o,d;n&&(n.preventDefault&&n.preventDefault(),n.persist&&n.persist());let c=B(s);if(h.state.next({isSubmitting:!0}),t.resolver){let{errors:e,values:t}=await _();w(),a.errors=e,c=B(t)}else await S({fields:r,eventType:"submit"});if(l.disabled.size)for(let e of l.disabled)ew(c,e);if(ew(a.errors,W),eo(a.errors)){h.state.next({errors:{}});try{o=await e(c,n)}catch(e){d=e}}else i&&await i({...a.errors},n),ep(),setTimeout(ep);if(h.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:eo(a.errors)&&!d,submitCount:a.submitCount+1,errors:a.errors}),d)throw d;return o},eh=(e,o={})=>{let d=e?B(e):i,c=B(d),m=eo(e),f=r;if(o.keepDefaultValues||(i=d),!o.keepValues){if(o.keepDirtyValues)for(let e of Array.from(new Set([...l.mount,...function e(t,a,r="",i=[]){for(let s in t){let n=r?`${r}.${s}`:s,l=t[s];eA(l)&&eA(X(a,n))?e(l,a,n,i):i.push(n)}return i}(eM(i,s,void 0,f),a.dirtyFields)]))){let t=X(a.dirtyFields,e),r=X(s,e),i=X(c,e);t&&!K(r)?Q(c,e,r):t||K(i)||R(e,i)}else{if(I&&K(e))for(let e of l.mount){let t=X(r,e);if(t&&t._f){let e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(ed(e)){let t=e.closest("form");if(t){t.reset();break}}}}if(o.keepFieldsRef)for(let e of l.mount)R(e,X(c,e));else r={}}if(t.shouldUnregister){if(s=o.keepDefaultValues?B(i):{},o.keepFieldsRef)for(let e of l.mount)Q(s,e,X(c,e))}else s=B(c);h.array.next({values:{...c}}),h.state.next({name:void 0,type:void 0,values:{...c}})}l={mount:o.keepDirtyValues?l.mount:new Set,unMount:new Set,array:new Set,registerName:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},n.mount=!p.isValid||!!o.keepIsValid||!!o.keepDirtyValues||!t.shouldUnregister&&!eo(c),n.watch=!!t.shouldUnregister,n.keepIsValid=!!o.keepIsValid,n.action=!1,n.actionArrayLengths.clear(),o.keepErrors||(a.errors={}),h.state.next({submitCount:o.keepSubmitCount?a.submitCount:0,isDirty:!m&&(o.keepDirty?a.isDirty:o.keepValues?F():!!(o.keepDefaultValues&&!ea(e,i))),isSubmitted:!!o.keepIsSubmitted&&a.isSubmitted,dirtyFields:m?{}:o.keepDirtyValues?o.keepDefaultValues&&s?eM(i,s,void 0,f):a.dirtyFields:o.keepDefaultValues&&e?eM(i,e,void 0,f):o.keepDirty?a.dirtyFields:{},touchedFields:o.keepTouched?a.touchedFields:{},errors:o.keepErrors?a.errors:{},isSubmitSuccessful:!!o.keepIsSubmitSuccessful&&a.isSubmitSuccessful,isSubmitting:!1,defaultValues:i})},eg=(e,a)=>eh(J(e)?e(s):e,{...t.resetOptions,...a}),e_=e=>{let{name:t,type:r,values:i,...s}=e;a={...a,...s}};h.state.subscribe({next:e_});let eV={control:{register:eu,unregister:em,getFieldState:G,handleSubmit:ex,setError:et,_subscribe:ec,_runSchema:_,_updateIsValidating:w,_focusError:ep,_getWatch:M,_getDirty:F,_setValid:v,_setFieldArray:(e,i=[],l,o,d=!0,c=!0)=>{if(o&&l&&!t.disabled){if(n.action=!0,!n.actionArrayLengths.has(e)){let t=X(r,e);n.actionArrayLengths.set(e,Array.isArray(t)?t.length:0)}if(c&&Array.isArray(X(r,e))){let t=l(X(r,e),o.argA,o.argB);d&&Q(r,e,t)}if(c&&Array.isArray(X(a.errors,e))){var m;let t,r=X(a.errors,e),i=r.root,s=l(r,o.argA,o.argB)||r;i&&(s.root=i),d&&Q(a.errors,e,s),ev(t=X(m=a.errors,e)).length||(null==t?void 0:t.root)||ew(m,e)}if((p.touchedFields||x.touchedFields)&&c&&Array.isArray(X(a.touchedFields,e))){let t=l(X(a.touchedFields,e),o.argA,o.argB);d&&Q(a.touchedFields,e,t)}(p.dirtyFields||x.dirtyFields)&&j(),h.state.next({name:e,isDirty:F(e,i),dirtyFields:a.dirtyFields,errors:a.errors,isValid:a.isValid})}else Q(s,e,i)},_setDisabledField:ef,_setErrors:e=>{a.errors=e,h.state.next({errors:a.errors,isValid:!1})},_getFieldArray:e=>ev(X(n.mount?s:i,e,t.shouldUnregister?X(i,e,[]):[])),_reset:eh,_resetDefaultValues:()=>J(t.defaultValues)&&t.defaultValues().then(e=>{eg(e,t.resetOptions),h.state.next({isLoading:!1})}),_removeUnmounted:()=>{for(let e of l.unMount){let t=X(r,e);t&&(t._f.refs?t._f.refs.every(e=>!eN(e)):!eN(t._f.ref))&&em(e)}l.unMount=new Set},_disableForm:e=>{"boolean"==typeof e&&(h.state.next({disabled:e}),en(r,(t,a)=>{let i=X(r,a);i&&(t.disabled=i._f.disabled||e,Array.isArray(i._f.refs)&&i._f.refs.forEach(t=>{t.disabled=i._f.disabled||e}))},0,!1))},_subjects:h,_proxyFormState:p,get _fields(){return r},get _formValues(){return s},get _state(){return n},set _state(e){n=e},get _defaultValues(){return i},get _names(){return l},set _names(e){l=e},get _formState(){return a},get _options(){return t},set _options(e){m=ei((t={...t,...e}).mode),f=ei(t.reValidateMode)}},subscribe:e=>(n.mount=!0,x={...x,...e.formState},ec({...e,formState:{...u,...e.formState}})),trigger:q,register:eu,handleSubmit:ex,watch:(e,t)=>{if(J(e)){c++;let{unsubscribe:a}=h.state.subscribe({next:a=>"values"in a&&e(a.values||M(void 0,t),a)}),r=!1;return{unsubscribe:()=>{r||(r=!0,c--,a())}}}return M(e,t,!0)},setValue:R,setValues:(e,t={})=>{let r=J(e)?e(s):e;if(!ea(s,r)){s={...s,...r};let e=ej(r);for(let a of l.mount)a in e&&T(a,e[a],t,!0,!0);h.state.next({...a,name:void 0,type:void 0,...c?{values:s}:{}}),t.shouldValidate&&v()}},getValues:(e,t)=>{let r={...n.mount?s:i};return t&&(r=function e(t,a){let r={};for(let i in t)if(t.hasOwnProperty(i)){let s=t[i],n=a[i];if(s&&E(s)&&n){let t=e(s,n);E(t)&&(r[i]=t)}else t[i]&&(r[i]=n)}return r}(t.dirtyFields?a.dirtyFields:a.touchedFields,r)),K(e)?r:er(e)?X(r,e):e.map(e=>X(r,e))},reset:eg,resetField:(e,t={})=>{X(r,e)&&(K(t.defaultValue)?R(e,B(X(i,e))):(R(e,t.defaultValue),Q(i,e,B(t.defaultValue))),t.keepTouched||ew(a.touchedFields,e),t.keepDirty||(ew(a.dirtyFields,e),a.isDirty=t.defaultValue?F(e,B(X(i,e))):F()),!t.keepError&&(ew(a.errors,e),p.isValid&&v()),h.state.next({...a}))},resetDefaultValues:(e,t={})=>{if(i=B(e),!t.keepDirty){let e=eM(i,s,void 0,r);a.dirtyFields=e,a.isDirty=!eo(e)}t.keepIsValid||v(),h.state.next({...a,defaultValues:i})},clearErrors:ee,unregister:em,setError:et,setFocus:(e,t={})=>{let a=X(r,e),i=a&&a._f;if(i){let e=i.refs?i.refs[0]:i.ref;e.focus&&setTimeout(()=>{e.focus(),t.shouldSelect&&J(e.select)&&e.select()})}},getFieldState:G};return{...eV,formControl:eV}}(e);i.current={...a,formState:l}}let d=i.current.control;d._options=e;let{resyncIfNeeded:c,snapshot:m}=(t=a.default.useRef(!1),r=a.default.useRef(void 0),{resyncIfNeeded:a.default.useCallback((e,a,i)=>{if(e&&t.current){let e=a();ea(r.current,e)||i(e)}t.current=!0},[]),snapshot:a.default.useCallback((e,t)=>{e&&(r.current=B(t()))},[])});return G(()=>{let e=()=>({...d._formState,defaultValues:d._defaultValues});c(!0,e,o);let t=d._subscribe({formState:d._proxyFormState,callback:()=>o({...d._formState,defaultValues:d._defaultValues}),reRenderRoot:!0});return o(e=>({...e,isReady:!0})),d._formState.isReady=!0,()=>{t(),m(!0,e)}},[d,c,m]),a.default.useEffect(()=>d._disableForm(e.disabled),[d,e.disabled]),a.default.useEffect(()=>{e.mode&&(d._options.mode=e.mode),e.reValidateMode&&(d._options.reValidateMode=e.reValidateMode)},[d,e.mode,e.reValidateMode]),a.default.useEffect(()=>{e.errors&&(d._setErrors(e.errors),d._focusError())},[d,e.errors]),a.default.useEffect(()=>{e.shouldUnregister&&d._subjects.state.next({values:d._getWatch()})},[d,e.shouldUnregister]),a.default.useEffect(()=>{if(d._proxyFormState.isDirty){let e=d._getDirty();e!==l.isDirty&&d._subjects.state.next({isDirty:e})}},[d,l.isDirty]),a.default.useEffect(()=>{var t;e.values&&!ea(e.values,s.current)?(d._reset(e.values,{keepFieldsRef:!0,...d._options.resetOptions}),(null==(t=d._options.resetOptions)?void 0:t.keepIsValid)||d._setValid(),s.current=e.values,o(e=>({...e}))):d._resetDefaultValues()},[d,e.values]),a.default.useEffect(()=>{d._state.mount||(d._setValid(),d._state.mount=!0),d._state.watch&&(d._state.watch=!1,d._subjects.state.next({...d._formState})),d._removeUnmounted()}),i.current.formState=a.default.useMemo(()=>((e,t,a=!0)=>{let r={};for(let i in e)Object.defineProperty(r,i,{get:()=>("all"!==t._proxyFormState[i]&&(t._proxyFormState[i]=!a||"all"),e[i])});return r})(l,d),[d,l]),i.current}({mode:"onChange",defaultValues:{name:"",email:"",projectType:"",details:""}}),s=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.querySelectorAll(".contact-animate").forEach((e,t)=>{setTimeout(()=>{e.classList.add("opacity-100","translate-y-0"),e.classList.remove("opacity-0","translate-y-10")},120*t)})})},{threshold:.1});return s.current&&e.observe(s.current),()=>e.disconnect()},[]),(0,t.jsx)("section",{id:e,ref:s,className:"w-full py-16 md:py-20 border-t border-[#e5e7eb] bg-[#f5f5f5]","aria-labelledby":"contact-heading",children:(0,t.jsx)("div",{className:"max-w-7xl mx-auto px-4 md:px-12",children:(0,t.jsxs)("div",{className:"grid md:grid-cols-12 gap-16 lg:gap-24",children:[(0,t.jsx)("div",{className:"md:col-span-5",children:(0,t.jsxs)("div",{className:"contact-animate opacity-0 translate-y-10 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",children:[(0,t.jsxs)("span",{className:"inline-flex items-center gap-2 text-[#667085] text-xs font-medium tracking-[3px] uppercase",children:[(0,t.jsx)("span",{className:"w-8 h-px bg-[#667085]"}),"Kontak"]}),(0,t.jsx)("h1",{id:"contact-heading",className:"font-['Manrope'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-[#20242c] mt-4",children:"Hubungi saya."}),(0,t.jsxs)("div",{className:"mt-8 space-y-6",children:[(0,t.jsxs)("div",{className:"group",children:[(0,t.jsx)("span",{className:"text-[#667085] text-[10px] font-medium tracking-[2px] uppercase",children:"Email"}),(0,t.jsx)("a",{href:"mailto:arifpaturahman19@gmail.com",className:"block text-[#20242c] text-base md:text-lg hover:text-[#667085] transition-colors mt-1.5 group-hover:translate-x-1 transition-transform",children:"arifpaturahman19@gmail.com"})]}),(0,t.jsxs)("div",{className:"group",children:[(0,t.jsx)("span",{className:"text-[#667085] text-[10px] font-medium tracking-[2px] uppercase",children:"Domisili"}),(0,t.jsxs)("p",{className:"text-[#20242c] text-base md:text-lg leading-relaxed mt-1.5",children:["Sukabumi,",(0,t.jsx)("br",{}),"Jawa Barat"]})]})]})]})}),(0,t.jsx)("div",{className:"md:col-span-7",children:(0,t.jsx)("div",{className:"contact-animate opacity-0 translate-y-10 transition-all duration-700 delay-100 ease-[cubic-bezier(0.22,1,0.36,1)]",children:(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)("div",{className:"absolute -inset-8 bg-gradient-to-br from-[#20242c]/[0.03] via-[#e5e7eb]/40 to-transparent rounded-3xl blur-2xl"}),(0,t.jsx)("div",{className:"relative bg-white rounded-2xl shadow-[0_8px_50px_-12px_rgba(32,36,44,0.08)] border border-[#e5e7eb] p-6 md:p-8 lg:p-10 overflow-hidden",children:(0,t.jsx)("form",{onSubmit:e=>e.preventDefault(),noValidate:!0,children:(0,t.jsxs)("div",{className:"space-y-6 md:space-y-8",children:[(0,t.jsxs)("div",{className:"grid sm:grid-cols-2 gap-4 md:gap-6",children:[(0,t.jsxs)("div",{className:"contact-field relative",children:[(0,t.jsx)("label",{htmlFor:"name",className:"contact-field-label mb-2 block text-xs font-medium text-[#667085]",children:"Nama Anda"}),(0,t.jsx)("input",{type:"text",id:"name",...r("name",{required:"Nama wajib diisi",minLength:{value:2,message:"Minimal 2 karakter"}}),className:`contact-field-control w-full rounded-xl border bg-[#f8f9fa] px-4 py-3 text-sm text-[#20242c] md:py-3.5 md:text-base ${i.name?"border-red-400":"border-[#e5e7eb]"}`,placeholder:"Nama lengkap"}),i.name&&(0,t.jsx)("p",{className:"mt-1.5 text-xs text-red-500",children:i.name.message})]}),(0,t.jsxs)("div",{className:"contact-field relative",children:[(0,t.jsx)("label",{htmlFor:"email",className:"contact-field-label mb-2 block text-xs font-medium text-[#667085]",children:"Alamat Email"}),(0,t.jsx)("input",{type:"email",id:"email",...r("email",{required:"Email wajib diisi",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Email tidak valid"}}),className:`contact-field-control w-full rounded-xl border bg-[#f8f9fa] px-4 py-3 text-sm text-[#20242c] md:py-3.5 md:text-base ${i.email?"border-red-400":"border-[#e5e7eb]"}`,placeholder:"nama@email.com"}),i.email&&(0,t.jsx)("p",{className:"mt-1.5 text-xs text-red-500",children:i.email.message})]})]}),(0,t.jsxs)("div",{className:"contact-field relative",children:[(0,t.jsx)("label",{htmlFor:"projectType",className:"contact-field-label mb-2 block text-xs font-medium text-[#667085]",children:"Jenis Proyek"}),(0,t.jsxs)("div",{className:"contact-select-wrap relative",children:[(0,t.jsxs)("select",{id:"projectType",...r("projectType",{required:"Jenis proyek wajib dipilih"}),className:`contact-field-control w-full appearance-none rounded-xl border bg-[#f8f9fa] px-4 py-3 pr-11 text-sm text-[#20242c] md:py-3.5 md:text-base ${i.projectType?"border-red-400":"border-[#e5e7eb]"}`,style:{WebkitAppearance:"none",MozAppearance:"none"},children:[(0,t.jsx)("option",{value:"",disabled:!0,children:"Pilih jenis proyek"}),(0,t.jsx)("option",{value:"branding",className:"text-[#20242c]",children:"Branding & Identitas"}),(0,t.jsx)("option",{value:"digital-design",className:"text-[#20242c]",children:"Desain Digital"}),(0,t.jsx)("option",{value:"creative-direction",className:"text-[#20242c]",children:"Arahan Kreatif"}),(0,t.jsx)("option",{value:"web-development",className:"text-[#20242c]",children:"Pengembangan Web"}),(0,t.jsx)("option",{value:"other",className:"text-[#20242c]",children:"Lainnya"})]}),(0,t.jsx)("div",{className:"contact-select-icon absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none",children:(0,t.jsx)("svg",{className:"h-4 w-4 text-[#667085]",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,t.jsx)("polyline",{points:"6 9 12 15 18 9"})})})]}),i.projectType&&(0,t.jsx)("p",{className:"mt-1.5 text-xs text-red-500",children:i.projectType.message})]}),(0,t.jsxs)("div",{className:"contact-field relative",children:[(0,t.jsx)("label",{htmlFor:"details",className:"contact-field-label mb-2 block text-xs font-medium text-[#667085]",children:"Detail Proyek"}),(0,t.jsx)("textarea",{id:"details",rows:"4",...r("details",{required:"Detail proyek wajib diisi",minLength:{value:10,message:"Minimal 10 karakter"}}),className:`contact-field-control min-h-[112px] w-full resize-y rounded-xl border bg-[#f8f9fa] px-4 py-3 text-sm leading-relaxed text-[#20242c] md:min-h-[128px] md:text-base ${i.details?"border-red-400":"border-[#e5e7eb]"}`,placeholder:"Ceritakan singkat tentang proyek Anda"}),i.details&&(0,t.jsx)("p",{className:"mt-1.5 text-xs text-red-500",children:i.details.message})]}),(0,t.jsxs)("div",{className:"flex flex-col items-end gap-4 pt-2 md:pt-4",children:[(0,t.jsxs)("p",{role:"note",className:"w-full rounded-lg bg-[#f5f5f5] px-4 py-3 text-sm leading-relaxed text-[#475467]",children:["Fitur ini belum dapat digunakan. Silakan hubungi saya melalui email"," ",(0,t.jsx)("a",{href:"mailto:arifpaturahman19@gmail.com",className:"font-medium text-[#20242c] underline underline-offset-2 hover:text-[#667085]",children:"arifpaturahman19@gmail.com"}),"."]}),(0,t.jsx)("button",{type:"submit",disabled:!0,className:"inline-flex cursor-not-allowed items-center rounded-full bg-[#20242c]/50 px-6 py-3 opacity-60 md:px-8 md:py-4",children:(0,t.jsx)("span",{className:"relative z-10 text-[#fbf9fc] text-[10px] md:text-xs font-medium tracking-wider",children:"Pengiriman Belum Tersedia"})})]})]})})})]})})})]})})})},eU=()=>(0,t.jsxs)("footer",{className:"border-t border-[#e5e7eb] bg-white",children:[(0,t.jsxs)("div",{className:"max-w-7xl mx-auto px-4 md:px-12 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-4",children:[(0,t.jsx)("button",{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},className:"font-['Manrope'] text-xl md:text-2xl font-bold text-[#20242c] hover:text-[#667085] transition-colors","aria-label":"Kembali ke atas",children:"PORTFOLIO"}),(0,t.jsx)("nav",{className:"flex items-center gap-4 md:gap-6","aria-label":"Media sosial",children:[{name:"LinkedIn",href:"https://www.linkedin.com/in/arif-faturahman-4825a53b3/"},{name:"Instagram",href:"https://www.instagram.com/ryf.ftrhmn/"},{name:"GitHub",href:"https://github.com/arthurrxx"}].map(({name:e,href:a})=>(0,t.jsx)("a",{href:a,target:"_blank",rel:"noreferrer",className:"text-[#667085] text-[10px] md:text-xs font-medium tracking-wider hover:text-[#20242c] transition-colors","aria-label":`Kunjungi ${e}`,children:e},e))})]}),(0,t.jsx)("div",{className:"border-t border-[#e5e7eb]",children:(0,t.jsx)("div",{className:"max-w-7xl mx-auto px-4 md:px-12 py-3 md:py-4 flex justify-center",children:(0,t.jsx)("p",{className:"text-[#667085] text-[8px] md:text-[10px] font-medium tracking-wider",children:"© 2026 PORTFOLIO ARIF."})})})]}),eP=i.U.div.withConfig({displayName:"Loader__StyledWrapper",componentId:"sc-7a1ce10e-0"})`
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
    stroke: #e5e7eb;
  }

  .car {
    stroke: #667085;
    stroke-linecap: round;
    stroke-dasharray: 25 75;
    animation: borderMove 2s linear infinite;
  }

  .keys rect {
    fill: #20242c;
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
`,eW=()=>(0,t.jsx)(eP,{children:(0,t.jsx)("div",{className:"loader",children:(0,t.jsxs)("svg",{className:"container",width:100,height:100,viewBox:"0 0 64 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("rect",{x:2,y:2,width:60,height:36,rx:4,ry:4,pathLength:100,className:"track"}),(0,t.jsx)("rect",{x:2,y:2,width:60,height:36,rx:4,ry:4,pathLength:100,className:"car"}),(0,t.jsxs)("g",{className:"keys",children:[(0,t.jsx)("rect",{x:8,y:8,width:6,height:5,rx:1}),(0,t.jsx)("rect",{x:16,y:8,width:6,height:5,rx:1}),(0,t.jsx)("rect",{x:24,y:8,width:6,height:5,rx:1}),(0,t.jsx)("rect",{x:32,y:8,width:6,height:5,rx:1}),(0,t.jsx)("rect",{x:40,y:8,width:6,height:5,rx:1}),(0,t.jsx)("rect",{x:48,y:8,width:8,height:5,rx:1}),(0,t.jsx)("rect",{x:8,y:16,width:6,height:5,rx:1}),(0,t.jsx)("rect",{x:16,y:16,width:6,height:5,rx:1}),(0,t.jsx)("rect",{x:24,y:16,width:6,height:5,rx:1}),(0,t.jsx)("rect",{x:32,y:16,width:6,height:5,rx:1}),(0,t.jsx)("rect",{x:40,y:16,width:6,height:5,rx:1}),(0,t.jsx)("rect",{x:48,y:16,width:8,height:5,rx:1}),(0,t.jsx)("rect",{x:8,y:24,width:8,height:5,rx:1}),(0,t.jsx)("rect",{x:18,y:24,width:6,height:5,rx:1}),(0,t.jsx)("rect",{x:26,y:24,width:18,height:5,rx:1}),(0,t.jsx)("rect",{x:46,y:24,width:10,height:5,rx:1})]})]})})}),eH=function(){let[e,i]=(0,a.useState)("hero"),[s,n]=(0,a.useState)(!0);return(0,a.useEffect)(()=>{let e=setTimeout(()=>{n(!1)},1e3);return()=>clearTimeout(e)},[]),(0,a.useEffect)(()=>{let e=()=>{let e=window.scrollY+100;for(let t of["hero","about","work","contact"]){let a=document.getElementById(t);if(a){let{offsetTop:r,offsetHeight:s}=a;if(e>=r&&e<r+s){i(t);break}}}};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,t.jsxs)("div",{id:"root",className:"min-h-screen",children:[s&&(0,t.jsx)("div",{className:"loading-screen",role:"status","aria-label":"Memuat",children:(0,t.jsx)(eW,{})}),(0,t.jsx)(r,{activeSection:e}),(0,t.jsxs)("main",{children:[(0,t.jsx)(k,{id:"hero"}),(0,t.jsx)(A,{id:"about"}),(0,t.jsx)(_,{id:"work"}),(0,t.jsx)(C,{}),(0,t.jsx)(D,{}),(0,t.jsx)(eR,{id:"contact"})]}),(0,t.jsx)(eU,{})]})};e.s(["default",0,function(){return(0,t.jsx)(eH,{})}],29615)}]);