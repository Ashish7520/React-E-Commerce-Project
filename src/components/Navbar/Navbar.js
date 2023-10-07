import React from "react";

import { Container, Navbar, Nav, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

const NavbarReact = (props) => {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand className="col-md-3" href="#home">
            My Website
          </Navbar.Brand>
          <Nav className="col-md-5 justify-content-center">
            <Link to="/home">Home</Link>
            <Link to="/store">Store</Link>
            <Link to="/about">About</Link>
            {/* <Nav.Link Link="/home">Home</Nav.Link>
            <Nav.Link Link="/store">Store</Nav.Link>
            <Nav.Link Link="/about">About</Nav.Link> */}
          </Nav>
          <Nav className="col-md-4 justify-content-end">
            <Button onClick={props.onShowCart} variant="secondary">
              Cart
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarReact;
