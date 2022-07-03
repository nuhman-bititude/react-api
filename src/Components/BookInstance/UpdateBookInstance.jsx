import React, { useEffect, useState } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { updateBookInstance, fetchOne } from "../../Services/bookinstance";
import ViewAllBookInstance from "./ViewAllBookInstance";
function UpdateBookInstance({ id }) {
  const [instanceView, setInstanceView] = useState(false);
  const [book, setBook] = useState("");
  const [imprint, setImprint] = useState("");
  const [status, setStatus] = useState("");
  const [due_back, setDue] = useState("");
  const findInstance = async () => {
    try {
      await fetchOne({ id }).then((res) => {
        setBook(res.data.book);
        setImprint(res.data.imprint);
        setStatus(res.data.status);
        let due = res.data.due_back.split("T");
        setDue(due[0]);
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect((id) => {
    findInstance(id);
  }, []);

  const updateSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      await updateBookInstance({
        id: id,
        book: book,
        imprint: imprint,
        status: status,
        due: due_back,
      });
      setInstanceView(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {instanceView ? (
        <ViewAllBookInstance />
      ) : (
        <Container>
          <p className="lead text-center">Update Author</p>
          <Form className="bg-light p-5 border rounded">
            <Form.Group className="mb-4">
              <Row>
                <Col>
                  <Form.Floating className="mb-3">
                    <Form.Control
                      type="text"
                      value={book}
                      onChange={(e) => {
                        setBook(e.target.value);
                      }}
                      readOnly
                    />
                    <label htmlFor="floatingInputCustom">Book</label>
                  </Form.Floating>
                </Col>
                <Col>
                  <Form.Floating className="mb-3">
                    <Form.Control
                      type="text"
                      value={imprint}
                      onChange={(e) => {
                        setImprint(e.target.value);
                      }}
                    />
                    <label htmlFor="floatingInputCustom">Imprint</label>
                  </Form.Floating>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Floating className="mb-3">
                    <Form.Control
                      type="date"
                      value={due_back}
                      onChange={(e) => {
                        setDue(e.target.value);
                      }}
                    />
                    <label htmlFor="floatingInputCustom">Due Date</label>
                  </Form.Floating>
                </Col>
                <Col>
                  <Form.Floating className="mb-3">
                    <Form.Select
                      aria-label="Default select example"
                      name="title"
                      onChange={(e) => {
                        setStatus(e.target.value);
                      }}
                      value={status}
                      required
                    >
                      <option value="">Choose One</option>
                      <option value="Maintenance">Maintenance</option>
                      <option value="Reserved">Reserved</option>
                      <option value="Avilable">Avilable</option>
                      <option value="Loaned">Loaned</option>
                    </Form.Select>
                    <label htmlFor="floatingInputCustom">ISBN</label>
                  </Form.Floating>
                </Col>
              </Row>
              <Button
                variant="primary"
                type="submit"
                onClick={updateSubmitHandler}
              >
                UPDATE
              </Button>
            </Form.Group>
          </Form>
        </Container>
      )}
    </div>
  );
}

export default UpdateBookInstance;
