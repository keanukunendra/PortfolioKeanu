import React, { Component } from "react";
import axios from "axios";

class BoxRules extends Component {
  state = {
    iconRules: [],
    hover: false
  };

  componentDidMount() {
    axios.get("http://staging-krama.herokuapp.com/api/v1/rules").then(res => {
      const iconRules = res.data.slice(2, 6);
      this.setState({ iconRules });
    });
  }

  hoverOn = i => {
    this.setState({ hover: i });
  };

  hoverOff = () => {
    this.setState({ hover: false });
  };

  render() {
    const { iconRules } = this.state;
    return (
      <div>
        <div className="box-rules-flex">
          <div className="box-rules">
            <div className="box-rules-title">What you should know</div>
            <div className="icon-flex">
              {iconRules.map((iconRule, index) => (
                <i
                  className={iconRule.img}
                  alt={iconRule.desc}
                  onMouseOver={() => this.hoverOn(index)}
                  onMouseOut={this.hoverOff}
                  key={index}
                />
              ))}
            </div>

            <div className="icon-rules-line">
              {iconRules.map((iconRule, index) => (
                <p key={index}>
                  {this.state.hover === index ? iconRule.desc : ""}
                </p>
              ))}
            </div>

            <p>
              {this.state.hover === false
                ? "Hover the icon to see the rules"
                : ""}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default BoxRules;
