import logo from './logo.svg';
import './App.css';
import Skills from './Components/Skills';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import { useEffect, useRef, useState } from 'react';
import bg from './Assets/bg.jpg';
function App() {
    const maincontainer=useRef(null);
  const listenScrollEvent = e => {
    if (window.scrollY > 400) {
      maincontainer.current.style.backgroundImage="linear-gradient(to right,#abd699,#75c9b7)"
   
    } else {
      maincontainer.current.style.backgroundImage="linear-gradient(white, white)";
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll',listenScrollEvent);
  },[]);
  return (
    <>
      <Navigation/>
      
      <div ref={maincontainer} className='maincont'>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
    <div className="copyright">
      <p>Copyright © 2024 Gangadhar Atagara</p>
    </div>
    </>
  );
}

export default App;
