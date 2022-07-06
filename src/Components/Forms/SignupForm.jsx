import React, { useState } from "react";
import { Form, Alert, Button, Container } from "react-bootstrap";
function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signupSubmitHandler = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };
  return (
    <div>
      <Container className="d-flex align-items-center justify-content-center">
        <div className="bg-light p-4 rounded ">
          <p className="lead text-center">Sign Up</p>
          <Form onSubmit={signupSubmitHandler}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                autoComplete="off"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                autoComplete="off"
                required
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
            </Form.Group>
            <div className="text-center">
              <Button variant="success" type="submit">
                Sign Up
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default SignupForm;
