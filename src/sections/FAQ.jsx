import Accordion from "../components/Accordion/Accordion";
import "./FAQ.scss";

function FAQ() {
  const faqs = [
    {
      q: "Bu proje hangi teknolojilerle yapıldı?",
      a: "React, Vite, SCSS ve Vanilla JS kullanıldı.",
    },
    {
      q: "Responsive tasarım var mı?",
      a: "Evet, mobil-öncelikli (320px–1440px) tasarım yapıldı.",
    },
    {
      q: "Tema desteği mevcut mu?",
      a: "Light/Dark tema geçişi CSS değişkenleri ile sağlandı.",
    },
    {
      q: "Form nasıl çalışıyor?",
      a: "Form yalancı submit yapıyor, gerçek backend entegrasyonu yok.",
    },
  ];

  return (
    <section className="faq">
      <h2 className="faq__title">Sıkça Sorulan Sorular</h2>
      <div className="faq__list">
        {faqs.map((item, i) => (
          <Accordion key={i} title={item.q}>
            <p>{item.a}</p>
          </Accordion>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
