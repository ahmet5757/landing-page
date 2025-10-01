import React, { useState, useEffect } from "react";

// Sections
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Pricing from "./sections/Pricing";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";
import "./styles/main.scss";



function App() {
  const [theme, setTheme] = useState("light");

  // Tema toggle
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      {/* Header */}
      <header className="site-header">
        <nav className="container">
          <h1 className="logo">MyProduct</h1>
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
        </nav>
      </header>

      <main>
        <Hero />
        <Features />
        <Pricing />
        <FAQ />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} MyProduct. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
