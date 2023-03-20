import React from 'react'
import { AiFillTwitterCircle,  } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import './Hero.css'


const Footer = () => {
  return (
    <div>
        <div>
          <div
            style={{
              backgroundColor: "black",
              color: "white",
            }}
            className="details-me blackk"
          >
          
            <h6>@2023 Ibeneme Ikenna</h6>
            <div>
              <a href="https://github.com/Ibeneme">
                <BsGithub className="icon-arrow" />
              </a>
              <a href="https://twitter.com/ibeneme_ikenna">
                <AiFillTwitterCircle className="icon-arrow" />
              </a>
              <a href="https://www.linkedin.com/in/ibeneme">
                <BsLinkedin className="icon-arrow" />
              </a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer