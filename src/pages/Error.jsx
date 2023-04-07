import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="notfound">
      <h1 className="notfound__404">404</h1>
      <p className="notfound__text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className="notfound__link" to={'/'}>
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default NotFound;
