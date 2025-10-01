import Button from "../components/Button/Button";
import "./Hero.scss";

function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Modern Ürün Tanıtımı</h1>
        <p className="hero__subtitle">
          Semantik HTML, SCSS ve yeniden kullanılabilir bileşenlerle yapılmış
          responsive bir landing page.
        </p>
        <Button variant="primary" onClick={scrollToContact}>
          Başla 🚀
        </Button>
      </div>
    </section>
  );
}

export default Hero;
