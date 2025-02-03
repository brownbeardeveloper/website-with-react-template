import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import SlugPage from "./pages/SlugPage";
import "./global.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/:slug",
        element: <SlugPage />,
      },
    ],
  },
]);


const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <RouterProvider router={router} />
  );
} else {
  console.error("Root element not found");
}
