import React from 'react';
import Navbar from './common/Navbar';
import Homepage from './screen/Homepage';
import About from './screen/About';
import Education from './screen/Education'; 
import Projects from './screen/Projects';
import Skills from './screen/Skills';
import Contact from './screen/Contact';
import Footer from './screen/Footer';
import './App.css';

function App() {
  return (
    <>
    <Navbar/>
    <Homepage/>
    <About/>
    <Education/>
    <Projects/>
    <Skills/>
    <Contact/>
    <Footer/>
    
    </>
   
  );
}

export default App;
