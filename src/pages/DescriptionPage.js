import React, { Component } from "react";
import BoxRules from "../components/BoxRules";
import ControlledCarousel from "../components/ControlledCarousel";
import { listContext } from "../App";

class DescriptionPage extends Component {
  render() {
    const id = this.props.match.params.item_id;

    return (
      <listContext.Consumer>
        {context =>
          context.list ? (
            context.list.map(data =>
              data.id.toString() === id ? (
                <div className="page-description-flex" key={id}>
                  <section className="description-flex">
                    <div className="section content-description">
                      <div className="f3 pd-destination">Destination</div>
                      <div className="f2 pd-place">{data.title}</div>
                      <div className="f4 pd-address">
                        <i className="bx-fw bx bx-navigation" />
                        {data.address}
                      </div>
                    </div>
                  </section>

                  <section>
                    <ControlledCarousel
                      category={context.category}
                      pictures={
                        context.category === "places"
                          ? data.pictureplaces
                          : data.pictureevents
                      }
                    />
                    <div className="boxrules-pd">
                      <BoxRules rules={data.rules} />
                    </div>
                  </section>

                  <section className="section pd-story">
                    <div className="pd-story-title">Story</div>
                    <div className="pd-story-desc">{data.desc}</div>
                  </section>
                </div>
              ) : null
            )
          ) : (
            <div className="section page-description-flex loading-page f4">
              Loading Page...
            </div>
          )
        }
      </listContext.Consumer>
    );
  }
}

export default DescriptionPage;
