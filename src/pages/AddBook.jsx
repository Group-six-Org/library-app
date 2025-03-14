import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const AddBookForm = () => {
  const [buttonText, setButtonText] = useState("Add to Library");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    setButtonText("Adding to Library...");
    event.preventDefault();

    const formData = new FormData(event.target); // Fix typo `targrt`
    console.log([...formData]); // Debug: Log form data

    try {
      const response = await axios.post(
        "https://library-cc.onrender.com/book",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } } // Ensure proper headers
      );
      console.log(response.data);

      setButtonText("Added to Library");
      navigate(`/books`);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert("Failed to add book to Library");
      setButtonText("Add to Library");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-lg mt-8">
      <h2 className="text-2xl font-bold text-center mb-6">Add a New Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Book Title</label>
          <input
            type="text"
            name="bookTitle"
            placeholder="Enter book title"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Author</label>
          <input
            type="text"
            name="author"
            placeholder="Enter author name"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
        </div>
        <div>
          <label className="block font-medium">ISBN</label>
          <input
            type="text"
            name="isbn"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Enter ISBN"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Genre</label>
          <select
            name="genre"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          >
            <option value="">Select Genre</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Mystery">Mystery</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Biography">Biography</option>
          </select>
        </div>
        <div>
          <label className="block font-medium">Description</label>
          <textarea
            name="description"
            placeholder="Write a short description"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          ></textarea>
        </div>
        <div>
          <label className="block font-medium">Upload Cover Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-teal-600 text-white font-semibold rounded hover:bg-teal-700"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default AddBookForm;
