import React from "react";
import './index.css';
import ism from '../../assets/Images/ism.jpg.png';

function Projects(){
    return(
        <section className="section is-medium" id="Projects" data-aos="zoom-in" data-aos-duration="1000">
        <div className="title">
          <p className="title title-projects is-1 has-text-centered is-underlined has-underline-color">
            Projects
          </p>
        </div>
        <div className="columns">
          <div className="column is-8 mx-auto is-box-projects">
            <div className="columns">
              <div className="column is-half is-centered is-align-self-center">
                <div className="title">
                  <div className="title-projects has-text-left mt-6 ml-3">
                    Green Nature<br />Photography Contest
                  </div>
                  <div className="project-info has-text-justified mt-6 ml-3">
                    Main purpose of this project is to develop our skills to design
                    and create a digital badge and offer the badge for a specific
                    skill/achievement of a person.
                  </div>
                </div>
                <button className="button is-link is-rounded is-hovered is-download my-6">
                  View Project
                </button>
              </div>
              <div className="column is-half is-centered p-0">
                <div className="card-image">
                  <figure className="image is-256x256">
                    <img src={ism} alt="Project" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Projects;