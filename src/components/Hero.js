import React, { Component } from 'react';

class Hero extends Component {
  handleClick = (e) => {
    console.log(e.target)
  }

  render() {
    return (
      <section id="hero">
        <div className="section flex flex-center hero-img">
          <div className="hero-text">Travel Like a Local</div>
          <div className="hero-tab-wrapper">
            <div className="hero-tab" onClick={ this.handleClick }>Places</div>
            <div className="hero-tab" onClick={ this.handleClick }>Events</div>
          </div>
        </div>
      </section>
    )
  }
}

export default Hero;
