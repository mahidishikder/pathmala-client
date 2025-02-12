import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Category() {
  const [books, setBooks] = useState([]);

  // Animation variants
  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 },
    },
  };

  return (
    <div className="max-w-7xl mx-auto md:my-24 my-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-4xl font-bold md:font-semibold text-center text-gray-800">
        Explore Our Book Categories
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 sm:gap-6 gap-2 my-10 sm:my-14">
        {/* Category Cards */}
        {[
          {
            name: "Fiction",
            image:
              "https://5.imimg.com/data5/SELLER/Default/2022/9/KG/SA/OH/31109974/anamayilottakam-500x500.jpg",
            description: "Journey Through Fiction",
          },
          {
            name: "Science & Technology",
            image:
              "https://jbdpublication.com/wp-content/uploads/2023/02/1004000_2-gtt.jpg",
            description: "The World of Science",
          },
          {
            name: "History",
            image: "https://i.ibb.co.com/bPyBhR4/fi-106-100.jpg",
            description: "Stories That Shaped the World",
          },
          {
            name: "Self-Help & Motivation",
            image:
              "https://simg.pothi.com/7LIkhmMU-urI1Zbxryqa3npUox_hWRGc1E0tJAhXEZA/rs:fit/w:371/h:477/el:1/g:sm/cb:rev-28/bG9jYWw6Ly8vaW1h/Z2VzL3Byb2R1Y3Rz/LzIwMjQvMTEvZWJv/b2sxMzQzMS9JbWFn/ZV8wLmpwZw.jpg",
            description: "A Guide to Growth and Success",
          },
        ].map((category, index) => (
          <motion.div
            key={index}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={cardVariants}
          >
            <Link to={`/category_books/${category.name}`}>
              <div className="cursor-pointer border bg-white p-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 w-full h-[400px] flex flex-col items-center">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-[200px] w-full object-contain rounded-md"
                />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mt-4 text-center text-gray-800">
                  {category.name}
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mt-2 text-center">
                  {category.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Category;
