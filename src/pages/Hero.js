import React from "react";
import "./Hero.css";
import { SiBuymeacoffee, SiNotion } from "react-icons/si";
// import {IoLogoWhatsapp} from 'react-icons/io'
import { MdEmail } from "react-icons/md";
import { RxNotionLogo } from "react-icons/rx";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { ImBehance2 } from "react-icons/im";
// import notion from './images/logos_notion-icon.png'
//  import {MdDashboard} from 'react-icons/md'

//  import CSS from './images/CSS3.png'
//   import Html from './images/Html 5.png'
//  import js from './images/JavaScript.png'
//   import ReactJs from './images/React.png'

import { FiArrowDownCircle } from "react-icons/fi";
import Figma from "./images/Figma.png";
import { FaLocationArrow } from "react-icons/fa";
import kiko from "./images/kiko llc.png";
import svg from "./images/hydra-web.png";
import Alphabetz from "./images/alphab.png";
import image from "./images/hydra-mobile.png";
import profile from "./images/newwww.png";
// import not from './images/notion.png'
// import BETT from './images/bEHANCE.png'
import gf from "./images/Google Forms.png";
import gd from "./images/Google Docs.png";
// import aa from './images/Adobe Animate.png'
// import ap from './images/Adobe Photoshop.png'
import xd from "./images/Adobe XD.png";
import { useNavigate } from "react-router-dom";
// import landd from "./images/LANDING.png";
// import nfft from "./images/nftt.png";

const Hero = () => {
  let navigate = useNavigate();
  return (
    <section className="first-section">
      <nav className="navbar-div">
        <h4 className="ikenna">Product Designer </h4>
        {/* <h4 className="first-sliddo">My Resume</h4>*/}
      </nav>

      <div className="hero-section-div">
        <div className="left-flex-hero">
          <div className="curves">
            <span>Creative & Problem Solving</span>
          </div>
          <div className="name">
            <h1>I'm Ikenna Ibeneme</h1>
            <p>
             A Creative Product Designer, I design beautiful User interfaces for best of
              User experience
            </p>
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
                 <img className="hero-img" src={Redux} alt='xd'/> 
            </div>
          </div>
        </div> */}
      </div>
      <br/>
      <div className="works-on">
        <span className="works-on-span">
          <p>Mastery at</p>
          <FaLocationArrow style={{ color:'#80139B' }} />
        </span>

        <img className="hero-img" src={Figma} alt="xd" />
        <img className="hero-img" src={xd} alt="xd" />
        {/* <img className="hero-img" src={aa} alt='xd'/>
               <img className="hero-img" src={ap} alt='xd'/> */}
        <img className="hero-img" src={gf} alt="xd" />
        <img className="hero-img" src={gd} alt="xd" />

        {/* <img className="hero-img" src={Redux} alt='xd'/> 
               <img className="hero-img" src={Xd} alt='xd'/>  */}
        {/* <img className="hero-img" src={CSS} alt='xd'/>
               <img className="hero-img" src={Html} alt='xd'/>
               <img className="hero-img" src={js} alt='xd'/>
               <img className="hero-img" src={ReactJs} alt='xd'/>  */}
      </div>
      <br/>
      {/* <div className="brief-on">
        <h2>UX Design</h2>
        <p
        style={{ marginTop:'-1em'}}>
            I design user centered products that 
            provide meaningful and relevant 
            experiences to users, tailoring my creativity
            towards users satisfaction.</p>


        <br />
        <h2>UI Design</h2>
        <p
        style={{ marginTop:'-1em'}}>
            I design beauty on screens, pleasurable
            visuals 
            for all users</p>


      </div> */}
      <div className="section-featured-works">
        <br />

       
        <div className="section-featured-works-div">
          <h3>
            Featured Design Projects
            <FiArrowDownCircle
              style={{ fontSize: "1.3em", marginLeft: "0.3em" }}
            />
          </h3>
        </div>
        <div className="section-works">
          <div
            className="section-image-and-content"
            onClick={(e) => navigate("/hydra-mobile")}
          >
            <img className="section-imge" src={image} alt="svg" />

            <div className="section-works-contents">
              <h3
              style={{marginBottom:'-0.7em'}}>
                Hydra Mobile App
              </h3>
              <p>A decentralized Social media mobile app,
                that enables users to earn while interacting
                with one another </p>
            </div>
          </div>
          <div
            onClick={(e) => navigate("/hydra-web")}
            className="section-image-and-content"
          >
            <img className="section-imge" src={svg} alt="svg" />
            <div className="section-works-contents">
              <h3 style={{marginBottom:'-0.7em'}}>Hydra Desktop App</h3>
              <p>A decentralized Social media website,
                that enables users to earn while interacting
                with one another </p>
            </div>
          </div>
          <div
            className="section-image-and-content"
            onClick={(e) => navigate("/kiko")}
          >
            <img className="section-imge" src={kiko} alt="svg" />
            <div className="section-works-contents">
              <h3 style={{marginBottom:'-0.7em'}}>
                Kiko LLC Mobile App
              </h3>
              <p>A software where users can find influencers for their products, projects, skits, events and more </p>
            </div>
          </div>

          <div
            className="section-image-and-content"
            onClick={(e) => navigate("/alphabetz")}
          >
            <img className="section-imge" src={Alphabetz} alt="svg" />

            <div className="section-works-contents">
              
              <h3 style={{marginBottom:'-0.7em'}}>Alphabetz Mobile</h3>
               <p>Designs for a mobile application that enables users generate a resume, style a resume or use custom editable resume for free</p>
            </div>
          </div>
          {/* <div
            onClick={(e) => navigate("/nft")}
            className="section-image-and-content"
          >
            <img className="section-imge" src={nfft} alt="svg" />
            <div className="section-works-contents">
              <h4 className="section-works-contents-h4">Fleetar Landing Page</h4>
            </div>
          </div>
          <div
            onClick={(e) => navigate("/landing")}
            className="section-image-and-content"
          >
            <img className="section-imge" src={landd} alt="svg" />
            <div className="section-works-contents">
              <h4 className="section-works-contents-light"> Bird Web App</h4>
            </div>
          </div> */}

          {/* <div className='section-image-and-content'
             onClick={(e)=>{navigate('/nft')}}>
                <img className='section-imge' src={Fleetar} alt='svg'/>
                <div className='section-works-contents'>
                <h4>Fleetar NFT landing Page</h4>
                 
                </div>
            </div>
            <div className='section-image-and-content'
             onClick={(e)=>{navigate('/crm')}}>
                <img className='section-imge black' src={Notion} alt='svg'/>
                <div className='section-works-contents '>
                    <h4>The Bird NFT App</h4>
                 
                </div>
            </div> */}
        </div>
      </div>

      <br />
      <br />
     
      <div
        style={{
          marginBottom: "-3em",
          
        }}
        className="section-featured-works-div"
      >
         <a href='https://www.behance.net/ibeneme'>

        
        <h3>
          <ImBehance2 
          style={{marginRight:'0.7em'}}/>
         Behance Portfolio
          <BsArrowUpRightCircle
            style={{
              fontSize: "1.3em",

              marginLeft: "0.3em",
            }}
          />
        </h3>
        </a>
      </div>
    
     

      <div
        style={{
          marginBottom: "1em",
          backgroundColor:'#80139B'
        }}
        className="section-featured-works-div"
      >
          <a href='https://ikenna.notion.site/PRODUCT-DESIGNER-9924274e335842609eaf114c3a1bdaec'>
    
        <h3>
          <SiNotion
          style={{marginRight:'0.7em'}} />
         Notion Portfolio
          <BsArrowUpRightCircle
            style={{
              fontSize: "1.3em",

              marginLeft: "0.3em",
            }}
          />
        </h3>
        </a>
      </div>
    
      <br />



      <div className="coding-div">
      <h1>About Me</h1>
          <p style={{ marginTop: "-1em" }}>
            I’m Ibeneme Ikenna Kenneth, a creative &
            Collaborative Product Designer, Passionate about building user-friendly and easy-to-use interfaces. 
            I'm a Well
            organized person, problem solver, strong team player with a high
            attention to detail. Interested in working on innovative projects
            with positive people
          </p>

          <h4 style={{ marginTop: "1.3em" }}>My Design Skills</h4>
          <ul style={{ marginTop: "-1em" }}>
            <li>User Research</li>
            <li>User Journey Mapping</li>
            <li>Wireframing</li>
            <li>UI Designing</li>
            <li>UX Designing</li>
            <li>Prototyping</li>
            <li>Interaction Designing</li>
            <li>Proper Design handoff to Developers</li>
          </ul>

          <h4 style={{ marginTop: "1.3em" }}>Tools I Use</h4>
          <ul style={{ marginTop: "-1em" }}>
            <li>Figma</li>
            <li>Figjam</li>
            <li>Adobe XD</li>
            <li>Invision</li>
            <li> Blender</li>
          </ul>
          <br />
          <br />
          <button className="btn-cv">
          <BsFillArrowUpRightCircleFill 
          style={{
            marginRight:'0.5em'
          }}
          className="icon-arrows lol" />
          View My Resume
         </button>
          <br />
          <br />
          <img className="img-auto" src={profile} alt="profile" />
        {/* <div className="black-div white">
            
          <img className="img-auto" src={profile} alt="profile" />
        </div> */}
       
        {/* <div className='section-featured-works-div'>
           
           <h3> I wrote codes for
               <FiArrowDownCircle 
               style={{fontSize: '1.3em', marginLeft:'0.3em'}} /></h3>
       </div>

        
       <br />
    <a href='https://shoppermans-ecommerce-react-store.vercel.app'>
        <div className='black-div'>
            <div>
            <h3>Shoppermans Ecommerce Web</h3>
            <span><p className='description-paragraph'>React Js || CSS || HTML </p></span>
            </div>
            <div>
                <p
                style={{
                    alignItems:'center',
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'space-between',
                    gap:'1em',
                    backgroundColor: '#ffffff45',
                    padding:"0.6em 01.2em",
                    borderRadius:"22em",
                    width: 'fit-content'
                }}> View Site<BsFillArrowUpRightCircleFill className='icon-arrow' /></p>
            </div>
        </div>
    </a>
    <a href='https://passcoder.io'>
        <div className='black-div'>
            <div>
            <h3>Passcoder Landing Page</h3>
            <span><p
            className='description-paragraph'> React Js || CSS || HTML </p></span>
            </div>
            <div>
                <p
                style={{
                    width: 'fit-content',
                    alignItems:'center',
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'space-between',
                    gap:'1em',
                    backgroundColor: '#ffffff45',
                    padding:"0.6em 01.2em",
                    borderRadius:"22em",
                }}> View Site<BsFillArrowUpRightCircleFill className='icon-arrow' /></p>
            </div>
        </div>
    </a>
    <a href='https://chat-gpt-using-javascript-sand.vercel.app'>
        <div className='black-div'>
            <div>
            <h3>Chat GPT Clone</h3>
            <span><p
            className='description-paragraph'>OpenAI API || Express Js || React Js  </p></span>
            </div>
            <div>
                <p
                style={{
                    width: 'fit-content',
                    alignItems:'center',
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'space-between',
                    gap:'1em',
                    backgroundColor: '#ffffff45',
                    padding:"0.6em 01.2em",
                    borderRadius:"22em",
                }}> View Site<BsFillArrowUpRightCircleFill className='icon-arrow' /></p>
            </div>
        </div>
    </a> */}
        
      
       </div>
          <br />
          <br /> <br />
          <h3>Let's Connect</h3>
          {/*        
       <a href='https://twitter.com/ibeneme_ikenna'>
       <div className='details-me'>
        <h4>
        <AiFillTwitterCircle className='icon-arrows'/>
         Let's meet at Twitter</h4>
       <span> 
       <BsFillArrowUpRightCircleFill className='icon-arrows' />
      
        </span>  </div>
        </a>

        <a href='https://www.linkedin.com/in/ibeneme'>
       <div className='details-me'>
        <h4>
        <BsLinkedin  className='icon-arrows'/>
         Bing me on LinkedIn</h4>
       <span> 
       <BsFillArrowUpRightCircleFill className='icon-arrows' />
      
        </span>  </div>
        </a> */}

          <a href="https://www.buymeacoffee.com/ibenemeikenna">
            <div className="details-me">
              <h4>
                <SiBuymeacoffee className="icon-arrows" />
                Buy Me a Coffee
              </h4>
              <span>
                <BsFillArrowUpRightCircleFill className="icon-arrows" />
              </span>{" "}
            </div>
          </a>

          <a href="https://ikenna.notion.site/PRODUCT-DESIGNER-9924274e335842609eaf114c3a1bdaec">
            <div className="details-me">
              <h4>
                <RxNotionLogo className="icon-arrows" />
                View Notion
              </h4>
              <span>
                <BsFillArrowUpRightCircleFill className="icon-arrows" />
              </span>{" "}
            </div>
          </a>

          {/* <a href='https://github.com/Ibeneme'>
       <div className='details-me'>
        <h4>
        <BsGithub  className='icon-arrows'/>
         View my Github</h4>
       <span> 
       <BsFillArrowUpRightCircleFill className='icon-arrows' />
      
        </span>  </div>
        </a>
 */}

          <a href="Mailto:Ibenemeikenna2021@gmail.com">
            <div
              style={{ color: "white", backgroundColor: "black" }}
              className="details-me blackkk"
            >
              <h4>
                <MdEmail className="icon-arrows" />
                Send me a Mail
              </h4>
              <span>
                <BsFillArrowUpRightCircleFill className="icon-arrows" />
              </span>{" "}
            </div>
          </a>
          {/* <a href='https://wa.link/70sz29'>
       <div className='details-me'>
        <h4>
        <IoLogoWhatsapp className='icon-arrows'/>
         WhatsApp</h4>
       <span> 
       <BsFillArrowUpRightCircleFill className='icon-arrows' />
      
        </span>  </div>
        </a>
 */}
   
        <br />
        
        {/* <div  className='black-div white'>
        <h1>Working Experience</h1>
        <h3> - 2023</h3>
        <p style={{marginTop:"-1em"}}>
            Product Designer || Frontend Developer || Product Manager at Monetyze - Remote
            <br />
        <p>(January 2023 - March 2023)</p>
     </p>
        <h3> - 2023</h3>
        <p style={{marginTop:"-1em"}}>
            Product Designer & Frontend Developer at Passcoder.io - Remote
            <br />
        <p>(January 2023 - March 2023)</p>
     </p>

<h3> - 2022</h3>
        <p style={{marginTop:"-1em"}}>
            Frontend Developer at Hydra.io - Remote
            <br />
        <p>(December 2022 - March 2023)</p>
     </p>

     <h3> - 2022</h3>
        <p style={{marginTop:"-1em"}}>
            Product Designer at Kiko LLC - Remote
            <br />
        <p>(November 2022 - Recent)</p>
     </p>
   
     <h3> - 2021</h3>
        <p style={{marginTop:"-1em"}}>
            Product Designer at The Roothub - Hybrid
            <br />
        <p>(November 2021 - November 2022)</p>
     </p>


    </div> */}
       
      
    </section>
  );
};

export default Hero;
