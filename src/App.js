import './App.css';
import Apropos from './Composants/Apropos';
import ContactUS from './Composants/ContactUs';
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
     <ContactUS />
    </div>
  );
}

export default App;
