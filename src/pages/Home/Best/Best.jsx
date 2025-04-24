import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Best() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://pathmala-server-site.vercel.app/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.slice(0, 4)); // Show first 4 books
      })
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.2,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="pb-14 bg-gray-100 dark:bg-gray-900 flex flex-col items-center">
      <h2 className="md:text-4xl text-2xl font-bold text-gray-800 dark:text-white mb-16 text-center">
        Most Popular Borrowed Books
      </h2>

      <div className="max-w-screen-2xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 px-6">
        {books.map((book, index) => (
          <motion.div
            key={book._id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-2xl p-8 lg:p-10 rounded-xl transition-transform hover:scale-105"
          >
            <img
              src={book.image_url}
              alt={book.book_name}
              className="w-full h-60 object-cover rounded mb-6"
            />
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {book.book_name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">by {book.author_name}</p>
              <Link to={`bookDetails/${book._id}`}>
                <button className="mt-6 px-6 py-3 bg-[#EF2346] hover:bg-[#d61d3b] text-white font-medium rounded-lg shadow-lg transition-transform transform hover:scale-105">
                  See More
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Best;
