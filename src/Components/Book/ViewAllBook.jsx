import React, { useEffect, useState } from "react";
import {
  Accordion,
  Container,
  ListGroup,
  Button,
  Spinner,
} from "react-bootstrap";
import { fetchAll, deleteBook } from "../../Services/book";
import UpdateBook from "./UpdateBook";
function ViewAllBook() {
  const [responces, setResponce] = useState([]);
  const [updateView, setUpdateView] = useState(false);
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const updateHandler = (id) => {
    setId(id);
    setUpdateView(true);
  };
  const deleteHandler = (id) => {
    setDeleting(true);
    deleteBook({ id })
      .then((res) => {
        if (res.status === 200) {
          setDeleting(false);
          fetchBooks();
        }
      })
      .catch((err) => {
        console.log(err);
        setDeleting(false);
      });
  };
  const fetchBooks = () => {
    fetchAll()
      .then((res) => {
        setLoading(false);
        if (res.status === 200) setResponce(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <Container>
      {updateView ? (
        <UpdateBook id={id} />
      ) : (
        <>
          <p className="lead text-center">Books</p>
          <div className="text-center">
            {loading ? <Spinner animation="border" variant="secondary" /> : ""}
          </div>
          {responces.map((book) => (
            <div key={book._id} style={{ width: "20rem" }}>
              <Accordion defaultActiveKey="0" style={{ width: "25rem" }}>
                <Accordion.Item>
                  <Accordion.Header>
                    <p className="lead"> {book.title}</p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ListGroup as="ol" numbered>
                      <ListGroup.Item>
                        id :<b> {book._id}</b>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Title :<b> {book.title}</b>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Author :<b> {book.author}</b>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Genre : <b>{book.genre}</b>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        ISBN : <b>{book.ISBN}</b>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Summary : <b>{book.summary}</b>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Button
                          className="mx-5"
                          onClick={() => {
                            updateHandler(book._id);
                          }}
                        >
                          Update
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => {
                            deleteHandler(book._id);
                          }}
                        >
                          Delete
                        </Button>
                        {deleting ? (
                          <Spinner animation="border" variant="danger" />
                        ) : (
                          ""
                        )}
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          ))}
        </>
      )}
    </Container>
  );
}

export default ViewAllBook;
