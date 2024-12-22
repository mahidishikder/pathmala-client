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
       element:<PrivateRoute><Books></Books></PrivateRoute>
      },
      {
        path:'/addBook',
        element:<PrivateRoute><AddBook></AddBook></PrivateRoute>
      },
      {
        path:'borrowedBooks',
        element:<PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>
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