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
import axios from "axios";
import UpdateGenre from "./UpdateGenre";

function ViewAllgenres() {
  const [updateView, setUpdateView] = useState(false);
  const [loading, setLoading] = useState(true);
  const [responces, setResponce] = useState([]);
  const [id, setId] = useState();
  const fetchAll = () => {
    axios
      .get("https://local-library-task-api.herokuapp.com/genres")
      .then(function (res) {
        // console.log(res);
        setResponce(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const updateHandler = (id) => {
    setUpdateView(true);
    setId(id);
  };
  useEffect(() => {
    fetchAll();
    setLoading(false);
  }, []);
  return (
    <Container>
      <p className="lead text-center">Genres</p>
      {loading ? <Spinner animation="border" role="status" /> : ""}
      {responces === [] ? (
        ""
      ) : (
        <>
          <Row>
            <Col>
              {responces.map((genre) => (
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
                            <Button variant="danger"> Delete </Button>
                          </ListGroup.Item>
                        </ListGroup>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              ))}
            </Col>
            <Col>{updateView ? <UpdateGenre id={id} /> : ""}</Col>
          </Row>
        </>
      )}
    </Container>
  );
}

export default ViewAllgenres;
