import React, { useEffect, useState } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { createBook } from "../../Services/book";
import { fetchAll as AuthorFetch } from "../../Services/author";
import { fetchAll as GenreFetch } from "../../Services/genre";
import Success from "../../Pages/Success";
function CreateBook() {
  const formSubmitHandler = (e) => {
    e.preventDefault();
    createBook({
      title: title,
      author: author,
      summary: summary,
      isbn: isbn,
      genre: genre,
    })
      .then((res) => {
        if (res.status === 200) {
          setTitle("");
          setAuthor("");
          setGenre("");
          setIsbn("");
          setSummary("");
          setSuccess(true);
        }
      })
      .catch((error) => {
        console.log(error);
        setSuccess(false);
      });
  };
  const findAuthors = () => {
    AuthorFetch()
      .then((res) => {
        if (res.status === 200) {
          setAuthors(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const findGenres = () => {
    GenreFetch()
      .then((res) => {
        if (res.status === 200) {
          setGenres(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [success, setSuccess] = useState(false);
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
                    setSuccess(false);
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
                  <option value="">Choose One</option>
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
                    setGenre(e.target.value);
                  }}
                  value={genre}
                  required
                >
                  <option value="">Choose One</option>

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
              required
            />
            <label htmlFor="floatingInputCustom">Summary</label>
          </Form.Floating>
        </Form.Group>
        {success ? <Success /> : ""}
        <Button variant="primary" type="submit">
          ADD
        </Button>
      </Form>
    </Container>
  );
}

export default CreateBook;
