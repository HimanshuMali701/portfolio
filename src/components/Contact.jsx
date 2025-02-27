import React from "react";
import "./Contact.css"; // Ensure this file is properly linked

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-subtext">Feel free to drop a message. I'll get back to you soon!</p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Your Name</label>
          <input type="text" id="name" className="form-control" placeholder="John Doe" required />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input type="email" id="email" className="form-control" placeholder="yourmail@example.com" required />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="form-label">Your Message</label>
          <textarea id="message" className="form-control" placeholder="Write your message here..." required></textarea>
        </div>
        <button type="submit" className="btn-submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
