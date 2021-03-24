import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './style.scss';

export function HeaderNav(props: {}) {


  return (

    <Navbar variant="dark" className="navbarBG" collapseOnSelect expand="md">
      <Nav className="navButtons">
        <LinkContainer exact to="/">
          <Nav.Link>" Derrick Stone "</Nav.Link>
        </LinkContainer>
      </Nav>
     
      <Nav className="navButtons">
      {/* <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link> */}
    </Nav>
    </Navbar>
  );
}
