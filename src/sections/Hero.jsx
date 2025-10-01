import Banner from "../../public/images/banner.webp";
import "./Hero.scss";

function Hero() {
  return (
    <section className="hero" id="hero">
      <img
        src={Banner}
        alt="Enoca Banner"
        className="hero__img"
        width="1920"
        height="1080"
        decoding="async"
        fetchpriority="high"
      />
      <div className="hero__overlay">
        <div className="hero__content">
          <h1 className="hero__title">Enoca İle Zirveye</h1>
        </div>
      </div>
    </section>
  );
}

export default Hero;
