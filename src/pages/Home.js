import React, { Component } from 'react';
import Hero from '../components/Hero';
import Catalogue from '../components/Catalogue';
import { Route } from 'react-router-dom';

class Home extends Component {
  render() {
    const { path } = this.props.match;

    return (
        <div>
          <Hero />
          <Route path='/:path_id' component={Catalogue} />            
        </div>
    )
  }

}
  
export default Home;
