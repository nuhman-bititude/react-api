import React, { useEffect, useState } from "react";
import {
  Accordion,
  Container,
  ListGroup,
  Button,
  Spinner,
} from "react-bootstrap";
import { fetchAll, deleteAuthor } from "../../Services/author";
import UpdateAuthor from "./UpdateAuthor";
function ViewAllAuthors() {
  const [updateView, setUpdateView] = useState(false);
  const [id, setId] = useState("");
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const updateHandler = (id) => {
    try {
      setUpdateView(true);
      setId(id);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteHandler = (id) => {
    setDeleting(true);
    deleteAuthor({ id })
      .then((res) => {
        setDeleting(false);
        if (res.status === 200) {
          fetchAuthor();
        }
      })
      .catch((e) => {
        setDeleting(false);
        setLoading(false);
        console.log(e);
      });
  };
  const fetchAuthor = () => {
    fetchAll()
      .then((res) => {
        if (res.status === 200) {
          setAuthors(res.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchAuthor();
  }, []);
  return (
    <Container>
      {updateView ? (
        <UpdateAuthor id={id} />
      ) : (
        <>
          <p className="lead text-center">Authors</p>
          <div className="text-center">
            {loading ? <Spinner animation="border" /> : ""}
          </div>
          {authors.map((author) => (
            <div key={author._id}>
              <Accordion defaultActiveKey="0" style={{ width: "20rem" }}>
                <Accordion.Item>
                  <Accordion.Header>
                    <p className="lead"> {author.first_name}</p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ListGroup as="ol" numbered>
                      <ListGroup.Item>
                        ID: <b>{author._id}</b>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        First Name: <b>{author.first_name}</b>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Family Name: <b>{author.family_name}</b>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Date of Birth: <b>{author.date_of_birth}</b>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Date of Death: <b>{author.date_of_death}</b>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Button
                          className="mx-4"
                          onClick={() => {
                            updateHandler(author._id);
                          }}
                        >
                          Update
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => {
                            deleteHandler(author._id);
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

export default ViewAllAuthors;
