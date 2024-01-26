import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './routes/About';
import Cart from './routes/Cart';
import Home from './routes/Home';
import Product from './routes/Product';
import Products from './routes/Products';
import Root from './routes/Root';
import NotFound404 from './routes/NotFound404';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/cart',
          element: <Cart />,
        },
        {
          path: '/products',
          element: <Products />,
        },
        {
          path: '/products/:id',
          element: <Product />,
        },
        {
          path: '*',
          element: <NotFound404 />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
