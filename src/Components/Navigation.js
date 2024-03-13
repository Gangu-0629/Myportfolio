import React from 'react'
import menu from '../Assets/menu.png';
import MyResume from '../Assets/MyResume.pdf';
export default function Navigation() {

  return (
    <>
     <div className="cont">
      <nav class="navbar navbar-expand-lg mynavbar"  >
        <a style={{color:"#16123f",fontWeight:"bold"}} class="navbar-brand" href="#">My Portfolio</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon">
            <img src={menu} alt="" />
          </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item ">
              <a class="nav-link" href="#Home">Home </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#About">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Skills">Skills</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Projects">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Contact">Contact</a>
            </li>
          
          </ul>
            <button className='NavDownload'> <a href={MyResume} target="_blank" download="MyResume" >Download Resume</a></button>
        </div>
      </nav>
      </div>
     
    </>
  )
}