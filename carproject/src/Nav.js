import React from 'react';
import './Style/Nav.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Nav = () => (
    <div  className="Menu">
    <ul>
        <li className="LogoC">OCQ Cars Sales</li>
        <li>
          <Link to="/Contact">Contact us</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
    </ul>
  </div>
);

export default Nav;