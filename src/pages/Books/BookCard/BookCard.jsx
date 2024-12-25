import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function BookCard({ bookAll }) {
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
  } = bookAll;

  return (
    <div className="card shadow shadow-slate-300 w-[300px]">
      <figure className="px-10 pt-10">
        <img 
          src={image_url}
          alt={book_name}
          className="rounded w-[180px]"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{book_name}</h2>
        <p>{author_name}</p>

        {/* Dynamic Rating Section */}
        <div className="flex items-center justify-center mt-2">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`text-xl ${i < Math.floor(rating) ? "text-yellow-500" : "text-gray-300"}`}
            >
              ⭐
            </span>
            
          ))}
        </div>
        <p>{category_items}</p>
        <p
  className={`${
    quantity === 0 ? 'text-red-500' : ' text-green-600'
  } p-[1px] rounded`}
>
  Quantity: {quantity}
</p>

        <Link to={`/book/${_id}`}><button className="py-2 px-4 bg-[#0075FF] rounded text-white/80">Update</button></Link>

       
      </div>
    </div>
  );
}

export default BookCard;

