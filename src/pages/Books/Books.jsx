import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import BookCard from "./BookCard/BookCard";
import { Helmet } from "react-helmet";

function Books() {
  const data = useLoaderData(); // Load books data
  const [view, setView] = useState("Card"); // Default view: Card View
  const [showAvailable, setShowAvailable] = useState(false); // Filter state for available books

  // Handle view change
  const handleViewChange = (event) => {
    setView(event.target.value);
  };

  // Filtered data based on availability
  const filteredData = showAvailable ? data.filter((book) => book.quantity > 0) : data;

  return (
    <div className="mt-10">
      <Helmet>
        <title>Books</title>
      </Helmet>
      {/* Dropdown for View Toggle */}
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600 duration-300"
          onClick={() => setShowAvailable(!showAvailable)} // Toggle filter
        >
          {showAvailable ? "Show All Books" : "Show Available Books"}
        </button>

        <select
          className="border px-3 py-2 rounded shadow font-medium  ring-green-500  ring-2 duration-300"
          value={view}
          onChange={handleViewChange}
        >
          <option value="Card">Card View</option>
          <option value="Table">Table View</option>
        </select>
      </div>

      {/* Conditional Rendering of Views */}
      {view === "Card" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-6 my-6 max-w-7xl mx-auto">
          {filteredData.map((bookAll) => (
            <BookCard key={bookAll._id} bookAll={bookAll} />
          ))}
        </div>
      ) : (
        <div className="max-w-7xl mx-auto my-6 overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">Book Name</th>
                <th className="border px-4 py-2">Author</th>
                <th className="border px-4 py-2">Category</th>
                <th className="border px-4 py-2">Quantity</th>
                <th className="border px-4 py-2">Rating</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
  {filteredData.map((bookAll) => (
    <tr
      key={bookAll._id}
      className="hover:bg-gray-300 transition-colors duration-300"
    >
      <td className="border px-4 py-2">{bookAll.book_name}</td>
      <td className="border px-4 py-2">{bookAll.author_name}</td>
      <td className="border px-4 py-2">{bookAll.category_items}</td>
      <td
        className={`border px-4 py-2 ${
          bookAll.quantity === 0 ? "text-red-500" : "text-green-500"
        }`}
      >
        {bookAll.quantity}
      </td>
      <td className="border px-4 py-2">{bookAll.rating}</td>
      <td className="border px-4 py-2">
        <Link to={`/book/${bookAll._id}`}>
          <button className="bg-blue-500 text-white px-3 py-1 rounded">
            Update
          </button>
        </Link>
      </td>
    </tr>
  ))}
</tbody>

          </table>
        </div>
      )}
    </div>
  );
}

export default Books;
