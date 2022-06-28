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
import NotFound from "../NotFound";
import ViewBook from "./ViewBook";
function Search(props) {
  var view = "";
  const [search, setSearch] = useState();
  const [responce, setResponce] = useState([]);
  const [loading, setLoading] = useState(false);
  const axios = require("axios").default;
  async function formSubmitHandler(e) {
    setLoading(true);
    e.preventDefault();
    axios
      .get(`http://localhost:8000/book/${search}`)
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
    if (responce === [] || responce.data === "") {
      setResponce("error");
      setLoading(false);
    } else {
      try {
        props.setGenreId(search);
      } catch (error) {
        // console.log(responce);
        // console.log(error);
        view = <NotFound />;
        setResponce("error");
      }
      setLoading(false);
    }
  }

  if (responce === "error" || responce.data === null) {
    view = <NotFound />;
  } else if (responce.data !== undefined) {
    view = <ViewBook responce={responce} id={search} />;
  } else if (responce.length === 0) {
    view = "";
  }

  return (
    <Container>
      <p className="lead text-center">Search Book</p>
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
    </Container>
  );
}

export default Search;
