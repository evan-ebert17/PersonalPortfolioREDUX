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
import GithubIcon from "../../assets/githubimg.png"

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
        <img src="" alt="" className="image" style={{ width: "100%" }} />
        <div className="middle">
          <div className="text">
          <a alt="FitnessTracker Github" target="_blank" href="https://github.com/evan-ebert17/Fitness-Tracker"><img src={GithubIcon} className="github"></img></a>
          </div>
        </div>

      </div>

      <div className="container">
        <img src="" alt="" className="image" style={{ width: "100%" }} />
        <div className="middle">
          <div className="text">
          <a alt="Portfolio Github" target="_blank" href="https://github.com/mwallis5110/React_Portfolio_Generator"><img src={GithubIcon} className="github"></img></a>
          </div>
        </div>

      </div>
      <div className="container">
        <img src="" alt="" className="image" style={{ width: "100%" }} />
        <div className="middle">
          <div className="text">
          <a alt="Portfolio Github" target="_blank" href="https://github.com/mwallis5110/React_Portfolio_Generator"><img src={GithubIcon} className="github"></img></a>
          </div>
        </div>

      </div>

      <div className="container">
        <img src="" alt="" className="image" style={{ width: "100%" }} />
        <div className="middle">
          <div className="text">
          <a alt="Portfolio Github" target="_blank" href="https://github.com/mwallis5110/React_Portfolio_Generator"><img src={GithubIcon} className="github"></img></a>
          </div>
        </div>

      </div>

    </div>
  );
}
