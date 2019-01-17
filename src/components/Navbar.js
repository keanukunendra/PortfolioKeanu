import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Navbar extends Component {
  state = {
    isOpen: false
  };

  toggleMenu = () => {
    const isOpen = !this.state.isOpen;
    this.setState({
      isOpen
    });
  };
  render() {
    return (
      <div className="navbar shadow">
        <div className="logo">
          <Link to="/">KRAMA</Link>
          <div className="humberger" onClick={this.toggleMenu}>
            <span />
            <span />
            <span />
          </div>
        </div>
        <div
          className={
            "navigation flex flex-space-between " +
            (this.state.isOpen ? null : "hidden")
          }
        >
          <NavLink to="/home" className="menu" onClick={this.toggleMenu}>
            Home
          </NavLink>
          <NavLink to="/about" className="menu" onClick={this.toggleMenu}>
            About
          </NavLink>
          <NavLink to="/contact" className="menu" onClick={this.toggleMenu}>
            Contact
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Navbar;
