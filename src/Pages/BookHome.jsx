import React from "react";

function BookHome() {
  return (
    <div>
      <p className="display-4">Book Routes</p>
      <p className="lead">
        /book/create
        <br />
        /books
        <br />
        /book/:id
        <br />
        /book/delete/:id
        <br />
        /book/update/:id
      </p>
    </div>
  );
}

export default BookHome;
