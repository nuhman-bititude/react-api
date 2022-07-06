import React, { useState } from "react";
import { Form, Button, Alert, Spinner } from "react-bootstrap";
function LoginForm() {
  const [emailWarning, setEmailWarning] = useState(false);
  const [passwordWarning, setPasswordWarning] = useState(false);
  const [buttonColor, setButtonColor] = useState("success");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const loginSubmitHandler = (e) => {
    setLoading(true);
    e.preventDefault();
    if (email === "email@email.com") {
      if (password === "password") {
        console.log("welcome home");
        setLoading(false);
      } else {
        setPasswordWarning(true);
        setButtonColor("danger");
        setLoading(true);
      }
    } else {
      setEmailWarning(true);
      setButtonColor("danger");
      setLoading(true);
    }
  };
  return (
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
              setButtonColor("success");
              setLoading(false);
            }}
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
              setButtonColor("success");
              setLoading(false);
            }}
            required
          />
          {passwordWarning && <Alert variant="danger">Wrong Password</Alert>}
        </Form.Group>
        <div className="text-center">
          <Button variant={buttonColor} type="submit">
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
  );
}

export default LoginForm;
