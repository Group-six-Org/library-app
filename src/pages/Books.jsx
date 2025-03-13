import PagesLayouts from "../layouts/PagesLayouts";
import BooksCard from "./BooksCard";
import { useState } from "react";
import style from "./App.module.css";

const Book = () => {
  // const BookData = axios.get("https://documenter.getpostman.com/view/43015893/2sAYk8w3gN")
  // .then((res) => res.jason )
  const booksData = [
    { id: 1, title: "No Sweetness Here", author: "frosty.onion", year: 1499 },
    { id: 2, title: "Things Fall Apart", author: "Chinua Achebe", year: 1958 },
    {
      id: 3,
      title: "Half of a Yellow Sun",
      author: "Chimamanda Ngozi Adichie",
      year: 2006,
    },
    { id: 4, title: "No Sweetness Here", author: "frosty.onion", year: 1499 },
    { id: 5, title: "Things Fall Apart", author: "Chinua Achebe", year: 1958 },
    { id: 6, title: "No Sweetness Here", author: "frosty.onion", year: 1499 },
    { id: 7, title: "Things Fall Apart", author: "Chinua Achebe", year: 1958 },
    {
      id: 8,
      title: "Half of a Yellow Sun",
      author: "Chimamanda Ngozi Adichie",
      year: 2006,
    },
  ];

  const [search, setSearch] = useState("");

  const filteredBooks = booksData.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <PagesLayouts>
      <h2 className="bookHeader">ReadWide@library.onion</h2>

      <div className={style.appContainer}>
        <input
          type="text"
          placeholder="dosomething@searchbook.onion"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={style.searchBar}
        />
        <div className={style.booksList}>
          {filteredBooks.map((book) => (
            <BooksCard key={book.id} book={book} />
          ))}
        </div>
      </div>
      <button className="readMore">Read more</button>
    </PagesLayouts>
  );

  return (
    <PagesLayouts>
      <div>
        <div className="container">
          {cards.map((card) => (
            <BooksCard />
          ))}
        </div>
      </div>
    </PagesLayouts>
  );
};

export default Book;
