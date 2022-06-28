import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/StyleSheets/css.css";
import BookRoutes from "./Routes/BookRoutes";
// import { Col, Row } from "react-bootstrap";

// import AuthorRoutes from "./Routes/AuthorRoutes";
// import CreateGenre from "./Components/Genre/CreateGenre";
// import ViewAllAuthors from "./Components/Author/ViewAllAuthors";
// import ViewAllgenres from "./Components/Genre/ViewAllgenres";
// import ViewGenre from "./Components/Genre/ViewGenre";
// import Search from "./Components/Genre/Search";
// import Deletegenre from "./Components/Genre/Deletegenre";
// import UpdateGenre from "./Components/Genre/UpdateGenre";
// import GenreRoutes from "./Routes/GenreRoutes";
// import CreateBook from "./Components/Book/CreateBook";
// import ViewAllBook from "./Components/Book/ViewAllBook";
// import ViewBook from "./Components/Book/ViewBook";
// import Search from "./Components/Book/Search";
// import DeleteBook from "./Components/Book/DeleteBook";
// import UpdateBook from "./Components/Book/UpdateBook";

function App() {
  return (
    <div className="App">
      {/* <AuthorRoutes></AuthorRoutes> */}
      {/* <GenreRoutes /> */}
      <BookRoutes />
    </div>
  );
}

export default App;
