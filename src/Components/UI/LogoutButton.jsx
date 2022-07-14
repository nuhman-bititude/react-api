import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Auth";

function LogoutButton() {
  const auth = useAuth();
  const navigate = useNavigate();
  const logoutHandler = (e) => {
    e.preventDefault();
    auth.logout();
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div>
      <Button variant="danger" className="" onClick={logoutHandler}>
        Log out
      </Button>
    </div>
  );
}

export default LogoutButton;
