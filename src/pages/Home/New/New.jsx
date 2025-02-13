import { motion } from "framer-motion";

function New() {
  const books = [
    {
      id: 1,
      title: "The Alchemist",
      author: "Paulo Coelho",
      publishDate: "1988",
      coverImage:
        "https://img.freepik.com/free-vector/children-school-open-book_1308-26353.jpg?ga=GA1.1.1542041277.1723260843&semt=ais_hybrid",
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      publishDate: "2018",
      coverImage:
        "https://img.freepik.com/free-vector/flat-world-book-day-labels-collection_23-2149319235.jpg?ga=GA1.1.1542041277.1723260843&semt=ais_hybrid",
    },
    {
      id: 3,
      title: "Deep Work",
      author: "Cal Newport",
      publishDate: "2016",
      coverImage:
        "https://img.freepik.com/free-vector/world-book-day-background-with-butterflies-realistic-style_23-2147608600.jpg?ga=GA1.1.1542041277.1723260843&semt=ais_hybrid",
    },
  ];

  return (
    <div className="dark:bg-gray-800 bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-white text-center mb-10">
          New Arrivals
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <motion.div
              key={book.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden transition-transform"
            >
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{book.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">By {book.author}</p>
                <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">Published: {book.publishDate}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default New;