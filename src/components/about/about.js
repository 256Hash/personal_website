import "./about.css"
import ETHNYC from "../../img/EthNYC.png";
import Planet from "../../img/planet.png"



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
                <h1 className="about-title">About me</h1>
                <p className="about-sub">I am a web3 developer and advocate, joining the space for around a year.</p>
                <p className="about-desc">
                I have participated in many hackathons, including Graph Hack and ETH NYC. I enjoy the process of collaborating with teamates to build a cool product while at the same time contributing to the web3 revolution! 
                </p>
                <p className="about-desc">Some of my interests include experimenting flasloans on ethereum, working on more sustainable DAO tooling and governance mechanisms, and building public goods.
</p>
                <h1 >Hackathons </h1>
                <div className="about-award">
                    <a href="https://ethglobal.com/showcase/messageinabottle-y6o6k"><img src={ETHNYC} className="about-award-img"></img></a>
                    <div className="about-award-desc">
                    {/* <h3 className="about-award-desc-title">ETH NYC 2022 Hackathon Winner</h3> */}
                    
             
                    
                    </div>
          
                </div>
            </div>
        </div>
    )
}

export default About