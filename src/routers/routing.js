import Layout from "components/layout";
import MainPage from "pages/main";
import TodoListPage from "pages/todo";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./private";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: "/todo/list",
            element: <TodoListPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
