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
import VoucherDetailsPage from "./src/pages/VoucherDetailsPage";
import LoginPage from "./src/pages/LoginPage";
import RegisterPage from "./src/pages/RegisterPage";
import UserProfilePage from "./src/pages/UserProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
       {
        index: true,
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "dashboard",
        element: <Layout />,
        errorElement: <NotFoundPage />,
        children: [
          {
            index: true,
            element: <DashboardPage />,
          },
          {
            path: "product",
            element: <ProductPage />,
          },
          {
            path: "product/create",
            element: <ProductCreatePage />,
          },
          {
            path: "product/edit/:id",
            element: <ProductEditPage />,
          },
          {
            path: "sale",
            element: <SalePage />,
          },
          {
            path: "voucher",
            element: <VoucherPage />,
          },
          {
            path: "voucher/detail/:id",
            element: <VoucherDetailsPage />,
          },
          {
            path: "user-profile",
            element: <UserProfilePage />,
          },
        ],
      },
    ],
  },
]);

export default router;