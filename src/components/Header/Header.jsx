import { useState, useEffect } from "react";
import "./Header.scss";

function Header({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav">
        <div className="logo">
          <img
            src="/images/logo.webp"
            alt="Enoca Logo"
            width="180"
            height="60"
            decoding="async"
            fetchpriority="high"
          />
        </div>

        <div
          className={`nav__center ${menuOpen ? "open" : ""} ${
            scrolled ? "scrolled" : ""
          }`}
        >
          <ul className="nav__links">
            <li>
              <a href="#hero" onClick={() => setMenuOpen(false)}>
                Ana Sayfa
              </a>
            </li>
            <li>
              <a href="#features" onClick={() => setMenuOpen(false)}>
                Özellikler
              </a>
            </li>
            <li>
              <a href="#pricing" onClick={() => setMenuOpen(false)}>
                Fiyatlar
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                İletişim
              </a>
            </li>
          </ul>
        </div>

        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </nav>
    </header>
  );
}

export default Header;
