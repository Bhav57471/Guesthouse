import React from 'react';
import '../Styles/Header.css'; // Import the CSS file

function Header() {
    return (
        <div className="home-container">
      <Header className="navbar">
        <div className="logo">
          <a href="/">Logo</a>
        </div>
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#rooms">Rooms</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="book-now">
          <button>BOOK NOW</button>
        </div>
      </Header>

      <div className="hero-section">
        <div className="overlay"></div>
        <div className="hero-text">
          <h2 style={{color:"white"}}>Make Yourself At Home In Our <span className="highlight">Guest House</span></h2>
          <p>Simple • Unique • Friendly</p>
          <button className="hero-button">BOOK NOW</button>
        </div>
      </div>
    </div>
    );
}

export default Header;
