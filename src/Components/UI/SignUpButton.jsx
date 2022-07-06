import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function SignUpButton() {
  return (
    <div>
      <Link to="/user/signup">
        <Button variant="success" className="mx-1">
          Sign Up
        </Button>
      </Link>
    </div>
  );
}

export default SignUpButton;
