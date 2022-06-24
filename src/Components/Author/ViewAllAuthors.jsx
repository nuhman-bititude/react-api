import React from "react";
import { Accordion, Container, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function ViewAllAuthors() {
  const DUMMY = {
    id: "id76873465872",
    first_name: "first_name_1",
    family_name: "family_name_2",
    date_of_birth: "date_of_birth_3",
    date_of_death: "date_of_death_4",
  };
  return (
    <Container>
      <Accordion defaultActiveKey="0">
        <Accordion.Item>
          <Accordion.Header>{DUMMY.first_name}</Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              <ListGroup.Item>{DUMMY.id}</ListGroup.Item>
              <ListGroup.Item>{DUMMY.first_name}</ListGroup.Item>
              <ListGroup.Item>{DUMMY.family_name}</ListGroup.Item>
              <ListGroup.Item> {DUMMY.date_of_birth}</ListGroup.Item>
              <ListGroup.Item>{DUMMY.date_of_death}</ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default ViewAllAuthors;
