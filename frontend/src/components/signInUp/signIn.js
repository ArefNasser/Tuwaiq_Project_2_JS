import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from 'axios';
import './signInUp.css';
import { Container } from "react-bootstrap";



export default function SignIn() {

  const [nationalId, setNationalId] = useState("");
  const [password, setPassword] = useState("")
 
  function validateForm() {
    return nationalId && password;
  }

  function handleSubmit(event) {
    event.preventDefault();
  axios
  .post('http://localhost:5000/users',
 {
  nationalId: nationalId,
   password: password,
 }).then(res =>{
    console.log(res)
    // if(res.data === 'User not found');
    //swal('Incorrect user name or password');
}).catch(err => {
console.log(err); 
 //swal('not correct') 
});

   }
  return (
    <Container>
    <div className="signIn">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="nationalId">
          <Form.Label id="h">NationalId</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label id="h">Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block id="btnLog" size="lg" type="submit"  disabled={!validateForm()}>
          Login
        </Button>
        <Link to="/SignUp" >
        <Button  block id="btnReg" size="lg" type="submit"   >
          Register
        </Button>
        </Link>
      </Form>
    </div>
    </Container>
  );
}