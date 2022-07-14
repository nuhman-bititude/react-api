import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import { Container, Nav } from "react-bootstrap";
import CreateBook from "../Components/Book/CreateBook";
import ViewAllBook from "../Components/Book/ViewAllBook";
import BookHome from "../Pages/BookHome";
import Page404 from "../Pages/Page404";
import { useAuth } from "../Auth";
import { useEffect } from "react";
import { useState } from "react";

function BookRoutes() {
  const auth = useAuth();
  const [isAdmin, setAdmin] = useState(false);
  useEffect(() => {
    setAdmin(auth.checkAdmin());
  }, [auth]);
  return (
    <div>
      <Container fluid>
        <Nav className="nav">
          <Nav.Item className="nav-item">
            <Link to="home" className="route-link">
              Home
            </Link>
          </Nav.Item>
          {isAdmin && (
            <Nav.Item className="nav-item">
              <Link to="create" className="route-link">
                Add Book
              </Link>
            </Nav.Item>
          )}

          <Nav.Item>
            <Link to="books" className="route-link">
              Books
            </Link>
          </Nav.Item>
        </Nav>
      </Container>
      <Routes>
        <Route exact path="/home" element={<BookHome />}></Route>
        <Route path="/create" element={isAdmin && <CreateBook />}></Route>
        <Route path="/books" element={<ViewAllBook />}></Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default BookRoutes;
