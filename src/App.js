import { Provider } from "react-redux";
import { store } from "store/store";
import { RouterProvider } from "react-router-dom";
import router from "routers/routing";
import { worker } from "__mock__/handler";

if (process.env.NODE_ENV === "development") {
  worker.start();
}

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
