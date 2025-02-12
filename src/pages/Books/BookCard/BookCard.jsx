import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

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
    <div className="card shadow dark:shadow-gray-500 dark:bg-slate-500 bg-gray-100 shadow-black/30 w-[300px]">
      <figure className="px-10 pt-10">
        <img 
          src={image_url}
          alt={book_name}
          className="rounded w-[180px]"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title dark:text-white/90">{book_name}</h2>
        <p  className="dark:text-white/70">{author_name}</p>

        {/* Dynamic Rating Section */}
        

<div className="flex items-center justify-center mt-2">
  <ReactStars
    count={5} // সর্বমোট ৫টি স্টার
    value={rating} // রেটিং ভ্যালু (dynamic)
    size={24} // স্টারের সাইজ
    isHalf={true} // হাফ স্টার সাপোর্ট
    edit={false} // রেটিং পরিবর্তন করা যাবে না
    activeColor="#ffd700" // স্টারের রঙ
  />
</div>

        <p className="dark:text-white/90">{category_items}</p>
        <p
  className={`${
    quantity === 0 ? 'text-red-500' : ' text-green-600 dark:text-green-400'
  } p-[1px] rounded`}
>
  Quantity: {quantity}
</p>

        <Link to={`/book/${_id}`}><button className="py-2 px-4 bg-green-500 rounded text-white/80">Update</button></Link>

       
      </div>
    </div>
  );
}

export default BookCard;

