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
      expand="sm"
      className="navbarBG"
    >
      <Navbar.Toggle/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <li>
            <a href="#landingPage"> Derrick Stone </a>
          </li>
          <li>
            <a href="#projects"> Projects </a>
          </li>
          <li>
            <a href="#contactPage"> Contact </a>
          </li>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
