import React, { useState } from "react";
import { Form, Button, Alert, Spinner, Container } from "react-bootstrap";
import { loginUser } from "../../Services/user";
function LoginForm() {
  const [emailWarning, setEmailWarning] = useState(false);
  const [passwordWarning, setPasswordWarning] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const loginSubmitHandler = (e) => {
    setLoading(true);
    e.preventDefault();
    loginUser({ email, password })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Container className="d-flex align-items-center justify-content-center">
      <div className="bg-light p-4 rounded ">
        <p className="lead text-center">Login</p>
        <Form onSubmit={loginSubmitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailWarning(false);
                setLoading(false);
              }}
              onInvalid={() => {
                setEmailWarning(true);
              }}
              onInvalidCapture={() => {
                setEmailWarning(true);
              }}
              autoComplete="off"
              required
            />
            <Form.Text className="text-muted">
              {emailWarning && <Alert variant="danger">Email not found</Alert>}
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
                setPasswordWarning(false);
                setLoading(false);
              }}
              required
            />
            {passwordWarning && <Alert variant="danger">Wrong Password</Alert>}
          </Form.Group>
          <div className="text-center">
            <Button variant="success" type="submit">
              {loading && (
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              )}
              Login
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
}

export default LoginForm;
