import React, { useEffect, useState } from "react";
import { Accordion, Container, ListGroup } from "react-bootstrap";
import axios from "axios";
function ViewAllBookInstance() {
  const [responces, setResponce] = useState([]);
  const fetchAll = () => {
    axios
      .get("http://localhost:8000/bookinstances")
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
