import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {

  return (
    <Router>
      <div className='site-container'>
        <Header />
        <main className='site-content'>
          <Routes>
            <Route path='/easteregg' element={<Home />} />
            <Route path='/' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
