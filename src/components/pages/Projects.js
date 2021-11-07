import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { } from "react-bootstrap";
import Proj3img from "../../assets/proj3.png";
import Container from "react-bootstrap/Container"
import Proj2img from "../../assets/proj2.png";
import FitnessT from "../../assets/FitnessT.png";
import GithubIcon from "../../assets/githubimg.png";
import Gost from "../../assets/textbasedag.png";
import WorkSched from "../../assets/workdaysched.png";
import Ecommerce from "../../assets/ecommerceBackend.png";
import Particles from 'react-particles-js';


export default function Projects() {
  return (

    <div>
      <div className="particlesDiv">
        <Particles params={{ particles: { number: { value: 70, density: { enable: true, value_area: 1000, } }, }, }} /></div>
      <h1 className="porjHead">Projects</h1>

      <Container className="profCont">
        <img src={Proj3img} alt="React Portfolio Generator" className="image" style={{ width: "100%" }} />
        <div className="middle">
          <div className="text">
            <a target="_blank" rel="noreferrer" href="https://github.com/mwallis5110/React_Portfolio_Generator"><img src={GithubIcon} alt="Portfolio Github" className="github"></img></a>
          </div>
        </div>
      </Container>

      <Container className="profCont">
        <img src={Proj2img} alt="Windows 95 Emulator" className="image" style={{ width: "100%" }} />
        <div className="middle">
          <div className="text">
            <a target="_blank" rel="noreferrer" href="https://github.com/Jguiro09/Windows-95"><img src={GithubIcon} alt="Windows 95 Github" className="github"></img></a>
          </div>
        </div>

      </Container>

      <Container className="profCont">
        <img src={FitnessT} alt="Fitness Tracker" className="image" style={{ width: "100%" }} />
        <div className="middle">
          <div className="text">
            <a target="_blank" rel="noreferrer" href="https://github.com/evan-ebert17/Fitness-Tracker"><img alt="FitnessTracker Github" src={GithubIcon} className="github"></img></a>
          </div>
        </div>

      </Container>

      <Container className="profCont">
        <img src={Gost} alt="Text Based Adventure Game: Gost" className="image" style={{ width: "100%" }} />
        <div className="middle">
          <div className="text">
            <a target="_blank" rel="noreferrer" href="https://github.com/evan-ebert17/TextBased-Adventure"><img src={GithubIcon} alt="TextBasedGame Github" className="github"></img></a>
          </div>
        </div>

      </Container>
      
      <Container className="profCont">
        <img src={WorkSched} alt="WorkDay Scheduler" className="image" style={{ width: "100%" }} />
        <div className="middle">
          <div className="text">
            <a target="_blank" rel="noreferrer" href="https://github.com/evan-ebert17/Work-Day-Scheduler"><img  src={GithubIcon} alt="Work Day Scheduler" className="github"></img></a>
          </div>
        </div>

      </Container>

      <Container className="profCont">
        <img src={Ecommerce} alt="Ecommerce Backend" className="image" style={{ width: "100%" }} />
        <div className="middle">
          <div className="text">
            <a target="_blank" rel="noreferrer" href="https://github.com/evan-ebert17/Ecommerce"><img src={GithubIcon} alt="Ecommerce Github" className="github"></img></a>
          </div>
        </div>

      </Container>

    </div>
  );
}
