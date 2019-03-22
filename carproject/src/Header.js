import React, { Fragment } from 'react';
import Logo from './Img/Principal.jpg';

const Header = () => (
      <div className = "Header">
        <img src={Logo} alt="Imagen principal" style={{width: '100%'}}/>
      </div>
);

export default Header;
