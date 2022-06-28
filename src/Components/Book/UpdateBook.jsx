import axios from "axios";
import React, { useState, useEffect } from "react";
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
function UpdateBook() {
  URL = "http://localhost:8000";
  const [search, setSearch] = useState("");
  const [responce, setResponce] = useState([]);
  const [error, setError] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [summary, setSummary] = useState("");
  const [isbn, setIsbn] = useState("");
  const [genre, setGenre] = useState("");
  const [authors, setAuthors] = useState([]);
  const [genres, setGenres] = useState([]);
  const findAuthors = () => {
    axios
      .get(`${URL}/authors`)
      .then(function (res) {
        setAuthors(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const findGenres = () => {
    axios
      .get(`${URL}/genres`)
      .then(function (res) {
        setGenres(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    findAuthors();
    findGenres();
  }, []);
  const formSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .get(`${URL}/book/${search}`)
      .then((res) => {
        setResponce(res);
        setTitle(res.data.title);
        setAuthor(res.data.author);
        setGenre(res.data.genre);
        setIsbn(res.data.ISBN);
        setSummary(res.data.summary);
        if (res.data === "error") {
          setError(true);
        } else {
          setError(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  };
  const updateSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post(`${URL}/book/update/${search}`, {
        title: title,
        author: author,
        summary: summary,
        isbn: isbn,
        genre: genre,
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
        <p className="lead text-center">Search Book</p>
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
                      placeholder="title"
                      name="title"
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                      value={title}
                      required
                    />
                    <label htmlFor="floatingInputCustom">Title</label>
                  </Form.Floating>
                </Col>
                <Col>
                  <Form.Floating className="mb-3">
                    <Form.Select
                      aria-label="Default select example"
                      name="title"
                      onChange={(e) => {
                        setAuthor(e.target.value);
                      }}
                      value={author}
                      required
                    >
                      {authors.map((author) => (
                        <option key={author._id}>{author.first_name}</option>
                      ))}
                    </Form.Select>
                    <label htmlFor="floatingInputCustom">Author</label>
                  </Form.Floating>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Floating className="mb-3">
                    <Form.Select
                      aria-label="Default select example"
                      name="title"
                      onChange={(e) => {
                        console.log(genre);
                        setGenre(e.target.value);
                      }}
                      value={genre}
                      required
                    >
                      {genres.map((genre) => (
                        <option key={genre._id} value={genre.name}>
                          {genre.name}
                        </option>
                      ))}
                    </Form.Select>
                    <label htmlFor="floatingInputCustom">Genre</label>
                  </Form.Floating>
                </Col>
                <Col>
                  <Form.Floating className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="title"
                      name="title"
                      onChange={(e) => {
                        setIsbn(e.target.value);
                      }}
                      value={isbn}
                      required
                    />
                    <label htmlFor="floatingInputCustom">ISBN</label>
                  </Form.Floating>
                </Col>
              </Row>
              <Form.Floating className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={summary}
                  onChange={(e) => {
                    setSummary(e.target.value);
                  }}
                />
                <label htmlFor="floatingInputCustom">Summary</label>
              </Form.Floating>
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={updateSubmitHandler}
            >
              UPDATE
            </Button>
          </Form>
        </Container>
      )}
    </div>
  );
}

export default UpdateBook;
