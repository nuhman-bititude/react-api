import React, { useEffect, useState } from "react";
import {
  Accordion,
  Container,
  ListGroup,
  Button,
  Row,
  Col,
  Spinner,
} from "react-bootstrap";
import { fetchAll, deleteGenre } from "../../Services/genre";
import Page404 from "../Page404";
import UpdateGenre from "./UpdateGenre";
function ViewAllgenres() {
  const [updateView, setUpdateView] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [genres, setGenres] = useState([]);
  const [id, setId] = useState();
  const fetchGenre = () => {
    fetchAll()
      .then((res) => {
        if (res.status === 200) {
          setGenres(res.data);
          setError(false);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
      });
  };
  const updateHandler = (id) => {
    setUpdateView(true);
    setId(id);
  };
  const deleteHandler = (id) => {
    setDeleting(true);
    deleteGenre({ id })
      .then((res) => {
        if (res.status === 200) {
          fetchGenre();
          setDeleting(false);
          setError(false);
        }
      })
      .catch((err) => {
        setError(true);
        setDeleting(false);
      });
  };
  useEffect(() => {
    fetchGenre();
  }, []);
  return (
    <Container>
      {error ? <Page404 /> : ""}
      {updateView ? (
        <UpdateGenre id={id} />
      ) : (
        <>
          <p className="lead text-center">Genres</p>
          <div className="text-center">
            {loading ? <Spinner animation="border" role="status" /> : ""}
          </div>
          <Row>
            <Col>
              {genres.map((genre) => (
                <div key={genre._id} style={{ width: "20rem" }}>
                  <Accordion defaultActiveKey="0" style={{ width: "20rem" }}>
                    <Accordion.Item>
                      <Accordion.Header>
                        <p className="lead"> {genre.name}</p>
                      </Accordion.Header>
                      <Accordion.Body>
                        <ListGroup as="ol" numbered>
                          <ListGroup.Item>
                            ID:<b>{genre._id}</b>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            Genre :<b>{genre.name}</b>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <Button
                              className="mx-4"
                              onClick={() => {
                                updateHandler(genre._id);
                              }}
                            >
                              Update
                            </Button>
                            <Button
                              variant="danger"
                              onClick={() => {
                                deleteHandler(genre._id);
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
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}

export default ViewAllgenres;
