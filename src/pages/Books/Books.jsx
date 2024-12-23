import { useLoaderData } from "react-router-dom"
import BookCard from "./BookCard/BookCard"

function Books() {
  const data  = useLoaderData()
  return (
    <div>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-6 my-24 max-w-7xl mx-auto">
      {
        data.map(bookAll => <BookCard key={bookAll._id} bookAll={bookAll}></BookCard>)
      }
     </div>
    </div>
  )
}

export default Books