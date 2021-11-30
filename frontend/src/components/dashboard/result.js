
import React, { useEffect, useState, setData } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button } from "react-bootstrap";


export default function Result()
{
  const[nationalId, setNationalId] = useState();
  const[data, setData] = useState([]);
  console.log('Session NationalId: '+sessionStorage.nationalId);
  useEffect(() => {
    setNationalId(sessionStorage.nationalId);
  
      console.log('Inside Results');

      // axios
        // .get(`http://localhost:5000/previousTests/${props.nationalId}`)
        axios.get(`http://localhost:5000/previousTests/${nationalId}`)

        .then((resp) => {
          console.log(resp.data);
          setData(resp.data);
        })
        .catch((err) => {
          console.log(err);
        });
     }, [nationalId]);
    return (
      <div>
      {data.map((elem, i) => {
        return (
          
          <Container fluid="md" id="availableCard">
            <Row>
              <Col>
                <Card>
                  <Card.Header as="h5">Name: {elem.name}</Card.Header>
                  <Card.Body>
                  <Card.Text>
                  TestDate: {elem. TestDate}
                    </Card.Text>
                    <Card.Text>
                    TotalScore: {elem.TotalScore}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        );
      })}
    </div>
    )
}