import React, { useEffect, useState } from "react";
import { Accordion, Container, ListGroup } from "react-bootstrap";
import axios from "axios";

function ViewAllgenres() {
  const [responces, setResponce] = useState([]);
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
  useEffect(() => {
    fetchAll();
  }, []);
  return (
    <Container>
      <p className="lead text-center">Genres</p>
      {responces === [] ? (
        ""
      ) : (
        <>
          {responces.map((genre) => (
            <div key={genre._id} style={{ width: "20rem" }}>
              <Accordion defaultActiveKey="0" style={{ width: "20rem" }}>
                <Accordion.Item>
                  <Accordion.Header>
                    <p className="lead"> {genre.name}</p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ListGroup as="ol" numbered>
                      <ListGroup.Item>{genre._id}</ListGroup.Item>
                      <ListGroup.Item>{genre.name}</ListGroup.Item>
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

export default ViewAllgenres;
