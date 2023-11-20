import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import App from "./App";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import SearchRecipes from "./pages/SearchRecipes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
  {
    path: "/search/:recipeSearch",
    element: <SearchRecipes />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
