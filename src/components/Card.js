import React, { Component } from "react";
import CardImage from "../assets/img/jembatan-barelang.png";

class Card extends Component {
  render() {
    return (
      <div className="card shadow f5">
        <img className="card-img-top" src={CardImage} alt="Jembatan Balerang" />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.desc}</p>
          {/* <div className="card-link"><a href="#description">Read More</a></div> */}
        </div>
      </div>
    );
  }
}

export default Card;
