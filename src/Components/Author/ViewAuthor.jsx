import React, { useState } from "react";
import {
  Container,
  Col,
  Row,
  FormGroup,
  Form,
  FormControl,
  FloatingLabel,
} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
function ViewAuthor({ responce }) {
  const data = responce.data;
  if (data != undefined) {
    var date_of_birth = data.date_of_birth.split("T");
    var date_of_death = data.date_of_death.split("T");
  }
  const [value, setValue] = useState("");
  return (
    <Container>
      <p className="lead text-center">View Author</p>
      <Form className="bg-light p-5 border rounded">
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
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                  value={data === undefined ? "" : data.first_name}
                  readOnly
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
                  placeholder="Enter Your Family Name"
                  value={data === undefined ? "" : data.family_name}
                  readOnly
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
                  value={data === undefined ? "" : date_of_birth[0]}
                  readOnly
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
                  value={data === undefined ? "" : date_of_death[0]}
                  readOnly
                ></FormControl>
              </FloatingLabel>
            </Col>
          </Row>
        </FormGroup>
      </Form>
    </Container>
  );
}

export default ViewAuthor;
