import React from "react";
import "./Contact.css"; // Importing the redesigned CSS file

const ContactUs = () => {
  return (
    <div className="container">
      <h2>Contact Us</h2>
      <form>
        <div className="form-group">
          <label htmlFor="inputEmail" className="form-label">Email</label>
          <input type="email" id="inputEmail" className="form-control" placeholder="name@example.com" required />
        </div>

        <div className="form-group">
          <label htmlFor="nameInput" className="form-label">Name</label>
          <input type="text" id="nameInput" className="form-control" placeholder="Your Full Name" required />
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">Your Message</label>
          <textarea id="message" className="form-control" placeholder="Write your message here..." required></textarea>
        </div>

        <button type="submit" className="btn-primary">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
