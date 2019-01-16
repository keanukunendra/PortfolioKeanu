import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { listContext } from "../App";

class Hero extends Component {
  state = {
    categories: ["places", "events"]
  };

  render() {
    const categoryButton = this.state.categories.map(category => {
      return (
        <listContext.Consumer key={category}>
          {context => (
            <NavLink
              className="hero-tab"
              to={"/home/" + category}
              onClick={() => context.updateCategory(category)}
            >
              <div>{category}</div>
            </NavLink>
          )}
        </listContext.Consumer>
      );
    });

    return (
      <section id="hero">
        <div className="section flex flex-center hero-img">
          <div className="hero-text">Travel Like a Local</div>
          <div className="hero-tab-wrapper">{categoryButton}</div>
        </div>
      </section>
    );
  }
}

export default Hero;
