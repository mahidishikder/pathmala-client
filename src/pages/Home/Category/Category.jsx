import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Category() {
  // Animation Variants
  const cardVariants = {
    offscreen: { opacity: 0, scale: 0.8 },
    onscreen: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 10 },
    },
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
      image: "https://simg.pothi.com/7LIkhmMU-urI1Zbxryqa3npUox_hWRGc1E0tJAhXEZA/rs:fit/w:371/h:477/el:1/g:sm/cb:rev-28/bG9jYWw6Ly8vaW1h/Z2VzL3Byb2R1Y3Rz/LzIwMjQvMTEvZWJv/b2sxMzQzMS9JbWFn/ZV8wLmpwZw.jpg",
      description: "A Guide to Growth and Success",
    },
  ];

  return (
    <div className="bg-[#FDF8EE] md:py-20 py-10  dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-2xl sm:text-4xl font-bold    dark:text-white text-center text-gray-800">
          Explore Our Book Categories
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.6 }}
              variants={cardVariants}
            >
              <Link to={`/category_books/${category.name}`}>
                <div className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300 border dark:border-gray-700 rounded-xl p-5 flex flex-col items-center text-center">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-40 h-40 object-cover rounded-md border border-gray-200 dark:border-gray-600"
                  />
                  <h2 className="text-lg sm:text-xl font-semibold dark:text-white mt-4">
                    {category.name}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
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
