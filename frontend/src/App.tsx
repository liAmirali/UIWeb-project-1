import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./app/layout";
import Home from "./app/page";
import ProductPage from "./app/product/page";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider as ReduxProvider } from "react-redux";

import store from "@/store";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/products/:productId",
          element: <ProductPage />,
        },
      ],
    },
  ]);

  return (
    <ReduxProvider store={store}>
      <RouterProvider router={router} />
      <ToastContainer />
    </ReduxProvider>
  );
}

export default App;
