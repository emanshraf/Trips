import Home from './pages/home/Home';
import Travels from './pages/travels/Travels';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Opinion from './pages/opinion/Opinion';
import MarsaAlam from './pages/marsaAlam/MarsaAlam';
import Hurghada from './pages/hurghada/Hurghada';
import {BrowserRouter as Router , Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route  path="/travels" element={<Travels/>}/>
    <Route  path="/about" element={<About/>}/>
    <Route  path="/contact" element={<Contact/>}/>
    <Route  path="/opinion" element={<Opinion/>}/>
    <Route  path="/marsaAlam" element={<MarsaAlam/>}/>
    <Route  path="/hurghada" element={<Hurghada/>}/>
    
          
  </Routes>
 </Router>
    </div>
  );
}

export default App;
