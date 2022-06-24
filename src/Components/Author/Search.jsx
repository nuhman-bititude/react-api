import React, { useState } from "react";
import axios from "axios";
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

import "bootstrap/dist/css/bootstrap.min.css";
import ViewAuthor from "./ViewAuthor";
import NotFound from "../NotFound";
function Search() {
  const [search, setSearch] = useState();
  const [responce, setResponce] = useState([]);
  const axios = require("axios").default;

  async function formSubmitHandler(e) {
    e.preventDefault();
    axios
      .get(`https://local-library-task-api.herokuapp.com/author/${search}`)
      .then(function (res) {
        if (res.data === "error") {
          setResponce("error");
        } else {
          setResponce(res);
        }
      })
      .catch(function (error) {
        setResponce("error");
      });
  }

  return (
    <>
      <Container>
        <p className="lead text-center">View Author</p>
        <Form
          className="bg-light p-5 border rounded"
          onSubmit={formSubmitHandler}
        >
          <FormGroup className="mb-4">
            <Row>
              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Enter ID"
                  className="mb-3"
                >
                  <FormControl
                    type="text"
                    placeholder="Enter Id"
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                    required
                  ></FormControl>
                </FloatingLabel>
              </Col>
            </Row>
          </FormGroup>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>
      </Container>
      {responce === "error" ? <NotFound /> : <ViewAuthor responce={responce} />}
    </>
  );
}

export default Search;
