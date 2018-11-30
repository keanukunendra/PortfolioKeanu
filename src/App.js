import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Card from './components/Card';


const App = () => {
  return (
    <div>
      <Navbar />
      <section id="hero">
        <div className="section flex flex-center hero-img">
          <div className="hero-text">Travel Like a Local</div>
          <div className="hero-tab-wrapper">
            <div className="hero-tab">Places</div>
            <div className="hero-tab">Events</div>
          </div>
        </div>
      </section>

      <section id="catalogue">
        <div className='section margin-top margin-bottom'>
          <div className="container">
            <div>
            <h2 className="f2 title">Destination</h2>
            </div>
            <div className="container flex flex-space-between">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </section>

      <Footer />
  </div>
  )
}

export default App;
