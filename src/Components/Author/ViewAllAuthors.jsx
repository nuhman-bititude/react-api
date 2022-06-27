import React, { useEffect, useState } from "react";
import { Accordion, Container, ListGroup } from "react-bootstrap";
import axios from "axios";

function ViewAllAuthors() {
  const [responces, setResponce] = useState([]);
  const splitDate = (date) => {
    let newDate = date.split("T");
    return newDate[0];
  };

  const fetchAll = () => {
    axios
      .get("https://local-library-task-api.herokuapp.com/authors")
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
      {responces.map((author) => (
        <div key={author._id}>
          <Accordion defaultActiveKey="0" style={{ width: "18rem" }}>
            <Accordion.Item>
              <Accordion.Header>
                {" "}
                <p className="lead"> {author.first_name}</p>
              </Accordion.Header>
              <Accordion.Body>
                <ListGroup>
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
                    Date of Birth: <b>{splitDate(author.date_of_birth)}</b>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Date of Death: <b>{splitDate(author.date_of_death)}</b>
                  </ListGroup.Item>
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      ))}
    </Container>
  );
}

export default ViewAllAuthors;
