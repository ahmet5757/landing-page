import "./Features.scss";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { MdSpeed } from "react-icons/md";
import { BiHealth } from "react-icons/bi";

const features = [
  {
    icon: <AiFillThunderbolt size={40} color="#fff" />,
    title: "GELECEĞİN TİCARETİ",
    desc: "Özellikle bilişim alanında teknolojideki gelişmeler hızla şekillenmeye devam ediyor. Gün geçtikçe daha fazla insan bu gelişmelerden faydalanmaya başlıyor.",
  },
  {
    icon: <FaShoppingCart size={40} color="#fff" />,
    title: "SAP CX HYBRIS ÇOKLU TİCARET",
    desc: "SAP CX Hybris ile her yerde ticaret yapın. SAP CX Hybris Çoklu Ticaret Platformu çok kanallı, sağlam, üst düzey ölçeklenebilir.",
  },
  {
    icon: <MdSpeed size={40} color="#fff" />,
    title: "ÇEVİK OLUN",
    desc: "“Çevik Geliştirme” birçok tekrarlı ve ilerleyen yazılım geliştirme methodları için birleştiricidir. “Hedef” nedir?",
  },
  {
    icon: <BiHealth size={40} color="#fff" />,
    title: "SİSTEMİNİZ SAĞLIKLI MI?",
    desc: "Sisteminizin düşük performansından hiç şikayet ettiniz mi? Bir sisteme çok para harcamak, doğrudan beklenen performansı sağlamaz.",
  },
];

function Features() {
  return (
    <section className="features" id="features">
      <div className="features__grid">
        {features.map((f, i) => (
          <div className="feature-card" key={i}>
            <div className="feature-card__icon">{f.icon}</div>
            <h3 className="feature-card__title">{f.title}</h3>
            <p className="feature-card__desc">{f.desc}</p>
            <a href="#!" className="feature-card__link">
              Daha Fazla...
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
