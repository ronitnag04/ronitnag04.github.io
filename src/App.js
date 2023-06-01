import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route } from "react-router-dom";

import NavbarC from './components/NavbarC';
import Splash from './components/Splash';
import Experience from './pages/experience';
import Projects from './pages/projects';
import About from './pages/about';
import Contact from './pages/contact';
import FooterC from './components/FooterC';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <NavbarC />
        <Routes>
          <Route path="/" element={<Splash />}/>
            <Route path="experience" element={<Experience />} />
            <Route path="projects" element={<Projects />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
        </Routes>
        <FooterC />
      </HashRouter>
    </div>
  );
}



export default App;
