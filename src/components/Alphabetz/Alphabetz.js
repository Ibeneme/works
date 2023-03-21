import React from "react";
import main from "./images/Alphabetz MAIN.png";
import frame1 from "./images/Frame 32.png";
import frame2 from "./images/Frame 33.png";
import frame3 from "./images/Frame 34.png";
import frame4 from "./images/Frame 35.png";
import frame5 from "./images/Frame 36.png";
import frame6 from "./images/Frame 37.png";
import frame7 from "./images/Frame 38.png";
import frame8 from "./images/Frame 39.png";
import frame9 from "./images/AP 1.png";
import frame10 from "./images/AP 2.png";
import frame11 from "./images/AP 3.png";
import frame12 from "./images/AP 4.png";
import frame13 from "./images/AP 5.png";
import frame14 from "./images/AP 6.png";
import frame15 from "./images/AP 7.png";
import frame16 from"./images/AP 8.png";
import frame17 from "./images/AP 9.png";
import frame18 from "./images/AP 10.png";
import frame19 from "./images/AP 11.png";
import frame20 from"./images/AP 12.png";
import './Alphabetz.css'

const Alphabetz = () => {
  return (
    <div className="first-sectionz">
      <div className="first-headz">
        <h1>Alphabetz Resume Generator </h1>
        <p className="first-sectionz-p">
          Alphabetz is a resume generator that allows users generator or build
          their ideal resume interactively.
        </p>
        <div className="first-sectionz-divz" >
          <span>
            <br />
            <h3>Roles</h3>
            <p className="first-sectionz-p">Ux Designing</p>
            <p className="first-sectionz-p">UI Designing</p>
            <p className="first-sectionz-p">Interaction Designing</p>
            <p className="first-sectionz-p">User Researcher</p>
          </span>
          <span>
          <br />
            <h3>Responsiblities</h3>
            <p className="first-sectionz-p">
              Mobile App design, client presentations, component-based Mobile
              Design,
            </p>
            <p className="first-sectionz-p">UI Designing</p>
            <p className="first-sectionz-p">Interaction Designing</p>
            <p className="first-sectionz-p">User Researcher</p>
          </span>
        </div>
      </div>
      <div>
      <br />
      <br />
        <img style={{ width: "100%" }} src={main} alt="maiin" />
        <br />
        <br />
        <br />

        <br />
         <p className="first-sectionz-p">
          Alphabet is a resume Generator app where users can generate their
          ideal resume, fast and easy. Users can create from scratch their
          Resume or edit templates to their desired content, More to it users
          can scan resumes and edit in-app to their desired choice.
        </p>

        <br />
        <br />
     
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/6GupvvRObtc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </div>
      <div>
      <br />
      <br />
      <br />
        <h2>User Experience Designs</h2>
        <h4> I asked Survey Questions to aid 
            towards building a better user experience, 
            a few of these questions are:</h4>
        <p className="first-sectionz-p">
         
          <li>
          What Application do you use to build your
          resume?
        </li> 
        <li>
        When you want your resume done, 
          how long does it take you to edit a
          template or build one?
        </li> 
        <li>
        When you want your resume done, 
          how long do you
        </li> 
        <li>
        Would you love to have a
          collaborative, Resume building environment?
        </li> 
        
        </p>
        <br />
        <h4>Responses to the survey</h4>
        <img 
         width="100%"src={frame1} alt='ux' />
        <img 
         width="100%"src={frame2} alt='ux' />
        <img 
         width="100%"src={frame3} alt='ux' />
        <img 
         width="100%"src={frame4} alt='ux' />
      
      </div>
      <div>
        <h2>Design Systems</h2>
        <h4> I further designed my process flow, information
            architecture, design systems to aid me in building the 
            best of visual designing experience
        </h4>
        
        <img 
         width="100%"src={frame5} alt='ux' />
        <img 
         width="100%"src={frame6} alt='ux' />
        <img 
         width="100%"src={frame7} alt='ux' />
        <img 
         width="100%"src={frame8} alt='ux' />
      
      </div>
      <div>
        <h2>Design Screens</h2>
        {/* <h4> I further designed my process flow, information
            architecture, design systems to aid me in building the 
            best of visual designing experience
        </h4> */}
        
        <img 
         width="100%"src={frame9} alt='ux' />
        <img 
         width="100%"src={frame10} alt='ux' />
        <img 
         width="100%"src={frame11} alt='ux' />
        <img 
         width="100%"src={frame12} alt='ux' />
        <img 
         width="100%"src={frame13} alt='ux' />
        <img 
         width="100%"src={frame14} alt='ux' />
        <img 
         width="100%"src={frame15} alt='ux' />
        <img 
         width="100%"src={frame16} alt='ux' />
      <img 
         width="100%"src={frame17} alt='ux' />
        <img 
         width="100%"src={frame18} alt='ux' />
        <img 
         width="100%"src={frame19} alt='ux' />
      <img 
         width="100%"src={frame20} alt='ux' />
     
      </div>
    </div>
  );
};

export default Alphabetz;
