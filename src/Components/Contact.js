import React from 'react';
import '../Styles/Contact.css';

function Contact() {
  return (
    <div className="section1" id='contact'>
            <div className="container1">
                <div className="contactInfo1">
                    <h2>Contact Info</h2>
                    <ul className="info">
                        <li>
                            <span><img src="your-icon.png" alt="icon" /></span>
                            <span>123 Street, City, Country</span>
                        </li>
                        <li>
                            <span><img src="your-icon.png" alt="icon" /></span>
                            <span><a href="mailto:someone@example.com">someone@example.com</a></span>
                        </li>
                    </ul>
                    <ul className="sci">
                        <li><a href="#"><img src="your-social-icon.png" alt="social-icon" /></a></li>
                        <li><a href="#"><img src="your-social-icon.png" alt="social-icon" /></a></li>
                    </ul>
                </div>
                <div className="contactForm1">
                    <h2>Send a Message</h2>
                    <div className="formBox1">
                        <div className="inputBox1 w50">
                            <input type="text" required />
                            <span>First Name</span>
                        </div>
                        <div className="inputBox1 w50">
                            <input type="text" required />
                            <span>Last Name</span>
                        </div>
                        <div className="inputBox1 w100">
                            <input type="email" required />
                            <span>Email Address</span>
                        </div>
                        <div className="inputBox1 w100">
                            <textarea required></textarea>
                            <span>Your Message</span>
                        </div>
                        <div className="inputBox1 w100">
                            <input type="submit" value="Send" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Contact;