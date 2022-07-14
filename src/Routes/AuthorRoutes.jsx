import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Route, Link, Routes } from "react-router-dom";
import CreateAuthor from "../Components/Author/CreateAuthor";
import ViewAllAuthors from "../Components/Author/ViewAllAuthors";
import { Container, Nav } from "react-bootstrap";
import AuthorHome from "../Pages/AuthorHome";
import Page404 from "../Pages/Page404";
import { useAuth } from "../Auth";
function AuthorRoutes() {
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
                Create Author
              </Link>
            </Nav.Item>
          )}
          <Nav.Item>
            <Link to="authors" className="route-link">
              Authors
            </Link>
          </Nav.Item>
        </Nav>
      </Container>

      <Routes>
        <Route exact path="/home" element={<AuthorHome />}></Route>
        <Route path="/create" element={isAdmin && <CreateAuthor />}></Route>
        <Route path="/authors" element={<ViewAllAuthors />}></Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default AuthorRoutes;
