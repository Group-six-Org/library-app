import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Landing from "./pages/Landing";
import Books from "./pages/Books";
import AddBook from "./pages/AddBook";
import SingleBook from "./pages/SingleBook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/books" element={<Books />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/single-book" element={<SingleBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
