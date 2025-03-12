import PagesLayouts from "../layouts/PagesLayouts";
import BooksCard from "./BooksCard";
const Book = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <PagesLayouts>
      <div>
        <h2 className="bookHeader">Dosomething@Bookshop.onion</h2>
        <div className="container">
          {cards.map((card) => (
            <BooksCard />
          ))}
        </div>
        <button className="readMore">Read more</button>
      </div>
    </PagesLayouts>
  );
};

export default Book;
