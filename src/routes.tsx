import { createBrowserRouter } from "react-router-dom";

import Layout from "./layout/Layout";

import ReactQuestionPage from "./pages/ReactQuestionPage";
import JsQuestionPage from "./pages/JsQuestionPage";

import InfiniteTimer from "./questions/react/InfiniteTimer";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ReactQuestionPage />,
      },

      {
        path: "react",
        children: [
          {
            index: true,
            element: <ReactQuestionPage />,
          },

          {
            path: "infinite-timer",
            element: <InfiniteTimer />,
          },
        ],
      },

      {
        path: "js",
        children: [
          {
            index: true,
            element: <JsQuestionPage />,
          },
        ],
      },
    ],
  },
]);
