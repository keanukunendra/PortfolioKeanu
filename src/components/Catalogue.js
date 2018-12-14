import React, { Component } from 'react';
import Card from '../components/Card';
import axios from 'axios';


class Catalogue extends Component {
  state = { 
    cards: []
  }
  
  // GET from API after all the DOM is rendered
  componentDidMount() {
    console.log('component did mount');
    console.log('-------------------')

    const category = this.props.match.params.path_id;
    axios.get('https://staging-krama.herokuapp.com/api/v1/places')
    .then(res => {
      this.setState(() => ({
          id: category,
          cards: res.data.slice(0, 8)
        }))
      });
  }
    
  render(){
    console.log('render');
    const { cards } = this.state;

    // render element using array
    const cardList = cards.length ? (
      cards.map(card => {
        return (
          // if response is OK and JSON is stored in this.state, which means length > 0
          <Card title={card.title} desc={card.desc} key={card.id} />
        )
      })
    ) : (
      // if response is error show this message instead
      <div>Loading Page...</div>
    )

    return (
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
    )
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('component did update');
    console.log('-------------------')
    if (prevProps.match.params.path_id !== this.props.match.params.path_id) {
      const category = this.props.match.params.path_id;
      axios.get('https://staging-krama.herokuapp.com/api/v1/' + category)
      .then(res => {
        this.setState({
          id: category,
          cards: res.data.slice(0, 8)
        })
      })
    }
  }
}

export default Catalogue;
