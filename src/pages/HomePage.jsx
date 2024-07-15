import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";
import { useEffect } from "react";

const HomePage = () => {
  const navigate = useNavigate();

  let token = localStorage.getItem("token");
  console.log(token);

  useEffect(() => {
    if (!token || token !== "true") navigate("/");
  }, []);

  return (
    <div>
      <SideBar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};
export default HomePage;
