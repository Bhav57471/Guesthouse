import React from 'react';
import '../Styles/Gallary.css';

const images = [
  { src: '/Images/out.jpg', alt: 'Image 1', className: 'a' },
  { src: '/Images/ayodhya.webp', alt: 'Image 2', className: 'b' },
  { src: '/Images/mithonDam.webp', alt: 'Image 3', className: 'c' },
  { src: '/Images/large.jpg', alt: 'Image 4', className: 'd' },
  { src: '/Images/palash.webp', alt: 'Image 5', className: 'e' },
  { src: '/Images/small.jpg', alt: 'Image 6', className: 'f' },
  { src: '/Images/baranti.webp', alt: 'Image 7', className: 'g' },
  { src: '/Images/recep.jpg', alt: 'Image 8', className: 'h' },
  { src: '/Images/flower.jpg', alt: 'Image 9', className: 'i' },
  { src: '/Images/room1.jpg', alt: 'Image 10', className: 'j' },
];

function Gallary() {
  return (
    <section id="gallery">
      <div className="about__content">
        <p className="section__subheader" style={{ textAlign: 'center' }}>GALLERY</p>
      </div>
      <div className="container11">
        {images.map((image, index) => (
          <div key={index} className={`box11 ${image.className}`}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallary;
