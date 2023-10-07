import React from "react";

import { Container, Navbar, Nav, Button } from "react-bootstrap";

import { NavLink } from "react-router-dom";

const NavbarReact = (props) => {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand className="col-md-3">
            <NavLink
              style={{ color: "#ffffff", textDecoration: "none" }}
              to="/home"
            >
              Nandawana Store
            </NavLink>
          </Navbar.Brand>
          <Nav className="col-md-5 justify-content-center">
            <Nav.Link>
              {" "}
              <NavLink
                to="/home"
                style={{ color: "#ffffff", textDecoration: "none" }}
              >
                Home
              </NavLink>{" "}
            </Nav.Link>
            <Nav.Link>
              {" "}
              <NavLink
                to="/store"
                style={{ color: "#ffffff", textDecoration: "none" }}
              >
                Store
              </NavLink>{" "}
            </Nav.Link>
            <Nav.Link>
              {" "}
              <NavLink
                to="/about"
                style={{ color: "#ffffff", textDecoration: "none" }}
              >
                About
              </NavLink>{" "}
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to="/contact-us"
                style={{ color: "#ffffff", textDecoration: "none" }}
              >
                Contact Us
              </NavLink>
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
