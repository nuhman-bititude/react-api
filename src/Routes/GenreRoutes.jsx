import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import CreateGenre from "../Components/Genre/CreateGenre";
import ViewAllgenres from "../Components/Genre/ViewAllgenres";
import { Container, Nav } from "react-bootstrap";
import Page404 from "../Pages/Page404";
import GenreHome from "../Pages/GenreHome";
import { useAuth } from "../Auth";
import { useEffect } from "react";
import { useState } from "react";
function GenreRoutes() {
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
                Create Genre
              </Link>
            </Nav.Item>
          )}
          <Nav.Item>
            <Link to="genres" className="route-link">
              Genres
            </Link>
          </Nav.Item>
        </Nav>
      </Container>

      <Routes>
        <Route exact path="/home" element={<GenreHome />}></Route>
        <Route path="/create" element={isAdmin && <CreateGenre />}></Route>
        <Route path="/genres" element={<ViewAllgenres />}></Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default GenreRoutes;
