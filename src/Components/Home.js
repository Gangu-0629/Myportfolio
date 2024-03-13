import React, { useEffect } from 'react'
import Softpic from '../Assets/Softpic.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import MyResume from '../Assets/MyResume.pdf';
export default function Home() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div aos="fade-left" id="Home" dat className="Home">

                <div className="HomeNames">
                    <h2>Hi there</h2>
                    <h1>I'M <span style={{ color: "#75c9b7" }}> GANGADHAR ATAGARA</span></h1>
                    <h3>I'm Into</h3>
                   <h1 style={{ color: "#75c9b7" }}>Software Engineering</h1>
                    <button > <a href={MyResume} target="_blank" download="MyResume" >Download Resume</a></button>
                </div>
                <div className="HomePic">
                    <img src={Softpic} alt="Home pic" />
                </div>
            </div>
        </>
    )
}
