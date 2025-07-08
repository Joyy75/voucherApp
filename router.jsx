import { Children } from "react";
import NotFoundPage from "./src/pages/NotFoundPage";
import DashboardPage from "./src/pages/DashboardPage";
import Layout from "./src/components/Layout";
import ProductPage from "./src/pages/ProductPage";
import SalePage from "./src/pages/SalePage";
import VoucherPage from "./src/pages/VoucherPage";
import { createBrowserRouter } from "react-router-dom";
import ProductCreatePage from "./src/pages/ProductCreatePage";
import ProductEditPage from "./src/pages/ProductEditPage";
import Blog from "./src/pages/Blog";
import ContactUs from "./src/pages/ContactUs";
import AboutUs from "./src/pages/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "/product",
        element: <ProductPage />,
      },
      {
        path: "/product/create",
        element: <ProductCreatePage />,
      },
      {
        path: "/product/edit/:id",
        element: <ProductEditPage />,
      },
      {
        path: "/sale",
        element: <SalePage />,
      },
      {
        path: "/voucher",
        element: <VoucherPage />,
      },
       {
        path: "/blog",
        element: <Blog />,
      },
       {
        path: "/contact",
        element: <ContactUs />,
      },
       {
        path: "/about",
        element: <AboutUs />,
      },
    ],
  },
]);

export default router;
