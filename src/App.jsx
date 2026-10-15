// src/App.jsx
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Expertise from "./components/Expertise";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "work", "contact"];
      const scrollY = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="root" className="min-h-screen">
      {loading && (
        <div className="loading-screen" role="status" aria-label="Memuat">
          <Loader />
        </div>
      )}
      <Header activeSection={activeSection} />
      <main>
        <Hero id="hero" />
        <About id="about" />
        <Projects id="work" />
        <Expertise />
        <Technologies />
        <Contact id="contact" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
