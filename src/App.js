import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavbarC from './components/NavbarC';
import Splash from './components/Splash';
import Experience from './pages/experience';
import Projects from './pages/projects';
import About from './pages/about';
import Contact from './pages/contact';
import NoPage from './pages/404';

function App() {
  return (
    <BrowserRouter>
      <NavbarC />
      <Routes>
        <Route path="/" element={<Splash />}/>
          <Route path="experience" element={<Experience />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;
