import { useState, useEffect } from "react";
import axios from "axios";
import PagesLayouts from "../layouts/PagesLayouts";
import BooksCard from "./BooksCard";
import style from "./App.module.css";
import { UNSAFE_ErrorResponseImpl } from "react-router";

const Book = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      //https://lms-project-zhgm.onrender.com/api/v1/books // other group
      //https://library-cc.onrender.com/book  // my group
      try {
        const res = await axios.get("https://library-cc.onrender.com/book");
        setBooks(res.data);
        console.log(res.data);
        alert("this page could not load");
      } catch (error) {
        alert("Oops! Page could not be loaded.");
      }
    };

    fetchBooks();
  }, []);

  const handleDelete = async (bookId) => {
    //localhost:4000/api/v1/book/67d2c58dae0e137ca6a93eb3 // other group
    // library-cc.onrender.com/book/67d1a5c6b4297d586bae81a5 // my group
    try {
      await axios.delete(
        `library-cc.onrender.com/book/67d1a5c6b4297d586bae81a5${bookId}`
      );
      setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
      alert("Book deleted successfully!");
    } catch (error) {
      console.log(error);
      alert("Bro this book can not be deleted");
    }
  };

  const filteredBooks = books.filter((book) =>
    book.bookTitle.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <PagesLayouts>
      <h2 className="bookHeader">ReadWide@library.onion</h2>

      <div className={style.appContainer}>
        <input
          type="text"
          placeholder="Search for a book..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={style.searchBar}
        />
        <div className={style.booksList}>
          {filteredBooks.map((book) => (
            <BooksCard key={book.id} book={book} onDelete={handleDelete} />
          ))}
        </div>
      </div>
      <button className="readMore">Read more</button>
    </PagesLayouts>
  );
};

export default Book;

// import { useState, useEffect } from "react";
// import axios from "axios";
// import PagesLayouts from "../layouts/PagesLayouts";
// import BooksCard from "./BooksCard";
// import style from "./App.module.css";

// const Book = () => {
//   const [books, setBooks] = useState([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const res = await axios.get("https://library-cc.onrender.com/book");
//         setBooks(res.data);
//         console.log(res.data);
//         alert("page loaded successfully");
//         console.log("fecth was a success");
//       } catch (error) {
//         alert(
//           "Oops that was unexpected. page could not be loaded successfully"
//         );
//         console.log("fetch was not successful");
//       }
//     };

//     fetchBooks();
//   }, []);

//   // Dosomething@filterSearch.onion
//   const filteredBooks = books.filter((book) =>
//     book.bookTitle.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <PagesLayouts>
//       <h2 className="bookHeader">ReadWide@library.onion</h2>

//       <div className={style.appContainer}>
//         <input
//           type="text"
//           placeholder="dosomething@searchbook.onion"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className={style.searchBar}
//         />
//         <div className={style.booksList}>
//           {filteredBooks.map((book) => (
//             <BooksCard key={book.id} book={book} />
//           ))}
//         </div>
//       </div>
//       <button className="readMore">Read more</button>
//     </PagesLayouts>
//   );
// };

// export default Book;

// import PagesLayouts from "../layouts/PagesLayouts";
// import BooksCard from "./BooksCard";
// import { useState } from "react";
// import style from "./App.module.css";
// import axios from "axios";

// const Book = () => {
//   //const books

//   const booksData = [
//     { id: 1, title: "No Sweetness Here", author: "frosty.onion", year: 1499 },
//     { id: 2, title: "Things Fall Apart", author: "Chinua Achebe", year: 1958 },
//     {
//       id: 3,
//       title: "Half of a Yellow Sun",
//       author: "Chimamanda Ngozi Adichie",
//       year: 2006,
//     },
//     { id: 4, title: "No Sweetness Here", author: "frosty.onion", year: 1499 },
//     { id: 5, title: "Things Fall Apart", author: "Chinua Achebe", year: 1958 },
//     { id: 6, title: "No Sweetness Here", author: "frosty.onion", year: 1499 },
//     { id: 7, title: "Things Fall Apart", author: "Chinua Achebe", year: 1958 },
//     {
//       id: 8,
//       title: "Half of a Yellow Sun",
//       author: "Chimamanda Ngozi Adichie",
//       year: 2006,
//     },
//   ];

//   const bookData = async () => {
//     try {
//       // https://library-cc.onrender.com/book
//       const res = await axios.get(
//         "library-cc.onrender.com/book"
//       );
//       console.table(res.data);
//     } catch {
//       console.log("massa something went wrong");
//     }
//   };
//   bookData();
//   const [search, setSearch] = useState("");

//   const filteredBooks = booksData.filter((book) =>
//     book.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <PagesLayouts>
//       <h2 className="bookHeader">ReadWide@library.onion</h2>

//       <div className={style.appContainer}>
//         <input
//           type="text"
//           placeholder="dosomething@searchbook.onion"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className={style.searchBar}
//         />
//         <div className={style.booksList}>
//           {filteredBooks.map((book) => (
//             <BooksCard key={book.id} book={book} />
//           ))}
//         </div>
//       </div>
//       <button className="readMore">Read more</button>
//     </PagesLayouts>
//   );

//   return (
//     <PagesLayouts>
//       <div>
//         <div className="container">
//           {cards.map((card) => (
//             <BooksCard />
//           ))}
//         </div>
//       </div>
//     </PagesLayouts>
//   );
// };

// export default Book;
