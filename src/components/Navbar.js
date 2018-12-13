import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="section navbar shadow">
      <div className="flex flex-space-between">
        <div className="logo">
          <NavLink to="/">KRAMA</NavLink>
        </div>
        <div className="navigation flex flex-space-between">
        <NavLink to="/" className="menu">Home</NavLink>
          <a href="#About" className="menu">About Us</a>
          <a href="#Contact" className="menu">Contact Us</a>
        </div>
        <div className="search">
          <i className='bx bx-search-alt bx-sm bx-tada'></i>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
