import Card from "../components/Card/Card";
import Button from "../components/Button/Button";
import "./Pricing.scss";

function Pricing() {
  const plans = [
    {
      name: "Başlangıç",
      price: "₺0",
      features: ["Temel özellikler", "E-posta desteği"],
      cta: "Başla",
    },
    {
      name: "Pro",
      price: "₺99 / ay",
      features: ["Tüm özellikler", "Öncelikli destek", "Tema seçenekleri"],
      cta: "Satın Al",
    },
    {
      name: "Enterprise",
      price: "Özel Teklif",
      features: ["Kurumsal çözümler", "Özel danışmanlık", "24/7 destek"],
      cta: "İletişime Geç",
    },
  ];

  return (
    <section className="pricing">
      <h2 className="pricing__title">Fiyatlandırma</h2>
      <div className="pricing__grid">
        {plans.map((plan, i) => (
          <Card key={i} title={plan.name}>
            <p className="pricing__price">{plan.price}</p>
            <ul className="pricing__features">
              {plan.features.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>
            <Button variant={i === 1 ? "primary" : "outline"}>
              {plan.cta}
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
