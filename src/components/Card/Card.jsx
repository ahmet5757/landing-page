import "./Card.scss";

function Card({ title, price, features, highlight, cta }) {
  return (
    <div className={`card ${highlight ? "card--highlight" : ""}`}>
      <h3 className="card__title">{title}</h3>
      {price && <p className="card__price">{price}</p>}
      {features && (
        <ul className="card__features">
          {features.map((f, i) => (
            <li key={i}>
              <span className="card__check"></span> {f}
            </li>
          ))}
        </ul>
      )}
      {cta && (
        <button className={`card__btn ${highlight ? "primary" : "outline"}`}>
          {cta}
        </button>
      )}
    </div>
  );
}

export default Card;
