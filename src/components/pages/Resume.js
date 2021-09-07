import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'
import Particles from 'react-particles-js';
import Image from 'react-bootstrap/Image'
import Resume from '../../assets/reumsepic.png';

export default function Home() {
  return (
    <div>
      <div className="particlesDiv">
        <Particles params={{ particles: { number: { value: 70, density: { enable: true, value_area: 1000, } }, }, }} />
      </div>
      <Container className="HomeHeader">
        <Row className="rowish">
          <h1>Resume</h1>
          <Col>
            <Image className="resume" src={Resume} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
