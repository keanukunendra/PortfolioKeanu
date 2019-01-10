import React, { Component } from "react";
import axios from "axios";

import Card from "../components/Card";
import { Link } from "react-router-dom";

class Catalogue extends Component {
  state = {
    cards: []
  };

  // GET from API after all the DOM is rendered
  componentDidMount() {
    const category = this.props.match.params.path_id;
    axios.get("https://staging-krama.herokuapp.com/api/v1/places").then(res => {
      this.setState(() => ({
        id: category,
        cards: res.data.slice(0, 8)
      }));
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.match.params.path_id !== this.props.match.params.path_id) {
      const category = this.props.match.params.path_id;
      axios
        .get("https://staging-krama.herokuapp.com/api/v1/" + category)
        .then(res => {
          this.setState({
            id: category,
            cards: res.data.slice(0, 8)
          });
        });
    }
  }

  render() {
    const { cards } = this.state;
    const category = this.state.id === undefined ? "places" : this.state.id;

    // render element using array
    const cardList = cards.length ? (
      cards.map(card => {
        return (
          // if response is OK and JSON is stored in this.state, which means length > 0
          <Link to={`/description/${category}/${card.id}`} key={card.id}>
            <Card title={card.title} desc={card.desc} />
          </Link>
        );
      })
    ) : (
      // if response is error show this message instead
      <div>Loading Page...</div>
    );

    return (
      <section id="catalogue">
        <div className="section margin-top margin-bottom">
          <div className="container">
            <div>
              <h2 className="f2 title">Destination</h2>
            </div>
            <div className="container flex flex-space-between">{cardList}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Catalogue;
