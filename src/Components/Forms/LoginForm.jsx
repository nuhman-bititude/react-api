import React, { useState } from "react";
import { Form, Button, Alert, Spinner, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Auth";
import { loginUser } from "../../Services/user";
function LoginForm() {
  const [emailWarning, setEmailWarning] = useState(false);
  const [passwordWarning, setPasswordWarning] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const signupHandler = (e) => {
    e.preventDefault();
    navigate("/user/signup", { replace: true });
  };
  const loginSubmitHandler = (e) => {
    setError(false);
    setErrorMessage("");
    setLoading(true);
    e.preventDefault();
    loginUser({ email, password })
      .then((res) => {
        localStorage.setItem("name", res.data.name);
        localStorage.setItem("userType", res.data.userType);
        localStorage.setItem("token", res.data.token);
        setError(false);
        setLoading(false);
        auth.login(res.data.name);
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
        setErrorMessage("Wrong Email or Password");
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
              onInvalidCapture={(e) => {
                e.preventDefault();
                setEmailWarning(true);
              }}
              autoComplete="off"
              required
            />
            {emailWarning && <p className="text-danger">Email not found</p>}
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
                setPasswordWarning(false);
                setLoading(false);
              }}
              onInvalidCapture={(e) => {
                e.preventDefault();
                setPasswordWarning(true);
              }}
              required
            />
            {passwordWarning && <p className="text-danger"> Wrong Password</p>}
            <p className="text-muted cursor" onClick={signupHandler}>
              Don't have an Account? Sign In
            </p>
          </Form.Group>
          <div className="text-center">
            {error && <Alert variant="danger">{errorMessage}</Alert>}
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
