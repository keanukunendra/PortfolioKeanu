import React from 'react';
<<<<<<< HEAD
import { NavLink } from 'react-router-dom';
=======
import { Link, NavLink } from 'react-router-dom';
>>>>>>> afca86df62761d3b9cd2d2c675368d5d7e11134b

const Navbar = () => {
  return (
    <div className="section navbar shadow">
      <div className="flex flex-space-between">
        <div className="logo">
<<<<<<< HEAD
          <NavLink to="/">KRAMA</NavLink>
        </div>
        <div className="navigation flex flex-space-between">
        <NavLink to="/" className="menu">Home</NavLink>
          <a href="#About" className="menu">About Us</a>
          <a href="#Contact" className="menu">Contact Us</a>
=======
          <Link to='/'>KRAMA</Link>
        </div>
        <div className="navigation flex flex-space-between">
          <NavLink to='/' className="menu">Home</NavLink>
          <NavLink to='/about' className="menu">About</NavLink>
>>>>>>> afca86df62761d3b9cd2d2c675368d5d7e11134b
        </div>
        <div className="search">
          <i className='bx bx-search-alt bx-sm bx-tada'></i>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
