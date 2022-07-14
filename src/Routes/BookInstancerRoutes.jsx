import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import { Container, Nav } from "react-bootstrap";
import CreateBookInstance from "../Components/BookInstance/CreateBookInstance";
import ViewAllBookInstance from "../Components/BookInstance/ViewAllBookInstance";
import Page404 from "../Pages/Page404";
import BookInstanceHome from "../Pages/BookInstanceHome";

function BookInstancerRoutes() {
  return (
    <div>
      <Container fluid>
        <Nav className="nav">
          <Nav.Item className="nav-item">
            <Link to="home" className="route-link">
              Home
            </Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Link to="create" className="route-link">
              Create
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="bookinstances" className="route-link">
              Bookinstances
            </Link>
          </Nav.Item>
        </Nav>
      </Container>

      <Routes>
        <Route exact path="/home" element={<BookInstanceHome />}></Route>
        <Route path="/create" element={<CreateBookInstance />}></Route>
        <Route path="/bookinstances" element={<ViewAllBookInstance />}></Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default BookInstancerRoutes;
