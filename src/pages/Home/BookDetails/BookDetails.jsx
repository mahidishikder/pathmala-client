import { useLoaderData, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "./../../../provider/AuthPorvider";
import Swal from "sweetalert2";

function BookDetails() {
  const { user } = useContext(AuthContext);
  const name = user && user.displayName;
  const email = user && user.email;

  const data = useLoaderData();
  const {
    book_name,
    author_name,
    category_items,
    quantity,
    rating,
    image_url,
    short_description,
    book_content,
  } = data;

  const navigate = useNavigate();
  const [returnDate, setReturnDate] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentQuantity, setCurrentQuantity] = useState(quantity);

  const handleBorrow = () => {
    if (currentQuantity <= 0) return;

    fetch("https://pathmala-server-site.vercel.app/borrow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        bookId: data._id,
        returnDate,
        currentDate,
        name,
        email,
        image_url,
        category_items,
        book_name
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Borrow successful", data);

        // Quantity কমানোর জন্য স্টেট আপডেট
        setCurrentQuantity((prevQuantity) => prevQuantity - 1);

        // Success Message
        Swal.fire({
          title: "Borrow!",
          text: "Your book has been successfully borrowed.",
          icon: "success",
        });

        navigate("/borrowedBooks");
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Something went wrong while borrowing!");
      });
  };

  return (
    <div className="py-20 dark:bg-slate-700 px-4">
      <div className="max-w-5xl dark:bg-gray-500 mx-auto p-6   mt-20  rounded-lg bg-gray-100 shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        {/* Book Image */}
        <img
          src={image_url}
          alt={book_name}
          className="w-[200px] object-cover rounded-lg"
        />

        {/* Book Details */}
        <div>
          <h1 className="text-4xl font-extrabold text-blue-600 dark:text-white/90 mb-4">
            {book_name}
          </h1>
          <p className="text-lg font-semibold">
            <span className="text-gray-700 dark:text-white/70">Author:</span>{" "}
            <span className="text-blue-500 dark:text-white/70">{author_name}</span>
          </p>
          <p className="text-lg font-semibold dark:text-white/70">
            <span className="text-gray-700 dark:text-white/70 ">Category:</span>{" "}
            <span className="text-green-500">{category_items}</span>
          </p>
          <p className="text-lg font-semibold">
            <span className="text-gray-700 dark:text-white/70">Rating:</span>{" "}
            <span className="text-yellow-500">{rating} ★</span>
          </p>
          <p className="text-lg font-semibold">
            <span className="text-gray-700 dark:text-white/70">Available Quantity:</span>{" "}
            <span
              className={`${
                currentQuantity > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {currentQuantity}
            </span>
          </p>
          <p className="text-gray-800 mt-4 leading-7 dark:text-white/70">{short_description}</p>
          <p className="text-gray-600 mt-2 italic dark:text-white/70">{book_content}</p>

          {/* Borrow Button */}
          <button
            className={`mt-6 px-6 py-3 font-bold rounded ${
              currentQuantity > 0
                ? "bg-[#EF2346] text-white hover:bg-[#f01e41]"
                : "bg-gray-400 text-gray-700 cursor-not-allowed"
            }`}
            disabled={currentQuantity <= 0}
            onClick={() => setIsModalOpen(true)}
          >
            {currentQuantity > 0 ? "Borrow This Book" : "Out of Stock"}
          </button>
        </div>
      </div>

      {/* Borrow Modal */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-200 p-8 rounded shadow-lg w-[90%] max-w-md">
            <h2 className="text-2xl font-semibold mb-4">Borrow This Book</h2>
            <form
  onSubmit={(e) => {
    e.preventDefault();
    handleBorrow();
  }}
>
  <div className="mb-4">
    <label>Your Name</label>
    <input
      type="text"
      defaultValue={user.displayName}
      className="w-full mb-6 py-2 ring-2 rounded pl-2"
    />

    <label>Your Email</label>
    <input
      type="email"
      defaultValue={user.email}
      className="w-full mb-6 py-2 ring-2 rounded pl-2"
    />

    
    {/* <p className="text-gray-700 font-semibold mb-2">
      Current Date: <span className="text-blue-500">{currentDate}</span>
    </p> */}


<label htmlFor="currentDate" className="block text-gray-700">
      Current Date:
    </label>
    <input
      type="date"
      id="currentDate"
      className="mt-1 block w-full ring-2 py-2 pl-2 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
      value={currentDate}
      onChange={(e) => setCurrentDate(e.target.value)}
      required
    />

    <label htmlFor="returnDate" className="block text-gray-700 my-4">
      Return Date:
    </label>
    <input
      type="date"
      id="returnDate"
      className="mt-1 block w-full ring-2 py-2  pl-2 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
      value={returnDate}
      onChange={(e) => setReturnDate(e.target.value)}
      required
    />
  </div>

  <button
    type="submit"
    className="w-full py-2 px-4 bg-[#EF2346] text-white font-bold rounded hover:bg-[#f11c3f]"
  >
    Confirm Borrow
  </button>
  <button
    type="button"
    className="w-full py-2 px-4 mt-2 bg-gray-500 text-white font-bold rounded hover:bg-gray-600"
    onClick={() => setIsModalOpen(false)}
  >
    Cancel
  </button>
</form>

          </div>
        </div>
      )}
    </div>
    </div>
  );
}

export default BookDetails;
