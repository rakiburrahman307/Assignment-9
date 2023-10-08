import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Components/Root";

import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Login from "../Pages/login";
import Registration from "../Pages/Registration";
import PrivateRoutes from "./PrivateRoutes";
import Profile from "../Pages/Profile";
import Home from "../Components/Home/Home";
import ErrorPage404 from "../Pages/ErrorPage404";



    const router = createBrowserRouter([
        {
          path: "/",
          element: <Root></Root>,
          errorElement:<ErrorPage404/>,
          children:[
            {
              path:'/',
              element:<Home></Home>
            },
            {
              path:'/about',
              element:<About></About>
            },
            {
              path:'/contact',
              element:<Contact></Contact>
            },
            {
              path:'/login',
              element:<Login></Login>
            },
            {
              path:'/register',
              element:<Registration></Registration>
            },
            {
                path:'/profile',
                element:<PrivateRoutes><Profile></Profile></PrivateRoutes>
            }
          ]
        },
      ]);


export default router;