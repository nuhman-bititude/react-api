import React from "react";
import { Alert, Container } from "react-bootstrap";

function Page404() {
  return (
    <div>
      <Container>
        <Alert variant="danger">
          <Alert.Heading>404 Page Not Found</Alert.Heading>
          <p>The page you are looking is not found</p>
        </Alert>
      </Container>
    </div>
  );
}

export default Page404;
