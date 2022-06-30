import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import Search from "./Search";
import axios from "axios";
import Success from "../Success";
import NotFound from "../NotFound";
function Deletegenre() {
  const URL = "https://local-library-task-api.herokuapp.com";
  const [id, setId] = useState("");
  const [view, setView] = useState("");
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(id);
    axios
      .post(`${URL}/genre/delete/${id}`)
      .then((res) => {
        setView(<Success />);
      })
      .catch((error) => {
        console.log(error);
        setView(<NotFound />);
        // view = <NotFound />;
      });
    setView(<Success />);
    // view = <Success />;
  };

  return (
    <Container className="p-4">
      <p className="lead text-center">Delete Genre</p>
      <Search
        setGenreId={(id) => {
          setId(id);
        }}
      />
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

export default Deletegenre;
