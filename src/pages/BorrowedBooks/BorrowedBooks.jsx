import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../provider/AuthPorvider';
import Swal from 'sweetalert2';

function BorrowedBooks() {
  const handleReturn = (_id) => {
    fetch(`http://localhost:5001/borrows/${_id}`, {
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
    axios.get('http://localhost:5001/borrows')
      .then(response => {
        setBorrowedBooks(response.data);  // response থেকে ডেটা নিয়ে state এ সেট করা
      })
      .catch(error => {
        console.error("Error fetching borrowed books:", error);
      });
  }, []);  
  const filteredBooks = borrowedBooks.filter(books => books.email === user.email);

  return (
    <div className="overflow-x-auto max-w-7xl mx-auto my-24 shadow-lg py-10 px-2 rounded-xl">
     <div className="overflow-x-auto">
  <table className="table-auto w-full border-collapse">
    {/* head */}
    <thead className='bg-blue-300'>
      <tr>
        <th className="px-4 py-2 text-left">Name</th>
        <th className="px-4 py-2 text-left">Address</th>
        <th className="px-4 py-2 text-left">Borrow Date</th>
        <th className="px-4 py-2 text-left">Return Date</th>
        <th className="px-4 py-2 text-left"></th>
      </tr>
    </thead>
    <tbody className='bg-gray-100 '>
      {filteredBooks.length > 0 ? (
        filteredBooks.map(books => (
          <tr key={books._id} className="border-t">
            <td className="px-4 py-2">
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="w-8 h-8 rounded md:w-12 md:h-12">
                    <img 
                      src={books.image_url}
                      alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="md:font-bold text-sm md:text-lg">{books.book_name}</div>
                  <div className="text-sm opacity-50">{books.category_items}</div>
                </div>
              </div>
            </td>
            <td className="px-4 py-2">
              <h2 className='font-medium text-sm lg:text-base'>{books.name}</h2>
              <br />
              <span className="rounded bg-blue-200 p-1 text-xs">{books.email}</span>
            </td>
            <td className="px-4 py-2 text-green-600">
              <p>{books.currentDate}</p>
            </td>
            <td className="px-4 py-2 text-red-600">
              <p>{books.returnDate}</p>
            </td>
            <td className="px-4 py-2">
              <button
                onClick={() => handleReturn(books._id)}
                className="btn bg-blue-600 text-white/80 py-1 px-3 rounded-md hover:bg-blue-700"
              >
                Return
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="5" className="text-center text-gray-600 py-4">
            No borrowed books found for your account.
          </td>
        </tr>
      )}
    </tbody>
  </table>
</div>


    </div>
  );
}

export default BorrowedBooks;
