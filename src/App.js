import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarC from './components/NavbarC';
import Splash from './components/Splash';

function App() {
  return (
    <div className="App">
      <NavbarC/>
      <Splash
        color="#1a1918"
      />
    </div>
  );
}

export default App;
