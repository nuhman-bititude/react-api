import React from "react";
import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";
import CreateGenre from "../Components/Genre/CreateGenre";
import Search from "../Components/Genre/Search";
import UpdateGenre from "../Components/Genre/UpdateGenre";
import ViewAllgenres from "../Components/Genre/ViewAllgenres";
import { Container, Nav } from "react-bootstrap";
import Deletegenre from "../Components/Genre/Deletegenre";

function GenreRoutes() {
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
              <Link to="/genre/create" className="route-link">
                Create Genre
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/genres" className="route-link">
                Genres
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/genre" className="route-link">
                View Genre
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/genre/update" className="route-link">
                Update Genre
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/genre/delete" className="route-link">
                Delete Genre
              </Link>
            </Nav.Item>
            <Nav.Item></Nav.Item>
          </Nav>
        </Container>

        <Routes>
          <Route exact path="/"></Route>
          <Route exact path="/genre/create" element={<CreateGenre />}></Route>
          <Route exact path="/genres" element={<ViewAllgenres />}></Route>
          <Route exact path="/genre" element={<Search />}></Route>
          <Route exact path="/genre/update" element={<UpdateGenre />}></Route>
          <Route exact path="/genre/delete" element={<Deletegenre />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default GenreRoutes;
