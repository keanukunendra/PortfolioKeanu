import React, { Component } from "react";

class BoxRules extends Component {
  state = {
    hover: false
  };

  hoverOn = i => {
    this.setState({ hover: i });
  };

  hoverOff = () => {
    this.setState({ hover: false });
  };

  render() {
    const { rules } = this.props;
    return (
      <div>
        <div className="box-rules-flex">
          <div className="box-rules">
            <div className="box-rules-title">What you should know</div>
            <div className="icon-flex">
              {rules.map((rule, index) => (
                <i
                  className={rule.img}
                  alt={rule.desc}
                  onMouseOver={() => this.hoverOn(index)}
                  onMouseOut={this.hoverOff}
                  key={index}
                />
              ))}
            </div>

            <div className="icon-rules-line">
              {rules.map((rule, index) => (
                <p key={index}>{this.state.hover === index ? rule.desc : ""}</p>
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


