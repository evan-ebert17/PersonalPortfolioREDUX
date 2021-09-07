import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'
import Particles from 'react-particles-js';

export default function Home() {
  return (
    <div>
      <div className="particlesDiv">
        <Particles params={{ particles: { number: { value: 70, density: { enable: true, value_area: 1000, } }, }, }} />
      </div>
      <Container className="HomeHeader">
        <h1>Home Page</h1>
      </Container>
      <Col className="pBg">
        <div className="pBorder">
          <p className="introPara">
            Hi, My name is Evan Ebert and I am a Full MERN Stack Web Developer.
            <br>
            </br>
            I decided to give web development a chance in Spring 2021 going to the <a href="https://techbootcamps.utexas.edu/">UTA Bootcamp</a>.
            I quickly fell in love with web design and now that I have gone this far in the course and soon to be certified, I am excited to see what the future awaits.
            In the mean while, check out my projects page where you can see the projects from my GitHub that I am most proud of, in different ways.
            Certain projects, when done, taught me more about how to get things done than a video ever could, and I am also proud of the finished product.
            Others, and not to say that anything beyond this point I am remotely "unproud" about, are projects I put in my project sections for other reasons, specifically
            The Windows 95 Project and the React Portfolio Generator Project. These two, for me, illustrate the hard work and sweat that comes with working on a team and also
            the satisfaction of, when finished with a product, having been through that process with all of your team-mates, which is certainly special.
            The last sentence is especially powerful to me, because growing up an only child and being the "I work better Alone" type, I had never really experienced TRUE
            collaboration in my life. This bootcamp changed that. During this course I could not be more happy to work with my colleagues to produce a product
            we were all truly proud to present and, given more time, I believe would really turn into something special.
          </p>


        </div>
      </Col>
      <Col>
      </Col>
    </div>
  );
}
