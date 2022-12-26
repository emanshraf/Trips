import "./contact.scss";
import Navbar from "../../components/supNavbar/Navbarsub";
import Footer from "../../components/footer/Footer";
import Copyright from "../../components/copyright/Copyright";
import {  useRef, useState } from "react";
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [message, setMessage] = useState(false);
  
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gkk2e8q', 'template_g8fq5wq', form.current, '0ZUbmrjIYGt7R9MOj')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }
    return (
      <div>
       
       <Navbar/>
      
       <div className="travelMain">
        <h3 className="title">Contact with us</h3>
       </div>

       <div className="info">
       <div className="info-item">
            <img src="/img/address.png" className="icon" alt=""/>
              Ahmed Orabi Street, Cairo, Egypt
            </div>
          
            <div className="info-item">
              <img src="/img/phone.png" className="icon" alt=""/>
              +20 1005721840
            </div>
            <div className="info-item">
            <img src="/img/email.png" className="icon" alt=""/>
              egypttours@gmail.com
            </div>
            </div>
    <div className="contact" id="contact">
      <div className="left">
        <img src="/img/contact.png" alt=""  />
      </div>
      <div className="right">
        <h2>Contact with us</h2>
        <form onSubmit={sendEmail}>
        <label >Name:</label>
          <input type="text" name="name" />
          <label >Email:</label>
          <input type="email" name="email" />
          <label >phone number:</label>
          <input type="tel"  name="phone number"/>
          <label >Hotel name:</label>
          <input type="text" name="HotelName" />
          <label>Start date:</label>
          <input type="date" placeholder="Start date" />
          <label >End date:</label>
          <input type="date" placeholder="End date" />
          <label >Your trip:</label>
          <input type="text" name="trip" />
          <label >Number of people:</label>
          <input type="number" name="people" />
          <label >Your message:</label>
          <textarea ></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
       <Footer/>
       <Copyright/>
      </div>
    );
  }
  
  export default Contact;