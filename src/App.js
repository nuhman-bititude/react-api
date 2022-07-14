import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/StyleSheets/css.css";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";

import BookRoutes from "./Routes/BookRoutes";
import AuthorRoutes from "./Routes/AuthorRoutes";
import GenreRoutes from "./Routes/GenreRoutes";
import BookInstancerRoutes from "./Routes/BookInstancerRoutes";
import Home from "../src/Pages/Home";
import Page404 from "./Pages/Page404";
import SignupForm from "./Components/Forms/SignupForm";
import LoginForm from "./Components/Forms/LoginForm";
import NavBar from "./Components/UI/NavBar";
import { AuthProvider } from "./Auth";
function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
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
    </AuthProvider>
  );
}

export default App;
