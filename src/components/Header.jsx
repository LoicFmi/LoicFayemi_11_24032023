import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/svg/.orangeLOGO.svg';

function Header() {
  return (
    <React.Fragment>
      <img src={logo} alt="logo Kasa" width={210}></img>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/About">A propos</Link>
        <Link to="/Housing/42">Logements</Link>
      </nav>
    </React.Fragment>
  );
}

export default Header;
