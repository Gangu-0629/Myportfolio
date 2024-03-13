import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutPic from '../Assets/AboutPic.png'
export default function About() {
    useEffect(() => {
        AOS.init();
        
      }, [])
  return (
    <>
    <div data-aos="fade-up" id="About" className="About">
           <div data-aos="fade-left" className="Aboutpic">
            <div className="dpbox">
            <img src={AboutPic} alt="Dp" />
            </div>
           </div>
           <div data-aos="fade-right" className="Aboutdetails">
          
                <h2>About Me</h2>
                <div className="Detailsbox">
                  <p>My name is Atagara Gangadhar. I'm in my final year at G. Pulla Reddy Engineering College finishing up my BTech.I'm seeking a full-time position in a reputable company where I can further my career.I would be interested in working in software engineering and Java development.</p>
                </div>
           </div>
    </div></>
  )
}
