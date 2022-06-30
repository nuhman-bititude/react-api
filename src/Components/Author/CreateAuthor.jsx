import React, { useState } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";

import axios from "axios";
import Success from "../Success";
import NotFound from "../NotFound";
function CreateAuthor() {
  const URL = "https://local-library-task-api.herokuapp.com";
  const [view, setView] = useState("");
  const formSubmitHandler = (e) => {
    setView("");
    e.preventDefault();
    // console.log(e);
    axios
      .post(`${URL}/author/create`, {
        first_name: first_name,
        family_name: family_name,
        date_of_birth: dob,
        date_of_death: dod,
      })
      .then((res) => {
        if (res.data === "success") {
          setView(<Success />);
        }
        setName("");
        setFamily("");
        setDob("");
        setDod("");
      });
    // .catch((error) => {
    //   console.log(error);
    // });
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
        // method="POST"
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
                    setView("");
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
      {view}
    </Container>
  );
}

export default CreateAuthor;
