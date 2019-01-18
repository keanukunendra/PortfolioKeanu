import React, { Component } from "react";
import ImageGallery from "react-image-gallery";

class ControlledCarousel extends Component {
  render() {
    const { category, pictures } = this.props;

    const imageLoop = pictures.map(e => ({
      original: category === "places" ? e.image.url : e.picture.url
    }));

    return (
      <div>
        <ImageGallery
          items={imageLoop}
          showNav={false}
          showFullscreenButton={false}
          showPlayButton={false}
          autoPlay={true}
          showThumbnails={false}
          slideInterval={12000}
          showBullets={true}
        />
      </div>
    );
  }
}

export default ControlledCarousel;
