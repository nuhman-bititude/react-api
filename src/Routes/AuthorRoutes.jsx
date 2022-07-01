import React from "react";
import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";
import Search from "../Components/Author/Search";
import DeleteAuthor from "../Components/Author/DeleteAuthor";
import UpdateAuthor from "../Components/Author/UpdateAuthor";
import CreateAuthor from "../Components/Author/CreateAuthor";
import ViewAllAuthors from "../Components/Author/ViewAllAuthors";
import { Container, Nav } from "react-bootstrap";
import AuthorHome from "../Pages/AuthorHome";
import Page404 from "../Components/Page404";
// import ViewAuthor from "../Components/Author/ViewAuthor";
function AuthorRoutes() {
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
              Create Author
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="authors" className="route-link">
              Authors
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="view" className="route-link">
              View Author
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="update" className="route-link">
              Update Author
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
        <Route exact path="/home" element={<AuthorHome />}></Route>
        <Route path="/create" element={<CreateAuthor />}></Route>
        <Route path="/authors" element={<ViewAllAuthors />}></Route>
        <Route path="/view" element={<Search />}></Route>
        <Route path="/update" element={<UpdateAuthor />}></Route>
        <Route path="/delete" element={<DeleteAuthor />}></Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default AuthorRoutes;
