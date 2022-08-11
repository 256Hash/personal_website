import "./intro.css"
import Profile from "../../img/astronaut.png";

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
                            <div className="intro-title-item">Web Developer</div>
                            <div className="intro-title-item">UI/UX Designer</div>
                        </div>
                    </div>
                    <div className="intro-desc"> I contribute to open-source web3 projects, compete in hackathons, and am constantly learning! </div>
   
                </div>
            
            </div>

            <div className="intro-right">
                <img className="intro-image" src={Profile}></img>
            </div>
        </div>
    )



}

export default Intro