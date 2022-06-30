import React from "react";
import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";
import { Container, Nav } from "react-bootstrap";
import CreateBookInstance from "../Components/BookInstance/CreateBookInstance";
import ViewAllBookInstance from "../Components/BookInstance/ViewAllBookInstance";
import Search from "../Components/BookInstance/Search";
import UpdateBookInstance from "../Components/BookInstance/UpdateBookInstance";
import DeleteBookInstance from "../Components/BookInstance/DeleteBookInstance";
import Home from "../Components/Home";

function BookInstancerRoutes() {
  return (
    <Router>
      <div>
        <Container fluid>
          <Nav className="nav">
            <Nav.Item className="nav-item">
              <Link to="/" className="route-link">
                Home
              </Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Link to="/bookinstance/create" className="route-link">
                Create
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/bookinstances" className="route-link">
                Bookinstances
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/bookinstance/view" className="route-link">
                View
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/bookinstance/update" className="route-link">
                Update
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/bookinstance/delete" className="route-link">
                Delete
              </Link>
            </Nav.Item>
            <Nav.Item></Nav.Item>
          </Nav>
        </Container>

        <Routes>
          <Route exact path="/" element={<Home />}></Route>

          <Route
            path="/bookinstance/create"
            element={<CreateBookInstance />}
          ></Route>
          <Route
            path="/bookinstances"
            element={<ViewAllBookInstance />}
          ></Route>
          <Route exact path="/bookinstance/view" element={<Search />}></Route>
          <Route
            path="/bookinstance/update"
            element={<UpdateBookInstance />}
          ></Route>
          <Route
            path="/bookinstance/delete"
            element={<DeleteBookInstance />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default BookInstancerRoutes;
