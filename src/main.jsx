import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Compponents/Home/Home.jsx';
import Blogs from './Compponents/Blogs/Blogs.jsx';
import ApliedJobs from './Compponents/Aplied Jobs/ApliedJobs.jsx';
import Jobs from './Compponents/Jobs/Jobs.jsx';
import Root from './Compponents/Root/Root.jsx';




const router = createBrowserRouter([
  {
    path : '/',
    element : <Root></Root>,
    children :[
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/blogs',
        element : <Blogs></Blogs>
      },
      {
        path : '/appliedjobs',
        element : <ApliedJobs></ApliedJobs>
      },
      {
        path : '/jobs',
        element : <Jobs></Jobs>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
