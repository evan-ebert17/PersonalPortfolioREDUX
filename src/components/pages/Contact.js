import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Particles from 'react-particles-js';

function alertClicked() {
  alert('You clicked the third ListGroupItem');
}
export default function Contact() {
  return (
    <div><div className="particlesDiv">
      <Particles params={{ particles: { number: { value: 70, density: { enable: true, value_area: 1000, } }, }, }} /></div>
      <Container>
        <h1>Contact Page</h1>
        <Row>
          <Col>
            <ListGroup defaultActiveKey="#link1">
              <ListGroup.Item action target="_blank" href="https://github.com/evan-ebert17">
                Github
              </ListGroup.Item>
              <ListGroup.Item action target="_blank" href="https://www.linkedin.com/in/evan-ebert-793b49213">
                LinkedIn
              </ListGroup.Item>
              <ListGroup.Item>
                Email me! evan.ebert17@gmail.com
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
