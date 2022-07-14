import React, { useEffect, useState } from "react";
import {
  Accordion,
  Container,
  ListGroup,
  Spinner,
  Button,
} from "react-bootstrap";
import { useAuth } from "../../Auth";
import { fetchAll, deleteBookInstance } from "../../Services/bookinstance";
import UpdateBookInstance from "./UpdateBookInstance";
function ViewAllBookInstance() {
  const [updateView, setUpdateView] = useState(false);
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const [instances, setInstances] = useState([]);
  const [isAdmin, setAdmin] = useState(false);
  const auth = useAuth();
  const updateHandler = (id) => {
    setUpdateView(true);
    setId(id);
  };
  const deleteHandler = (id) => {
    setDeleting(true);
    deleteBookInstance({ id })
      .then((res) => {
        if (res.status === 200) {
          setDeleting(false);
          fetchBookInstance();
        }
      })
      .catch((err) => {
        setDeleting(false);
        console.log(err);
      });
  };
  const fetchBookInstance = () => {
    setLoading(true);
    fetchAll()
      .then((res) => {
        if (res.status === 200) {
          setInstances(res.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchBookInstance();
    setAdmin(auth.checkAdmin());
  }, [auth]);
  return (
    <Container>
      {updateView ? (
        <UpdateBookInstance id={id} />
      ) : (
        <>
          <p className="lead text-center">Book Instances</p>
          <div className="text-center">
            {loading ? <Spinner animation="border" /> : ""}
          </div>
          {instances.map((bookinstance) => (
            <div key={bookinstance._id} style={{ width: "20rem" }}>
              <Accordion defaultActiveKey="0" style={{ width: "25rem" }}>
                <Accordion.Item>
                  <Accordion.Header>
                    <p className="lead"> {bookinstance.book}</p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ListGroup as="ol" numbered>
                      <ListGroup.Item>
                        id :<b> {bookinstance._id}</b>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Book :<b> {bookinstance.book}</b>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Imprint :<b> {bookinstance.imprint}</b>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Status : <b>{bookinstance.status}</b>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Due back : <b>{bookinstance.due_back}</b>
                      </ListGroup.Item>

                      {isAdmin && (
                        <ListGroup.Item>
                          <Button
                            className="mx-5"
                            onClick={() => {
                              updateHandler(bookinstance._id);
                            }}
                          >
                            Update
                          </Button>
                          <Button
                            variant="danger"
                            onClick={() => {
                              deleteHandler(bookinstance._id);
                            }}
                          >
                            Delete
                          </Button>
                          {deleting && (
                            <Spinner animation="border" variant="danger" />
                          )}
                        </ListGroup.Item>
                      )}
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

export default ViewAllBookInstance;
