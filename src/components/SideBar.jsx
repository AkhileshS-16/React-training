import { useNavigate } from "react-router-dom";
import icon from "../assets/icon.svg";
import kvlogo from "../assets/kv-logo.png";
import NavLink from "./NavLink";
import out from "../assets/logout.png";
import add from "../assets/addemployee.png";

const SideBar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <aside className="CEaside">
      <header className="logoimg">
        <img src={kvlogo} alt="KeyValue Logo" className="logo logoimg" />
      </header>
      <nav className="navigation">
        <div>
          <NavLink icon={icon} text="Employee List" />
          <NavLink icon={add} text="Create Employee" link="create" />
        </div>
        <div>
          <NavLink icon={out} text="Logout" logout={logout} />
        </div>
      </nav>
    </aside>
  );
};
export default SideBar;
