import React, { useState } from "react";
import { Form, Alert, Button, Container, Row, Col } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { signUpUser } from "../../Services/user";
function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const resetAll = () => {
    setEmail("");
    setName("");
    setPassword("");
    setConfirmPassword("");
  };
  const signupSubmitHandler = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      signUpUser({ name, email, password })
        .then((res) => {
          console.log(res);
          if (res.status === 200 || 201) {
            resetAll();
            setError(false);
          }
          setError(true);
          setErrorMessage("Unexpected Error");
          resetAll();
        })
        .catch((err) => {
          if (err.response.status) {
            setError(true);
            setErrorMessage("User Already Exist");
            setLogin(true);
          }
        });
    } else {
      setError(true);
      setErrorMessage("Password Not Match");
    }
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
                  setError(false);
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
                  setError(false);
                }}
                autoComplete="off"
                required
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                required
              />
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setError(false);
                }}
                required
              />
            </Form.Group>
            {error && <Alert variant="danger">{errorMessage}</Alert>}
            <div className="text-center">
              <Row>
                <Col>
                  {login && (
                    <Link to="/login">
                      <Button variant="primary" className="mx-2">
                        Login
                      </Button>
                    </Link>
                  )}
                  <Button variant="success" type="submit" className="mx-auto">
                    Sign Up
                  </Button>
                </Col>
              </Row>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default SignupForm;
