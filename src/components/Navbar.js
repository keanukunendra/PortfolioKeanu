import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="section navbar shadow">
      <div class="nav">
        <div class="nav-header">
          <div class="nav-title">
          <Link to="/">KRAMA</Link>
          </div>
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <input type="checkbox" id="nav-check"/>
        <div class="nav-links ">
          <NavLink to="/home" className="menu">
          Home
          </NavLink>
          <NavLink to="/about" className="menu">
          About Us
          </NavLink>
          <NavLink to="/contact" className="menu">
          Contact Us
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;