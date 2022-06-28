import React, { useEffect, useState } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";

import axios from "axios";
import Success from "../Success";
function CreateBook() {
  const URL = "http://localhost:8000";
  var view = "";
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(e);
    axios
      .post(`${URL}/book/create`, {
        title: title,
        author: author,
        summary: summary,
        isbn: isbn,
        genre: genre,
      })
      .then((res) => {
        if (res.data === "success") {
          view = <Success />;
        }
        setAuthor("");
        setGenre("");
        setTitle("");
        setIsbn("");
        setSummary("");
      });
  };
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
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [summary, setSummary] = useState("");
  const [isbn, setIsbn] = useState("");
  const [genre, setGenre] = useState("");
  const [authors, setAuthors] = useState([]);
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    findAuthors();
    findGenres();
  }, []);
  return (
    <Container>
      <p className="lead text-center">Add Book</p>
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
        <Button variant="primary" type="submit">
          ADD
        </Button>
      </Form>
      {view}
    </Container>
  );
}

export default CreateBook;
