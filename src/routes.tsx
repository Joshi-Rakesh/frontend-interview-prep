import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import ReactQuestionPage from "./pages/ReactQuestionPage";
import JsQuestionPage from "./pages/JsQuestionPage";
import QuestionLayout from "./layout/QuestionLayout";
import ReactTheoryPage from "./pages/ReactTheoryPage";
import JsTheoryPage from "./pages/JsTheoryPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
