import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container } from "react-bootstrap";
import { useState, Link } from "react";
import axios from "axios";

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

    axios.post("http://localhost:5000/users/register", {
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
    <Container>
    <div style={{ textAlign: "center", marginLeft: "45%", width: "200px" }}>
      <Form
        dir-align="center"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicNationalId">
          <Form.Label>National ID *</Form.Label>
          <input
            nationalId="nationalId"
            type="text"
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNumberPhone">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter date of birth"
          />
        </Form.Group>
        <Button  variant="primary" type="submit">
          Submit
        </Button>  
        <Button onClick={click}variant="primary" type="submit">
         LogIn
        </Button>         
      </Form>
    </div>
    </Container>
  );
}
export default SignUp;
