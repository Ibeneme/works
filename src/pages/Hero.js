import React from "react";
 import "./Hero.css";
 import {SiBuymeacoffee} from 'react-icons/si'
// import {IoLogoWhatsapp} from 'react-icons/io'
import {MdEmail} from 'react-icons/md'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {RxNotionLogo} from 'react-icons/rx'
import {BsGithub, BsLinkedin} from 'react-icons/bs'
import {BsFillArrowUpRightCircleFill} from 'react-icons/bs'
//  import {MdDashboard} from 'react-icons/md'

 import CSS from './images/CSS3.png'
  import Html from './images/Html 5.png'
 import js from './images/JavaScript.png'
  import ReactJs from './images/React.png'
 import {FiArrowDownCircle} from 'react-icons/fi' 
  import Figma from './images/Figma.png'
import {FaLocationArrow} from 'react-icons/fa' 
import kiko from './images/kiko llc.png'
import svg from './images/hydra-web.png'
import Alphabetz from './images/alphab.png'
import image from './images/hydra-mobile.png'
import profile from './images/newwww.png'



const Hero = () => {
         
  return (
    <section className="first-section">
     <nav className="navbar-div">
       <h4 className="ikenna">Ibeneme </h4> 
        {/* <h4 className="first-sliddo">My Resume</h4>*/}
      </nav> 


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
                 <img className="hero-img" src={Redux} alt='xd'/> 
            </div>
          </div>
        </div> */}
      
      </div>
      <div className="works-on">
        <span className="works-on-span">
            <p>Mastery at</p>
            <FaLocationArrow
            style={{color:'orangered'}} />
        </span>
               
               <img className="hero-img" src={Figma} alt='xd'/>
               {/* <img className="hero-img" src={Redux} alt='xd'/> 
               <img className="hero-img" src={Xd} alt='xd'/>  */}
               <img className="hero-img" src={CSS} alt='xd'/>
               <img className="hero-img" src={Html} alt='xd'/>
               <img className="hero-img" src={js} alt='xd'/>
               <img className="hero-img" src={ReactJs} alt='xd'/> 

           </div>
      <div className='section-featured-works'>
      <br />
          
            <br />
            <br />
        <div className='section-featured-works-div'>
           
            <h3>Featured Design Projects 
                <FiArrowDownCircle 
                style={{fontSize: '1.3em', marginLeft:'0.3em'}} /></h3>
        </div>
        <div className='section-works'>
            <div className='section-image-and-content'
           >
                <img className='section-imge' src={image} alt='svg'/>
                
                <div className='section-works-contents'>
                    <h4 className="section-works-contents-orange">Hydra Mobile App</h4>
                 
                </div>
            </div>
            <div
             className='section-image-and-content'>
                <img className='section-imge' src={svg} alt='svg'/>
                <div className='section-works-contents'>
                    <h4 className="section-works-contents-h4">Hydra Desktop App</h4>
                 
                </div>
            </div>
            <div className='section-image-and-content'
            
            >
                <img className='section-imge' src={kiko} alt='svg'/> 
                <div className='section-works-contents'>
                    <h4 className="section-works-contents-blue">Kiko LLC Mobile App</h4>
                 
                </div>
            </div>


            <div className='section-image-and-content'
            >
                <img className='section-imge' src={Alphabetz} alt='svg'/>
                 
                <div className='section-works-contents'>
                <h4 className="section-works-contents-light">Alphabetz Resume Generator</h4>

                 
                </div>
            </div>
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
    <div className='coding-div'>

    <div className='section-featured-works-div'>
           
           <h3>Projects I wrote codes for
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
    </a>
    <br />  <br />  <br />
    <div  className='black-div white'>
        <h1>About Me</h1>
        <p style={{marginTop:"-1em"}}>
        I’m Ibeneme Ikenna Kenneth, a creative Product Designer & Collaborative Frontend Developer,
        Passionate about building and implementing user-friendly and easy-to-use interfaces.
        I'm a Well organized person, problem solver, strong team player with a high attention to detail.
       Interested in working on innovative projects with positive people

        </p>
        <button className='btn-cv'>
            View My Resume
        </button>
        <br />
        <img 
       className="img-auto"
       src={profile} alt='profile'/> 

  
  
    </div>
<div>

<br />
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

       <a href='https://www.buymeacoffee.com/ibenemeikenna'>
       <div className='details-me'>
        <h4>
        <SiBuymeacoffee  className='icon-arrows'/>
         Buy Me a Coffee</h4>
       <span> 
       <BsFillArrowUpRightCircleFill className='icon-arrows' />
      
        </span>  </div>
        </a>

        <a href='https://ikenna.notion.site/PRODUCT-DESIGNER-9924274e335842609eaf114c3a1bdaec'>
       <div className='details-me'>
        <h4>
        <RxNotionLogo className='icon-arrows'/>
         View Notion</h4>
       <span> 
       <BsFillArrowUpRightCircleFill className='icon-arrows' />
      
        </span>  </div>
        </a>

        <a href='https://github.com/Ibeneme'>
       <div className='details-me'>
        <h4>
        <BsGithub  className='icon-arrows'/>
         View my Github</h4>
       <span> 
       <BsFillArrowUpRightCircleFill className='icon-arrows' />
      
        </span>  </div>
        </a>


        <a href='Mailto:Ibenemeikenna2021@gmail.com'>
       <div 
       style={{color:'white', backgroundColor:'black'}} className='details-me blackkk'>
        <h4>
        <MdEmail  className='icon-arrows'/>
         Send me a Mail</h4>
       <span> 
       <BsFillArrowUpRightCircleFill className='icon-arrows' />
      
        </span>  </div>
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
 */}</div>
    <br /> 
    <div>
       
    </div>
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
    <div>
        
       <div  style={{
         backgroundColor:'black',
         color:'white'}}
       className='details-me blackk'>
                <h5  className='details-meh'>
                    Website Built by Ibeneme Ikenna
                </h5>
                <h6>@2023 ibeneme.netlify.com</h6>
                <div>
                <a href='https://github.com/Ibeneme'>
                    <BsGithub  className='icon-arrow' />
                    </a>
                    <a href='https://twitter.com/ibeneme_ikenna'>
                    <AiFillTwitterCircle  className='icon-arrow' />
                    </a>
                    <a href='https://www.linkedin.com/in/ibeneme'>
                    <BsLinkedin className='icon-arrow' />
                    </a>
                </div>
        </div>
       
    </div>
   </div>
    </section>
  );
};

export default Hero;