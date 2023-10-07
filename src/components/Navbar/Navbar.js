import React from "react";

import { Container, Navbar, Nav, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

const NavbarReact = (props) => {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand className="col-md-3">
            <Link
              style={{ color: "#ffffff", textDecoration: "none" }}
              to="/home"
            >
              Nandawana Store
            </Link>
          </Navbar.Brand>
          <Nav className="col-md-5 justify-content-center">
            <Nav.Link>
              {" "}
              <Link
                to="/home"
                style={{ color: "#ffffff", textDecoration: "none" }}
              >
                Home
              </Link>{" "}
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link
                to="/store"
                style={{ color: "#ffffff", textDecoration: "none" }}
              >
                Store
              </Link>{" "}
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link
                to="/about"
                style={{ color: "#ffffff", textDecoration: "none" }}
              >
                About
              </Link>{" "}
            </Nav.Link>
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
