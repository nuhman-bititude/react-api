import React from "react";
import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";
import CreateGenre from "../Components/Genre/CreateGenre";
import Search from "../Components/Genre/Search";
import UpdateGenre from "../Components/Genre/UpdateGenre";
import ViewAllgenres from "../Components/Genre/ViewAllgenres";
import { Container, Nav } from "react-bootstrap";
import Deletegenre from "../Components/Genre/Deletegenre";
import Home from "../Components/Home";

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
              <Link to="/genre/view" className="route-link">
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
          <Route exact path="/" element={<Home />}></Route>

          <Route path="/genre/create" element={<CreateGenre />}></Route>
          <Route path="/genres" element={<ViewAllgenres />}></Route>
          <Route path="/genre/view" element={<Search />}></Route>
          <Route path="/genre/update" element={<UpdateGenre />}></Route>
          <Route path="/genre/delete" element={<Deletegenre />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default GenreRoutes;
