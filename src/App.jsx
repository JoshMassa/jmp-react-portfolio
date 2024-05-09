import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Resume from './components/Resume';

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
            <Route path='/resume' element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
