import React from "react";
import './index.css';


function Navbar(){
    return(
        <header>
        <nav
          className="navbar is-size-6-desktop has-text-comforta has-background-color"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <a className="navbar-item pl-6-desktop" href="#">
              Moushika Kriyanjalee
            </a>
            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className="navbar-end mr-4-desktop">
            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-end has-text-weight-bold pb-0">
                <div className="navbar-item">
                  <a className="navbar-item" href="#Home"> Home </a>
                  <a className="navbar-item" href="#About">About Me</a>
                  <a className="navbar-item" href="#Projects"> Projects </a>
                  <a className="navbar-item" href="#Skills"> Skills </a>
                  <a className="navbar-item" href="#Contact Me"> Contact Me </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      
    )
}

export default Navbar;