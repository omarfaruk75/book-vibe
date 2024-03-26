import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import ListedBooks from './pages/ListedBooks';
import PagesToRead from './pages/PagesToRead';
import Root from './Root/Root';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('/book.json'),

      },
      {
        path: '/listedbooks',
        element: <ListedBooks />,
        loader: () => fetch('/book.json'),
      },
      {
        path: '/pagestoread',
        element: <PagesToRead />,
        // loader: () => fetch('/book.json'),
      },

    ],
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
