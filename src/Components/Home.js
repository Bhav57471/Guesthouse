import React from 'react';
import Header from './Header';
import Gallary from './Gallary';
import About from './About';
import Contact from './Contact';
import Room from './Room';
import Service from './Service';



function Home() {
    return (
        <div>
          <Header/> 
          <About/>
          <Service/>
          <Room/>
          <Gallary/> 
          <Contact/>
        </div>
    );
}

export default Home;