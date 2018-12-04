import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image1 from '../assets/img/hand.svg';
import Image2 from '../assets/img/nocam.svg';
import Image3 from '../assets/img/place.svg';
import Image4 from '../assets/img/miftah.jpg';
import Image5 from '../assets/img/eko.jpg';
import Image6 from '../assets/img/husnul.jpg';
import Image7 from '../assets/img/fadli.jpg';
import Image8 from '../assets/img/rizal.jpg';
import Image9 from '../assets/img/yuhanas.jpg';
import Image10 from '../assets/img/irsal.jpg';
import Image11 from '../assets/img/tetra.jpg';
import Image12 from '../assets/img/anas.jpg';
import Image13 from '../assets/img/keanu.jpg';

const AboutUs = () => {
    return(

      <div>
      
        <Navbar />

        <section id="hero" className="flex flex-center">
          <div className="quote-about">“ETIQUETTE MEANS BEHAVING YOURSELF A LITTLE BETTER THAN IS ABSOLUTELY ESSENTIAL" - WILL CUPPY</div>
        </section>
        
        <div className="head margin margin-top margin-bottom">

          <p className="header">About Us</p>
          <br/>
          <div className="flex flex-center">
            <p className="description">Why does Krama need to be made? Because, we need to know what prohibitions are in that place. So, we can't be careless in anyway or wear clothes carelessly.</p>
          </div>

          <div className="smile flex flex-space-between">
            <div className="img-box flex flex-center">
              <img src={Image1} alt="smile" />
            </div>
            <p>KRAMA is derived from the word Tata Krama which means the etiquette or manners in a place. Etiquette is important for those of us who want to go somewhere.</p>
          </div>

          <div className="smile flex flex-space-between">
            <div className="img-box flex flex-center">
              <img src={Image2} alt="smile" />
            </div>
            <p>We’ll give you what you should know about etiquette or manners in every culture places in Batam.</p>
          </div>

          <div className="smile flex flex-space-between">
            <div className="img-box flex flex-center">
              <img src={Image3} alt="smile" />
            </div>
            <p>You can also explore all culture place and event around Batam.</p>
          </div>

          <div className="profile flex flex-center">
            <img src={Image4} alt="profile"/>
            <img src={Image5} alt="profile"/>
            <img src={Image6} alt="profile"/>
            <img src={Image7} alt="profile"/>
            <img src={Image8} alt="profile"/>
            <img src={Image9} alt="profile"/>
            <img src={Image10} alt="profile"/>
            <img src={Image11} alt="profile"/>
            <img src={Image12} alt="profile"/>
            <img src={Image13} alt="profile"/>
          </div>

        </div>

        <Footer />

      </div>
    )
}

export default AboutUs;