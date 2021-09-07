import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'

export default function Home() {
  return (
    <div>
      <Container className="HomeHeader">
        <h1>Home Page</h1>
      </Container>
      <Col>
        <div className="pBorder">
          <p>
            Hi, My name is Evan Ebert and I am a Full MERN Stack Web Developer.
            <br>
            </br>
            I decided to give web development a chance in Spring 2021 going to the <a href="https://techbootcamps.utexas.edu/">UTA Bootcamp</a>
          </p>

        </div>
        </Col>
        <Col>
        </Col>
    </div>
  );
}
