import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Hero extends Component {
  state = {
    categories: ['places', 'events']
  }

  render() {
    const categoryButton = this.state.categories.map(category => {
      return (
        <Link to={'/home/' + category} key={category}>
          <div className="hero-tab">{category}</div>
        </Link>
      )
    })

    return (
      <section id="hero">
        <div className="section flex flex-center hero-img">
          <div className="hero-text">Travel Like a Local</div>
          <div className="hero-tab-wrapper">
            {categoryButton}
            {/* <div className="hero-tab" onClick={ this.handleClick }>Places</div>
            <div className="hero-tab" onClick={ this.handleClick }>Events</div> */}
          </div>
        </div>
      </section>
    )
  }
}

export default Hero;
