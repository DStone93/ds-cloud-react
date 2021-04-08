import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import "./style.scss";

export function HeaderNav(props: {}) {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      collapseOnSelect
      // expand="md"
      className="navbarBG"
    >
      <Navbar.Toggle />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <li>
            <a href="#landingPage"> Derrick Stone </a>
          </li>
          <li>
            <a href="#intro2"> Page 2 </a>
          </li>
          <li>
            <a href="#contactPage"> Contact </a>
          </li>
        </Nav>
        {/* <Nav className="navButtons">
            <LinkContainer to="/intro2">
              <Nav.Link>Projects</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/profile" className="navContact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav> */}
      </Navbar.Collapse>
    </Navbar>
  );
}
