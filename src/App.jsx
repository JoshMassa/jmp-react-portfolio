import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

function App() {

  return (
    <Router>
      <div className='site-container'>
        <Header />
        <main className='site-content'>
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/easteregg' element={<Home />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/resume' element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
