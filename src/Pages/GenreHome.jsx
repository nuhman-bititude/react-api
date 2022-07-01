import React from "react";

function GenreHome() {
  return (
    <div>
      <p className="display-4">Genre Routes</p>
      <p className="lead">
        /genre/create
        <br />
        /genres
        <br />
        /genre/:id
        <br />
        /genre/delete/:id
        <br />
        /genre/update/:id
      </p>
    </div>
  );
}

export default GenreHome;
