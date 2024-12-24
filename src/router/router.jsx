import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Books from "../pages/Books/Books";
import AddBook from "../pages/AddBook/AddBook";
import BorrowedBooks from "../pages/BorrowedBooks/BorrowedBooks";
import Error from "../pages/Error/Error";
import PrivateRoute from "./privateRoute";
import UpdateForm from "../pages/Books/UpadateForm/UpdateForm";
import CategoryCard from "../pages/Home/CategoryCard/CategoryCard";
import BookDetails from "../pages/Home/BookDetails/BookDetails";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";



const router = createBrowserRouter([
  {
    path:'/',
    errorElement:<Error></Error>,
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
       path:'/books',
       element:<PrivateRoute><Books></Books></PrivateRoute>,
       loader:() => fetch(`http://localhost:5001/books`)
      },
      {
        path:'/book/:id',
        element:<PrivateRoute><UpdateForm></UpdateForm></PrivateRoute>,
        loader:({params}) => fetch(`http://localhost:5001/book/${params.id}`)
      },
      {
        path:'/addBook',
        element:<PrivateRoute><AddBook></AddBook></PrivateRoute>
      },
      {
        path: '/category_books/:categoryName',
        element: <PrivateRoute><CategoryCard /></PrivateRoute>,
      },
      {
        path:'/bookDetails/:id',
        element:<PrivateRoute><BookDetails></BookDetails></PrivateRoute>,
        loader:({params}) => fetch(`http://localhost:5001/book/${params.id}`)
      },
      {
        path:'borrowedBooks',
        element:<PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>
      },
      {
       path:'about',
       element:<About></About>
      },
      {
       path:'contact',
       element:<Contact></Contact>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  }
])

export default router