import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/svg/.orangeLOGO.svg';

function Header() {
  const location = useLocation();
  return (
    <div className="header">
      <img
        className="header__logo"
        src={logo}
        alt="logo Kasa"
        width={210}
      ></img>
      <nav className="header__nav">
        <Link
          className={location.pathname === '/' ? 'active' : 'nav-link'}
          to="/"
        >
          Accueil
        </Link>
        <Link
          className={location.pathname === '/About' ? 'active' : 'nav-link'}
          to="/About"
        >
          A Propos
        </Link>
      </nav>
    </div>
  );
}

export default Header;
