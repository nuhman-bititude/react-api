import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Container,
  Col,
  Row,
  FormGroup,
  Form,
  FormControl,
  FloatingLabel,
  Button,
} from "react-bootstrap";
import NotFound from "../NotFound";
import Success from "../Success";

function UpdateGenre({ id }) {
  URL = "https://local-library-task-api.herokuapp.com";
  const [view, setView] = useState("");
  const [search, setSearch] = useState("");
  const [responce, setResponce] = useState([]);
  const [error, setError] = useState(false);
  const [genre_name, setGenre] = useState("");

  const updateSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post(`${URL}/genre/update/${id}`, {
        genre_name: genre_name,
      })
      .then((success) => {
        // console.log(success);
        setView(<Success />);
        setError(false);
      })
      .catch((error) => {
        console.log(error);
        setView(<NotFound />);
        setError(true);
      });
    // setSearch("");
  };
  useEffect(() => {}, []);
  return (
    <div>
      <Container>
        <p className="lead text-center">Update Author</p>
        <Form
          className="bg-light p-5 border rounded"
          // onSubmit={formSubmitHandler}
        >
          <FormGroup className="mb-4">
            <Row>
              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Genre Name"
                  className="mb-3"
                >
                  <FormControl
                    type="text"
                    placeholder="Genre Name"
                    value={genre_name}
                    onChange={(e) => {
                      setGenre(e.target.value);
                    }}
                    required
                  ></FormControl>
                </FloatingLabel>
              </Col>
            </Row>
          </FormGroup>
          {view}
          <Button variant="primary" type="submit" onClick={updateSubmitHandler}>
            UPDATE
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default UpdateGenre;
