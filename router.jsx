import { Children } from "react";
import NotFoundPage from "./src/pages/NotFoundPage";
import DashboardPage from "./src/pages/DashboardPage";
import Layout from "./src/components/Layout";
import ProductPage from "./src/pages/ProductPage";
import SalePage from "./src/pages/SalePage";
import VoucherPage from "./src/pages/VoucherPage";
import { createBrowserRouter } from "react-router-dom";

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
        path: "/sale",
        element: <SalePage />,
      },
      {
        path: "/voucher",
        element: <VoucherPage />,
      },
    ],
  },
]);

export default router;
