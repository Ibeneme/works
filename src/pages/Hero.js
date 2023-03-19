import React from "react";
 import "./Hero.css";
// import {MdDashboard} from 'react-icons/md'
// // import Xd from './images/Adobe XD.svg'
// import CSS from './images/CSS3.png'
//  import Html from './images/Html 5.png'
// import js from './images/JavaScript.png'
//  import ReactJs from './images/React.png'
// // // import Redux from './images/Redux.svg'
//  import Figma from './images/Figma.png'
// import {FiCodepen} from 'react-icons/fi' 



const Hero = () => {
  return (
    <section className="first-section">
      {/* <nav className="navbar-div">
        {/* <h4 className="ikenna">Product Designer & Frontend Developer </h4> */}
        {/* <h4 className="first-sliddo">My Resume</h4>
      </nav> */}


      <div className="hero-section-div">

        <div className="left-flex-hero">
            <div className="curves">
                <span>Creative & Problem Solving</span>
            </div>
            <div className="name">
                <h1>I'm Ikenna Ibeneme</h1>
                <p>Product Designer & Frontend Developer.
                    <br /> I design beautiful User interfaces for best of User experience and i also build them to reality using Javascript</p>
                <button className="button-resume">View my Resume</button>
            </div>
             </div>

        {/* <div className="second-side-div">

          <div className="second-div">

            <div className="second-div-div">
                <div className="dash-div-div" >
                    <MdDashboard />
                </div>
                <div className="content-div-div">
                    <h1>12+</h1>
                    <p>  Design Projects</p>
                </div>
            </div>
            <div className="second-div-div">
                <div className="dash-div-div" >
                    <FiCodepen />
                </div>
                <div className="content-div-div">
                    <h1>25+</h1>
                    <p>Github Repositories</p>
                </div>
            </div>
            
          </div>
          <div className="Works-with-div">
            {/* <div>
                <p className="Works-with-p">Stack</p>
            </div> 
            <div>
               
                <img className="hero-img" src={Xd} alt='xd'/>
                <img className="hero-img" src={Figma} alt='xd'/>
                <img className="hero-img" src={CSS} alt='xd'/>
                <img className="hero-img" src={Html} alt='xd'/>
                <img className="hero-img" src={js} alt='xd'/>
                <img className="hero-img" src={ReactJs} alt='xd'/> 
                {/* <img className="hero-img" src={Redux} alt='xd'/> 
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;