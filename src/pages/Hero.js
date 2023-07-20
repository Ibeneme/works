import React from "react";
import "./Hero.css";
import { SiBuymeacoffee, SiNotion } from "react-icons/si";
// import {IoLogoWhatsapp} from 'react-icons/io'
import { MdEmail } from "react-icons/md";
import { RxNotionLogo } from "react-icons/rx";
import { BsGithub } from "react-icons/bs";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { ImBehance2 } from "react-icons/im";
// import notion from "./images/logos_notion-icon.png";

import CSS from "./images/CSS3.png";
import Html from "./images/Html 5.png";
import js from "./images/JavaScript.png";
import ReactJs from "./images/React.png";

import { FiArrowDownCircle } from "react-icons/fi";
import Figma from "./images/Figma.png";
import { FaGithubAlt, FaLocationArrow } from "react-icons/fa";
// import kiko from "./images/kiko llc.png";
// import svg from "./images/hydra-web.png";
// import Alphabetz from "./images/alphab.png";
// import image from "./images/hydra-mobile.png";
import profile from "./images/newwww.png";
// import not from './images/notion.png'
// import BETT from './images/bEHANCE.png'
// import gf from "./images/Google Forms.png";
// import gd from "./images/Google Docs.png";
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
        <h4 className="ikenna">Frontend Developer </h4>
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
              A Creative Frontend Developer - React Js || JavaScript || Redux ||
              Next js
            </p>
            <a href="https://github.com/Ibeneme">
              <button
                style={{
                  height: "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "43em",
                  textAlign: "left",
                }}
                className="button-resume"
              >
                View my Github
              </button>
            </a>
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
      <br />
      <div className="works-on">
        <span className="works-on-span">
          <p>Mastery at</p>
          <FaLocationArrow style={{ color: "#80139B" }} />
        </span>
        <img className="hero-img" src={CSS} alt="xd" />
        <img className="hero-img" src={Html} alt="xd" />
        <img className="hero-img" src={js} alt="xd" />
        <img className="hero-img" src={ReactJs} alt="xd" />

        {/* <img className="hero-img" src={Figma} alt="xd" />
        <img className="hero-img" src={xd} alt="xd" />
        {/* <img className="hero-img" src={aa} alt='xd'/>
               <img className="hero-img" src={ap} alt='xd'/> 
        <img className="hero-img" src={gf} alt="xd" />
        <img className="hero-img" src={gd} alt="xd" /> */}

        {/* <img className="hero-img" src={Redux} alt='xd'/> 
               <img className="hero-img" src={Xd} alt='xd'/>  */}
        {/* <img className="hero-img" src={CSS} alt='xd'/>
               <img className="hero-img" src={Html} alt='xd'/>
               <img className="hero-img" src={js} alt='xd'/>
               <img className="hero-img" src={ReactJs} alt='xd'/>  */}
      </div>
      <br />
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
            Featured Projects
            <FiArrowDownCircle
              style={{ fontSize: "1.3em", marginLeft: "0.3em" }}
            />
          </h3>
        </div>
        
        <div className="section-works">
          <a href="https://mono.co">
            <div
              className="details-me"
              style={{
                backgroundColor: "black",
                color: "white",
              }}
            >
              <h4>Mono.co Landing Page - African Fintech</h4>
              <span>
                <BsFillArrowUpRightCircleFill className="icon-arrows" />
              </span>{" "}
            </div>
          </a>
          <a href="https://app.mono.co">
            <div className="details-me"   style={{
            backgroundColor: "black",
            marginTop:'0em',
            color: "white",
          }}>
              <h4>Mono.co Web App- African Fintech</h4>
              <span>
                <BsFillArrowUpRightCircleFill className="icon-arrows" />
              </span>{" "}
            </div>
          </a>
          <a href="https://acadaboo.com">
            <div className="details-me"   style={{
            backgroundColor: "black",
            marginTop:'0em',
            color: "white",
          }}>
              <h4>Acadaboo Landing Page - Nigeria Student Site</h4>
              <span>
                <BsFillArrowUpRightCircleFill className="icon-arrows" />
              </span>{" "}
            </div>
          </a>
          <a href="https://acadaboo.com/login">
            <div className="details-me"   style={{
            backgroundColor: "black",
            marginTop:'0em',
            color: "white",
          }}>
              <h4>Acadaboo Web Application - Nigeria Student Site</h4>
              <span>
                <BsFillArrowUpRightCircleFill className="icon-arrows" />
              </span>{" "}
            </div>
          </a>
          <a href="https://passcoder.io">
            <div className="details-me"   style={{
            backgroundColor: "black",
            marginTop:'0em',
            color: "white",
          }}>
              <h4>Passcoder Landing Page - Nigeria Identity Startup</h4>
              <span>
                <BsFillArrowUpRightCircleFill className="icon-arrows" />
              </span>{" "}
            </div>
          </a>

          <a href="https://shoppermans-ecommerce-react-store.vercel.app">
            <div className="details-me"   style={{
            backgroundColor: "black",
            marginTop:'0em',
            color: "white",
          }}>
              <h4>My Personal E-commerce Shopping Project</h4>
              <span>
                <BsFillArrowUpRightCircleFill className="icon-arrows" />
              </span>{" "}
            </div>
          </a>
          {/* <a href="https://mono.co" target="_blank" rel="noopener noreferrer">
            <div className="section-image-and-content">
              <div className="section-imge"></div>

              <div className="section-works-contents">
                <h3 style={{ color: "black" }}>Mono.com Website and Web App</h3>
                <p></p>
              </div>
            </div>
          </a>
          <div className="section-image-and-content">
            <iframe
              className="iframes"
              src="https://shoppermans-ecommerce-react-store.vercel.app"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              width="100%"
              height="200px"
            ></iframe>
            <div className="section-works-contents">
              <h3 style={{ marginBottom: "-0.7em" }}>Hydra Desktop App</h3>
            </div>
          </div>
          <div className="section-image-and-content">
            <iframe
              className="iframes"
              src="https://shoppermans-ecommerce-react-store.vercel.app"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              width="100%"
              height="200px"
            ></iframe>
            <div className="section-works-contents">
              <h3 style={{ marginBottom: "-0.7em" }}>Kiko LLC Mobile App</h3>
              <p></p>
            </div>
          </div>

          <div
            className="section-image-and-content"
            onClick={(e) => navigate("/alphabetz")}
          >
            <img className="section-imge" src={Alphabetz} alt="svg" />

            <div className="section-works-contents">
              <h3 style={{ marginBottom: "-0.7em" }}>Alphabetz Mobile</h3>
              <p>
                Designs for a mobile application that enables users generate a
                resume, style a resume or use custom editable resume for free
              </p>
            </div>
          </div> */}
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
      {/* <div
        style={{
          marginBottom: "-3em",
        }}
        className="section-featured-works-div"
      >
        <a href="https://www.behance.net/ibeneme">
          <h3>
            <ImBehance2 style={{ marginRight: "0.7em" }} />
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
          backgroundColor: "#80139B",
        }}
        className="section-featured-works-div"
      >
        <a href="https://ikenna.notion.site/PRODUCT-DESIGNER-9924274e335842609eaf114c3a1bdaec">
          <h3>
            <SiNotion style={{ marginRight: "0.7em" }} />
            Notion Portfolio
            <BsArrowUpRightCircle
              style={{
                fontSize: "1.3em",

                marginLeft: "0.3em",
              }}
            />
          </h3>
        </a>
      </div> */}
      <br />
      <div className="coding-div">
        <h1>About Me</h1>
        <p style={{ marginTop: "-1em" }}>
          I’m Ibeneme Ikenna Kenneth, a creative & Collaborative Frontend
          Developer seasoned in Javascript and Javascript Libraries ( React Js
          || Redux || Next Js )
          <br /> <br />
          Passionate about building user-friendly and easy-to-use interfaces.
          I'm a Well organized person, problem solver, strong team player with a
          high attention to detail. Interested in working on innovative projects
          with positive people
        </p>

        <h4 style={{ marginTop: "1.3em" }}>Languages and Libraries I Use</h4>
        <ul style={{ marginTop: "-1em" }}>
          <li>React Js</li>
          <li>Redux and Redux Toolkit</li>
          <li>Next Js</li>
          <li>JavaScript</li>
          <li>Tailwind and Bootstrap</li>
          <li>Html & CSS</li>
        </ul>

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
      <a href="https://github.com/Ibeneme">
        <div className="details-me">
          <h4>
            <BsGithub className="icon-arrows" />
            View my Github
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
      <div
        className="black-div white"
        style={{
          display: "flex",
          flexDirection: "column",
          paddingTop: "-16em",
        }}
      >
        <h1>Working Experience</h1>
        <h3> - 2023</h3>
        <p style={{ marginTop: "-1em" }}>
          Frontend Developer || Product Designer at Antigravitygroup - Hybrid
          <br />
          <p>(April 2023 - Recent)</p>
        </p>
        <h3> - 2023</h3>
        <p style={{ marginTop: "-1em" }}>
          Frontend Developer || Product Manager at Monetyze - Remote
          <br />
          <p>(January 2023 - June 2023)</p>
        </p>
        <h3> - 2022</h3>
        <p style={{ marginTop: "-1em" }}>
          Frontend Developer at Passcoder.io - Remote
          <br />
          <p>(January 2022 - March 2023)</p>
        </p>

        <h3> - 2021</h3>
        <p style={{ marginTop: "-1em" }}>
          Frontend Developer at Hydra.io - Remote
          <br />
          <p>(December 2021 - August 2022)</p>
        </p>

        <h3> - 2021</h3>
        <p style={{ marginTop: "-1em" }}>
          Frontend Developer at Kiko LLC - Remote
          <br />
          <p>(November 2021 - March 2022)</p>
        </p>
      </div>
    </section>
  );
};

export default Hero;
