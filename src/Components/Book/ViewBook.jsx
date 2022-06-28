import React from "react";
import {
  Container,
  Col,
  Row,
  FormGroup,
  Form,
  FormControl,
  FloatingLabel,
} from "react-bootstrap";

function ViewBook({ responce }) {
  const data = responce.data;
  return (
    <Container>
      <p className="lead text-center">View Genre</p>
      <Form className="bg-light p-5 border rounded">
        <FormGroup className="mb-4">
          <Row>
            <Col>
              <FloatingLabel
                controlId="floatingInput"
                label="Book Title"
                className="mb-3"
              >
                <FormControl
                  type="text"
                  placeholder="First Name"
                  value={data === undefined ? "" : data.title}
                  readOnly
                ></FormControl>
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel
                controlId="floatingInput"
                label="Author"
                className="mb-3"
              >
                <FormControl
                  type="text"
                  placeholder="First Name"
                  value={data === undefined ? "" : data.author}
                  readOnly
                ></FormControl>
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col>
              <FloatingLabel
                controlId="floatingInput"
                label="ISBN"
                className="mb-3"
              >
                <FormControl
                  type="text"
                  placeholder="First Name"
                  value={data === undefined ? "" : data.ISBN}
                  readOnly
                ></FormControl>
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel
                controlId="floatingInput"
                label="Genre"
                className="mb-3"
              >
                <FormControl
                  type="text"
                  placeholder="First Name"
                  value={data === undefined ? "" : data.genre}
                  readOnly
                ></FormControl>
              </FloatingLabel>
            </Col>
          </Row>
          <Form.Floating className="mb-3">
            <Form.Control
              as="textarea"
              rows="6"
              value={data === undefined ? "" : data.summary}
              readOnly
            />
            <label htmlFor="floatingInputCustom">Summary</label>
          </Form.Floating>
        </FormGroup>
      </Form>
    </Container>
  );
}

export default ViewBook;
