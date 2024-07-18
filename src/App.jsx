import CreateEmployee from "./pages/CreateEmployee";
import Login from "./pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import EditEmployee from "./pages/EditEmployee";
import DetailEmployee from "./pages/DetailEmployee";
import EmployeesList from "./pages/EmployeesList";
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <NotFound />,
    },
    {
      path: "/employees",
      element: <HomePage />,
      children: [
        {
          index: true,
          element: <EmployeesList />,
        },
        {
          path: "create",
          element: <CreateEmployee />,
        },
        {
          path: "edit/:id",
          element: <EditEmployee />,
        },
        {
          path: "details/:id",
          element: <DetailEmployee />,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />;
    </Provider>
  );
};
export default App;
