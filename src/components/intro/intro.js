import "./intro.css"
import Profile from "../../img/astronaut.png";
import Solidity from "../../img/Solidity.png"
import Javascript from "../../img/Javascript.webp"
import Python from "../../img/Python.png"

import React from "../../img/React.png"
import TheGraph from "../../img/TheGraph.png"
import Hardhat from "../../img/Hardhat.png"
import Chainlink from "../../img/Chainlink.png"

const Intro = () =>{
  
    return(
        <div className="intro">
            <div className="intro-left">
                <div className="intro-left-wrapper">
                    <h2 className="intro-intro">
                        Hello, my name is
                    </h2>
                    <h1 className="intro-name">Blue Glaucus</h1>
                    <div className="intro-title">
                        <div className="intro-title-wrapper">
                            <div className="intro-title-item">Solidity Developer</div>
                            <div className="intro-title-item">Web3 Developer</div>
                            <div className="intro-title-item">FullStack Developer</div>
                        </div>
                    </div>
                    <div className="intro-desc"> I contribute to open-source web3 projects, compete in hackathons, and am constantly learning! </div>

                    
                    <div className="intro-skills-wrapper">
                    <div className="intro-skills-desc"><b>Languages 👨‍🎨</b></div>

                    <div className="intro-skills">
                      <img src={Solidity} className="intro-img"></img>
                      <img src={Javascript} className="intro-img"></img>
                      <img src={Python} className="intro-img"></img>

                    </div>
                    <div className="intro-skills-desc"><b>Frameworks/Tools 🛠</b></div>

                    <div className="intro-skills">
                      <img src={React} className="intro-img"></img>
                      <img src={TheGraph} className="intro-img"></img>
                      <img src={Chainlink} className="intro-img"></img>

                      <img src={Hardhat} className="intro-img"></img>

                    </div>
                    </div>
                
   
                </div>
      
            
            </div>

            <div className="intro-right">
              <div className="glare">
              <img className="intro-image" src={Profile}></img>

              </div>
          
            </div>
        </div>
    )



}

export default Intro