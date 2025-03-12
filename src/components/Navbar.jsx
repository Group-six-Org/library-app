import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-teal-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Logo goes here</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/books" className="hover:text-gray-300">All Books</Link>
          </li>
          <li>
            <Link to="/single-book" className="hover:text-gray-300">Single Book</Link>
          </li>
          <li>
            <Link to="/add-book" className="hover:text-gray-300">Add Book</Link> 
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          </li>  
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
