import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Particles from 'react-particles-js';

export default function Home() {
  return (
    <div>
      <div className="particlesDiv">
        <Particles params={{ particles: { number: { value: 70, density: { enable: true, value_area: 1000, } }, }, }} />
      </div>
      <Container className="HomeHeader resWidth">
        <Row className="rowish">
          <h1>Resume</h1>
          <Container className="resumeContainer">
              <iframe
                src="https://docs.google.com/document/d/e/2PACX-1vS38CeAwhk46fr23mge2x9_12p4xqQ-8uIBf6hT-VbMc-M-6pSfPv60MPK5CPDtrepVTNbImXfDXoFU/pub?embedded=true"
                className="resume"
                frameBorder="0"
                scrolling="auto"
              ></iframe>
          </Container>
        </Row>
      </Container>
    </div>
  );
}
