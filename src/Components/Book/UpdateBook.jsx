import React, { useState, useEffect } from "react";
import { fetchAll as AuthorFetch } from "../../Services/author";
import { fetchAll as GenreFetch } from "../../Services/genre";
import { fetchOne, updateBook } from "../../Services/book";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import ViewAllBook from "./ViewAllBook";
function UpdateBook({ id }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [summary, setSummary] = useState("");
  const [isbn, setIsbn] = useState("");
  const [genre, setGenre] = useState("");
  const [authors, setAuthors] = useState([]);
  const [genres, setGenres] = useState([]);
  const [bookView, setBookView] = useState(false);
  const findBook = async () => {
    try {
      await fetchOne({ id }).then((res) => {
        setTitle(res.data.title);
        setAuthor(res.data.author);
        setSummary(res.data.summary);
        setIsbn(res.data.ISBN);
        setGenre(res.data.genre);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const findAuthors = async () => {
    try {
      await AuthorFetch().then((res) => {
        setAuthors(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const findGenres = async () => {
    try {
      await GenreFetch().then((res) => {
        setGenres(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect((id) => {
    findBook(id);
    findAuthors();
    findGenres();
  }, []);
  const updateSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      await updateBook({
        id: id,
        title: title,
        author: author,
        summary: summary,
        isbn: isbn,
        genre: genre,
      });
      setBookView(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {bookView ? (
        <ViewAllBook />
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
