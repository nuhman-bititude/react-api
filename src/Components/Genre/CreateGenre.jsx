import React, { useState } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { createGenre } from "../../Services/genre";
import Success from "../Success";
function CreateGenre() {
  const [genreName, setGenre] = useState("");
  const [success, setSuccess] = useState(false);
  const formSubmitHandler = (e) => {
    e.preventDefault();
    createGenre({ genre_name: genreName })
      .then((res) => {
        if (res.status === 200) {
          setSuccess(true);
          setGenre("");
        }
      })
      .catch((err) => {
        setSuccess(false);
        console.log(err);
      });
  };
  return (
    <Container>
      <p className="lead text-center">Add Genre</p>
      <Form
        className="bg-light p-5 border rounded"
        onSubmit={formSubmitHandler}
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
                    setSuccess(false);
                    setGenre(e.target.value);
                  }}
                  value={genreName}
                  required
                />
                <label htmlFor="floatingInputCustom">Genre Name</label>
              </Form.Floating>
            </Col>
          </Row>
        </Form.Group>
        {success ? <Success /> : ""}
        <Button variant="primary" type="submit">
          ADD
        </Button>
      </Form>
    </Container>
  );
}

export default CreateGenre;
