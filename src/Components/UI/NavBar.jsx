import { Navbar, Nav } from "react-bootstrap";

import { Link } from "react-router-dom";
import Profile from "./Profile";
function NavBar() {
  return (
    <>
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
            <Link to="/book/home" className="main-route-link container-fluid">
              Book
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/author/home" className="main-route-link container-fluid">
              Author
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/genre/home" className="main-route-link container-fluid">
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
        <Profile />
      </Navbar>
    </>
  );
}

export default NavBar;
