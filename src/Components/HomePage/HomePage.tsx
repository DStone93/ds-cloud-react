import { Row, Col, Button, Form } from "react-bootstrap";
import { MainLayout } from "../MainLayout/MainLayout";
import "./style.scss";
// import {Hire_Derrick_S} from '../../resume/Hire_Derrick_S'

export function HomePage(props: {}) {
  return (
    <MainLayout>
      <section id="landingPage">
        <div className="dsFeature">
          <h1>Derrick Stone</h1>
          <h4>Junior Software Developer</h4>
        </div>
      </section>

      <section id="intro2">
        <div className="dContainer">
          <button className="button">
            <a
              className="button"
              href="../../resume/Hire_Derrick_S.pdf"
              download="Hire_Derrick_S.pdf"
            >
              Download Resume
            </a>
          </button>
        </div>
      </section>

      <section id="contactPage">
        <div className="contactContainer">
          <Form>
            <Row className="RowSpace">
              <h1>Contact</h1>
              <h5>Under Construction</h5>
            </Row>
            <Row className="RowSpace">
              <Form.Control placeholder="Enter Name"></Form.Control>
            </Row>
            <Row className="RowSpace">
              <Form.Control placeholder="Enter E-mail"></Form.Control>
            </Row>
            <Row className="RowSpace">
              <Form.Control
                className="cOMessage"
                placeholder="Enter Message"
              ></Form.Control>
            </Row>
            <button> Submit </button>
          </Form>
        </div>
      </section>
    </MainLayout>
  );
}
