// import React, { Component } from 'react';
// import { Carousel } from 'react-bootstrap';

// import Borobudur1 from '../assets/img/borobudur-1.jpg';
// import Borobudur2 from '../assets/img/borobudur-2.jpg';
// import Borobudur3 from '../assets/img/borobudur-3.jpg';

// class ControlledCarousel extends Component {
//   constructor(props, context) {
//     super(props, context);

//     this.handleSelect = this.handleSelect.bind(this);

//     this.state = {
//       index: 0,
//       direction: null
//     };
//   }

//   handleSelect(selectedIndex, e) {
//     this.setState({
//       index: selectedIndex,
//       direction: e.direction
//     });
//   }

//   render() {
//     const { index, direction } = this.state;

//     return (
//       <Carousel
//         activeIndex={index}
//         direction={direction}
//         onSelect={this.handleSelect}>
//         <Carousel.Item>
//           <img className="img-pd" alt="Borobudur1" src={Borobudur1} />
//         </Carousel.Item>
//         <Carousel.Item>
//           <img className="img-pd" alt="Borobudur2" src={Borobudur2} />
//         </Carousel.Item>
//         <Carousel.Item>
//           <img className="img-pd" alt="Borobudur3" src={Borobudur3} />
//         </Carousel.Item>
//       </Carousel>
//     );
//   }
// }

// export default ControlledCarousel;

import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

// import Borobudur1 from '../assets/img/borobudur-1.jpg';
// import Borobudur2 from '../assets/img/borobudur-2.jpg';
// import Borobudur3 from '../assets/img/borobudur-3.jpg';

class ControlledCarousel extends Component {

  render() {
    const {pictureplaces} = this.props;

    const imageLoop = pictureplaces.map (e => ({
      original: e.image.url
    })) 

    return (
      <div>
        
        <ImageGallery items={imageLoop} showNav={false} showFullscreenButton={false} showPlayButton={false} autoPlay={true} showThumbnails={false} slideInterval={12000} showBullets={true} />
       
      </div>
    );
  }

}

export default ControlledCarousel;
