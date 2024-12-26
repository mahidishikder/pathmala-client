import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Category() {
  const [books, setBooks] = useState([]);

  // useEffect(() => {
  //   fetch("https://pathmala-server-site.vercel.app/books")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setBooks(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data: ", error);
  //     });
  // }, []);

  return (
    <div className="max-w-7xl mx-auto my-24">
      <h1 className="text-4xl font-semibold text-center ">
        Explore Our Book Categories
      </h1>
      <p className="text-lg text-gray-600 text-center mt-8">
        Discover a wide range of book categories that suit your interests!
        Whether you're passionate about Fiction, Science & Technology, History,
        or Self-Help & Motivation, we have a collection of books just for you.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-14">
        {/* Card 1 */}
        <Link to={`/category_books/Fiction`}>
          <div className="cursor-pointer border shadow-gray-300 bg-gray-50 p-4 rounded-lg shadow-lg mx-auto w-full sm:w-[300px] md:w-[350px] lg:w-[300px] h-[400px] flex pt-14 flex-col items-center">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2022/9/KG/SA/OH/31109974/anamayilottakam-500x500.jpg"
              alt="Fiction"
              className="h-[200px] w-full object-contain rounded-md"
            />
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mt-4 text-center">
              Fiction
            </h2>
            <p className="text-gray-600 mt-2 text-center">
              Journey Through Fiction
            </p>
          </div>
        </Link>

        {/* Card 2 */}
        <Link to={`/category_books/Science & Technology`}>
          <div className="cursor-pointer border shadow-gray-300 bg-gray-50 pt-14 p-4 rounded-lg shadow-lg mx-auto w-full sm:w-[300px] md:w-[350px] lg:w-[300px] h-[400px] flex flex-col items-center">
            <img
              src="https://jbdpublication.com/wp-content/uploads/2023/02/1004000_2-gtt.jpg"
              alt="Science & Technology"
              className="h-[200px] w-full object-contain rounded-md"
            />
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mt-4 text-center">
              Science & Technology
            </h2>
            <p className="text-gray-600 mt-2 text-center">
              The World of Science
            </p>
          </div>
        </Link>

        {/* Card 3 */}
        <Link to={`/category_books/History`}>
          <div className="cursor-pointer border shadow-gray-300 bg-gray-50 p-4 pt-14 rounded-lg shadow-lg mx-auto w-full sm:w-[300px] md:w-[350px] lg:w-[300px] h-[400px] flex flex-col items-center">
            <img
              src="https://i.ibb.co.com/bPyBhR4/fi-106-100.jpg"
              alt="History"
              className="h-[200px] w-full object-contain rounded-md"
            />
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mt-4 text-center">
              History
            </h2>
            <p className="text-gray-600 mt-2 text-center">
              Stories That Shaped the World
            </p>
          </div>
        </Link>

        {/* Card 4 */}
        <Link to={`/category_books/Self-Help & Motivation`}>
          <div className="cursor-pointer border shadow-gray-300 bg-gray-50 p-4 pt-14 rounded-lg shadow-lg mx-auto w-full sm:w-[300px] md:w-[350px] lg:w-[300px] h-[400px] flex flex-col items-center">
            <img
              src="https://simg.pothi.com/7LIkhmMU-urI1Zbxryqa3npUox_hWRGc1E0tJAhXEZA/rs:fit/w:371/h:477/el:1/g:sm/cb:rev-28/bG9jYWw6Ly8vaW1h/Z2VzL3Byb2R1Y3Rz/LzIwMjQvMTEvZWJv/b2sxMzQzMS9JbWFn/ZV8wLmpwZw.jpg"
              alt="Self-Help & Motivation"
              className="h-[200px] w-full object-contain rounded-md"
            />
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mt-4 text-center">
              Self-Help & Motivation
            </h2>
            <p className="text-gray-600 mt-2 text-center">
              A Guide to Growth and Success
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Category;
