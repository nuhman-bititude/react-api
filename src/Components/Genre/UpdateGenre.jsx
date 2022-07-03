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
import Success from "../Success";
import NotFound from "../NotFound";
import ViewAllgenres from "./ViewAllgenres";

function UpdateGenre({ id }) {
  const [success, setSuccess] = useState(false);
  const [genre_name, setGenre] = useState("");
  const [genreView, setGenreView] = useState(false);
  const updateSubmitHandler = (e) => {
    e.preventDefault();
    try {
      updateGenre({ id: id, genre_name: genre_name });
      setSuccess(true);
    } catch (error) {
      console.log(error);
      setSuccess(false);
    }
    setGenreView(true);
  };
  const fetchGenre = async (id) => {
    try {
      await fetchOne({ id }).then((res) => {
        setGenre(res.data.name);
      });
    } catch (error) {}
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
