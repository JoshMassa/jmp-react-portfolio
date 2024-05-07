import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {

  return (
    <Router>
    <>
      <Navigation />
      {/* <Routes>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/portfolio" component={PortfolioPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/resume" component={ResumePage} />
      </Routes> */}
      <Footer />
    </>
    </Router>
  )
}

export default App
