import React, { useEffect ,useState } from 'react'
import {Card, Container,Button, Row, Col} from 'react-bootstrap';
import './dashboard.css';


import axios from "axios"
const Available=() => {
const [data, setData] = useState([]);
useEffect(()=> {
axios
.get("http://localhost:5000/avialableTestForRegistration/")
.then((resp)=>{

    console.log(resp.data)
    setData(resp.data);

})
.catch((err)=>{
    console.log(err);

});
}, []);
    return (<div>
            {data.map((elem,i)=> {
                return(
                    <Container>
                    <Card>
                    <Row>
                      <Col>
                    <Card.Body id="card">
                      <Card.Title>Name: {elem.name}</Card.Title>
                      <Card.Text>
                      appointmentstatus: {elem.appointmentstatus}
                      </Card.Text>
                      <Card.Text>
                      testlanguage: {elem.testlanguage}
                      </Card.Text>
                      <Card.Text>
                      testtypemechanism: {elem.testtypemechanism}
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Col>
                    </Row>
                  </Card>
                  </Container>
                )
                 })}</div>
            )
          }
       export default Available