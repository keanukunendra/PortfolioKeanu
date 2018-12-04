import React, { Component } from 'react';

class Hero extends Component {
  handleClick = () => {

  }

  render() {
    return (
      <section id="hero">
        <div className="section flex flex-center hero-img">
          <div className="hero-text">Travel Like a Local</div>
          <div className="hero-tab-wrapper">
            <div className="hero-tab">Places</div>
            <div className="hero-tab">Events</div>
          </div>
        </div>
      </section>
    )
  }
}

export default Hero;
