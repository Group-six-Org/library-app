import React from "react";
import { Link } from "react-router";


const Navbar = () => {
  return (
    <nav className="bg-teal-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        
        <Link to="/" className="text-3xl font-extrabold tracking-wide text-white">
          <span className="text-yellow-300">Read</span>Wide
        </Link>

       
        <div className="hidden md:flex md:space-x-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/books" className="hover:text-gray-300">All Books</Link>
          <Link to="/single-book" className="hover:text-gray-300">Single Book</Link>
          <Link to="/add-book" className="hover:text-gray-300">Add Book</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </div>

        
        <div className="md:hidden">
          <span className="text-2xl">☰</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;