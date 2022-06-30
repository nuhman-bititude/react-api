import React, { useEffect, useState } from "react";
import { Accordion, Container, ListGroup } from "react-bootstrap";
import axios from "axios";
function ViewAllBook() {
  const [responces, setResponce] = useState([]);
  const fetchAll = () => {
    axios
      .get("https://local-library-task-api.herokuapp.com/books")
      .then(function (res) {
        // console.log(res);
        setResponce(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchAll();
  }, []);
  return (
    <Container>
      <p className="lead text-center">Books</p>
      {responces === [] ? (
        ""
      ) : (
        <>
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
