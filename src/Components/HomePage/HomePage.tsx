import { Row, Col, Button, Form, Image } from "react-bootstrap";
import { MainLayout } from "../MainLayout/MainLayout";
import { useState } from "react";
import gitHubLogo from "../../data/gitHubLogo.png";
import Derrick_Stone_Resume from "../../resume/Derrick_Stone_Resume.pdf";
import "./style.scss";

export function HomePage(props: {}) {
  const [usersName, setUsersName] = useState("");
  const [usersEmail, setUsersEmail] = useState("");
  const [usersMessage, setUsersMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    let data = {
      from_name: usersName,
      from_email: usersEmail,
      message: usersMessage,
    };
  };

  return (
    <MainLayout>
      <section id="landingPage" className="landingPage">
        <div className="dsFeature">
          <h1>Derrick Stone</h1>
          <h4>Junior Software Developer</h4>
        </div>

        <div className="resContainer">
          <a className="resumeButton" href={Derrick_Stone_Resume} download>
            <i></i>Download CV
          </a>
        </div>
      </section>

      <section id="projects">
        <div className="projCont">
          <a
            className="socialMedia"
            target="_blank"
            href="https://github.com/DStone93"
          >
            <img className="githubLogo" src={gitHubLogo} />
          </a>
          {/* <img
          className="githubLogo"
          src={gitHubLogo}>
          </img> */}
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
              <Form.Control
                name="from_name"
                onChange={(e) => setUsersName(e.target.value)}
                placeholder="Enter Name"
              ></Form.Control>
            </Row>
            <Row className="RowSpace">
              <Form.Control
                name="from_email"
                onChange={(e) => setUsersEmail(e.target.value)}
                placeholder="Enter E-mail"
              ></Form.Control>
            </Row>
            <Row className="RowSpace">
              <Form.Control
                name="message"
                onChange={(e) => setUsersMessage(e.target.value)}
                className="cOMessage"
                placeholder="Enter Message"
              ></Form.Control>
            </Row>
            <button onChange={handleSubmit} disabled>
              {" "}
              Submit{" "}
            </button>
          </Form>
        </div>
      </section>
    </MainLayout>
  );
}
