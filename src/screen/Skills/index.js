import React from "react";
import './index.css';
import PS_logo from '../../assets/Images/Adobe-Photoshop-Logo.png';
import c_logo from '../../assets/Images/c-removebg-preview.png';
import figma_logo from '../../assets/Images/figma2.png';
import An_logo from '../../assets/Images/adobe-animate-logo.png';
import Ai_logo from '../../assets/Images/illustrator_318-452402.webp';
import skill from '../../assets/Images/png-clipart-case-study-desktop-study-skills-blog-others-miscellaneous-company-removebg-preview.png';


function Skills(){
    return(
        
    <div className="section is-medium" id="Skills" data-aos="zoom-out-up" data-aos-duration="1000">
      <div className="title">
        <h1
          className="title title-edu is-1 has-text-centered is-underlined is-size has-underline-color"
        >
          Skills
        </h1>
      </div>

      <div className="columns">
        <div className="column is-8 mx-auto is-box-projects">
          <div className="columns">
            <div className="column is-half has-text-centered is-align-self-center">
              <div className="columns">
                <div className="column is-half">
                  <figure className="image is-256x256">
                    <img src={PS_logo} alt="PS" />
                  </figure>
                </div>
                <div className="column is-half">
                  <figure className="image is-128x128 mx-auto">
                    <img src={c_logo} alt="c" />
                  </figure>
                </div>
              </div>
              <div className="columns">
                <div className="column is-centered">
                  <figure className="image is-128x128 mx-auto">
                    <img src={figma_logo} alt="figma" />
                  </figure>
                </div>
              </div>
              <div className="columns">
                <div className="column is-half">
                  <figure className="image is-128x128 mx-auto">
                    <img src={An_logo} alt="An" />
                  </figure>
                </div>
                <div className="column is-half">
                  <figure className="image is-128x128 mx-auto">
                    <img src={Ai_logo} alt="AI" />
                  </figure>
                </div>
              </div>


            </div>
            <div className="column is-half is-centered p-6">
              <figure class="image">
                <img
                  src={skill} alt="skills  "
                />
              </figure>
            </div>
          </div>
        </div>
      </div>

    </div>

    )
} 

export default Skills;