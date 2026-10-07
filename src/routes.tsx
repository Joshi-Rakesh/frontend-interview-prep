import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import ReactQuestionPage from "./pages/ReactQuestionPage";
import JsQuestionPage from "./pages/JsQuestionPage";
import QuestionLayout from "./layout/QuestionLayout";
import ReactTheoryPage from "./pages/ReactTheoryPage";
import JsTheoryPage from "./pages/JsTheoryPage";
import AppLayout from "./layout/AppLayout";
import ProductCategories from "./questions/react/hands-on/breadcrumbs/products/ProductCategories";
import Products from "./questions/react/hands-on/breadcrumbs/products/Products";
import ProductDetails from "./questions/react/hands-on/breadcrumbs/products/ProductDetails";
import BreadCrumbsLayout from "./questions/react/hands-on/breadcrumbs/BreadCrumbsLayout";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="react/practical" />,
      },

      {
        path: "react",
        element: <QuestionLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="practical" />,
          },
          {
            path: "practical",
            element: <ReactQuestionPage />,
            children: [
              {
                element: <BreadCrumbsLayout />,
                children: [
                  {
                    index: true,
                    element: <ProductCategories />,
                  },
                  {
                    path: "categories/:category",
                    element: <Outlet />,
                    children: [
                      {
                        index: true,
                        element: <Products />,
                      },
                      {
                        path: ":productTitle",
                        element: <ProductDetails />,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            path: "theory",
            element: <ReactTheoryPage />,
          },
        ],
      },

      {
        path: "js",
        element: <QuestionLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="practical" />,
          },
          {
            path: "practical",
            element: <JsQuestionPage />,
          },
          {
            path: "theory",
            element: <JsTheoryPage />,
          },
        ],
      },
    ],
  },
]);
