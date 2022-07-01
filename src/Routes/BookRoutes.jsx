import React from "react";
import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";
import { Container, Nav } from "react-bootstrap";
import CreateBook from "../Components/Book/CreateBook";
import ViewAllBook from "../Components/Book/ViewAllBook";
import Search from "../Components/Book/Search";
import DeleteBook from "../Components/Book/DeleteBook";
import UpdateBook from "../Components/Book/UpdateBook";
import BookHome from "../Pages/BookHome";
import Page404 from "../Components/Page404";

function BookRoutes() {
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
              Add Book
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="books" className="route-link">
              Books
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="view" className="route-link">
              View Book
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="update" className="route-link">
              Update Book
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
        <Route exact path="/home" element={<BookHome />}></Route>
        <Route path="/create" element={<CreateBook />}></Route>
        <Route path="/books" element={<ViewAllBook />}></Route>
        <Route path="/view" element={<Search />}></Route>
        <Route path="/update" element={<UpdateBook />}></Route>
        <Route path="/delete" element={<DeleteBook />}></Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default BookRoutes;
