import React, { useState } from 'react';
import '../Styles/Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
      setMenuOpen(!menuOpen);
  };

  return (
      <header className="header">
          <nav>
              <div className="nav__bar">
                  <div className="logo">
                      <a href="https://wa.link/at5ion">
                          <span style={{ color: 'aliceblue' }}>Kingsukh Guest House</span>
                      </a>
                  </div>
                  <div className="nav__menu__btn" onClick={toggleMenu}>
                      <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
                  </div>
              </div>
              <ul className={`nav__links ${menuOpen ? 'open' : ''}`}>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#service">Services</a></li>
                  <li><a href="#rooms">Rooms</a></li>
                  <li><a href="#gallery">Gallery</a></li>
                  <li><a href="#contact">Contact</a></li>
              </ul>
              <button className="btn nav__btn">BOOK NOW</button>
          </nav>
          <div className="section__container header__container" id="home">
              <p>Simple - Unique - Friendly</p>
              <h1>Make Yourself At Home<br />In Our <span>Guest House</span>.</h1>
          </div>
      </header>
    );
}

export default Header;
