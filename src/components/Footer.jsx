import React from 'react';
import logo from '../assets/svg/.whiteLOGO.svg';

function Footer() {
  return (
    <div className="footer">
      <img
        className="footer__logo"
        src={logo}
        alt="logo Kasa"
        width={122}
      ></img>
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
