import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import About from './Components/About';
import Help from './Components/Help';
import LandingPage from './Components/LandingPage';
import { BrowserRouter as Router,  Route , Routes } from 'react-router-dom';


function App() {

  

  return (
   <div>
    

   < >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Card" element={<Card />} />
          <Route path="/About" element={<About />} />
          <Route path="/Help" element={<Help />} />

        </Routes>
      </Router>
   
   </>
   </div>
  );
}

export default App;

// https://fakestoreapi.com/products