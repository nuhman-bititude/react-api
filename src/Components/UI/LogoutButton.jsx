import React from "react";
import { Button } from "react-bootstrap";

function LogoutButton() {
  return (
    <div>
      <Button variant="danger" className="mx-1">
        Log out
      </Button>
    </div>
  );
}

export default LogoutButton;
