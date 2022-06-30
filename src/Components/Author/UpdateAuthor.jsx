import axios from "axios";
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
import NotFound from "../NotFound";

function UpdateAuthor() {
  URL = "https://local-library-task-api.herokuapp.com";
  const [search, setSearch] = useState("");
  const [responce, setResponce] = useState([]);
  const [error, setError] = useState(false);
  const [first_name, setFirstname] = useState("");
  const [family_name, setFamilyname] = useState("");
  const [date_of_birth, setDob] = useState("");
  const [date_of_death, setDod] = useState();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .get(`${URL}/author/${search}`)
      .then((res) => {
        setResponce(res);
        setFirstname(res.data.first_name);
        setFamilyname(res.data.family_name);
        let dob = res.data.date_of_birth.split("T");
        let dod = res.data.date_of_death.split("T");
        setDob(dob[0]);
        setDod(dod[0]);
        setError(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  };
  const updateSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post(`${URL}/author/update/${search}`, {
        first_name: first_name,
        family_name: family_name,
        date_of_birth: date_of_birth,
        date_of_death: date_of_death,
      })
      .then((success) => {
        console.log(success);
        setError(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  };
  return (
    <Container>
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
        {error ? <NotFound /> : ""}
      </Container>
      {search.length < 20 || error ? (
        ""
      ) : (
        <Container>
          <p className="lead text-center">Update Author</p>
          <Form
            className="bg-light p-5 border rounded"
            onSubmit={formSubmitHandler}
          >
            <FormGroup className="mb-4">
              <Row>
                <Col>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="First Name"
                    className="mb-3"
                  >
                    <FormControl
                      type="text"
                      placeholder="First Name"
                      value={first_name}
                      onChange={(e) => {
                        setFirstname(e.target.value);
                      }}
                      required
                    ></FormControl>
                  </FloatingLabel>
                </Col>
                <Col>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Family Name"
                    className="mb-3"
                  >
                    <FormControl
                      type="text"
                      placeholder="Family Name"
                      value={family_name}
                      onChange={(e) => {
                        setFamilyname(e.target.value);
                      }}
                      required
                    ></FormControl>
                  </FloatingLabel>
                </Col>
              </Row>
            </FormGroup>
            <FormGroup className="mb-3">
              <Row>
                <Col>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Date of Birth"
                    className="mb-3"
                  >
                    <FormControl
                      type="date"
                      placeholder="Choose Your dob"
                      value={date_of_birth}
                      onChange={(e) => {
                        setDob(e.target.value);
                      }}
                      required
                    ></FormControl>
                  </FloatingLabel>
                </Col>
                <Col>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Date of Death"
                    className="mb-3"
                  >
                    <FormControl
                      type="date"
                      placeholder="choose dod"
                      value={date_of_death}
                      onChange={(e) => {
                        setDod(e.target.value);
                      }}
                      required
                    ></FormControl>
                  </FloatingLabel>
                </Col>
              </Row>
            </FormGroup>
            <Button
              variant="primary"
              type="submit"
              onClick={updateSubmitHandler}
            >
              UPDATE
            </Button>
          </Form>
        </Container>
      )}
    </Container>
  );
}

export default UpdateAuthor;
