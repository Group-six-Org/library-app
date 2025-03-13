import React from "react";

const AddBookForm = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-lg mt-8">
      <h2 className="text-2xl font-bold text-center mb-6">Add a New Book</h2>
      <form className="space-y-4">
        <div>
          <label className="block font-medium">Book Title</label>
          <input
            type="text"
            placeholder="Enter book title"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div>
          <label className="block font-medium">Author</label>
          <input
            type="text"
            placeholder="Enter author name"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div>
          <label className="block font-medium">ISBN</label>
          <input
            type="text"
            placeholder="Enter ISBN number"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div>
          <label className="block font-medium">Genre</label>
          <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500">
            <option>Select Genre</option>
            <option>Fiction</option>
            <option>Non-Fiction</option>
            <option>Mystery</option>
            <option>Science Fiction</option>
            <option>Biography</option>
          </select>
        </div>
        <div>
          <label className="block font-medium">Description</label>
          <textarea
            placeholder="Write a short description"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          ></textarea>
        </div>
        <div>
          <label className="block font-medium">Upload Book Cover</label>
          <input
            type="file"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-teal-600 text-white font-semibold rounded hover:bg-teal-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBookForm;
