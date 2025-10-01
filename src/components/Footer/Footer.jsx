import { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "./Footer.scss";

function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    } else {
      alert("Lütfen e-posta adresinizi girin.");
    }
  };

  return (
    <footer className="site-footer">
      <div className="container footer__grid">
       
        <div className="footer__brand">
          <h2>Enoca</h2>
          <p>Kullanıcılar için modern ve hızlı çözüm.</p>
        </div>

        
        <div className="footer__links">
          <h3>Hızlı Linkler</h3>
          <ul>
            <li><a href="#hero">Ana Sayfa</a></li>
            <li><a href="#features">Özellikler</a></li>
            <li><a href="#pricing">Fiyatlandırma</a></li>
            <li><a href="#faq">SSS</a></li>
            <li><a href="#contact">İletişim</a></li>
          </ul>
        </div>

        
        <div className="footer__newsletter">
          <h3>Bültene Abone Ol</h3>
          <form onSubmit={handleSubmit} className="newsletter__form">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Abone Ol</button>
          </form>
          {submitted && <p className="newsletter__success">Teşekkürler! Kayıt başarılı.</p>}

          <div className="footer__icons">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()}   Enoca. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}

export default Footer;
