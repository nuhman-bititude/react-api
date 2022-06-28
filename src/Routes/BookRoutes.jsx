import React from "react";
import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";
import { Container, Nav } from "react-bootstrap";
import CreateBook from "../Components/Book/CreateBook";
import ViewAllBook from "../Components/Book/ViewAllBook";
import Search from "../Components/Book/Search";
import DeleteBook from "../Components/Book/DeleteBook";
import UpdateBook from "../Components/Book/UpdateBook";

function BookRoutes() {
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
              <Link to="/book/create" className="route-link">
                Add Book
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/books" className="route-link">
                Books
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/book" className="route-link">
                View Book
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/book/update" className="route-link">
                Update Book
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/book/delete" className="route-link">
                Delete
              </Link>
            </Nav.Item>
            <Nav.Item></Nav.Item>
          </Nav>
        </Container>
        <Routes>
          <Route exact path="/"></Route>
          <Route exact path="/book/create" element={<CreateBook />}></Route>
          <Route exact path="/books" element={<ViewAllBook />}></Route>
          <Route exact path="/book" element={<Search />}></Route>
          <Route exact path="/book/update" element={<UpdateBook />}></Route>
          <Route exact path="/book/delete" element={<DeleteBook />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default BookRoutes;
