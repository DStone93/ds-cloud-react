import { Container, Row, Col, Button, Form, Image } from "react-bootstrap";

import React, { useState } from "react";
import Derrick_Stone_Resume from "../../resume/Derrick_Stone_Resume.pdf";
import { template_id, service_id, user_id } from "../../keys";
import emailjs from "emailjs-com";
import { HeaderNav } from "../NavBar/NavigationBar";
import dotenv from "dotenv";
import "./style.scss";
dotenv.config();

export function HomePage() {
  const [usersName, setUsersName] = useState("");
  const [usersEmail, setUsersEmail] = useState("");
  const [usersMessage, setUsersMessage] = useState("");

  let templatePrams = {
    from_name: usersName,
    from_email: usersEmail,
    message: usersMessage,
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    emailjs
      .send(
        service_id,
        template_id,
        // vvv this needs to be "templatePrams"
        templatePrams,
        user_id
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });

    e.target.reset();
  };

  let treeImg =
    "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd43-0603-09-jj-01_4.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=4725b4d27f4a18344a9001a3f71f3d10";

  return (
    <Container className="container">
      {/* <HeaderNav /> */}
      <section id="landingPage" className="landingPage">
        <div className="dsFeature">
          <h1>Derrick Stone</h1>
        </div>

        <div className="jrDevl">
          <h4>Junior Software Developer</h4>
        </div>

        {/* <div className="resContainer">
          <a className="resumeButton" href={Derrick_Stone_Resume} download>
            <i></i>Download CV
          </a>
        </div> */}

        <a href="#aboutMe">
          <div className="arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </a>
      </section>

      <section id="aboutMe" className="aboutMe">
        <div className="tempAM">
        <h1> Website is currently under construction!</h1>
        </div>
      </section>

      {/* <section id="contactPage">
        <div className="contactContainer">
          <Form onSubmit={handleSubmit}>
            <Row className="RowSpace">
              <h1>Contact</h1>
            </Row>
            <Row className="RowSpace">
              <Form.Control
                required
                name="from_name"
                onChange={(e) => setUsersName(e.target.value)}
                placeholder="Enter Name"
              ></Form.Control>
            </Row>
            <Row className="RowSpace">
              <Form.Control
                required
                type="email"
                name="from_email"
                onChange={(e) => setUsersEmail(e.target.value)}
                placeholder="Enter E-mail"
              ></Form.Control>
            </Row>
            <Row className="RowSpace">
              <Form.Control
                required
                name="message"
                onChange={(e) => setUsersMessage(e.target.value)}
                className="cOMessage"
                placeholder="Enter Message"
              ></Form.Control>
            </Row>
            <button className="submitButton"> Submit </button>
          </Form>
        </div>
      </section> */}
    </Container>
  );
}
