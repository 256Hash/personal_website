import "./about.css"

import Planet from "../../img/planet.png"

import GraphHack from "../../img/GraphHack.png"
import ETHNYC from "../../img/EthNYC.png";
import HackFS from "../../img/HackFS.png"

import Buildspace from "../../img/Buildspace.png"
import DeveloperDao from "../../img/DeveloperDao.png"




const About = ()=>{
    return(
        <div className="about">
                            <div className="about-bg"/>

            <div className="about-left">
                <div className="about-card bg">

                </div>
                <div className="about-card">
                    <img src={Planet} className="about-img"></img>
                </div>
            </div>
            <div className="about-right">
                <h1 className="about-title">About me ☄️</h1>
                <p className="about-sub"><b>I am a web3 developer and advocate, joining the space for around a year.</b></p>
                <p className="about-desc">
                I have participated in many hackathons, including Graph Hack and ETH NYC. I enjoy the process of collaborating with teamates to build a cool product while at the same time contributing to the web3 revolution! <b>You can see some hack submissions below.</b>
                </p>
                <p className="about-desc">Some of my interests include experimenting with <b>flasloans</b> on ethereum, working on more sustainable <b>DAO tooling</b> and governance mechanisms, and building <b>public goods.</b>
</p>
                <h1 >Hackathons </h1>
                <div className="about-award hackathons">
                    <a href="https://thegraph.com/graph-hack/2022/" target="_blank"><img src={GraphHack} className="about-award-img"></img></a>

                    <a href="https://ethglobal.com/showcase/messageinabottle-y6o6k" target="_blank"><img src={ETHNYC} className="about-award-img"></img></a>

                    <a href="https://ethglobal.com/showcase/fireside-chat-8zj5z" target="_blank"><img src={HackFS} className="about-award-img"></img></a>


                    {/* <h3 className="about-award-desc-title">ETH NYC 2022 Hackathon Winner</h3> */}
                </div>
                <h1>Communities</h1>
                <div className="about-award communities">
                    <a href="https://buildspace.so/@hash" target="_blank"><img src={Buildspace} className="about-award-img buildspace"></img></a>

                    <a href="https://www.developerdao.com" target="_blank"><img src={DeveloperDao} className="about-award-img"></img></a>



                    {/* <h3 className="about-award-desc-title">ETH NYC 2022 Hackathon Winner</h3> */}
                </div>

          
               
            </div>
        </div>
    )
}

export default About