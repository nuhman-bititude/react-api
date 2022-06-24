import React from "react";
import {
  Container,
  Col,
  Row,
  FormGroup,
  Form,
  FormControl,
  FloatingLabel,
  Button,
} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
function UpdateAuthor() {
  const formSubmitHandler = (e) => {
    e.preventDefault();
    //  TODO: add author form post req url here
    console.log("Submited");
  };
  return (
    <Container>
      <p className="lead text-center">Update Author</p>
      <Form
        className="bg-light p-5 border rounded"
        onSubmit={formSubmitHandler}
      >
        <FormGroup className="mb-4">
          <Row>
            <Col>
              <FloatingLabel
                controlId="floatingInput"
                label="First Name"
                className="mb-3"
              >
                <FormControl
                  type="text"
                  placeholder="First Name"
                  value={""}
                  required
                ></FormControl>
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel
                controlId="floatingInput"
                label="Family Name"
                className="mb-3"
              >
                <FormControl
                  type="text"
                  placeholder="Family Name"
                  value={""}
                  required
                ></FormControl>
              </FloatingLabel>
            </Col>
          </Row>
        </FormGroup>
        <FormGroup className="mb-3">
          <Row>
            <Col>
              <FloatingLabel
                controlId="floatingInput"
                label="Date of Birth"
                className="mb-3"
              >
                <FormControl
                  type="date"
                  placeholder="Choose Your dob"
                  value={""}
                  required
                ></FormControl>
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel
                controlId="floatingInput"
                label="Date of Death"
                className="mb-3"
              >
                <FormControl
                  type="date"
                  placeholder="choose dod"
                  value={""}
                  required
                ></FormControl>
              </FloatingLabel>
            </Col>
          </Row>
        </FormGroup>
        <Button variant="primary" type="submit">
          UPDATE
        </Button>
      </Form>
    </Container>
  );
}

export default UpdateAuthor;
