import React from "react";
import { NavLink, Link } from "react-router-dom";

import googlePlay from "../assets/img/google-play-grey.png";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="section flex flex-space-between footer">
        <div className="footer-left">
          <ul>
            <li className="logo-krama">
              <NavLink to="/">KRAMA</NavLink>
            </li>
            <li className="supported">Supported by Glints Academy and Binar</li>
          </ul>
        </div>
        <div className="footer-right">
          <ul>
            <li>
              <NavLink to="/" activeClassName="site-map">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="site-map">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/maps" activeClassName="site-map">
                Maps
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="site-map">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <ul>
            <li>
              <a href="https://twitter.com/">
                {" "}
                <i className="bx bxl-twitter bx-xs i-space" /> @BudayakanKrama
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <i className="bx bxl-instagram bx-xs i-space" /> @Krama_Budaya
              </a>
            </li>
            <li>
              <a href="https://facebook.com/">
                <i className="bx bxl-facebook bx-xs i-space"> </i> Krama Budaya
                Batam
              </a>
            </li>
          </ul>
        </div>
        <div>
          <Link to="#">
            <img
              className="google-play"
              src={googlePlay}
              alt="playstore-logo"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
