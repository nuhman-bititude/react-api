import axios from "axios";
import React, { useEffect, useState } from "react";
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
import NotFound from "../NotFound";
const URL = "https://local-library-task-api.herokuapp.com";

function UpdateBookInstance() {
  const [search, setSearch] = useState("");
  const [responce, setResponce] = useState([]);
  const [error, setError] = useState(false);
  const [book, setBook] = useState("");
  const [imprint, setImprint] = useState("");
  const [status, setStatus] = useState("");
  const [due_back, setDue] = useState("");
  const [books, setBooks] = useState([]);
  const findBooks = () => {
    axios
      .get(`${URL}/books`)
      .then(function (res) {
        setBooks(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    findBooks();
  }, []);
  const formSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .get(`${URL}/bookinstance/${search}`)
      .then((res) => {
        setResponce(res);
        setBook(res.data.book);
        setImprint(res.data.imprint);
        setStatus(res.data.status);
        let due = res.data.due_back.split("T");
        setDue(due[0]);
        if (res.data === "error") {
          setError(true);
        } else {
          setError(false);
        }
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  };
  const updateSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post(`${URL}/bookinstance/update/${search}`, {
        book: book,
        imprint: imprint,
        status: status,
        due: due_back,
      })
      .then((success) => {
        console.log(success);
        setError(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
    setSearch("");
  };
  return (
    <div>
      <Container>
        <p className="lead text-center">Search Book Instance</p>
        <Form
          className="bg-light p-5 border rounded"
          onSubmit={formSubmitHandler}
        >
          <FormGroup className="mb-4">
            <Row>
              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Enter ID"
                  className="mb-3"
                >
                  <FormControl
                    type="text"
                    placeholder="Enter Id"
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                    required
                  ></FormControl>
                </FloatingLabel>
              </Col>
            </Row>
          </FormGroup>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>
        {error ? <NotFound /> : ""}
      </Container>
      {search.length < 20 || error ? (
        ""
      ) : (
        <Container>
          <p className="lead text-center">Update Author</p>
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
