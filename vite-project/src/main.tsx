import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout.tsx";
import HomePage from "./pages/HomePage.tsx";
import SlugPage from "./pages/SlugPage.tsx";
import "./global.css";
import HelpCenterPage from "./pages/HelpCenterPage.tsx";
import ProductPage from "./pages/ProductPage.tsx";


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
        path: "/help",
        element: <HelpCenterPage />
      },
      {
        path: "/products",
        element: <ProductPage />
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
