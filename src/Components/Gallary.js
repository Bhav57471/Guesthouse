import React from 'react';
import '../Styles/Gallary.css';

const images = [
  { src: '/Images/out.jpg', alt: 'Image 1' },
  { src: '/Images/ayodhya.webp', alt: 'Image 2' },
  { src: '/Images/mithonDam.webp', alt: 'Image 3' },
  { src: '/Images/large.jpg', alt: 'Image 4' },
  { src: '/Images/palash.webp', alt: 'Image 5' },
  { src: '/Images/small.jpg', alt: 'Image 6' },
  { src: '/Images/baranti.webp', alt: 'Image 7' },
  { src: '/Images/recep.jpg', alt: 'Image 8' },
  { src: '/Images/flower.jpg', alt: 'Image 9' },
  { src: '/Images/room1.jpg', alt: 'Image 10' },
];

function Gallary() {
  return (
    <>
<div className="stats-container">
      <div className="stat-item">
        <h2>100+</h2>
        <p>Bookings Completed</p>
      </div>
      <div className="stat-item">
        <h2>150+</h2>
        <p>Happy Customers</p>
      </div>
    </div>

      <div id="gallery" style={{ textAlign: "center", fontFamily: "sans-serif" }}>
        <h2>GALLARY</h2>
        <div className="image-gallery">
          {images.map((image, index) => (
            <img key={index} src={image.src} alt={image.alt} />
          ))}
        </div>
      </div></>

  );
};

export default Gallary;