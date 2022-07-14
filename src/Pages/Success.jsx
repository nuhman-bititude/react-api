import React from "react";
import { Container, Alert } from "react-bootstrap";
function Success() {
  return (
    <Container>
      <Alert variant="success">
        <Alert.Heading>Heah!! Success</Alert.Heading>
      </Alert>
    </Container>
  );
}

export default Success;
