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
  Spinner,
} from "react-bootstrap";

import ViewAuthor from "./ViewAuthor";
import NotFound from "../NotFound";
import Success from "../Success";
function Search(props) {
  const [error, setError] = useState("");
  const [search, setSearch] = useState();
  const [responce, setResponce] = useState([]);
  const [loading, setLoading] = useState(false);
  const axios = require("axios").default;
  async function formSubmitHandler(e) {
    setLoading(true);
    e.preventDefault();
    axios
      .get(`https://local-library-task-api.herokuapp.com/author/${search}`)
      .then(function (res) {
        if (res.data === "error" || res.data === undefined) {
          setResponce("error");
          setError(<NotFound />);
        } else {
          setResponce(res);
        }
      })
      .catch(function (err) {
        setResponce("error");
      });
    if (responce === [] || responce.data === "") {
      setResponce("error");
      setLoading(false);
    } else {
      try {
        props.setAuthorId(search);
      } catch (error) {
        console.log("To be handled");
      }
      setLoading(false);
    }
  }
  // {
  //   responce === "error" ? <NotFound /> : <ViewAuthor responce={responce} />;
  // }
  var view = "";
  if (responce === "error" || responce.data === null) {
    view = <NotFound />;
  } else if (responce.data !== undefined) {
    view = <ViewAuthor responce={responce} id={search} />;
  } else if (responce.length === 0) {
    view = "";
  }

  return (
    <>
      <Container>
        <p className="lead text-center">Search Author</p>
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
        {loading ? <Spinner animation="border" /> : ""}
        {view}
        {/* {error} */}
      </Container>
    </>
  );
}

export default Search;
