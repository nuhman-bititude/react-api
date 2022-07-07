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
import SignUpButton from "./Components/UI/SignUpButton";
import SignupForm from "./Components/Forms/SignupForm";
import LogoutButton from "./Components/UI/LogoutButton";
import LoginForm from "./Components/Forms/LoginForm";
function App() {
  return (
    <div className="App">
      <Router>
        <Container fluid className="p-0">
          <Navbar bg="secondary" sticky="top" className="mb-3" fixed="top">
            <img
              src="https://media2.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif?cid=790b761101bc70b5b314a9249f825fc8be5571642d1b3430&rid=giphy.gif&ct=s"
              alt="logo"
              width="40px"
              height="40px"
              className="ms-1"
            />
            <Navbar.Brand>
              <p className="lead ms-0  mt-2"> React API</p>
            </Navbar.Brand>
            <Nav className="me-auto mx-auto mb-4">
              <Nav.Item>
                <Link to="/" className="main-route-link container-fluid">
                  Home
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to="/book/home"
                  className="main-route-link container-fluid"
                >
                  Book
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to="/author/home"
                  className="main-route-link container-fluid"
                >
                  Author
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to="/genre/home"
                  className="main-route-link container-fluid"
                >
                  Genre
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to="/bookinstance/home"
                  className="main-route-link container-fluid"
                >
                  Instance
                </Link>
              </Nav.Item>
            </Nav>
            <SignUpButton />
            {/* <LogoutButton /> */}
          </Navbar>
        </Container>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/react-api" element={<Navigate to="/" replace />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/book/*" element={<BookRoutes />} />
          <Route path="/author/*" element={<AuthorRoutes />} />
          <Route path="/genre/*" element={<GenreRoutes />} />
          <Route path="/bookinstance/*" element={<BookInstancerRoutes />} />
          <Route path="/user/signup" element={<SignupForm />}></Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
