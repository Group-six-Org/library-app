const SingleBookCard = ({ book }) => {
  return (
    <div
      className="cardContainer" /*" flex items-center justify-between  gap-6 p-6 bg-blue-200 shadow-lg rounded-xl w-full max-w-5xl h-100" */
    >
      {/* Book Cover */}
      <img
        id="image"
        src={book.coverImage}
        alt={book.title}
        className="w-100 h-100 object-cover rounded-lg"
      />

      {/* Book Details */}
      <div
        id="info"
        className="flex flex-col justify-center space-y-3 h-100 w-100"
      >
        <h2 className="text-2xl font-bold">{book.title}</h2>
        <p id="p1" className="text-gray-600">
          📚 Publisher: {book.publisher}
        </p>
        <p id="p2" className="text-gray-600">
          📅 Year: {book.year}
        </p>
        <p id="p3">Description:</p>
        <p className="text-gray-700 text-sm">{book.description}</p>

        {/* Availability Checkbox */}
        <div className="flex items-center gap-2 mt-2">
          <input
            type="checkbox"
            id="myCheck"
            checked={book.available}
            className="w-5 h-5 accent-blue-200 rounded-lg"
            readOnly
          />
          <span className="text-gray-800">
            {book.available ? "Available" : "Checked Out"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleBookCard;
