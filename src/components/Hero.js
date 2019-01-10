import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Hero extends Component {
  state = {
    categories: ['places', 'events']
  }

  render() {
    const categoryButton = this.state.categories.map(category => {
      return (
        <NavLink to={'/home/' + category} key={category}>
          <div className="hero-tab">{category}</div>
        </NavLink>
      )
    });

    return (
      <section id="hero">
        <div className="section flex flex-center hero-img">
          <div className="hero-text">Travel Like a Local</div>
          <div className="hero-tab-wrapper">
            {categoryButton}
          </div>
        </div>
      </section>
    )
  }
}

export default Hero;
