import React, { useState } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";

import axios from "axios";
import Success from "../Success";
function CreateGenre() {
  const URL = "https://local-library-task-api.herokuapp.com";
  const [view, setView] = useState("");
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(e);
    axios
      .post(`${URL}/genre/create`, {
        genre_name: genre_name,
      })
      .then((res) => {
        if (res.data === "success") {
          setView(<Success />);
        }
        setGenre("");
      });
  };
  const [genre_name, setGenre] = useState("");
  return (
    <Container>
      <p className="lead text-center">Add Genre</p>
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
                    setGenre(e.target.value);
                  }}
                  value={genre_name}
                  required
                />
                <label htmlFor="floatingInputCustom">Genre Name</label>
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

export default CreateGenre;
