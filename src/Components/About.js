import React from 'react';
import '../Styles/About.css';

function About() {
    return (
        <div  id="about" className="holiday-container">
        <div className="left-section">
          <img 
            src="/Images/out.jpg" 
            alt="Guest House" 
            className="guesthouse-image"
          />
        </div>
        <div className="right-section">
          <h3>ABOUT US<hr/></h3>
          <h1>The Best Holidays Start Here!</h1>
          <p>
            Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, 
            Joychandi Hill, Garhpanchet, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful 
            meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. 
            Explore the hidden gems of Purulia, creating memories that linger long after your stay.
          </p>
          <p>
            <strong>Address:</strong> Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156<br />
            <strong>Contact us:</strong> +91 9007062180
          </p>
          <button className="bookbutton">BOOK NOW</button>
        </div>
      </div>
    );
}

export default About;