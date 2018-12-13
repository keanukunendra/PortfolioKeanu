import React, { Component } from 'react';
import Card from '../components/Card';
import axios from 'axios';


class Catalogue extends Component {
  state = { 
    cards: []
  }
  
  // function to GET data from API using axios
  fetchData(){
    const category = this.props.match.params.path_id
    console.log(category)
    if (category === undefined) {
      axios.get('https://staging-krama.herokuapp.com/api/v1/places')
      .then(res => {
        this.setState(() => ({
            id: category,
            cards: res.data.slice(0, 8)
          }))
          console.log(res)
        })
      } else {
        axios.get('https://staging-krama.herokuapp.com/api/v1/' + category)
        .then(res => {
          this.setState({
            id: category,
            cards: res.data.slice(0, 8)
          })
          console.log(res)
        })
      }
    }
    
    // GET from API after all the DOM is rendered
    componentDidMount() {
      this.fetchData()  
    }
    
    componentWillMount() {
      this.unlisten = this.props.history.listen((location, action) => {
        console.log("on route change");
        this.fetchData();
      });
    }
    
    componentWillUnmount() {
        this.unlisten();
    }
    
  render(){
    const { cards } = this.state;

    // render element using array
    const cardList = cards.length ? (
      cards.map(card => {
        return (
          // if response is OK and JSON is stored in this.state, which means length > 0
          // {/* <Card title={card.title_place} desc={card.desc_place} key={card.id} /> */}  // use this for real API Krama
          <Card title={card.name} desc={card.email} key={card.id} />  // use this just for testing
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
              {/* render Card List */}
              {cardList}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Catalogue;
