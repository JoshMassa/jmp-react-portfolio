import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import EasterEgg from './pages/EasterEgg';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

function App() {

    const [showEasterEgg, setShowEasterEgg] = useState(false);
    const handleEasterEgg = () => {
      setShowEasterEgg(true);
    };

  return (
    <Router>
      <div className='site-container'>
        <Header onEasterEggClick={handleEasterEgg}/>
        <main className='site-content'>
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/easteregg' element={<EasterEgg />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/resume' element={<Resume />} />
            {showEasterEgg && <Route path='/easteregg' element={<EasterEgg />} />}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
