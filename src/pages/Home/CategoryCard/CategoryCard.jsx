import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

function CategoryCard() {
  const { categoryName } = useParams(); 
  const [filteredBooks, setFilteredBooks] = useState([]);
  console.log(filteredBooks)

  useEffect(() => {
    fetch("https://pathmala-server-site.vercel.app/books")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((book) => book.category_items === categoryName);
        setFilteredBooks(filtered);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [categoryName]);

  return (
    <div className="max-w-7xl mx-auto my-12">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Books in {categoryName}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center mt-20 gap-8">
        {filteredBooks.map((book) => (
          <div key={book.id} className="card shadow shadow-slate-300 w-[300px]">
          <figure className="px-10 pt-10">
            <img 
              src={book.image_url}
              alt=''
              className="rounded w-[180px]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{book.book_name}</h2>
            <p>{book.author_name}</p>
    
            {/* Dynamic Rating Section */}
            <div className="flex items-center justify-center mt-2">
            <ReactStars
                    count={5} 
                    value={book.rating} 
                    size={24} 
                    isHalf={true} 
                    edit={false} 
                    activeColor="#ffd700" 
                  />
            </div>
            <p>{book.category_items}</p>
            <p
  className={`${
    book.quantity === 0 ? 'text-red-500' : ' text-green-600'
  } p-[1px] rounded`}
>
  Quantity: {book.quantity}
</p>
            <Link to={`/bookDetails/${book._id}`}><button className="py-2 px-4 bg-[#0075FF] rounded text-white/80">Details</button></Link>
    
           
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryCard;
