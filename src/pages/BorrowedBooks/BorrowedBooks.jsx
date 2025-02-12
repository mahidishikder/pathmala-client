import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../provider/AuthPorvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

function BorrowedBooks() {
  const handleReturn = (_id) => {
    fetch(`https://pathmala-server-site.vercel.app/borrows/${_id}`, {
        method: "DELETE",
    })
        .then(res => res.json())
        .then(data => {
            if (data.deleteResult.deletedCount > 0) {
                Swal.fire({
                    title: "Return Successful!",
                    text: "Your book has been returned, and stock updated.",
                    icon: "success",
                });

                // UI থেকে ডেটা রিফ্রেশ করা
                setBorrowedBooks((prevBooks) =>
                    prevBooks.filter((book) => book._id !== _id)
                );
            } else {
                Swal.fire({
                    title: "Return Failed!",
                    text: "Something went wrong. Please try again.",
                    icon: "error",
                });
            }
        })
        .catch((error) => {
            console.error("Error:", error.message);
        });
};



  const { user } = useContext(AuthContext);
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  

  useEffect(() => {
    // ডেটা ফেচ করা
    axios.get('https://pathmala-server-site.vercel.app/borrows')
      .then(response => {
        setBorrowedBooks(response.data);  // response থেকে ডেটা নিয়ে state এ সেট করা
      })
      .catch(error => {
        console.error("Error fetching borrowed books:", error);
      });
  }, []);  
  const filteredBooks = borrowedBooks.filter(books => books.email === user.email);

  return (
    <div className="max-w-7xl mx-auto my-32 py-10 px-4">
      <Helmet>
        <title>Borrowed Books</title>
      </Helmet>
  {filteredBooks.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredBooks.map((book) => (
        <div
          key={book._id}
          className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out"
        >
          {/* Book Cover */}
          <div className="relative w-full h-56 bg-gray-200">
            <img
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
              src={book.image_url}
              alt={book.book_name}
            />
          </div>

          {/* Book Details */}
          <div className="p-6">
            {/* Book Title and Category */}
            <h2 className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200">
              {book.book_name}
            </h2>
            <p className="text-sm text-gray-500 mt-1">{book.category_items}</p>

            {/* Borrowed and Return Date */}
            <div className="mt-4">
              <p className="text-sm text-green-600">Borrowed: {book.currentDate}</p>
              <p className="text-sm text-red-600">Return Date: {book.returnDate}</p>
            </div>

            {/* User Info */}
            <div className="mt-3">
              <h4 className='text-sm font-medium text-green-700'>Address :</h4>
              <p className="text-sm font-medium text-gray-700">{book.name}</p>
              <span className="text-xs text-blue-500">{book.email}</span>
            </div>

            {/* Return Button */}
            <div className="mt-6 flex justify-between items-center">
              <button
                onClick={() => handleReturn(book._id)}
                className="bg-[#EF2D4E] text-white py-2 px-6 rounded-md hover:bg-[#f35872] transition-colors duration-300 ease-in-out"
              >
                Return
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="text-center text-gray-600 py-4">
      No borrowed books found for your account.
    </div>
  )}
</div>


  );
}

export default BorrowedBooks;
