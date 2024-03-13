import React from 'react'
import java from '../Assets/java.png'
import Github from '../Assets/SociaIicons/Github.png';
import Gmail from '../Assets/SociaIicons/Gmail.png';
import Instagram from '../Assets/SociaIicons/Instagram.png';
import Leetcode from '../Assets/SociaIicons/Leetcode.png';
import Linkedin from '../Assets/SociaIicons/Linkedin.png';
export default function Contact() {
    return (
        <div>
            <div id="Contact" className="Contact">
                <h2>Contact Me</h2>
                <p>You can contact me using these links</p>
                <div className="MediaIcons">

                    <button>
                        <a href="https://www.linkedin.com/in/gangadhar-atagara-0580b5216/" target='_blank'>
                            <img src={Linkedin} alt="" /> 
                        </a> 
                    </button>
                    <button><a href="https://github.com/Gangu-0629" target='_blank'>
                            <img src={Github} alt="" /> 
                        </a> </button>
                    <button><a href="#Skills">
                            <img src={Instagram} alt="" /> 
                        </a> </button>
                    <button><a href="https://leetcode.com/Gangadhar123/" target="_blank">
                            <img src={Leetcode} alt="" /> 
                        </a> </button>
                    <button onClick={(e) => {window.location.href ='mailto:atagaragangadhar@gmail.com';}}>
                            <img src={Gmail} alt="" /> 
                         </button>
                </div>

            </div>
        </div>
    )
}
