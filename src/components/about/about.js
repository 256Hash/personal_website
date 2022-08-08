import "./about.css"
import ETHNYC from "../../img/EthNYC.png";
import Profile from "../../img/profile.png";
import EthGlobal from "../../img/EthGlobalLogo.jpg"


const About = ()=>{
    return(
        <div className="about">
            
            <div className="about-left">
                <div className="about-card bg">

                </div>
                <div className="about-card">
                    <img src={EthGlobal} className="about-img"></img>
                </div>
            </div>
            <div className="about-right">
                <h1 className="about-title">About me</h1>
                <p className="about-sub">I have participated in many hackathons, including Graph Hack and ETH NYC</p>
                <p className="about-desc">I enjoy the process of collaborating with teamates to build a cool product while at the same time contributing to the web3 revolution.
                </p>
                <div className="about-award">
                    <img src={ETHNYC} className="about-award-img"></img>
                    <div className="about-award-desc">
                    <h3 className="about-award-desc-title">ETH NYC 2022 Hackathon Winner</h3>
                    <ul>
                    <li>Gnosis Chain 1st</li>
                    <li>Wallet Connect 1st</li>
                    </ul>
                    
                    </div>
          
                </div>
            </div>
        </div>
    )
}

export default About