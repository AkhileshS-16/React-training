import CreateEmployee from "./pages/CreateEmployee";
import Login from "./pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import Employees from "./pages/Employees";
import EditEmployee from "./pages/EditEmployee";
import DetailEmployee from "./pages/DetailEmployee";

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
        element: <Employees />,
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

const App = () => {
  // const [state, setState] = useState(false);

  // const handleLogin = () => {
  //   setState(true);
  // };

  return <RouterProvider router={router} />;
};
export default App;
