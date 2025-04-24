import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBookOpen } from "react-icons/fa";

function Category() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.2,
        ease: "easeOut",
      },
    }),
  };

  const categories = [
    {
      name: "Fiction",
      image: "https://5.imimg.com/data5/SELLER/Default/2022/9/KG/SA/OH/31109974/anamayilottakam-500x500.jpg",
      description: "Journey Through Fiction",
    },
    {
      name: "Science & Technology",
      image: "https://jbdpublication.com/wp-content/uploads/2023/02/1004000_2-gtt.jpg",
      description: "The World of Science",
    },
    {
      name: "History",
      image: "https://i.ibb.co.com/bPyBhR4/fi-106-100.jpg",
      description: "Stories That Shaped the World",
    },
    {
      name: "Self-Help & Motivation",
      image: "https://stpaulsmalayalam.com/books/97.jpg",
      description: "A Guide to Growth and Success",
    },
  ];

  return (
    <div className="md:py-20 py-10 dark:bg-gray-900">
      <div className="max-w-screen-2xl mx-auto px-6">
        <h1 className="text-2xl sm:text-4xl font-bold dark:text-white text-center text-gray-800">
          Explore Our Book Categories
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <Link to={`/category_books/${category.name}`}>
                <div className="group bg-white dark:bg-gray-800 hover:bg-gradient-to-r transition-all duration-300 text-gray-800 dark:text-white shadow-xl hover:shadow-2xl hover:shadow-indigo-300 dark:hover:shadow-indigo-800 border dark:border-gray-700 rounded-xl p-5 flex flex-col items-center text-center transform hover:scale-105">
                  <FaBookOpen className="text-3xl mb-2 text-[#EF2346] transform transition-transform duration-300 group-hover:scale-125" />

                  <div className="relative w-40 h-40 overflow-hidden rounded-md border border-gray-200 dark:border-gray-600">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="object-cover w-full h-full transform transition-transform duration-300 hover:scale-110"
                    />
                  </div>

                  <h2 className="text-lg sm:text-xl font-semibold dark:text-white mt-4">
                    {category.name}
                  </h2>

                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    {category.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
