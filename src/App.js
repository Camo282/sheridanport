import React from 'react';
import Navbar from './components/Navigation/Navbar';
import './App.css';

// import Header from './components/Header';
// import Footer from './components/Footer';
import About from './components/Navigation/About';

// import ContactForm from './components/Navigation/Contact';



function App() {
  return (
    <div className='App'>
      <Navbar />
      <About />
    </div>
  );
}

export default App;
