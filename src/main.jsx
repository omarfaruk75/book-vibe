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
import BookDetails from './components/BookDetails/BookDetails';
import Read from './components/Read/Read';
import Wishlist from './components/Wishlist/Wishlist';
import ShowDetails from './components/ShowDetails/ShowDetails';
import { ToastContainer, toast } from 'react-toastify';




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
        path: '/book/:id',
        loader: () => fetch('/book.json'),
        element: <BookDetails></BookDetails>,
      },

      {
        path: '/showDetails/:id',
        loader: () => fetch('/book.json'),
        element: <ShowDetails></ShowDetails>
      },

      {
        path: '/listedbooks',
        element: <ListedBooks />,
        loader: () => fetch('/book.json'),
      },
      // {
      //   path: 'listedbooks/read',
      //   element: <Read></Read>
      // },
      {
        path: 'listedbooks/wishlist',
        loader: () => fetch('/book.json'),
        element: <Wishlist></Wishlist>
      },

      {
        path: '/pagestoread',
        element: <PagesToRead />,

      },

    ],
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
