import React from "react";
import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";
import Search from "../Components/Author/Search";
import DeleteAuthor from "../Components/Author/DeleteAuthor";
import UpdateAuthor from "../Components/Author/UpdateAuthor";
import CreateAuthor from "../Components/Author/CreateAuthor";
import ViewAllAuthors from "../Components/Author/ViewAllAuthors";
import { Container, Nav } from "react-bootstrap";
// import ViewAuthor from "../Components/Author/ViewAuthor";
function AuthorRoutes() {
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
              <Link to="/author/create" className="route-link">
                Create Author
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/authors" className="route-link">
                Authors
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/author" className="route-link">
                View Author
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/author/update" className="route-link">
                Update Author
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/author/delete" className="route-link">
                Delete
              </Link>
            </Nav.Item>
            <Nav.Item></Nav.Item>
          </Nav>
        </Container>

        <Routes>
          <Route exact path="/"></Route>
          <Route exact path="/author/create" element={<CreateAuthor />}></Route>
          <Route exact path="/authors" element={<ViewAllAuthors />}></Route>
          <Route exact path="/author" element={<Search />}></Route>
          <Route exact path="/author/update" element={<UpdateAuthor />}></Route>
          <Route exact path="/author/delete" element={<DeleteAuthor />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default AuthorRoutes;
