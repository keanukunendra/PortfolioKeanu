import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import { Card, CardImg, CardTitle, CardSubtitle, CardBody } from 'reactstrap';
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
      
      <section  className="header-img flex flex-center">
        <div className="quote-about">“ETIQUETTE MEANS BEHAVING YOURSELF A LITTLE BETTER THAN IS ABSOLUTELY ESSENTIAL" - WILL CUPPY</div>
      </section>
        
      <div className="head margin margin-top margin-bottom">
        <div className="aboutkrama">
          <p className="header-aboutus">About Us</p>
          <div className="flex flex-center">
            <p className="description">What is Krama? Krama is a web-based application where you can access any gadget. <br></br>Why does Krama need to be made? Because, we need to know what prohibitions are in that place. So, we can't be careless in anyway or wear clothes carelessly.
            We must be careful when we are in another city, because we don't know what prohibitions there are in the city. So, we don't have problems when doing something or wearing certain clothes.
            Therefore, Krama will be very useful for newcomers who are on vacation or settling in a new city.</p>
          </div>
        </div>

        <div className="cardkrama flex flex-center">
          <div className="box-icon">
            <div className="icon-etiquette">
              <img src={Image1} alt="smile" />
            </div>
            <div className="icontext">
              <p className="title">Etiquette</p>
              <hr/>
              <p className="descrip">KRAMA is derived from the word Tata Krama which means the etiquette or manners in a place. Etiquette is important for those of us who want to go somewhere.</p>
            </div>
          </div>

          <div className="box-icon">
            <div className="icon-prohib">
              <img src={Image2} alt="smile" />
            </div>
            <div className="icontext">
              <p className="title">Prohibitions</p>
              <hr/>
              <p className="descrip">We will give you what you should know about etiquette or manners in every culture places in Batam.</p>
            </div>
          </div>

          <div className="box-icon">
            <div className="icon-explore">
              <img src={Image3} alt="smile" />
            </div>
            <div className="icontext">
              <p className="title">Explore</p>
              <hr/>
              <p className="descrip">You can also explore all culture place and event around Batam. Because, Batam has many tourist attractions that can be visited</p>
            </div>
          </div>
        </div>

        <p className="header-team">Our Team</p>
        <div className="ourprofile flex flex-center">
          <div className="cardprofile">
            <Card className="card1 profile">
              <CardImg top width="100%" src={Image4} alt="Miftah" />
              <CardBody className="cardbody">
                <CardTitle><br></br>Miftah MD</CardTitle>
                <CardSubtitle>BackEnd</CardSubtitle>
              </CardBody>
            </Card>
          </div>

          <div className="cardprofile">
              <Card className="card1 profile">
                <CardImg top width="100%" src={Image5} alt="Miftah" />
                <CardBody className="cardbody">
                  <CardTitle><br></br>Eko Satria</CardTitle>
                  <CardSubtitle>BackEnd</CardSubtitle>
                </CardBody>
              </Card>
            </div>

            <div className="cardprofile">
              <Card className="card1 profile">
                <CardImg top width="100%" src={Image6} alt="Miftah" />
                <CardBody className="cardbody">
                  <CardTitle><br></br>Husnul Fadhilah</CardTitle>
                  <CardSubtitle>BackEnd</CardSubtitle>
                </CardBody>
              </Card>
            </div>

          <div className="cardprofile">
              <Card className="card1 profile">
                <CardImg top width="100%" src={Image7} alt="Miftah" />
                <CardBody className="cardbody">
                  <CardTitle><br></br>Fadli Ramadhan</CardTitle>
                  <CardSubtitle>BackEnd</CardSubtitle>
                </CardBody>
              </Card>
            </div>

            <div className="cardprofile">
              <Card className="card1 profile">
                <CardImg top width="100%" src={Image8} alt="Miftah" />
                <CardBody className="cardbody">
                  <CardTitle><br></br>Rizal Fahmi</CardTitle>
                  <CardSubtitle>BackEnd</CardSubtitle>
                </CardBody>
              </Card>
            </div>
          
            <div className="cardprofile">
              <Card className="card1 profile">
                <CardImg top width="100%" src={Image9} alt="Miftah" />
                <CardBody className="cardbody">
                  <CardTitle><br></br>Yuhanas Yulianto</CardTitle>
                  <CardSubtitle>FrontEnd</CardSubtitle>
                </CardBody>
              </Card>
            </div>

          <div className="cardprofile">
              <Card className="card1 profile">
                <CardImg top width="100%" src={Image10} alt="Miftah" />
                <CardBody className="cardbody">
                  <CardTitle><br></br>Irsal Firansyah</CardTitle>
                  <CardSubtitle>FrontEnd</CardSubtitle>
                </CardBody>
              </Card>
            </div>

            <div className="cardprofile">
              <Card className="card1 profile">
                <CardImg top width="100%" src={Image11} alt="Miftah" />
                <CardBody className="cardbody">
                  <CardTitle><br></br>Tri Rahayu</CardTitle>
                  <CardSubtitle>FrontEnd</CardSubtitle>
                </CardBody>
              </Card>
            </div>

            <div className="cardprofile">
              <Card className="card1 profile">
                <CardImg top width="100%" src={Image12} alt="Miftah" />
                <CardBody className="cardbody">
                  <CardTitle><br></br>Anas Aditya</CardTitle>
                  <CardSubtitle>FrontEnd</CardSubtitle>
                </CardBody>
              </Card>
            </div>
          
            <div className="cardprofile">
              <Card className="card1 profile">
                <CardImg top width="100%" src={Image13} alt="Miftah" />
                <CardBody className="cardbody">
                  <CardTitle><br></br>Keanu Kunendra</CardTitle>
                  <CardSubtitle>FrontEnd</CardSubtitle>
                </CardBody>
              </Card>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;