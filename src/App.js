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
          <Container>
            <img
              src="https://media2.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif?cid=790b761101bc70b5b314a9249f825fc8be5571642d1b3430&rid=giphy.gif&ct=s"
              alt="logo"
              width="40px"
              height="40px"
            />
            <Navbar.Brand>
              <p className="lead mx-2 mt-2"> React API</p>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto mx-3 mb-4">
                <Nav.Item>
                  <Link to="/" className="route-link">
                    Home
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/book/home" className="route-link">
                    Book
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/author/home" className="route-link">
                    Author
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/genre/home" className="route-link">
                    Genre
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  {" "}
                  <Link to="/bookinstance/home" className="route-link">
                    Book Instance
                  </Link>
                </Nav.Item>
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
