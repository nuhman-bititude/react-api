import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import Search from "./Search";
import axios from "axios";
import Success from "../Success";
import NotFound from "../NotFound";
function DeleteBook() {
  const URL = "http://localhost:8000";
  const [id, setId] = useState("");
  var view = "";
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(id);
    axios
      .post(`${URL}/book/delete/${id}`)
      .then((res) => {
        view = <Success />;
      })
      .catch((error) => {
        console.log(error);
        view = <NotFound />;
      });
    view = <Success />;
  };
  return (
    <Container className="p-4">
      <p className="lead text-center">Delete Book</p>
      <Search setGenreId={(id) => setId(id)} />
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

export default DeleteBook;
