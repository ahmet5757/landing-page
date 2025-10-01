import Card from "../components/Card/Card";
import "./Features.scss";

function Features() {
  const features = [
    {
      title: "⚡ Hızlı",
      desc: "Modern build tool (Vite) ile anında yüklenir.",
    },
    {
      title: "🎨 Esnek",
      desc: "SCSS ve CSS değişkenleriyle kolay tema yönetimi.",
    },
    {
      title: "📱 Responsive",
      desc: "Mobil-öncelikli tasarım, her ekranda uyumlu.",
    },
    {
      title: "♿ Erişilebilir",
      desc: "Semantic HTML ve a11y özellikleri hazır.",
    },
  ];

  return (
    <section className="features">
      <h2 className="features__title">Özellikler</h2>
      <div className="features__grid">
        {features.map((f, i) => (
          <Card key={i} title={f.title}>
            <p>{f.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Features;
