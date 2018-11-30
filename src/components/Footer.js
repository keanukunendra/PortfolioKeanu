import React from 'react';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="section flex flex-space-between footer">
        <div className="footer-left">
          <ul>
            <li className="logo-krama"><a href="#Homepage">KRAMA</a></li>
            <li className="supported">Supported by Glints Academy and Binar</li>
          </ul>
        </div>
        <div className="footer-right">
          <ul>
            <li><a href="#Homepage">Home</a></li>
            <li><a href="#LoginAdmin">Login Admin</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#ContactUs">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
