import "./Card.scss";

function Card({ title, description, children }) {
  return (
    <div className="card">
      {title && <h3 className="card__title">{title}</h3>}
      {description && <p className="card__desc">{description}</p>}
      {children && <div className="card__content">{children}</div>}
    </div>
  );
}

export default Card;
