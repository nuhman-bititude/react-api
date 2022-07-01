import React from "react";
import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";
import { Container, Nav } from "react-bootstrap";
import CreateBookInstance from "../Components/BookInstance/CreateBookInstance";
import ViewAllBookInstance from "../Components/BookInstance/ViewAllBookInstance";
import Search from "../Components/BookInstance/Search";
import UpdateBookInstance from "../Components/BookInstance/UpdateBookInstance";
import DeleteBookInstance from "../Components/BookInstance/DeleteBookInstance";
import Page404 from "../Components/Page404";
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
          <Nav.Item>
            <Link to="view" className="route-link">
              View
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="update" className="route-link">
              Update
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="delete" className="route-link">
              Delete
            </Link>
          </Nav.Item>
          <Nav.Item></Nav.Item>
        </Nav>
      </Container>

      <Routes>
        <Route exact path="/home" element={<BookInstanceHome />}></Route>

        <Route path="/create" element={<CreateBookInstance />}></Route>
        <Route path="/bookinstances" element={<ViewAllBookInstance />}></Route>
        <Route exact path="/view" element={<Search />}></Route>
        <Route path="/update" element={<UpdateBookInstance />}></Route>
        <Route path="/delete" element={<DeleteBookInstance />}></Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default BookInstancerRoutes;
