import React from "react";
import './index.css';
import my from '../../assets/Images/1.png';

function Homepage(){
    return(
        <section className="section p-0" id="Home" >   
     
      <div className="columns" data-aos="fade-up" data-aos-duration="1000">
        <div className="column is-6 is-align-self-center">
          <div className="pl-6 is-hidden-touch">
            <span className="title has-text-Nunito"> UI/UX Designer </span>

            <div
              className="subtitle is-size-desktop has-text-Playfair_Display has-text-weight-semibold"
            >
              <p>
                Hello,<br className="is-hidden-desktop" />
                I am <br className="is-hidden-touch"/> Moushika <br className="is-hidden-touch"/>Kriyanjalee
              </p>
            </div>

            <br/>

            <div>
              <p className="hero-info has-text-self-center">
                An undergraduate student who creative <br className="is-hidden-touch"/> young elder, interested in
                web designing.
              </p>
            </div>

            <br />
            <div className="mt-10 mr-2 has-text-left">
              <button className="button is-normal is-focused is-projects has-text-black">
                Projects
              </button>
              <button className="button is-normal is-focused is-LinkedIn">
                LinkedIn
              </button>
            </div>
          </div>

          <div className="pl-2 is-hidden-desktop position-z-index-2">
            <span className="title has-text-Nunito mt-my-10"> UI/UX Designer </span>

            <div
              className="subtitle is-size-desktop has-text-Playfair_Display has-text-weight-semibold"
            >
              <p>
                Hello,<br className="is-hidden-desktop" />
                I am Moushika Kriyanjalee
              </p>
            </div>

            <br />

            <div>
              <p className="hero-info has-text-self-center">
                An undergraduate student who creative young elder, interested in
                web designing.
              </p>
            </div>

            <br />
            <div className="mt-10 mr-2 has-text-left">
              <button className="button is-normal is-focused is-projects">
                Projects
              </button>
              <button className="button is-normal is-focused is-LinkedIn">
                LinkedIn
              </button>
            </div>
          </div>
        </div>

        <div className="column is-6 p-0 hero-moblie-img is-hidden-desktop">
          <figure className="image">
            <img src={my} alt="my" />
          </figure>
        </div>

        <div className="column is-6 is-align-self-center is-hidden-touch">
          <figure className="image">
            <img src={my} alt="my" />
          </figure>
        </div>
      </div>
    </section>
        
    )
}

export default Homepage;