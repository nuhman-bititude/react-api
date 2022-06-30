import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/StyleSheets/css.css";
import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import BookRoutes from "./Routes/BookRoutes";
import AuthorRoutes from "./Routes/AuthorRoutes";
import GenreRoutes from "./Routes/GenreRoutes";
import BookInstancerRoutes from "./Routes/BookInstancerRoutes";
import { useState } from "react";
function App() {
  const [view, setView] = useState("");
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>React-API</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                onClick={() => {
                  setView(<BookRoutes />);
                }}
              >
                Books
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  setView(<GenreRoutes />);
                }}
              >
                Genres
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  setView(<AuthorRoutes />);
                }}
              >
                Authors
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  setView(<BookInstancerRoutes />);
                }}
              >
                Book Instance
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {view}
    </div>
  );
}

export default App;
