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
function ViewBookInstance({ responce }) {
  const data = responce.data;
  return (
    <Container>
      <p className="lead text-center">View Book Instance</p>
      <Form className="bg-light p-5 border rounded">
        <Form.Group className="mb-4">
          <Row>
            <Col>
              <Form.Floating className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="title"
                  name="title"
                  value={data === undefined ? "" : data.book}
                  readOnly
                />
                <label htmlFor="floatingInputCustom">Book</label>
              </Form.Floating>
            </Col>
            <Col>
              <Form.Floating className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="title"
                  name="title"
                  value={data === undefined ? "" : data.status}
                  readOnly
                />
                <label htmlFor="floatingInputCustom">Status</label>
              </Form.Floating>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Floating className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="title"
                  name="title"
                  value={data === undefined ? "" : data.imprint}
                  readOnly
                />
                <label htmlFor="floatingInputCustom">Imprint</label>
              </Form.Floating>
            </Col>
            <Col>
              <Form.Floating className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="title"
                  name="title"
                  value={data === undefined ? "" : data.due_back}
                  readOnly
                />
                <label htmlFor="floatingInputCustom">Due Back</label>
              </Form.Floating>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default ViewBookInstance;
// value={data === undefined ? "" : data.title}
