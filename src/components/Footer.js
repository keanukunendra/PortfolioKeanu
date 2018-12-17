import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="section flex flex-space-between footer">
        <div className="footer-left">
          <ul>
            <li className="logo-krama"><NavLink to="/">KRAMA</NavLink></li>
            <li className="supported">Supported by Glints Academy and Binar</li>
          </ul>
        </div>
        <div className="footer-right">
          <ul>
            <li>
              <NavLink to="/" className="site-map">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="site-map">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="site-map">Contact Us</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
