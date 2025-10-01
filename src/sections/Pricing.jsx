import Card from "../components/Card/Card";
import "./Pricing.scss";

function Pricing() {
  const plans = [
    { name: "Başlangıç", price: "₺0", features: ["Temel özellikler", "E-posta desteği"], cta: "Başla" },
    { name: "Pro", price: "₺99 / ay", features: ["Tüm özellikler", "Öncelikli destek", "Tema seçenekleri"], cta: "Satın Al", highlight: true },
    { name: "Enterprise", price: "Özel Teklif", features: ["Kurumsal çözümler", "Özel danışmanlık", "24/7 destek"], cta: "İletişime Geç" },
  ];

  return (
    <section className="pricing" id="pricing">
      <h2 className="pricing__title">Fiyatlandırma</h2>
      <div className="pricing__grid">
        {plans.map((plan, i) => (
          <Card
            key={i}
            title={plan.name}
            price={plan.price}
            features={plan.features}
            highlight={plan.highlight}
            cta={plan.cta}
          />
        ))}
      </div>
    </section>
  );
}

export default Pricing;
