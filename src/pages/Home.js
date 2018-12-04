import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Hero from '../components/Hero'
import axios from 'axios';

class Home extends Component {
  state = {
    cards: []
  }
  
  componentDidMount() {
    axios.get('http://staging-krama.herokuapp.com/places')
      .then(res => {
        this.setState({
          cards: res.data.slice(0, 8)
        })
        console.log(res);
      })
  }

  render() {
    const { cards } = this.state;
    const cardList = cards.length ? (
      cards.map(card => {
        return (
        <Card title={card.title_place} desc={card.desc_place} key={card.id} />
        )
      })
    ) : (
      <div>Loading Page...</div>
    )

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
              {cardList}
            </div>
          </div>
        </div>
      </section>
  
      <Footer />
    </div>
    )
  }

}
  
export default Home;
