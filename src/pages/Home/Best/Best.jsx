import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Best() {
  const [books, setBooks] = useState([]);
  console.log(books)

  useEffect(() => {
    fetch("https://pathmala-server-site.vercel.app/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.slice(0, 4)); // প্রথম ৪টি বই দেখাবে
      })
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  return (
    <div className="lg:py-20 py-10  bg-gradient-to-br from-[#ffecd2] to-[#fcb69f]  flex flex-col items-center">
      <h2 className="md:text-4xl text-2xl font-bold md:font-semibold text-gray-900 mb-10   ">
        Most Popular Borrowed Books
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 lg:gap-20 gap-10 ">
        {books.map((book) => (
          <div
            key={book._id}
            className="bg-white/30 backdrop-blur-md border border-white/50 shadow-xl p-6 rounded-2xl transform transition-all hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={book.image_url}
              alt={book.book_name}
              className="w-full h-60 object-cover rounded-lg"
            />
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold text-gray-800">{book.book_name}</h3>
              <p className="text-gray-600 mt-1">by {book.author_name}</p>
              <Link to={`bookDetails/${book._id}`}>
  <button className="mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-[#F24F6B] to-[#f7415f] text-white text-lg font-semibold transition-transform transform hover:scale-105 shadow-lg">
    Borrow Book Details
  </button>
</Link>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Best;

