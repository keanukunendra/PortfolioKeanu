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

import Borobudur1 from '../assets/img/borobudur-1.jpg';
import Borobudur2 from '../assets/img/borobudur-2.jpg';
import Borobudur3 from '../assets/img/borobudur-3.jpg';

class ControlledCarousel extends Component {

  render() {

    const images = [
      {
        original: `${Borobudur1}`,
        thumbnail: 'Borobudur1'
      },
      {
        original: `${Borobudur2}`,
        thumbnail: 'Borobudur2'
      },
      {
        original: `${Borobudur3}`,
        thumbnail: 'Borobudur3'
      }
    ]

    return (
      <ImageGallery items={images} showNav={false} showFullscreenButton={false} showPlayButton={false} autoPlay={true} showThumbnails={false} slideInterval={12000} showBullets={true} />
    );
  }

}

export default ControlledCarousel;

// import React from 'react';
// import axios from 'axios';
// import ImageGallery from 'react-image-gallery';
 
// export default class Slideshow extends React.Component {
//     state = {
//         pictures:[]
//     }
 
//     componentDidMount(){
//         axios.get(`https://staging-monggovest.herokuapp.com/api/v1/sliders`)
//         .then(res => {
//             const pictures = res.data.results;
//             this.setState({pictures:pictures});
//             console.log(pictures);
//         })
//     }   

//     sliderLoop(){
//         let data = this.state.pictures
//         return data.map(e => (
//             {
//                 original: e.url,
//               }
//         ))
//     }
//   render() {
//     if(!this.state.pictures) return null;
 
//     return (
//       <ImageGallery showNav={false} items={this.sliderLoop()} showFullscreenButton={false} showPlayButton={false} autoPlay={true} />
//     );
//   }
 
// }