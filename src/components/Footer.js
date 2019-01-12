import React from 'react';
import { NavLink, Link } from 'react-router-dom';

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
        <div className="second-left">
          <Link to="#">Available On<br/><i class='bx bxl-play-store bx-md'></i></Link>
        </div>
        <div className="footer-social">
          <ul>
            <li><a href="https://twitter.com/"> <i class='bx bxl-twitter bx-xs'></i> @BudayakanKrama</a></li>
            <li><a href="https://www.instagram.com/"><i class='bx bxl-instagram bx-xs'></i> @Krama_Budaya</a></li>
            <li><a href="https://facebook.com/"><i class='bx bxl-facebook bx-xs'> </i> Krama Budaya Batam</a></li>
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
