import React from 'react';
import CardImage from './assets/img/jembatan-barelang.png'

const App = () => {
  return (
    <div>
      <div className="section navbar shadow">
        <div className="flex flex-space-between">
          <div className="logo">
            <a href="#Logo">KRAMA</a>
          </div>
          <div className="navigation flex flex-space-between">
            <a href="#Home" className="menu">Home</a>
            <a href="#About" className="menu">About Us</a>
            <a href="#Contact" className="menu">Contact Us</a>
          </div>
          <div className="search">
            <i className='bx bx-search-alt bx-sm bx-tada'></i>
          </div>
        </div>
      </div>

      <section id="hero">
        <div className="section flex flex-center hero-img">
          <div className="hero-text">Travel Like a Local</div>
          <div className="hero-tab-wrapper">
            <div className="hero-tab">Places</div>
            <div className="hero-tab">Events</div>
          </div>
        </div>
      </section>

      <section id="catalogue">
        <div className='section margin-top margin-bottom'>
          <div className="container">
            <div>
            <h2 className="f2 title">Destination</h2>
            </div>
            <div className="container flex flex-space-between">
              <div className="card shadow f5">
                <img className="card-img-top" src={CardImage} alt="Jembatan Balerang" />
                <div className="card-body">
                  <h5 className="card-title">Jembatan Balerang jaya maju mundur</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <div className="card-link"><a href="#description">Read More</a></div>
                </div>
              </div>
              <div className="card shadow f5">
                <img className="card-img-top" src={CardImage} alt="Jembatan Balerang" />
                <div className="card-body">
                  <h5 className="card-title">Jembatan Balerang jaya maju mundur</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <div className="card-link"><a href="#description">Read More</a></div>
                </div>
              </div>
              <div className="card shadow f5">
                <img className="card-img-top" src={CardImage} alt="Jembatan Balerang" />
                <div className="card-body">
                  <h5 className="card-title">Jembatan Balerang jaya maju mundur</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <div className="card-link"><a href="#description">Read More</a></div>
                </div>
              </div>
              <div className="card shadow f5">
                <img className="card-img-top" src={CardImage} alt="Jembatan Balerang" />
                <div className="card-body">
                  <h5 className="card-title">Jembatan Balerang jaya maju mundur</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <div className="card-link"><a href="#description">Read More</a></div>
                </div>
              </div>
              <div className="card shadow f5">
                <img className="card-img-top" src={CardImage} alt="Jembatan Balerang" />
                <div className="card-body">
                  <h5 className="card-title">Jembatan Balerang jaya maju mundur</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <div className="card-link"><a href="#description">Read More</a></div>
                </div>
              </div>
              <div className="card shadow f5">
                <img className="card-img-top" src={CardImage} alt="Jembatan Balerang" />
                <div className="card-body">
                  <h5 className="card-title">Jembatan Balerang jaya maju mundur</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <div className="card-link"><a href="#description">Read More</a></div>
                </div>
              </div>
              <div className="card shadow f5">
                <img className="card-img-top" src={CardImage} alt="Jembatan Balerang" />
                <div className="card-body">
                  <h5 className="card-title">Jembatan Balerang jaya maju mundur</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <div className="card-link"><a href="#description">Read More</a></div>
                </div>
              </div>
              <div className="card shadow f5">
                <img className="card-img-top" src={CardImage} alt="Jembatan Balerang" />
                <div className="card-body">
                  <h5 className="card-title">Jembatan Balerang jaya maju mundur</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <div className="card-link"><a href="#description">Read More</a></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <footer id="footer">
        <div className="section flex flex-space-between footer">
          <div className="footer-left">
            <ul>
              <li className="logo-krama"><a href="#Homepage">KRAMA</a></li>
              <li className="supported">Supported by Glints Academy and Binar</li>
            </ul>
          </div>
          <div className="footer-right">
            <ul>
              <li><a href="#Homepage">Home</a></li>
              <li><a href="#LoginAdmin">Login Admin</a></li>
              <li><a href="#About">About</a></li>
              <li><a href="#ContactUs">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </footer>

  </div>
  )
}

export default App;
