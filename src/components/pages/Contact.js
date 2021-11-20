import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'
// import Email from 'C:/Users/d4ves/Desktop/PortfoliOld/PersonalPortfolioREDUX/src/assets/Portmail.png'
// import Discord from 'C:/Users/d4ves/Desktop/PortfoliOld/PersonalPortfolioREDUX/src/assets/Portscord.png';
// import Instagram from 'C:/Users/d4ves/Desktop/PortfoliOld/PersonalPortfolioREDUX/src/assets/Porstagram.png';
// import Twitter from 'C:/Users/d4ves/Desktop/PortfoliOld/PersonalPortfolioREDUX/src/assets/Portwitter.png';
import Particles from 'react-particles-js';

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
                <i class="fab fa-github-square"></i>
              </ListGroup.Item>
              <ListGroup.Item action target="_blank" href="https://www.linkedin.com/in/evan-ebert-793b49213">
                <i class="fab fa-linkedin"></i>
              </ListGroup.Item>
              <div className="socials">
                <div className="sImg">
                  <a target="_blank" href="mailto:evan.ebert17@gmail.com"><i class="fab fa-twitter-square"></i></a>
                </div>
                <div className="sImg">
                  <a target="_blank" href="https://twitter.com/KuroiMeganeDev"><i class="fab fa-twitter-square"></i></a>
                </div>
                {/* <div className="sImg">
                  <a target="_blank" href=""><img src={Discord} alt="DiscordImg"></img></a>
                </div> */}
                <div className="sImg">
                  <a target="_blank" href="https://www.instagram.com/kuroimeganedev/"><i class="fab fa-instagram-square"></i></a>
                </div>
              </div>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
