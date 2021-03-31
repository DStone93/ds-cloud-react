import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import './style.scss';

export function HeaderNav(props: {}) {
  return (
    <Navbar bg="dark" variant="dark" collapseOnSelect expand="md" className="navContainer">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navFont">
            <LinkContainer exact to="/">
              <Nav.Link>Derrick Stone</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav className="navButtons">
            <LinkContainer to="/articles">
              <Nav.Link>Projects</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/profile" className="navContact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}
