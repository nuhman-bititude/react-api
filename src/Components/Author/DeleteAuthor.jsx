import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import Search from "./Search";
import axios from "axios";
import Success from "../Success";
import NotFound from "../NotFound";
function DeleteAuthor() {
  const URL = "https://local-library-task-api.herokuapp.com";
  const [id, setId] = useState("");
  const [view, setView] = useState("");
  const formSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post(`${URL}/author/delete/${id}`)
      .then((res) => {
        setView(<Success />);
        // view = <Success />;
      })
      .catch((error) => {
        // console.log(error);
        // setView(<NotFound />);
        // view = <NotFound />;
      });
  };

  return (
    <Container className="p-4">
      <p className="lead text-center">Delete Author</p>
      <Search setAuthorId={(id) => setId(id)} />
      {view}

      <Button
        variant="primary"
        onClick={formSubmitHandler}
        className="mx-3 mt-1"
      >
        Delete
      </Button>
    </Container>
  );
}
export default DeleteAuthor;
