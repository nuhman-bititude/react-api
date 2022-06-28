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

function ViewGenre({ responce }) {
  const data = responce.data;
  const [value, setValue] = useState("");

  return (
    <Container>
      <p className="lead text-center">View Genre</p>
      <Form className="bg-light p-5 border rounded">
        <FormGroup className="mb-4">
          <Row>
            <Col>
              <FloatingLabel
                controlId="floatingInput"
                label="Genre Name"
                className="mb-3"
              >
                <FormControl
                  type="text"
                  placeholder="First Name"
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                  value={data === undefined ? "" : data.name}
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

export default ViewGenre;
