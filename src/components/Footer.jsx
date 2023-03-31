import React from 'react';
import logo from '../assets/svg/.whiteLOGO.svg';

function Footer() {
  return (
    <React.Fragment>
      <img src={logo} alt="logo Kasa" width={122}></img>
      <p>© 2020 Kasa. All rights reserved</p>
    </React.Fragment>
  );
}

export default Footer;
