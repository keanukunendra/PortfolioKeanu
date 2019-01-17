import React, { Component } from "react";
import ImageGallery from "react-image-gallery";

class ControlledCarousel extends Component {
  render() {
    const { pictureplaces } = this.props;

    const imageLoop = pictureplaces.map(e => ({
      original: e.image.url
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
