import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Catalogue from '../components/Catalogue';
import Footer from '../components/Footer';

class Home extends Component {
  render() {
    return (
    <div>
      <Navbar />
      <Hero />
      <Catalogue />
      <Footer />
    </div>
    )
  }

}
  
export default Home;
