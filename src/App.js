import React, {useEffect} from "react";
import Navbar from './common/Navbar';
import Homepage from './screen/Homepage';
import About from './screen/About';
import Education from './screen/Education'; 
import Projects from './screen/Projects';
import Skills from './screen/Skills';
import Contact from './screen/Contact';
import Footer from './screen/Footer';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  
  useEffect(() => {
    AOS.init();
  }, []);
  
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
