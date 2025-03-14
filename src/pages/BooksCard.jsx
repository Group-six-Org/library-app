import bookImg from "../assets/books.jpg";
import style from "./Book.module.css";

const BooksCard = ({ book, onDelete }) => {
  return (
    <div className={style.myContainer}>
      <div className={style.content}>
        <img src={bookImg} alt="book" className={style.coverBook} />
        <div className={style.details}>
          <h2 className={style.title}>Title: {book.bookTitle}</h2>
          <h2 className={style.author}>Author: {book.author}</h2>
          <h3 className={style.yearPublished}>
            Year Pub. {book.createdAt.slice(0, 4)}
          </h3>
          <p>Genre: {book.genre} </p>
          <p>Isbn: {book.isbn}</p>
          <div className={style.buttons}>
            <button className={style.prevBtn}>Preview</button>
            <button className={style.delBtn} onClick={() => onDelete(book.id)}>
              Del
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksCard;

// const BooksCard = ({ book, onDelete }) => {
//   return (
//     <div className="book-card">
//       <h3>{book.bookTitle}</h3>
//       <p>{book.author}</p>
//       <button onClick={() => onDelete(book.id)}>Del</button>
//     </div>
//   );
// };

// export default BooksCard;
