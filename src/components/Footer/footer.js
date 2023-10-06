import React from "react";

import Youtube from "../Assets/youtube.png";
import spotify from "../Assets/spotify.png";
import facebook from "../Assets/facebook.png";

import "./footer.css";
import { Container, Row, Col, Image } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="mt-2">
          <Col xs={9}>My-Ecommerce APP</Col>
          <Col>
            <Image className="img" src={Youtube} roundedCircle />
          </Col>
          <Col>
            <Image className="img" src={spotify} roundedCircle />
          </Col>
          <Col>
            <Image className="img" src={facebook} roundedCircle />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
