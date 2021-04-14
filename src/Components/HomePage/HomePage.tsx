import { Row, Col, Button, Form, Image } from "react-bootstrap";
import { MainLayout } from "../MainLayout/MainLayout";
import { useState } from "react";
import gitHubLogo from "../../data/gitHubLogo.png";
import Derrick_Stone_Resume from "../../resume/Derrick_Stone_Resume.pdf";
import {template_id, service_id, user_id} from '../../keys';
// import * as emailjs from 'emailjs-com';
import emailjs from 'emailjs-com'
import "./style.scss";

export function HomePage(props: {}) {
  const [usersName, setUsersName] = useState("");
  const [usersEmail, setUsersEmail] = useState("");
  const [usersMessage, setUsersMessage] = useState("");

  let templatePrams = {
    from_name: usersName,
    from_email: usersEmail,
    message: usersMessage,
  };

  let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  
  const handleSubmit = (e: any) => {
    e.preventDefault();

    emailjs.send(
      service_id,
      template_id,
      // vvv this needs to be "templatePrams"
      templatePrams,
      user_id
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });

      e.target.reset();
  };

  // function validateEmail (email:any){
  //   let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //   if(!regex.test(email)){
  //     throw "Invalid E-mail"
  //   }
  //   setUsersEmail(email)
  // }

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
                
                pattern='/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/'
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
            <button
            className="submitButton" 
            >
              {" "}
              Submit{" "}
            </button>
          </Form>
        </div>
      </section>
    </MainLayout>
  );
}
