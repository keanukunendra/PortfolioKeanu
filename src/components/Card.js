import React, { Component } from 'react';
import CardImage from '../assets/img/jembatan-barelang.png';

class Card extends Component {
  render() {
    return (
      <div className="card shadow f5">
        <img className="card-img-top" src={CardImage} alt="Jembatan Balerang" />
        <div className="card-body">
          <h5 className="card-title">Jembatan Balerang jaya maju mundur</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
          Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <div className="card-link"><a href="#description">Read More</a></div>
        </div>
      </div>
    )
  }
}

export default Card;
