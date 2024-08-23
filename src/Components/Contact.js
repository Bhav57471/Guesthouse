import React from 'react';
import '../Styles/Contact.css'; // Assuming you have a separate CSS file for styling

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
    <div className="contact-info">
      <h2>Contact Info</h2>
      <p>
        <span role="img" aria-label="location">📍</span> Beside Barshal Water Tank, Manpur, Barhanti,<br/>
        West Bengal 723156
      </p>
      <p>
        <span role="img" aria-label="email">📧</span> kkghosh0099@gmail.com
      </p>
      <p>
        <span role="img" aria-label="phone">📞</span> +91 9007062180
      </p>
      <div className="social-icons">
        <i className="fab fa-facebook"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-linkedin"></i>
      </div>
    </div>

    <div className="contact-form">
      <h2>Send a Message</h2>
      <form>
        <div className="form-row">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
        </div>
        <div className="form-row">
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Mobile Number" required />
        </div>
        <textarea placeholder="Write your message here..." required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  </div>
  );
};

export default Contact;
