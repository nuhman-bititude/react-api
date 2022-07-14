import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function LoginButtton() {
  const loginHandler = () => {};
  return (
    <div>
      <Link to="/login" replace={true}>
        <Button variant="success" className="mx-1" onClick={loginHandler}>
          Log in
        </Button>
      </Link>
    </div>
  );
}

export default LoginButtton;
