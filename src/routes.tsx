import { createBrowserRouter, Navigate } from "react-router-dom";
import ReactQuestionPage from "./pages/ReactQuestionPage";
import JsQuestionPage from "./pages/JsQuestionPage";
import QuestionLayout from "./layout/QuestionLayout";
import ReactTheoryPage from "./pages/ReactTheoryPage";
import JsTheoryPage from "./pages/JsTheoryPage";
import AppLayout from "./layout/AppLayout";

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
