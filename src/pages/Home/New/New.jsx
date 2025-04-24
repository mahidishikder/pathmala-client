import { motion } from "framer-motion";

function New() {
  const books = [
    {
      id: 1,
      title: "The Alchemist",
      author: "Paulo Coelho",
      publishDate: "1988",
      coverImage:
        "https://img.freepik.com/free-vector/children-school-open-book_1308-26353.jpg",
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      publishDate: "2018",
      coverImage:
        "https://img.freepik.com/free-vector/flat-world-book-day-labels-collection_23-2149319235.jpg",
    },
    {
      id: 3,
      title: "Deep Work",
      author: "Cal Newport",
      publishDate: "2016",
      coverImage:
        "https://img.freepik.com/free-vector/world-book-day-background-with-butterflies-realistic-style_23-2147608600.jpg",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <div className="dark:bg-gray-800 bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-white text-center mb-10">
          New Arrivals
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <motion.div
              key={book.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover="hover"
              variants={cardVariants}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {book.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                  By {book.author}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                  Published: {book.publishDate}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default New;
