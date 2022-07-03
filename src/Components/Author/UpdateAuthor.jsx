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
  const [first_name, setFirstname] = useState("");
  const [family_name, setFamilyname] = useState("");
  const [date_of_birth, setDob] = useState("");
  const [date_of_death, setDod] = useState("");
  const fetchAuthor = async (id) => {
    try {
      await fetchOne({ id }).then((res) => {
        setFirstname(res.data.first_name);
        setFamilyname(res.data.family_name);
        let dob = res.data.date_of_birth.split("T");
        let dod = res.data.date_of_death.split("T");
        setDob(dob[0]);
        setDod(dod[0]);
      });
    } catch (err) {
      console.log(err);
    }
  };
  const updateSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      await updateAuthor({
        id: id,
        first_name: first_name,
        family_name: family_name,
        date_of_birth: date_of_birth,
        date_of_death: date_of_death,
      });
      setAuthorView(true);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect((id) => {
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
    </>
  );
}

export default UpdateAuthor;
