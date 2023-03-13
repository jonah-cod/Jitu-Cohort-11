import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import Products from './components/products';
import store from './redux/store';

const SpecificCategory = lazy(() => import('./components/specificCategory'));
const ProductDetails = lazy(() => import('./exports'));
const ErrorElement = lazy(() => import('./components/errorElement'))


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Suspense fallback={<p>loading...</p>}><ErrorElement /></Suspense>,
    children: [
      {
        index: true,
        element: <Products />
      },
      {
        path: ":category",
        element: <Suspense fallback={<p>loading...</p>}><SpecificCategory /></Suspense>
      },
      {
        path: "products/:product_id",
        element: <Suspense fallback={<h4>loading ...</h4>}><ProductDetails /></Suspense>
      }
    ]

  },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
