import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function UpdateForm() {
  const navigate = useNavigate()
  const data = useLoaderData();
  const {
    _id,
    book_name,
    author_name,
    category_items,
    quantity,
    rating,
    image_url,
    short_description,
    book_content,
  } = data;

  const handleUpdate = (e) => {
    e.preventDefault();

    // Collect updated data
    const updatedData = {
      book_name: e.target.book_name.value,
      author_name: e.target.author_name.value,
      category_items: e.target.category_items.value,
      quantity: Number(e.target.quantity.value), // quantity কে number এ রূপান্তর
      rating: e.target.rating.value,
      image_url: e.target.image_url.value,
      short_description: e.target.short_description.value,
      book_content: e.target.book_content.value,
    };
    
    console.log(updatedData)

    // Make the PUT request
    fetch(`https://pathmala-server-site.vercel.app/book/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })

    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.modifiedCount){
        Swal.fire({
          title: "Update!",
          text: "Your data has been update successfull.",
          icon: "success"
        });
        navigate('/books')
      }
    })
      
  };

  return (
    <div className="py-24 dark:bg-white/20">
      <div className="max-w-7xl mx-auto px-20 py-14 my-14 dark:bg-slate-600 bg-gray-100 rounded-xl">
        <h2 className="text-3xl font-bold text-center dark:text-white/90 mb-8">Update The Book</h2>
        <form onSubmit={handleUpdate}>
          <div className="my-4">
            <label className="font-medium dark:text-white/70">Book Name</label>
            <input
              className="py-3 px-3 mt-3 w-full ring-2 ring-[#f0a2af] bg-gray-100 rounded"
              type="text"
              required
              name="book_name"
              defaultValue={book_name}
            />
          </div>

          <div className="my-4">
            <label className="font-medium dark:text-white/70">Author Name</label>
            <input
              className="py-3 px-3 mt-3 w-full ring-2 ring-[#f0a2af] bg-gray-100 rounded"
              type="text"
              required
              name="author_name"
              defaultValue={author_name}
            />
          </div>

          <div className="my-10 font-medium">
            <label className="font-medium dark:text-white/70">Category</label>
            <select
              name="category_items"
              className="w-full ring-2 ring-[#f0a2af]  py-4 rounded bg-gray-100"
              defaultValue={category_items}
            >
              <option value="Fiction">Fiction</option>
              <option value="Science & Technology">Science & Technology</option>
              <option value="History">History</option>
              <option value="Self-Help & Motivation">Self-Help & Motivation</option>
            </select>
          </div>

          <div className="my-4">
            <label className="font-medium dark:text-white/70">Quantity</label>
            <input
              className="py-3 px-3 mt-3 w-full ring-2 ring-[#f0a2af] bg-gray-100 rounded"
              type="number"
              name="quantity"
              required
              defaultValue={quantity}
            />
          </div>

          <div className="my-4">
            <label className="font-medium dark:text-white/70">Rating</label>
            <input
              className="py-3 px-3 mt-3 w-full ring-2 ring-[#f0a2af] bg-gray-100 rounded"
              type="number"
              min="1"
              max="5"
              required
              name="rating"
              defaultValue={rating}
            />
          </div>

          <div className="my-4">
            <label className="font-medium dark:text-white/70">Image URL</label>
            <input
              className="py-3 px-3 mt-3 w-full ring-2 ring-[#f0a2af] bg-gray-100 rounded"
              type="url"
              required
              name="image_url"
              defaultValue={image_url}
            />
          </div>

          <div className="my-4">
            <label className="font-medium dark:text-white/70">Short Description</label>
            <textarea
              className="py-3 px-3 mt-3 w-full ring-2 ring-[#f0a2af] bg-gray-100 rounded"
              required
              name="short_description"
              defaultValue={short_description}
            />
          </div>

          <div className="my-4">
            <label className="font-medium dark:text-white/70">Book Content</label>
            <textarea
              className="py-3 px-3 mt-3 w-full ring-2 ring-[#f0a2af] bg-gray-100 rounded"
              required
              name="book_content"
              defaultValue={book_content}
            />
          </div>

          <div className="flex justify-center">
            <button
              className="bg-green-500 mt-6 py-3 px-10 rounded text-white/80 font-medium"
              type="submit"
            >
              Update Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateForm;
