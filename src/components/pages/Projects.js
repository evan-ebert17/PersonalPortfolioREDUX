import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { } from "react-bootstrap";
import { Carousel } from 'react-bootstrap';
import Gost from '../../assets/textbasedag.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Proj3img from "../../assets/proj3.png";
import Proj2img from "../../assets/proj2.png";
import FitnessT from "../../assets/FitnessT.png";
import GithubIcon from "../../assets/githubimg.png";
import Gost from "../../assets/textbasedag.png";
import WorkSched from "../../assets/workdaysched.png";
import Ecommerce from "../../assets/ecommerceBackend.png";


export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <div className="container">
        <img src={Proj3img} alt="React Portfolio Generator" className="image" style={{ width: "100%" }} />
        <div className="middle">
          <div className="text">
            <a alt="Portfolio Github" target="_blank" href="https://github.com/mwallis5110/React_Portfolio_Generator"><img src={GithubIcon} className="github"></img></a>
          </div>
        </div>

      </div>

      <div className="container">
        <img src={Proj2img} alt="Windows 95 Emulator" className="image" style={{ width: "100%" }} />
        <div className="middle">
          <div className="text">
          <a alt="Windows 95 Github" target="_blank" href="https://github.com/Jguiro09/Windows-95"><img src={GithubIcon} className="github"></img></a>
          </div>
        </div>

      </div>

      <div className="container">
        <img src={FitnessT}  alt="Fitness Tracker" className="image" style={{ width: "100%" }} />
        <div className="middle">
          <div className="text">
          <a alt="FitnessTracker Github" target="_blank" href="https://github.com/evan-ebert17/Fitness-Tracker"><img src={GithubIcon} className="github"></img></a>
          </div>
        </div>

      </div>

      <div className="container">
        <img src={Gost} alt="Text Based Adventure Game: Gost" className="image" style={{ width: "100%" }} />
        <div className="middle">
          <div className="text">
          <a alt="TextBasedGame Github" target="_blank" href="https://github.com/evan-ebert17/TextBased-Adventure"><img src={GithubIcon} className="github"></img></a>
          </div>
        </div>

      </div>
      <div className="container">
        <img src={WorkSched} alt="WorkDay Scheduler" className="image" style={{ width: "100%" }} />
        <div className="middle">
          <div className="text">
          <a alt="Work Day Scheduler" target="_blank" href="https://github.com/evan-ebert17/Work-Day-Scheduler"><img src={GithubIcon} className="github"></img></a>
          </div>
        </div>

      </div>

      <div className="container">
        <img src={Ecommerce} alt="Ecommerce Backend" className="image" style={{ width: "100%" }} />
        <div className="middle">
          <div className="text">
          <a alt="Ecommerce Github" target="_blank" href="https://github.com/evan-ebert17/Ecommerce"><img src={GithubIcon} className="github"></img></a>
          </div>
        </div>

      </div>

    </div>
  );
}
