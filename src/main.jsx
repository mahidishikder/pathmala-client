
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import router from './router/router';
import AuthPorvider from './provider/AuthPorvider';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthPorvider>
    <ToastContainer />
    <RouterProvider router={router} />
    </AuthPorvider>
  </StrictMode>,
)
