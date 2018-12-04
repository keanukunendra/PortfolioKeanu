import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />

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

export default Home;
