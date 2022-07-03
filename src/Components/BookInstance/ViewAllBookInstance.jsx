import React, { useEffect, useState } from "react";
import {
  Accordion,
  Container,
  ListGroup,
  Spinner,
  Button,
} from "react-bootstrap";
import { fetchAll, deleteBookInstance } from "../../Services/bookinstance";
import UpdateBookInstance from "./UpdateBookInstance";
function ViewAllBookInstance() {
  const [updateView, setUpdateView] = useState(false);
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const [responces, setResponce] = useState([]);
  const updateHandler = (id) => {
    setUpdateView(true);
    setId(id);
  };
  const deleteHandler = async (id) => {
    setDeleting(true);
    try {
      await deleteBookInstance({ id });
      setDeleting(false);
      fetchBookInstance();
    } catch (error) {
      console.log(error);
      setDeleting(false);
    }
  };
  const fetchBookInstance = async () => {
    try {
      setLoading(true);
      await fetchAll().then((res) => {
        setResponce(res.data);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchBookInstance();
  }, []);
  return (
    <Container>
      {loading ? <Spinner animation="border" /> : ""}
      {updateView ? (
        <UpdateBookInstance id={id} />
      ) : (
        <>
          <p className="lead text-center">Books</p>
          {responces.map((bookinstance) => (
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

export default ViewAllBookInstance;
