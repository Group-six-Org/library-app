import bookImg from "../assets/books.jpg";
import style from "./Book.module.css";
const BooksCard = () => {
  return (
    <div className={style.myContainer}>
      <div className={style.content}>
        <img src={bookImg} alt="book" className={style.coverBook} />
        <div className={style.details}>
          <h2 className={style.title}>Dosomething@title.onion</h2>
          <h3 className={style.autor}>Autor@frosty.onion</h3>
          <h3 className={style.yearPublished}>Year Pub. 1499</h3>
          <button className={style.prevBtn}>Preview</button>
        </div>
      </div>
    </div>
  );
};

export default BooksCard;
