import { toast } from "react-toastify";

function AddBook() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const book_name = e.target.book_name.value
    const author_name = e.target.author_name.value
    const category_items = e.target.category_items.value
    const quantity = e.target.quantity.value
    const rating = e.target.rating.value
    const image_url = e.target.image_url.value
    const short_description = e.target.short_description.value
    const book_content = e.target.book_content.value

    toast.success("Book Add Successful", {
      position: "top-right",
      autoClose: 1000,
    });
    
    const data = { book_name, author_name, category_items, quantity, rating, image_url, short_description, book_content, }
    console.log(data)
  }
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-20 py-16  bg-gray-100 rounded-xl ">
        <h2 className="text-3xl font-bold text-center mb-8">Add Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <label className="font-medium ">Book Name</label>
            <input className="py-3 px-3 mt-3 w-full ring-2 ring-blue-300 bg-gray-100 rounded"
              type="text"
              required
              name="book_name"
            />
          </div>

          <div className="my-4">
            <label className="font-medium ">Author Name</label>
            <input className="py-3 px-3 mt-3 w-full ring-2 ring-blue-300 bg-gray-100 rounded"
              type="text"
              required
              name="author_name"
            />
          </div>


          <div className="my-10 font-medium">

            <select name="category_items" className=" w-full ring-2 ring-blue-300 py-4 rounded bg-gray-100">
              <option disabled selected>Category</option>
              <option>Fiction</option>
              <option>Non-Fiction</option>
              <option>Science</option>
              <option>Arts</option>
            </select>
          </div>


          <div className="my-4">
            <label className="font-medium">Quantity</label>
            <input className="py-3 px-3 mt-3 w-full ring-2 ring-blue-300 bg-gray-100 rounded"
              type="number"
              name="quantity"
              required
            />
          </div>
          <div className="my-4">
            <label className="font-medium">Rating</label>
            <input className="py-3 px-3 mt-3 w-full ring-2 ring-blue-300 bg-gray-100 rounded"
              type="number"
              min="1"
              max="5"
              required
              name="rating"
            />
          </div>


          <div className="my-4">
            <label className="font-medium">Image URL</label>
            <input className="py-3 px-3 mt-3 w-full ring-2 ring-blue-300 bg-gray-100 rounded"
              type='url'
              required
              name="image_url"
            />
          </div>


          <div className="my-4">
            <label className="font-medium">Short Description</label>
            <textarea
              className="py-3 px-3 mt-3 w-full ring-2 ring-blue-300 bg-gray-100 rounded"
              required
              name="short_description"
            />
          </div>

          <div className="my-4">
            <label className="font-medium">Book Content</label>
            <textarea
              className="py-3 px-3 mt-3 w-full ring-2 ring-blue-300 bg-gray-100 rounded"
              required
              name="book_content"
            />
          </div>


          <div className="flex justify-center">
            <button className="bg-[#0075FF] mt-6 py-3 px-10 rounded  text-white/80 font-medium" type="submit">Add Book</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddBook