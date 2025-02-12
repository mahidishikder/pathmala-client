import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

function CategoryCard() {
  const { categoryName } = useParams();
  const [categories, setCategories] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    fetch("https://pathmala-server-site.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.slice(0, 4)))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  useEffect(() => {
    fetch("https://pathmala-server-site.vercel.app/books")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((book) => book.category_items === categoryName);
        setFilteredBooks(filtered);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [categoryName]);

  return (
    <div className="max-w-7xl mx-auto my-12 px-4">
      {/* 📌 ক্যাটাগরি সেকশন */}
      <h1 className="text-4xl font-bold mb-8  text-center text-gray-800">📚 Book Categories</h1>
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={`/category/${category.name}`}
            className="bg-blue-500 px-6 py-3 rounded-lg shadow-lg text-white font-semibold text-lg 
            hover:bg-blue-600 transition transform hover:scale-105"
          >
            {category.name}
          </Link>
        ))}
      </div>

      {/* 📌 ফিল্টার করা বই দেখানো */}
      <h1 className="lg:text-4xl text-2xl lg:font-semibold font-bold mb-8 lg:mb-14 text-center text-gray-800">📖 Books in {categoryName}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {filteredBooks.map((book) => (
          <div key={book._id} className="w-[280px] bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition">
            <figure className="w-full h-[320px]">
              <img 
                src={book.image_url} 
                alt={book.book_name} 
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold text-gray-900">{book.book_name}</h2>
              <p className="text-gray-600 mt-1">{book.author_name}</p>

              {/* ⭐ রেটিং সেকশন */}
              <div className="flex items-center justify-center mt-2">
                <ReactStars count={5} value={book.rating} size={20} isHalf={true} edit={false} activeColor="#ffd700" />
              </div>
              <p className="text-gray-500 mt-1">{book.category_items}</p>

              {/* 🔢 কোয়ান্টিটি */}
              <p className={`${book.quantity === 0 ? 'text-red-500' : 'text-green-600'} font-medium`}>
                {book.quantity > 0 ? `✅ Available: ${book.quantity}` : "❌ Out of Stock"}
              </p>

              {/* 🔗 ডিটেইলস বাটন */}
              <Link to={`/bookDetails/${book._id}`}>
                <button className="w-full bg-[#EF2346] text-white py-2 rounded-lg mt-3 
                hover:bg-[#FF8A00] transition duration-300">
                  📜 View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryCard;
