
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, Card, Col, Row} from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

//import {Link} from"react-router-dom";
import "./signInUp.css";
function SignUp() {
  const [nationalId, setNationalId] = useState("");
  const [password, setPassword] = useState("");

  function click(){
    window.location='/'
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios.post("http://localhost:5000/users", {
        nationalId: nationalId,
        password: password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
<div className="SignUp">
      <Container id="form">
        <Row>
          <Col>
            <Form
              onSubmit={(e) => {
                 handleSubmit(e);
               }}
            >
              <Card.Header id="cardList1">Sign Up With A Qiyas Account</Card.Header>
              <Form.Group size="lg" controlId="text">
                <Form.Label >National ID* </Form.Label>
                <Form.Control
                  autoFocus
                  type="text"
                   //value={nationalID}
                  onChange={(e) => setNationalId(e.target.value)}
                />
                </Form.Group>
              <Form.Group size="lg" controlId="text">
                <Form.Label >Password*</Form.Label>
                <Form.Control
                  autoFocus
                  type="password"
                   //value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button id="btn" type="submit" variant="warning"  >
              Register
              </Button>
              <Link to="/">
          <Button id="btn2" type="submit" variant="primary"  active>
             Back to log in
          </Button>
          </Link>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

    
    // <Container>
    // <div style={{ textAlign: "center", marginLeft: "45%", width: "200px" }}>
    //   <Form
    //     dir-align="center"
    //     onSubmit={(e) => {
    //       handleSubmit(e);
    //     }}
    //   >
    //     <Form.Group className="mb-3" controlId="formBasicNationalId">
    //       <Form.Label>National ID *</Form.Label>
    //       <input
    //         nationalId="nationalId"
    //         type="text"
    //         value={nationalId}
    //         onChange={(e) => setNationalId(e.target.value)}
    //       />
    //     </Form.Group>

    //     <Form.Group className="mb-3" controlId="formBasicNumberPhone">
    //       <Form.Label>Date of Birth</Form.Label>
    //       <Form.Control
    //         type="password"
    //         name="password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //         placeholder="Enter date of birth"
    //       />
    //     </Form.Group>

    //     <Button variant="primary" type="submit">
    //       Submit
    //     </Button>
    //     <Button  onClick={click} variant="primary" type="submit">
    //       LogIn
    //     </Button>
    //   </Form>
    // </div>
    // </Container>

export default SignUp;
