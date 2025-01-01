import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layouts/Root.jsx';
import Home from './Pages/Home.jsx';
import Register from './Components/Register.jsx';
import Login from './Components/Login.jsx';
import AddCourses from './Components/AddCourses.jsx';
import Courses from './Components/Courses.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/addCourses",
        element: <AddCourses></AddCourses>
      },
      {
        path: "allCourses",
        element: <Courses/>
      }
    ]
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
