import React from 'react';
import { FaStar } from 'react-icons/fa';

function FeaturedBooks() {
  const books = [
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      description: 'A novel set in the Roaring Twenties, exploring themes of wealth, class, and love.',
      image: 'https://img.freepik.com/premium-vector/hand-giving-book-exchange-books-hands-borrow-knowledge-swap-gift-reading-sharing-school-library-cartoon-vector-illustration_81894-8790.jpg',
      rating: 4.5,
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      description: 'A timeless novel about racial injustice and the loss of innocence.',
      image: 'https://img.freepik.com/premium-vector/book-swap-gift-book-hands-holding-green-book-world-book-day-vector_1142428-158.jpg',
      rating: 4.8,
    },
    {
      title: '1984',
      author: 'George Orwell',
      description: 'A dystopian novel about surveillance, government control, and individuality.',
      image: 'https://media.istockphoto.com/id/1328717786/vector/books-swap-exchange-or-crossing-vector-illustration-with-hand-gives-book-to-friend.jpg?s=170667a&w=0&k=20&c=3H5T9vHvp1gG66Vz3W6HAfZmWGwDEW-BZg8cVXoCO-8=',
      rating: 4.7,
    },
    // Add more books as needed
  ];

  return (
    <div className="bg-gradient-to-r from-[#EF2346] to-[#FF8A00] py-16">
      <div className="max-w-screen-xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-8">Featured Borrowed Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {books.map((book, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{book.author}</p>
                <p className="text-sm text-gray-700 mb-4">{book.description}</p>
                <div className="flex items-center gap-2 mb-4">
                  <FaStar className="text-yellow-500" />
                  <span className="text-yellow-500">{book.rating}</span>
                </div>
                <button className="w-full bg-[#EF2346] text-white py-2 rounded-md hover:bg-[#FF8A00] transition duration-300">
                  Borrow Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedBooks;
