import React, { useEffect, useState } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { createBookInstance } from "../../Services/bookinstance";
import Success from "../Success";
import { fetchAll } from "../../Services/book";
function CreateBookInstance() {
  const [imprint, setImprint] = useState("");
  const [status, setStatus] = useState("");
  const [dueBack, setDue] = useState("");
  const [book, setBook] = useState("");
  const [success, setSuccess] = useState(false);
  const [books, setBooks] = useState([]);
  const formSubmitHandler = (e) => {
    e.preventDefault();
    createBookInstance({
      book: book,
      imprint: imprint,
      status: status,
      due: dueBack,
    })
      .then((res) => {
        if (res.status === 200) {
          setBook("");
          setImprint("");
          setStatus("");
          setDue("");
          setSuccess(true);
        }
      })
      .catch((err) => {
        setSuccess(true);
        console.log(err);
      });
  };
  const findBooks = () => {
    fetchAll()
      .then((res) => {
        if (res.status === 200) setBooks(res.data);
      })
      .catch((err) => console.log(err));
  };

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
                    setSuccess(false);
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
                  value={dueBack}
                  required
                />
                <label htmlFor="floatingInputCustom">Due Back</label>
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

export default CreateBookInstance;
