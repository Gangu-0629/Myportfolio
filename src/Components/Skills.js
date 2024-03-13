import React, { useEffect } from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos';
import java from '../Assets/java.png';
import api from  '../Assets/api.png';
import Css from '../Assets/Css.png';
import Dsa from '../Assets/Dsa.png';
import Html from '../Assets/Html.png';
import Mysql from '../Assets/Mysql.png';
import Node from '../Assets/Node.png';
import Reactimg from '../Assets/Reactimg.png';
import SpringBoot from '../Assets/SpringBoot.png';
import Js from '../Assets/Js.png';
export default function Skills() {
  useEffect(() => {
    AOS.init();

  }, [])
  const skills = ["Java", "HTML", "CSS", "JavaScript", "React", "SpringBoot", "RestApi", "Node js", "DSA", "MySql"];
  const icons=[java,Html,Css,Js,Reactimg,SpringBoot,api,Node,Dsa,Mysql];
  return (
    <>
      <div data-aos="fade-up" id="Skills" className="Skills">
        <h1>Skills</h1>
        <div className="skillboxes">
          {
            skills.map((item, key) => {
              return <>
                <div className="skillbox">
                  <img src={icons[key]} alt={item} />
                  <h1>{item}</h1></div>
              </>
            })
          }
        </div>
      </div>
    </>
  )
}
