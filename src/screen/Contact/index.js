import React from "react";
import './index.css';


function Contact(){
    return(
        <section class="section is-medium" id="Contact Me">
        <div class="columns" data-aos="zoom-in-down" data-aos-duration="1000">
          <div class="column is-6 mx-auto">
            <div
              class="title title-edu has-text-centered is-size-2 is-underlined has-underline-color  "
            >
              <span>Contact Me</span>
            </div>
  
            <div>
              <form class="box is-box-contact is-transparent">
                <div class="field mt-5">
                  <label class="label">Your Name</label>
                  <div class="control">
                    <input
                      class="input"
                      type="Name"
                    />
                  </div>
                </div>
                <br />
  
                <div class="field">
                  <label class="label">Your Email</label>
                  <div class="control">
                    <input
                      class="input"
                      type="email"
                    />
                  </div>
                </div>
                <br />
  
                <div class="field">
                  <label class="label">Message</label>
                  <div class="control">
                    <textarea class="textarea input"></textarea>
                  </div>
                </div>
                <br />
  
                <div class="buttons is-right">
                  <button class="button is-projects pl-5 pr-5">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section> 

    )
}

export default Contact;