import React, {Component} from 'react';

//using mailgun and emailjs libary to get the feedback backend-less
//check public/index.html to see the dependency script
class ContactForm extends Component {
  state = {
      nama:'',
      email: '',
      feedback: '',
    

      formSubmitted: false
  };

  handleSubmit = this.handleSubmit.bind(this);
  handleChangeNama = this.handleChangeNama.bind(this);
  handleChangeEmail = this.handleChangeEmail.bind(this);
  handleChangeFeedback = this.handleChangeFeedback.bind(this);
  

  static sender = 'sender@example.com';

  handleChangeNama(event) {
      this.setState({
        nama: event.target.value
      });
  }
  handleChangeEmail(event) {
      this.setState({
        email: event.target.value
      });
  }
  handleChangeFeedback(event) {
     ;
      this.setState({
        feedback: event.target.value
      });
      // console.log(this.state)
  }
  
  handleSubmit(event) {
      event.preventDefault();
    
      this.sendFeedback(      
          'senderform',
          this.state.nama,
          this.state.email,
          'kramabudaya.batam@gmail.com',
          this.state.feedback
          
      );
    
        this.setState({
          formSubmitted: true
        });
        this.formReset() //calling the function of reset form
  }

  sendFeedback(templateId, senderName, senderEmail, receiverEmail, feedback) {  //set the feedback contain as the library we have create 
      window.emailjs
          .send('gmail', templateId, { //this function order should be same as the libary we've set
              senderName,
              senderEmail,
              receiverEmail,
              feedback
          })
          .then(res => {
              this.setState({
                  formEmailSent: true
              });
          })
          .catch(err => console.error('Failed to send feedback. Error: ', err));
  }

  formReset(){  //to reset the form after submitted
    this.setState({
      nama:'',
      email:'',
      feedback:''
    })
  }

render() {
 const submitted = <p>Your feedback has successfully submitted!</p>
  return (
    <div>
      <div className="img">
        <h1 className="text-img">contact krama</h1>
        <h2>We'd love to hear you shout</h2>
      </div>
      <div className="flex">
        <section id="form">
          <div className="wrap2" >
            <div className="title"> 
              <p className="detail">Connect with us:<br />For support or any questions <br /> do not hesitate <br />
              Email us at <br /> <a className="link" href="https://gmail.com">kramabudaya.batam@gmail.com</a> </p>
            </div>
            <div >
              <p className="detail2">Krama Yogyakarta<br />Jl. Damai No.89, Wonorejo, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581</p>
            </div>
            <div >
              <p className="detail3">Krama Batam<br />Jl. Hang Lekiu No.KM 2, Sambau, Nongsa, Kota Batam, Kepulauan Riau 29465</p>
            </div>
          </div>
        </section>  
      </div>
      <div className="section margin-top margin-bottom">
        <div className="wrap-form">
          <h1>Get in Touch</h1>
          <h3>Please fill out the form and we will get connected</h3>
          <form className="contact-form" onSubmit={this.handleSubmit}>
            <div>
              <input name="name" 
                value={this.state.nama}
                className="name" 
                type="text" 
                placeholder="Name"
                required
                onChange={(e) => this.handleChangeNama(e)} 
              />
            </div>
            <div>
              <input name="email" 
                value={this.state.email}
                className="name" 
                type="text" 
                placeholder="You email address"
                required
                onChange={(e) => this.handleChangeEmail(e)} 
              />
            </div>
            <div>
              <textarea name="message"
                value={this.state.feedback}
                id="message" 
                cols="50" rows="10" 
                placeholder="Message" 
                required
                onChange={(e) => this.handleChangeFeedback(e)}
              />
            </div>
            <div><br/>
              {this.state.formSubmitted ? submitted : null}   {/* setting the condition of submiting the form */}
              <button className="btn-submit" type="submit" value="submit">submit</button>
            </div>
            <input type="hidden" name="_next" value="http://krama-budaya.herokuapp.com/" />
          </form> 
        </div>      
      </div>
    </div>
  )
}
}

export default ContactForm;
