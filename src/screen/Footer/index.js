import React from "react";
import './index.css';

function Footer(){
    return(
        <footer>
        <div className="icons has-text-centered mt-1-desktop">
          <a href="https://www.instagram.com/shika_kriyanjalee" target="_blank">
            <span className="icon mx-5">
              <i
                className="fa-brands fa-instagram home fas fa-2x icon is-large"
              ></i> </span>
          </a>
          <a href="https://www.linkedin.com/in/moushika-kriyanjalee-51233223b" target="_blank"
            ><span className="icon mx-5">
              <i className="fa-brands fa-linkedin home fas fa-2x"></i> </span>
          </a>
          <a href="#"
          ><span className="icon mx-5">
              <i className="fa-solid fa-envelope home fas fa-2x"></i> </span>
              </a>
        </div>
        <div>
          <svg width="auto" height="auto" viewBox="0 0 1440 269" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M-5 201.75L55.2917 179.333C115.583 156.917 236.167 112.083 356.75 117.687C477.333 123.292 597.917 179.333 718.5 179.333C839.083 179.333 959.667 123.292 1080.25 84.0625C1200.83 44.8333 1321.42 22.4167 1381.71 11.2083L1442 0V269H1381.71C1321.42 269 1200.83 269 1080.25 269C959.667 269 839.083 269 718.5 269C597.917 269 477.333 269 356.75 269C236.167 269 115.583 269 55.2917 269H-5V201.75Z" fill="#CAABEE"/>
            </svg>     
        </div>   
      </footer>
    )
}

export default Footer;