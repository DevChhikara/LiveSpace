import React from "react";
import "./ContactForm.css";
const ContatcForm = () => {
  return (
    <div className="contact-form">
      <div className="first-container">
        <div className="info-container">
          <div>
            <h4 className="contact-us-contact-info">Contact Info</h4>
            <h3>Address</h3>
            <p>Mada Center 8th floor, 379 Hudson St, New York, NY 10018 US</p>
          </div>
          <div>
            <h3>Lets Talk</h3>
            <p>+1 800 1236879</p>
          </div>
          <div>
            <h3>General Support</h3>
            <p>contact@example.com</p>
          </div>
        </div>
      </div>
      <div className="second-container">
        <h2>Send Us A Message</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name-input">Tell us your name*</label>
            <input
              id="name-input"
              type="text"
              placeholder="First name"
              required
            />
            <input type="text" placeholder="Last name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email-input">Enter your email*</label>
            <input
              id="email-input"
              type="text"
              placeholder="Eg. example@email.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone-input">Enter phone number*</label>
            <input
              id="phone-input"
              type="text"
              placeholder="Eg. +1 800 000000"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message-textarea">Message</label>
            <textarea
              id="message-textarea"
              placeholder="Write us a message"
            ></textarea>
          </div>
          <button>Send message</button>
        </form>
      </div>
    </div>
  );
};

export default ContatcForm;
