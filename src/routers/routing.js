import MainPage from "pages/main";
import TodoListPage from "pages/todo";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/todo/list",
    element: <TodoListPage />,
  },
]);

export default router;
