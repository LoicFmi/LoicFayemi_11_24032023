import { Link } from 'react-router-dom';

function Card({ id, title, cover }) {
  return (
    <Link className="card" to={`/housing/${id}`}>
      <img className="card__cover" src={cover} alt={title} />
      <p className="card__title">{title}</p>
    </Link>
  );
}

export default Card;
