import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <div
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-10 rounded-xl">
          <h1 className="text-4xl font-bold mb-4">
            Discover, Read, and Manage Your Favorite Books!
          </h1>
          <p className="text-lg mb-6">
            Easily browse, add, and track books in our digital library.
          </p>
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg text-lg font-semibold">
            Explore Books
          </button>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">About Our Library App</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Our platform allows book lovers and library managers to easily store,
          track, and explore books in a digital collection.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 shadow-lg rounded-lg text-center bg-gray-50">
            <h3 className="text-xl font-semibold mb-2">📚 View All Books</h3>
            <p>Browse through our vast digital book collection.</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg text-center bg-gray-50">
            <h3 className="text-xl font-semibold mb-2">🔍 Search Books</h3>
            <p>Find books quickly with our easy-to-use search feature.</p>
          </div>
          <div className="p-6 shadow-lg rounded-lg text-center bg-gray-50">
            <h3 className="text-xl font-semibold mb-2">📝 Add Books</h3>
            <p>Add, edit, and organize books seamlessly.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
