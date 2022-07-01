import React from "react";

function AuthorHome() {
  return (
    <div>
      <p className="display-4">Author Routes</p>
      <p className="lead">
        /author/create
        <br />
        /authors
        <br />
        /author/:id
        <br />
        /author/delete/:id
        <br />
        /author/update/:id
      </p>
    </div>
  );
}

export default AuthorHome;
