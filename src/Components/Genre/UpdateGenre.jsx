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
import { updateGenre, fetchOne } from "../../Services/genre";
import Success from "../../Pages/Success";
import ViewAllgenres from "./ViewAllgenres";

function UpdateGenre({ id }) {
  const [success, setSuccess] = useState(false);
  const [genreName, setGenre] = useState("");
  const [genreView, setGenreView] = useState(false);
  const updateSubmitHandler = (e) => {
    e.preventDefault();
    updateGenre({ id: id, genre_name: genreName })
      .then((res) => {
        if (res.status === 200) {
          setSuccess(true);
          setGenreView(true);
        }
      })
      .catch((err) => {
        setSuccess(false);
        console.log(err);
      });
  };

  const fetchGenre = (id) => {
    fetchOne({ id }).then((res) => {
      if (res.status === 200) {
        setGenre(res.data.name);
      }
    });
  };
  useEffect(() => {
    fetchGenre(id);
  }, []);
  return (
    <div>
      {genreView ? (
        <ViewAllgenres />
      ) : (
        <Container>
          <p className="lead text-center">Update Author</p>
          <Form className="bg-light p-5 border rounded">
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
                      value={genreName}
                      onChange={(e) => {
                        setSuccess(false);
                        setGenre(e.target.value);
                      }}
                      required
                    ></FormControl>
                  </FloatingLabel>
                </Col>
              </Row>
            </FormGroup>
            {success ? <Success /> : ""}
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
    </div>
  );
}

export default UpdateGenre;
