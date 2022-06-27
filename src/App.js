import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
// import Search from "./Components/Author/Search";
// import DeleteAuthor from "./Components/Author/DeleteAuthor";
// import UpdateAuthor from "./Components/Author/UpdateAuthor";
import CreateAuthor from "./Components/Author/CreateAuthor";
import ViewAllAuthors from "./Components/Author/ViewAllAuthors";
// import ViewAuthor from "./Components/Author/ViewAuthor";

function App() {
  return (
    <div className="App">
      <Row>
        <Col>
          <CreateAuthor />
          {/* <ViewAllAuthors /> */}
        </Col>
      </Row>

      {/* <ViewAuthor />
      <UpdateAuthor />
      <DeleteAuthor /> */}
      {/* <Search /> */}
    </div>
  );
}

export default App;
