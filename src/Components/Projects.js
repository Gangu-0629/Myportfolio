import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import CalPic from '../Assets/ProjectsPics/CalPic.png';
import MinwayPic from '../Assets/ProjectsPics/MinwayPic.png';
import Mytodopic from '../Assets/ProjectsPics/Mytodopic.png';
export default function Projects() {
  useEffect(() => {
    AOS.init();

  }, [])
  return (
    <>
      <div data-aos="fade-up" id="Projects" className="Projects">
        <h1> Projects</h1>
        <div className="projectsboxes">
          <div data-aos="flip-down" className="projectbox">
            <div className="projectimg">
              <img src={MinwayPic} alt="" />
            </div>
            <h1>MinWay </h1>
            <button ><a href="https://github.com/Gangu-0629/MinwayV2.0" target='_blank'> Project Link</a></button>
          </div>
          <div data-aos="flip-down" className="projectbox">
            <div className="projectimg">
            <img src={Mytodopic} alt="" />
            </div>
            <h1>My Todo </h1>
            <button ><a href="https://github.com/Gangu-0629/Todo" target='_blank'>Project Link</a></button>

          </div>
          <div data-aos="flip-down" className="projectbox">
            <div className="projectimg">
            <img src={CalPic} alt="" />
            </div>
            <h1>Calculator</h1>
            <button ><a href="https://github.com/Gangu-0629/calculator" target='_blank'>Project Link</a></button>
          </div>
        </div>
      </div>
    </>
  )
}
