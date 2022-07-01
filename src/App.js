import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/StyleSheets/css.css";
import {
  Route,
  Link,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

import BookRoutes from "./Routes/BookRoutes";
import AuthorRoutes from "./Routes/AuthorRoutes";
import GenreRoutes from "./Routes/GenreRoutes";
import BookInstancerRoutes from "./Routes/BookInstancerRoutes";
import Home from "./Components/Home";
import Page404 from "./Components/Page404";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="secondary" sticky="top" className="mb-3">
          <Container fluid>
            <Navbar.Brand>
              <p className="lead"> React API</p>
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto mx-3 mb-4">
                <Link to="/" className="route-link">
                  Home
                </Link>
                <Link to="/book/home" className="route-link">
                  Book
                </Link>
                <Link to="/author/home" className="route-link">
                  Author
                </Link>
                <Link to="/genre/home" className="route-link">
                  Genre
                </Link>
                <Link to="/bookinstance/home" className="route-link">
                  Book Instance
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/react-api" element={<Navigate to="/" replace />} />
          <Route path="/book/*" element={<BookRoutes />} />
          <Route path="/author/*" element={<AuthorRoutes />} />
          <Route path="/genre/*" element={<GenreRoutes />} />
          <Route path="/bookinstance/*" element={<BookInstancerRoutes />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
