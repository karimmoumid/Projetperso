import './App.css';
import Apropos from './Composants/Apropos';
import Hero from './Composants/Hero';
import Navbar from './Composants/Navbar';
import NosSpecialitees from './Composants/NosSpecialitees';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Hero />
     <NosSpecialitees />
     <Apropos />
    </div>
  );
}

export default App;
