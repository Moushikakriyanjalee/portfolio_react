import React from "react";
import './index.css';
import uoc_logo from '../../assets/Images/uoc_logo.png';
import visaka from '../../assets/Images/122905830_3324612654303244_4372158701475036996_o.png';
import joseph from '../../assets/Images/download.jfif';


function Education(){
    return(
        <section className="section is-medium" id="Education">
        <div className="columns is-box-edu mt-5" data-aos="fade-down" data-aos-duration="1000">
          <div className="column">
            <p className="title title-edu is-1 has-text-centered is-underlined has-underline-color">Education</p>
          
            <div className="columns">
              <div className="column is-4 has-text-centered">
                <figure className="image is-128x128 is-inline-block mt-4 mb-4">
                  <img src={uoc_logo} alt="UOC" />
                </figure>
                <div className="is-edu mt-5">
                  <p>Undergraduate at</p>
                  <p>University of Colombo</p>
                  <p>School of Computing</p>
                </div>
              </div>
      
              <div className="column is-4 has-text-centered">
                <figure className="image is-128x128 is-inline-block mt-5 mb-1">
                  <img
                    src={visaka}
                    alt="Visakha"
                  />
                </figure>
                <div className="is-edu mt-5">
                  <p>A/L - 2020</p>
                  <p>Visakha Vidyalaya</p>
                  <p>Colombo 05</p>
                </div>
              </div>
      
              <div className="column is-4 has-text-centered">
                <figure className="image is-128x128 is-inline-block mt-5 mb-1">
                  <img src={joseph} alt="joseph" />
                </figure>
                <div className="is-edu mt-5">
                  <p>O/L -2017</p>
                  <p>St/Joseph's Girls School</p>
                  <p>Nugegoda</p>
                </div>
              </div>
          </div>
        </div>
        </div>
      </section>

    )

}

export default Education;