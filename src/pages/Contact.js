import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const Contact = () => {
  return (
    <div>
      <Navbar />
        <div className="img">
            <h1 className="text-img">contact krama</h1>
            <h2>We'd love to hear you shout</h2>
        </div>
        <div className="first-wrap">
            <section id="form">
            <div className="wrap2" >
                <div className="title"> 
                    <p className="detail">Connect with us:<br />For support or any questions <br />
                    Email us at <br /> <a className="link" href="https://binar.co.id/">kedaiglints@gmail.com</a> </p>
                </div>
                <div >
                    <p className="detail2">Krama Yogyakarta<br />Jl. Damai No.89, Wonorejo, Sariharjo, Ngaglik, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581</p>
                </div>
                <div >
                    <p className="detail3">Krama Batam<br />Jl. Hang Lekiu No.KM 2, Sambau, Nongsa, Kota Batam, Kepulauan Riau 29465</p>
                </div>
            </div>
            </section>  
        </div>
        <div className="sec-wrap">
            <div className="wrap-form">
                <h1>Get in Touch</h1>
                <h3>Please fill out the form and we will get connected</h3>
                <form className="contact-form" action="https://formspree.io/kedaiglints@gmail.com" method="POST">
                    <div><input name="name" 
                        className="name" 
                        type="text" 
                        placeholder="Name" />
                    </div>

                    <div><input name="email" 
                        className="name" 
                        type="text" 
                        placeholder="You email address" />
                    </div>

                    <div><textarea name="message"
                        id="message" 
                        cols="50" rows="10" 
                        placeholder="Message">
                        </textarea>
                    </div>

                    <div><button className="btn-submit" type="submit" value="submit">submit</button></div>
                    <input type="hidden" name="_next" value="http://krama-budaya.herokuapp.com/" />
                </form> 
            </div>      
        </div>
      <Footer />
  </div>
  )
}

export default Contact;
