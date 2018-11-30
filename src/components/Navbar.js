import React from 'react';

const Navbar = () => {
  return (
    <div className="section navbar shadow">
      <div className="flex flex-space-between">
        <div className="logo">
          <a href="#Logo">KRAMA</a>
        </div>
        <div className="navigation flex flex-space-between">
          <a href="#Home" className="menu">Home</a>
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
