import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Particles from 'react-particles-js';
import Resume from '../../assets/Redone Resume MERN.pdf';

export default function Home() {
  return (
    <div>
      <div className="particlesDiv">
        <Particles params={{ particles: { number: { value: 70, density: { enable: true, value_area: 1000, } }, }, }} />
      </div>
      <Container className="HomeHeader">
        <Row className="rowish">
          <h1>Resume</h1>
        <div className="resumeContainer">
          <div className="resume">
          <embed src={Resume} width="775px" height="2100px" />
          </div>

        </div>
        </Row>
      </Container>
    </div>
  );
}
