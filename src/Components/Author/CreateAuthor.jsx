import React, { useState } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";

import axios from "axios";
function CreateAuthor() {
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(e);
    axios
      .post("http://localhost:8000/author/create")
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const [first_name, setName] = useState("");
  const [family_name, setFamily] = useState("");
  const [dob, setDob] = useState("");
  const [dod, setDod] = useState("");
  return (
    <Container>
      <p className="lead text-center">Add Author</p>
      <Form
        className="bg-light p-5 border rounded"
        onSubmit={formSubmitHandler}
        // method="post"
        // action="/author/create"
      >
        <Form.Group className="mb-4">
          <Row>
            <Col>
              <Form.Floating className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="first_name"
                  name="first_name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  value={first_name}
                  required
                />
                <label htmlFor="floatingInputCustom">First Name</label>
              </Form.Floating>
            </Col>
            <Col>
              <Form.Floating className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="family_name"
                  name="family_name"
                  onChange={(e) => {
                    setFamily(e.target.value);
                  }}
                  value={family_name}
                  required
                />
                <label htmlFor="floatingInputCustom">Family Name</label>
              </Form.Floating>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3">
          <Row>
            <Col>
              <Form.Floating className="mb-3">
                <Form.Control
                  type="date"
                  name="date_of_birth"
                  onChange={(e) => {
                    setDob(e.target.value);
                  }}
                  value={dob}
                  required
                />
                <label htmlFor="floatingInputCustom">Date of Birth</label>
              </Form.Floating>
            </Col>
            <Col>
              <Form.Floating className="mb-3">
                <Form.Control
                  type="date"
                  name="date_of_death"
                  onChange={(e) => {
                    setDod(e.target.value);
                  }}
                  value={dod}
                  required
                />
                <label htmlFor="floatingInputCustom">Date of Death</label>
              </Form.Floating>
            </Col>
          </Row>
        </Form.Group>
        <Button variant="primary" type="submit">
          ADD
        </Button>
      </Form>
    </Container>
  );
}

export default CreateAuthor;
