import React, { useState } from "react";

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

  // {
  //   responce === "error" ? <NotFound /> : <ViewAuthor responce={responce} />;
  // }
  var view = "";
  if (responce === "error") {
    view = <NotFound />;
  } else if (responce.data !== []) {
    view = <ViewAuthor responce={responce} />;
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
      {/* {responce === "error" ? <NotFound /> : <ViewAuthor responce={responce} />} */}
      {view}
    </>
  );
}

export default Search;
