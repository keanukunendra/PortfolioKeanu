import React, { Component } from "react";
import { Link } from "react-router-dom";

import Card from "../components/Card";
import { listContext } from "../App";

class Catalogue extends Component {
  state = {
    category: "places"
  };

  componentDidMount() {
    const category = this.props.match.params.path_id;
    this.setState({
      category
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.path_id !== this.props.match.params.path_id) {
      const category = this.props.match.params.path_id;
      this.setState({
        category
      });
    }
  }

  render() {
    const category =
      this.state.category === undefined ? "places" : this.state.category;

    return (
      <section id="catalogue">
        <div className="section margin-top margin-bottom">
          <div>
            <h2 className="f2 title">
              {category.replace(/^\w/, c => c.toUpperCase())}
            </h2>
          </div>
          <div className="flex flex-space-between">
            <listContext.Consumer>
              {context =>
                context.list ? (
                  context.list.map(item => {
                    return (
                      <Link
                        to={`/description/${category}/${item.id}`}
                        key={item.id}
                      >
                        <Card
                          title={item.title}
                          desc={item.desc}
                          thumbnail={
                            context.category === "events"
                              ? item.pictureevents[0].picture.url
                              : item.pictureplaces[0].image.url
                          }
                        />
                      </Link>
                    );
                  })
                ) : (
                  <div>Loading Page...</div>
                )
              }
            </listContext.Consumer>
          </div>
        </div>
      </section>
    );
  }
}

export default Catalogue;
