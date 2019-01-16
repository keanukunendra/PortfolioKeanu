import React, { Component } from "react";
import { Route } from "react-router-dom";

import Hero from "../components/Hero";
import Catalogue from "../components/Catalogue";

class Home extends Component {
  render() {
    const { path } = this.props.match;

    return (
      <div>
        <Hero />
        <Route exact path={path} component={Catalogue} />
        <Route path={path + "/:path_id"} component={Catalogue} />
      </div>
    );
  }
}

export default Home;
