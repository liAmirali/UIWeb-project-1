import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./app/layout";
import Home from "./app/page";
import ProductPage from "./app/product/page";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useEffect } from "react";
import { getFromLocalStorage } from "./utils/localStorage";
import { LS_ACCESS_TOKEN } from "./constants/localStorage";
import { useAppDispatch } from "./store";
import { authActions } from "./store/auth";

function App() {
  const dispatch = useAppDispatch();

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

  useEffect(() => {
    // Checks if user is logged in
    const accessToken = getFromLocalStorage(LS_ACCESS_TOKEN);
    if (accessToken) {
      dispatch(authActions.setAuth(true));
    }
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
