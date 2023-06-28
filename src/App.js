import TodoStoreProvider from "context/todo";
import { RouterProvider } from "react-router-dom";
import router from "routers/routing";

function App() {
  return (
    <TodoStoreProvider>
      <RouterProvider router={router} />
    </TodoStoreProvider>
  );
}

export default App;
