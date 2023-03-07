import React from "react";
import './index.css';
import my2 from '../../assets/Images/my2.png';

function About(){
    return(
        <section className="section is-medium" id="About">
        <div className="columns" data-aos="zoom-in-up" data-aos-duration="1000">
          <div className="column is-half is-align-self-center">
            
            <div className="circle-about is-hidden-touch mx-auto">
              <img src={my2} alt="my2" />
            </div>
            
            <div className="circle-about-mobile is-hidden-desktop mx-auto">
              <img src={my2} alt="my2" />
            </div>
          </div>
  
          <div className="column is-half">
            <span className="box is-box-about">
              <div className="pt-5 pl-5 pr-5">
                <p className="title is-1 About-me has-text-left has-underline-color">About Me</p>
                <br />
  
                <p className="About-info has-text-left pt-3">
                  I am an Information Systems undergraduater at University of
                  Colombo School of computing. As an undergraduate web designer, I
                  am learning about HTML, CSS, and JavaScript, as well as other
                  technologies and tools used in the web design process. After
                  completing my undergraduate degree, I may choose to pursue a
                  career as a web designer or to continue my education with a
                  graduate degree. In either case, the skills and knowledge I gain
                  as an undergraduate web designer will be to help you.
                </p>
                <div className="pt-6">
                  <button
                    className="button is-link is-rounded is-hovered is-download"
                  >
                    <a href="Portfolio_Moushika.pdf">Download CV</a>
                  </button>
                </div>
              </div>
            </span>
          </div>
        </div>
      </section>
    )
}

export default About;