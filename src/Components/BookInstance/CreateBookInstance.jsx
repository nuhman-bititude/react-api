import React, { useEffect, useState } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";

import axios from "axios";
import Success from "../Success";
function CreateBookInstance() {
  const URL = "http://localhost:8000";
  var view = "";
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(e);
    axios
      .post(`${URL}/bookinstance/create`, {
        book: book,
        imprint: imprint,
        status: status,
        due: due_back,
      })
      .then((res) => {
        if (res.data === "success") {
          view = <Success />;
        }
        setBook("");
        setDue("");
        setStatus("");
        setImprint("");
      });
  };
  const findBooks = () => {
    axios
      .get(`${URL}/books`)
      .then(function (res) {
        setBooks(res.data);
        // console.log(books);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [imprint, setImprint] = useState("");
  const [status, setStatus] = useState("");
  const [due_back, setDue] = useState("");
  const [book, setBook] = useState("");

  const [books, setBooks] = useState([]);
  useEffect(() => {
    findBooks();
  }, []);
  return (
    <Container>
      <p className="lead text-center">Add Book Instance</p>
      <Form
        className="bg-light p-5 border rounded"
        onSubmit={formSubmitHandler}
      >
        <Form.Group className="mb-4">
          <Row>
            <Col>
              <Form.Floating className="mb-3">
                <Form.Select
                  aria-label="Default select example"
                  name="book"
                  onChange={(e) => {
                    setBook(e.target.value);
                  }}
                  value={book}
                  required
                >
                  <option value="">Pick a Book</option>
                  {books.map((book) => (
                    <option key={book._id}>{book.title}</option>
                  ))}
                </Form.Select>
                <label htmlFor="floatingInputCustom">Book</label>
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
                  <option value="">Pick a Status</option>
                  <option value="Avilable">Avilable</option>
                  <option value="Loaned">Loaned</option>
                  <option value="Reserved">Reserved</option>
                  <option value="Maintenance">Maintenance</option>
                </Form.Select>
                <label htmlFor="floatingInputCustom">Author</label>
              </Form.Floating>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Floating className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="title"
                  name="imprint"
                  onChange={(e) => {
                    setImprint(e.target.value);
                  }}
                  value={imprint}
                  required
                />
                <label htmlFor="floatingInputCustom">Imprint</label>
              </Form.Floating>
            </Col>
            <Col>
              <Form.Floating className="mb-3">
                <Form.Control
                  type="date"
                  placeholder="title"
                  name="due"
                  onChange={(e) => {
                    setDue(e.target.value);
                  }}
                  value={due_back}
                  required
                />
                <label htmlFor="floatingInputCustom">Due Back</label>
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

export default CreateBookInstance;
