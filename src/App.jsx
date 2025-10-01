import React, { useState, useEffect } from "react";

import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Pricing from "./sections/Pricing";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";
import "./styles/main.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BackToTop from "./components/BackToTop/BackToTop";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <header>
        <Header theme={theme} toggleTheme={toggleTheme} />
      </header>
      <main>
        <Hero />
        <Features />
        <Pricing />
        <FAQ />
        <Contact />
        <BackToTop />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
