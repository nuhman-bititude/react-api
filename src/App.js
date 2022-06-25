import "./App.css";
// import Search from "./Components/Author/Search";
// import DeleteAuthor from "./Components/Author/DeleteAuthor";
// import UpdateAuthor from "./Components/Author/UpdateAuthor";
// import CreateAuthor from "./Components/Author/CreateAuthor";
import ViewAllAuthors from "./Components/Author/ViewAllAuthors";
// import ViewAuthor from "./Components/Author/ViewAuthor";

function App() {
  return (
    <div className="App">
      {/* <CreateAuthor/> */}
      <ViewAllAuthors />
      {/* <ViewAuthor />
      <UpdateAuthor />
      <DeleteAuthor /> */}
      {/* <Search /> */}
    </div>
  );
}

export default App;
