import React from "react";
import { Container } from "react-bootstrap";
import LoginForm from "./Forms/LoginForm";
import SignupForm from "./Forms/SignupForm";

function Home() {
  return (
    <>
      {/* <SignupForm /> */}
      <div>
        <Container className="d-flex align-items-center justify-content-center">
          <LoginForm className="bg-light" />
        </Container>
      </div>
      {/* <div>
        <p className="display-4">Book Routes</p>
        <p className="lead">
          /book/create
          <br />
          /books
          <br />
          /book/:id
          <br />
          /book/delete/:id
          <br />
          /book/update/:id
        </p>
        <br />
        <br />
        <br />
        <p className="display-4">Author Routes</p>
        <p className="lead">
          /author/create
          <br />
          /authors
          <br />
          /author/:id
          <br />
          /author/delete/:id
          <br />
          /author/update/:id
        </p>
        <br />
        <br />
        <br />
        <p className="display-4">Genre Routes</p>
        <p className="lead">
          /genre/create
          <br />
          /genres
          <br />
          /genre/:id
          <br />
          /genre/delete/:id
          <br />
          /genre/update/:id
        </p>
        <br />
        <br />
        <br />
        <p className="display-4">BookInstance Routes</p>
        <p className="lead">
          /bookinstance/create:bookid
          <br />
          /bookinstances
          <br />
          /bookinstance/:id
          <br />
          /bookinstance/delete/:id
          <br />
          /bookinstance/update/:id
          <br />
        </p>
      </div> */}
    </>
  );
}

export default Home;
