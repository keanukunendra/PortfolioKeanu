import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="section navbar shadow">
      <div className="flex flex-space-between">
        <div className="logo">
          <Link to="/">KRAMA</Link>
        </div>
        <div className="navigation flex flex-space-between">
          <NavLink to="/home" className="menu">
            Home
          </NavLink>
          <NavLink to="/about" className="menu">
            About
          </NavLink>
          <NavLink to="/contact" className="menu">
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
