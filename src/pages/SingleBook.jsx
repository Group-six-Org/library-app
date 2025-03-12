import bookImg from "../assets/books.jpg";

const SingleBook = () => {
  return (
    <div className="bookContainer flex align-center justify-center">
      <div className="bookImg">
        <img src={bookImg} alt="book" />
      </div>
      <div className="bookInfo">
        <dl>
          <dt>title</dt>
          <dd>this is the title</dd>
          <dt>Author</dt>
          <dd>dosomething@author.onion</dd>
          <dt>Year Published</dt>
          <dd>this book@published.1148</dd>
          <dt>Publisher</dt>
          <dd>Publisher@frosty.onion</dd>
          <dt>Availability</dt>
          <dd>book@availability.onion</dd>
        </dl>
      </div>
      <h2>Dosomething@singleBook.onion</h2>
    </div>
  );
};

export default SingleBook;
