import React, { useContext } from "react";

import { Container, Navbar, Nav, Button } from "react-bootstrap";

import { NavLink } from "react-router-dom";
import AuthContext from "../../store/Auth-context";
import "./Navbar.css";

const NavbarReact = (props) => {
  const authCtx = useContext(AuthContext);
  const logoutHandler = () => {
    authCtx.logout();
  };
  const isLogin = authCtx.isLogin;
  return (
    <>
      <Navbar className="mainDiv">
        <Container>
          <Navbar.Brand className="col-md-3">
            <NavLink className="brand" to="/home">
              Nandawana Store
            </NavLink>
          </Navbar.Brand>
          <Nav className="col-md-5 justify-content-center">
            {isLogin && (
              <Nav.Link>
                {" "}
                <NavLink className="nav" to="/home">
                  Home
                </NavLink>{" "}
              </Nav.Link>
            )}
            {isLogin && (
              <Nav.Link>
                {" "}
                <NavLink className="nav" to="/store">
                  Store
                </NavLink>{" "}
              </Nav.Link>
            )}
            {isLogin && (
              <Nav.Link>
                {" "}
                <NavLink className="nav" to="/about">
                  About
                </NavLink>{" "}
              </Nav.Link>
            )}
            {isLogin && (
              <Nav.Link>
                <NavLink className="nav" to="/contact-us">
                  Contact Us
                </NavLink>
              </Nav.Link>
            )}
            {!isLogin && (
              <Nav.Link>
                <NavLink className="nav" to="/login">
                  Login
                </NavLink>
              </Nav.Link>
            )}
            {isLogin && (
              <Nav.Link>
                <Button
                  variant="link"
                  className="logoutBtn"
                  onClick={logoutHandler}
                >
                  Logout
                </Button>
              </Nav.Link>
            )}
            {/* <Nav.Link Link="/home">Home</Nav.Link>
            <Nav.Link Link="/store">Store</Nav.Link>
            <Nav.Link Link="/about">About</Nav.Link> */}
          </Nav>
          {isLogin && (
            <Nav className="col-md-4 justify-content-end">
              <Button onClick={props.onShowCart} variant="secondary">
                Cart
              </Button>
            </Nav>
          )}
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarReact;
