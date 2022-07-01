import React from "react";

function BookInstanceHome() {
  return (
    <div>
      <p className="display-4">BookInstance Routes</p>
      <p className="lead">
        /bookinstance/create:bookid
        <br />
        /bookinstances
        <br />
        /bookinstance/:id
        <br />
        /bookinstance/delete/:id
        <br />
        /bookinstance/update/:id
        <br />
      </p>
    </div>
  );
}

export default BookInstanceHome;
