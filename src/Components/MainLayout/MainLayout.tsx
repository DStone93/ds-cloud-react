import React, { PropsWithChildren } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './style.scss';
import { HeaderNav } from '../NavBar/NavigationBar'


export function MainLayout(props: PropsWithChildren<{}>) {
  return (
    <>
      <Container className="container">
        <HeaderNav/>
        <Row>
          <Col> {props.children}</Col>
        </Row>
      </Container>
    </>
  );
}