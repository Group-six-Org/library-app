import React from "react";

const AddBookForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen px-4 sm:px-6 bg-gray-200">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-4">Add Book</h2>

        <form>
          <label className="block text-gray-700 mb-1">Book Name:</label>
          <input
            type="text"
            className="w-full p-2 mb-3 border rounded"
            placeholder="Enter book name"
          />

          <label className="block text-gray-700 mb-1">Author:</label>
          <input
            type="text"
            className="w-full p-2 mb-3 border rounded"
            placeholder="Enter author name"
          />

          <label className="block text-gray-700 mb-1">Genre/Category:</label>
          <input
            type="text"
            className="w-full p-2 mb-3 border rounded"
            placeholder="Enter genre or category"
          />

          <label className="block text-gray-700 mb-1">Year Published:</label>
          <input
            type="number"
            className="w-full p-2 mb-3 border rounded"
            placeholder="Enter year"
          />

          <textarea
            className="w-full p-2 mb-3 border rounded min-h-24"
            placeholder="Enter book description"
          ></textarea>

          <button
            type="submit"
            className="w-full p-2 bg-teal-700 text-white rounded hover:bg-teal-800 transition"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBookForm;
