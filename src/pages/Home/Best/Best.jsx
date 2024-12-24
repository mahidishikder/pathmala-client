function Best() {
  const bestSellingBooks = [
    {
      id: 1,
      title: "Rich Dad Poor Dad",
      author: "Robert T. Kiyosaki",
   
      coverImage: "https://img.freepik.com/free-vector/realistic-world-book-day_52683-35226.jpg?ga=GA1.1.1542041277.1723260843&semt=ais_hybrid",
    },
    {
      id: 2,
      title: "The Subtle Art of ",
      author: "Mark Manson",
     
      coverImage: "https://img.freepik.com/free-vector/hand-drawn-world-book-day-illustration-with-stack-books_23-2148868267.jpg?ga=GA1.1.1542041277.1723260843&semt=ais_hybrid",
    },
    {
      id: 2,
      title: "The hello bei ",
      author: "Mark Manson",
    
      coverImage: "https://img.freepik.com/free-vector/gradient-stack-books-illustration_23-2149327718.jpg?ga=GA1.1.1542041277.1723260843&semt=ais_hybrid",
    },
    {
      id: 2,
      title: "The hello bei ",
      author: "Mark Manson",
   
      coverImage: "https://img.freepik.com/free-vector/open-realistic-book-background_23-2147605553.jpg?ga=GA1.1.1542041277.1723260843&semt=ais_hybrid",
    },
    
  ];

  return (
    <div className="p-6 bg-gray-100 max-w-7xl mx-auto my-24">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-10">
        Best Selling Books
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {bestSellingBooks.map((book) => (
          <div
            key={book.id}
            className="w-64 bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:shadow-2xl hover:-translate-y-2"
          >
            <img
              src={book.coverImage}
              alt={book.title}
              className="h-56 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-700">
                {book.title}
              </h3>
              <p className="text-gray-500 text-sm">by {book.author}</p>
              <p className="mt-2 text-lg font-bold text-gray-800">
                {book.price}
              </p>
              <button className="mt-4 w-full py-2 bg-green-500 text-white rounded hover:bg-green-600">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Best;
