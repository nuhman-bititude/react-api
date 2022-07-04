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
import { fetchOne, updateAuthor } from "../../Services/author";
import ViewAllAuthors from "./ViewAllAuthors";
function UpdateAuthor({ id }) {
  const [authorView, setAuthorView] = useState(false);
  const [firstName, setFirstname] = useState("");
  const [familyName, setFamilyname] = useState("");
  const [dateOfBirth, setDob] = useState("");
  const [dateOfDeath, setDod] = useState("");
  const fetchAuthor = (id) => {
    fetchOne({ id })
      .then((res) => {
        if (res.status === 200) {
          setFirstname(res.data.first_name);
          setFamilyname(res.data.family_name);
          if (
            res.data.date_of_birth !== undefined &&
            res.data.date_of_death !== undefined
          ) {
            let dob = res.data.date_of_birth.split("T");
            let dod = res.data.date_of_death.split("T");
            setDob(dob[0]);
            setDod(dod[0]);
          }
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const updateSubmitHandler = (e) => {
    e.preventDefault();
    updateAuthor({
      id: id,
      first_name: firstName,
      family_name: familyName,
      date_of_birth: dateOfBirth,
      date_of_death: dateOfDeath,
    })
      .then((res) => {
        if (res.status === 200) {
          setAuthorView(true);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    fetchAuthor(id);
  }, []);
  return (
    <>
      {authorView ? (
        <ViewAllAuthors />
      ) : (
        <Container>
          <p className="lead text-center">Update Author</p>
          <Form className="bg-light p-5 border rounded">
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
                      value={firstName}
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
                      value={familyName}
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
                      value={dateOfBirth}
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
                      value={dateOfDeath}
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
    </>
  );
}

export default UpdateAuthor;
