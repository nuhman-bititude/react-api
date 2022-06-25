import React, { useEffect, useState } from "react";
import { Accordion, Container, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function ViewAllAuthors() {
  const [responce, setResponce] = useState([]);
  const fetchAll = () => {
    axios
      .get("https://local-library-task-api.herokuapp.com/authors")
      .then(function (res) {
        console.log(res);
        setResponce(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchAll();
  }, []);
  return (
    <Container>
      <div>{responce.data}</div>
      {/* <Accordion defaultActiveKey="0">
        <Accordion.Item> */}
      {/*           
          <Accordion.Header></Accordion.Header> */}
      {/* <Accordion.Body>
            <ListGroup>
              <ListGroup.Item>{responce[0].id}</ListGroup.Item>
              <ListGroup.Item>{responce[0].first_name}</ListGroup.Item>
              <ListGroup.Item>{responce[0].family_name}</ListGroup.Item>
              <ListGroup.Item>{responce[0].date_of_birth}</ListGroup.Item>
              <ListGroup.Item>{responce[0].date_of_death}</ListGroup.Item>
            </ListGroup>
          </Accordion.Body> */}
      {/* </Accordion.Item> */}
      {/* </Accordion> */}
    </Container>
  );
}

export default ViewAllAuthors;
