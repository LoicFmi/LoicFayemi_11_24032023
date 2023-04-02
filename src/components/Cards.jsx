function Card({ title, cover }) {
  return (
    <div className="card">
      <img className="card__cover" src={cover} alt="logement" />
      <span className="card__title">{title}</span>
    </div>
  );
}

export default Card;
