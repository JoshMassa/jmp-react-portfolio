import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  return (
    <Router>
    <>
      <Header />
      {/* <Routes>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/portfolio" component={PortfolioPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/resume" component={ResumePage} />
      </Routes> */}
      <About />
      <Footer />
    </>
    </Router>
  )
}

export default App;
