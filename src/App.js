import './App.css';
import Navbar from './components/Navbar';
import Splash from './components/Splash';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Splash
        color="#1a1918"
      />
    </div>
  );
}

export default App;
