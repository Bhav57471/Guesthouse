import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Components/Contact';
import Room from './Components/Room';
import Service from './Components/Service';
import Gallary from './Components/Gallary';
import About from './Components/About';
import Home from './Components/Home';



function App() {
  return (
    <div>
<BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="#about" element={<About />} />
          <Route path="#contact" element={<Contact />} />
          <Route path="#room" element={<Room />} />
          <Route path="#service" element={<Service />} />
          <Route path="#gallary" element={<Gallary />} />

          </Routes>
      </BrowserRouter>    
    </div>
  );
}

export default App;
