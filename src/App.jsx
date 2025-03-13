import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Landing from "./pages/Landing";
import Books from "./pages/Books";
import AddBook from "./pages/AddBook";
import SingleBook from "./pages/SingleBook";
import PagesLayouts from "./layouts/PagesLayouts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PagesLayouts>
              <Landing />
            </PagesLayouts>
          }
        />
        <Route path="/books" element={<Books />} />
        <Route
          path="/add-book"
          element={
            <PagesLayouts>
              <AddBook />
            </PagesLayouts>
          }
        />
        <Route path="/single-book" element={<SingleBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
