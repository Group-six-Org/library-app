import React from "react";
import backgroundImage from "../assets/img/library1.jpg"; // Import the background image
import { Link } from "react-router";

const LandingPage = () => {
  return (
    <section className="w-full">
      {/* Hero Section */}
      <div
        className="relative w-full min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-6"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Glassmorphic Effect */}
        <div className="relative bg-white/20 backdrop-blur-lg border border-white/30 p-8 rounded-xl text-white max-w-2xl text-center shadow-lg">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to the <span className="text-yellow-300">Read</span>Wide
            Digital Library
          </h1>
          <p className="text-lg mb-6">
            Read, add, edit and delete books effortlessly.
          </p>
          <Link to="/books" className="block">
            <button className="bg-teal-600 hover:bg-teal-700 px-6 py-3 rounded-lg text-lg font-semibold">
              Explore Now
            </button>
          </Link>
        </div>
      </div>

      {/* New Second Section - "Why Choose Us" */}
      <div className="py-30 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Why Choose Our Library?
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our digital library offers a seamless reading experience with a vast
          collection of books, easy accessibility, and a user-friendly
          interface.
        </p>

        {/* Features List */}
        <div className="flex justify-center gap-6 py-18">
          {/* Huge Collection Link */}
          <Link to="/books" className="block">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              📚{" "}
              <span className="text-teal-600 font-semibold">
                Huge Collection
              </span>
              <p className="text-gray-600">
                Access thousands of books across various genres.
              </p>
            </div>
          </Link>

          {/* Add Books Link */}
          <Link to="/add-book" className="block">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              ➕{" "}
              <span className="text-purple-600 font-semibold">Add Books</span>
              <p className="text-gray-600">
                Easily add new books to your library collection.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
