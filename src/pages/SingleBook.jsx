import SingleBookCard from "./SingleBookCard";
import bookImg from "../assets/books.jpg";
import PagesLayouts from "../layouts/PagesLayouts";

const book = {
  title: "No Sweetness Here",
  publisher: "Fiction Press",
  year: 1499,
  description: `
  A compelling story about life and culture.
  Lorem ipsum dolor, sit amet consectetur adipisicing 
  elit. Reiciendis beatae, provident placeat harum,
   rerum voluptate optio nisi, ipsam ab excepturi tenetur.
    Laudantium consequuntur non modi corporis quidem 
    eligendi facere quibusdam 
  `,
  coverImage: bookImg, // Replace with actual book cover URL
  available: true,
};
const SingleBook = () => {
  return (
    <PagesLayouts>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
        <SingleBookCard book={book} />
      </div>
    </PagesLayouts>
  );
};

export default SingleBook;
