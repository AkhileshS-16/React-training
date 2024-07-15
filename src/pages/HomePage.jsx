import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";
import { useEffect, useReducer } from "react";
import reducer from "../Reducer";
import employees from "../Data/Employees";

const HomePage = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, {
    employees: employees,
    filterBy: "None",
  });

  let token = localStorage.getItem("token");
  console.log(token);

  useEffect(() => {
    if (!token || token !== "true") navigate("/");
  }, []);

  return (
    <div>
      <SideBar />
      <div className="content">
        <Outlet context={{ state, dispatch }} />
      </div>
    </div>
  );
};
export default HomePage;
