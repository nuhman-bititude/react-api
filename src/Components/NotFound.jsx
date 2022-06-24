import React from "react";
import { Alert, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function NotFound() {
  return (
    <Container>
      <Alert variant="danger dismissible">
        <Alert.Heading>Oh!!! You got an error!</Alert.Heading>
        <p>Data Not Found</p>
      </Alert>
    </Container>
  );
}

export default NotFound;
