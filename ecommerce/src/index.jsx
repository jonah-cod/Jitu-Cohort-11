import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import './index.css';
import App from './App';
import Products from './components/products';
import SpecificCategory from './components/specificCategory';
import ErrorElement from './components/errorElement';
import ProductDetails from './components/productDetails';


const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    errorElement: <ErrorElement />,
    children:[
      {
        index:true,
        element: <Products/>
      },
      {
        path: ":category",
        element: <SpecificCategory />
      },
      {
        path: "products/:product_id",
        element: <ProductDetails/>
      }
    ]
    
  },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <RouterProvider router={router}/>
    
  </React.StrictMode>
);
