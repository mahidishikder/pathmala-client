
function New() {
  const books = [
    {
      id: 1,
      title: "The Alchemist",
      author: "Paulo Coelho",
      publishDate: "1988",
      coverImage:
        "https://img.freepik.com/free-vector/children-school-open-book_1308-26353.jpg?ga=GA1.1.1542041277.1723260843&semt=ais_hybrid",
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      publishDate: "2018",
      coverImage:
        "https://img.freepik.com/free-vector/flat-world-book-day-labels-collection_23-2149319235.jpg?ga=GA1.1.1542041277.1723260843&semt=ais_hybrid",
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      publishDate: "2018",
      coverImage:
        "https://img.freepik.com/free-vector/world-book-day-background-with-butterflies-realistic-style_23-2147608600.jpg?ga=GA1.1.1542041277.1723260843&semt=ais_hybrid",
    },
  ];

  return (
    <div className="p-5 bg-gray-50 max-w-7xl mx-auto my-12 md:my-24">
      <h2 className="md:text-4xl text-2xl font-bold pb-10 md:font-semibold text-gray-800 mb-5">
        New Arrivals
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-200 hover:scale-105"
          >
            <img
              src={book.coverImage}
              alt={book.title}
              className=" w-full object-cover"
            />
           
            </div>
          
        ))}
      </div>
    </div>
  );
}

export default New;
