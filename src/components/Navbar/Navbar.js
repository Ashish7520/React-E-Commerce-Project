import React from "react";

import { Container, Navbar, Nav, Button } from "react-bootstrap";

const NavbarReact = (props) => {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand className="col-md-3" href="#home">
            My Website
          </Navbar.Brand>
          <Nav className="col-md-5 justify-content-center">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#store">Store</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
          <Nav className="col-md-4 justify-content-end">
            <Button
              onClick={props.onShowCart}
              variant="secondary"
              href="#carts"
            >
              Cart
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarReact;
